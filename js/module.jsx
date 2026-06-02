/* ============================================================
   Flujo de un módulo: intro → contenido → quiz → resultado
   ============================================================ */
const { useState } = React;
const PASS_PCT = 80;
const XP_PER_Q  = 139;   // 8 preguntas × 139 = 1 112 XP/módulo · 9 módulos ≈ 10 000 XP

function ModuleFlow({ module, quiz, alreadyDone, onComplete, onExit }) {
  const c = module.colors;
  const [phase, setPhase] = useState('intro');       // intro | content | quiz | result
  const [slide, setSlide] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [results, setResults] = useState([]);

  const rootStyle = { '--m-1': c.c1, '--m-2': c.c2, '--m-soft': c.soft };
  const total = quiz.length;
  const scorePct = Math.round((correctCount / total) * 100);
  const passed = scorePct >= PASS_PCT;

  function startQuiz() { setQIdx(0); setCorrectCount(0); setResults([]); setPhase('quiz'); }
  function answered(ok) {
    const nc = correctCount + (ok ? 1 : 0);
    const nr = [...results, ok];
    if (qIdx + 1 >= total) { setCorrectCount(nc); setResults(nr); setPhase('result'); }
    else { setCorrectCount(nc); setResults(nr); setQIdx(qIdx + 1); }
  }

  /* ---------------- INTRO ---------------- */
  if (phase === 'intro') {
    return (
      <div className="stage" style={{ ...rootStyle, background: '#f4f6fb', position: 'relative', overflow: 'hidden' }}>
        {/* Manchas de color transparentes del módulo */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `radial-gradient(ellipse 65% 55% at 92% 10%, ${c.c2}28 0%, transparent 70%),
                            radial-gradient(ellipse 50% 60% at 5% 95%, ${c.c1}1e 0%, transparent 65%),
                            radial-gradient(ellipse 40% 40% at 50% 50%, ${c.c3 || c.c2}10 0%, transparent 70%)` }} />

        <header className="no-print" style={{ position: 'relative', padding: 'clamp(18px,2.4vw,28px) clamp(20px,5vw,54px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${c.c1}18` }}>
          <ITMMark compact />
          <button onClick={onExit} className="btn btn-light" style={{ padding: '10px 18px', fontSize: 14 }}><Icon name="arrowL" size={16} /> Mapa</button>
        </header>

        <main style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(16px,4vw,40px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(24px,5vw,60px)', alignItems: 'center', maxWidth: 1000 }} className="intro-grid">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <Reveal variant="spin"><Badge module={module} size={160} state="earned" /></Reveal>
            </div>
            <div>
              <div className="chip" style={{ background: `${c.c1}18`, color: c.c1, border: `1px solid ${c.c1}30`, marginBottom: 14, whiteSpace: 'nowrap' }}>MÓDULO {module.id} · {module.cap}</div>
              <h1 style={{ fontSize: 'clamp(30px,4.4vw,50px)', fontWeight: 900, lineHeight: 1.04, color: 'var(--ink)' }}>{module.title}</h1>
              <p style={{ fontSize: 'clamp(15px,1.7vw,18px)', color: 'var(--ink-soft)', marginTop: 12, lineHeight: 1.55, maxWidth: 540 }}>{module.subtitle}</p>

              <div style={{ background: `${c.c1}0e`, border: `1px solid ${c.c1}22`, borderRadius: 16, padding: '18px 20px', marginTop: 22, maxWidth: 560 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: 13, letterSpacing: '.05em', textTransform: 'uppercase', color: c.c1, whiteSpace: 'nowrap' }}><Icon name="target" size={16} /> Objetivo de aprendizaje</div>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink)' }}>{module.objective}</p>
              </div>

              <div style={{ marginTop: 18 }}>
                <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 10 }}>Al terminar serás capaz de…</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {module.learn.map((l, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink)' }}>
                      <span style={{ width: 22, height: 22, borderRadius: '50%', background: `linear-gradient(135deg,${c.c1},${c.c2})`, display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 1, color: '#fff' }}><Icon name="check" size={13} stroke={3} /></span>
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="btn btn-primary" style={{ '--m-1': c.c1, '--m-2': c.c2, fontSize: 16 }} onClick={() => { setSlide(0); setPhase('content'); }}>
                  <Icon name="play" size={16} /> {alreadyDone ? 'Repasar módulo' : 'Empezar a aprender'}
                </button>
                <span style={{ fontSize: 13, color: 'var(--ink-soft)', fontWeight: 600 }}>{module.content.length} temas · {total} retos · meta {PASS_PCT}% · máx {total * XP_PER_Q} XP</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  /* ---------------- CONTENIDO ---------------- */
  if (phase === 'content') {
    const s = module.content[slide];
    const last = slide === module.content.length - 1;
    return (
      <div className="stage" style={{ ...rootStyle, background: c.soft }}>
        <header className="no-print" style={{ padding: 'clamp(16px,2.2vw,24px) clamp(20px,5vw,54px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, borderBottom: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg,${c.c1},${c.c2})`, display: 'grid', placeItems: 'center', color: '#fff' }}><Icon name={module.icon} size={20} /></div>
            <div style={{ lineHeight: 1.25, minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{module.title}</div>
              <div style={{ fontSize: 11.5, color: 'var(--ink-soft)', fontWeight: 600 }}>Tema {slide + 1} de {module.content.length}</div>
            </div>
          </div>
          <button onClick={onExit} className="btn btn-light" style={{ padding: '9px 16px', fontSize: 13.5 }}><Icon name="x" size={15} /> Salir</button>
        </header>

        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(16px,4vw,40px)' }}>
          <Reveal key={slide} className="card" style={{ maxWidth: 760, width: '100%', padding: 'clamp(26px,4vw,44px)' }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: c.soft, color: c.c1, display: 'grid', placeItems: 'center', marginBottom: 18 }}>
              <span style={{ fontWeight: 900, fontSize: 22 }}>{slide + 1}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(23px,3vw,31px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.15 }}>{s.title}</h2>
            <p style={{ fontSize: 'clamp(15px,1.7vw,17.5px)', color: 'var(--ink)', lineHeight: 1.6, marginTop: 14 }}>{s.lead}</p>

            {s.points && (
              <div style={{ display: 'grid', gap: 12, marginTop: 22 }}>
                {s.points.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                    <span style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg,${c.c1},${c.c2})`, flexShrink: 0, marginTop: 2, display: 'grid', placeItems: 'center', color: '#fff' }}><Icon name="check" size={14} stroke={3} /></span>
                    <div>
                      <span style={{ fontWeight: 800, color: 'var(--ink)', fontSize: 15.5 }}>{p.h}. </span>
                      <span style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.5 }}>{p.t}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.note && (
              <div style={{ marginTop: 22, padding: '14px 16px', borderRadius: 12, background: c.soft, borderLeft: `4px solid ${c.c1}`, display: 'flex', gap: 10 }}>
                <Icon name="sparkle" size={18} style={{ color: c.c1, flexShrink: 0, marginTop: 1 }} />
                <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.5, fontWeight: 500 }}>{s.note}</p>
              </div>
            )}
          </Reveal>
        </main>

        <footer className="no-print" style={{ padding: 'clamp(14px,2vw,22px) clamp(20px,5vw,54px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: '#fff', borderTop: '1px solid var(--line)' }}>
          <button className="btn btn-light" disabled={slide === 0} style={{ padding: '11px 18px', opacity: slide === 0 ? .4 : 1 }} onClick={() => setSlide(slide - 1)}><Icon name="arrowL" size={16} /> Anterior</button>
          <Dots total={module.content.length} active={slide} color={c.c1} />
          {last ? (
            <button className="btn btn-primary" onClick={startQuiz}><Icon name="trophy" size={16} /> Ir al reto</button>
          ) : (
            <button className="btn btn-primary" onClick={() => setSlide(slide + 1)}>Siguiente <Icon name="arrowR" size={16} /></button>
          )}
        </footer>
      </div>
    );
  }

  /* ---------------- QUIZ ---------------- */
  if (phase === 'quiz') {
    return (
      <div className="stage" style={{ ...rootStyle, background: `linear-gradient(160deg, #f4f6fb, ${c.soft})` }}>
        <header className="no-print" style={{ padding: 'clamp(16px,2.2vw,24px) clamp(20px,5vw,54px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: '#fff', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg,${c.c1},${c.c2})`, display: 'grid', placeItems: 'center', color: '#fff' }}><Icon name="trophy" size={19} /></div>
            <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Reto · {module.title}</div>
          </div>
          <div style={{ flex: 1, maxWidth: 260, height: 9, borderRadius: 99, background: 'var(--line)', overflow: 'hidden' }}>
            <div style={{ width: ((qIdx) / total) * 100 + '%', height: '100%', background: `linear-gradient(90deg,${c.c1},${c.c2})`, transition: 'width .4s ease' }} />
          </div>
        </header>
        <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: 'clamp(16px,3vw,34px)' }}>
          <Reveal key={qIdx} className="card" style={{ maxWidth: 720, width: '100%', padding: 'clamp(22px,3.2vw,36px)', display: 'flex', flexDirection: 'column', maxHeight: '100%', overflow: 'hidden' }}>
            <QuizQuestion q={quiz[qIdx]} color={c} index={qIdx} total={total} onAnswered={answered} />
          </Reveal>
        </main>
      </div>
    );
  }

  /* ---------------- RESULTADO ---------------- */
  return (
    <div className="stage" style={{ ...rootStyle, background: '#f4f6fb', position: 'relative', overflow: 'hidden' }}>
      {/* Transparencia del color del módulo en el fondo */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(ellipse 70% 60% at 80% 5%, ${c.c2}24 0%, transparent 65%),
                          radial-gradient(ellipse 50% 55% at 10% 90%, ${c.c1}1c 0%, transparent 65%)` }} />
      {passed && <Confetti run />}
      <main style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(20px,4vw,40px)' }}>
        <Reveal variant="pop" className="card" style={{ maxWidth: 520, width: '100%', padding: 'clamp(28px,4vw,44px)', textAlign: 'center', border: `1.5px solid ${passed ? c.c1 + '28' : 'var(--line)'}` }}>
          {passed ? (
            <>
              <Reveal variant="spin" delay={150} style={{ display: 'inline-block' }}><Badge module={module} size={150} state="earned" /></Reveal>
              <div className="chip" style={{ background: `${c.c1}15`, color: c.c1, border: `1px solid ${c.c1}28`, margin: '18px auto 0' }}><Icon name="sparkle" size={14} /> ¡Insignia desbloqueada!</div>
              <h1 style={{ fontSize: 'clamp(26px,3.4vw,34px)', fontWeight: 900, color: 'var(--ink)', marginTop: 14 }}>{module.badge.tag}</h1>
              <p style={{ color: 'var(--ink-soft)', fontSize: 15.5, marginTop: 8, lineHeight: 1.5 }}>Superaste el módulo <strong style={{ color: c.c1 }}>{module.title}</strong> con <strong style={{ color: c.c1 }}>{scorePct}%</strong> de aciertos.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 18, margin: '22px 0' }}>
                <div><div style={{ fontSize: 26, fontWeight: 900, color: c.c1 }}>{correctCount}/{total}</div><div style={{ fontSize: 12, color: 'var(--ink-soft)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em' }}>Aciertos</div></div>
                <div style={{ width: 1, background: 'var(--line)' }} />
                <div><div style={{ fontSize: 26, fontWeight: 900, color: 'var(--gold-deep)' }}>+{correctCount * XP_PER_Q}</div><div style={{ fontSize: 12, color: 'var(--ink-soft)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em' }}>XP ganados · máx {quiz.length * XP_PER_Q}</div></div>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => onComplete(scorePct, correctCount * XP_PER_Q)}>
                Continuar <Icon name="arrowR" size={17} />
              </button>
            </>
          ) : (
            <>
              <ScoreRing pct={scorePct} color={c.c1} size={150} />
              <h1 style={{ fontSize: 'clamp(24px,3vw,30px)', fontWeight: 900, color: 'var(--ink)', marginTop: 18 }}>Casi lo logras</h1>
              <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginTop: 8, lineHeight: 1.5 }}>Necesitas al menos <strong>{PASS_PCT}% ({Math.ceil(quiz.length * PASS_PCT / 100)}/{quiz.length} respuestas)</strong> para ganar la insignia. Repasa el contenido e inténtalo de nuevo.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={startQuiz}><Icon name="trophy" size={16} /> Reintentar reto</button>
                <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setSlide(0); setPhase('content'); }}><Icon name="book" size={16} /> Repasar contenido</button>
                <button className="btn btn-light" style={{ width: '100%', justifyContent: 'center' }} onClick={onExit}>Volver al mapa</button>
              </div>
            </>
          )}
        </Reveal>
      </main>
    </div>
  );
}

window.ModuleFlow = ModuleFlow;
