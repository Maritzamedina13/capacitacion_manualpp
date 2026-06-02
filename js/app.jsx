/* ============================================================
   App orquestador + persistencia
   ============================================================ */
const { useState, useEffect } = React;
const STORAGE_KEY = 'itm_pp_progress_v1';

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch (e) { return null; }
}
function saveState(s) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {}
}

function App() {
  const modules = window.ITM_MODULES;
  const quizzes = window.ITM_QUIZZES;

  const saved = loadState();
  const [screen, setScreen] = useState(saved && saved.name ? 'map' : 'welcome');
  const [name, setName] = useState(saved ? saved.name : '');
  const [xp, setXp] = useState(saved ? saved.xp || 0 : 0);
  const [progress, setProgress] = useState(saved ? { completed: saved.completed || {} } : { completed: {} });
  const [activeId, setActiveId] = useState(null);

  // si hay sesión guardada, mostrar bienvenida primero solo si el usuario no ha empezado
  useEffect(() => {
    if (!saved || !saved.name) setScreen('welcome');
  }, []);

  function persist(next) {
    saveState({ name: next.name ?? name, xp: next.xp ?? xp, completed: (next.progress ?? progress).completed });
  }

  function handleStart(n) {
    setName(n);
    // si es un nombre nuevo distinto, reiniciar progreso
    let p = progress, x = xp;
    if (saved && saved.name && saved.name !== n) { p = { completed: {} }; x = 0; setProgress(p); setXp(0); }
    setScreen('map');
    saveState({ name: n, xp: x, completed: p.completed });
  }
  function handleContinue() { setScreen('map'); }

  function selectModule(id) { setActiveId(id); setScreen('module'); window.scrollTo(0, 0); }

  function completeModule(score, xpGain) {
    const prev = progress.completed[activeId];
    const newCompleted = { ...progress.completed, [activeId]: { score: Math.max(score, prev ? prev.score : 0), date: Date.now() } };
    const newProgress = { completed: newCompleted };
    const newXp = prev ? xp : xp + xpGain; // XP solo la primera vez
    setProgress(newProgress);
    setXp(newXp);
    saveState({ name, xp: newXp, completed: newCompleted });
    setScreen('map');
  }

  function goCertificate() { setScreen('certificate'); }

  function reset() {
    if (!confirm('¿Reiniciar todo tu progreso e insignias?')) return;
    localStorage.removeItem(STORAGE_KEY);
    setProgress({ completed: {} }); setXp(0); setName(''); setScreen('welcome');
  }

  const completedCount = Object.keys(progress.completed).length;

  if (screen === 'welcome') {
    return <Welcome modules={modules} savedName={name} hasProgress={!!(saved && saved.name && completedCount > 0)} completedCount={completedCount} onStart={handleStart} onContinue={handleContinue} />;
  }
  if (screen === 'map') {
    return <LevelMap modules={modules} progress={progress} name={name} xp={xp} onSelectModule={selectModule} onCertificate={goCertificate} onReset={reset} />;
  }
  if (screen === 'module') {
    const m = modules.find(x => x.id === activeId);
    return <ModuleFlow module={m} quiz={quizzes[activeId]} alreadyDone={!!progress.completed[activeId]} onComplete={completeModule} onExit={() => setScreen('map')} />;
  }
  if (screen === 'certificate') {
    return <Certificate modules={modules} name={name} xp={xp} progress={progress} onExit={() => setScreen('map')} />;
  }
  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
