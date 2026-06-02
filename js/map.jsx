/* ============================================================
   Mapa de niveles (dashboard gamer). Desbloqueo secuencial.
   ============================================================ */
const { useState, useEffect } = React;
const NODE_POS = [
  { x: 14, y: 8  },
  { x: 50, y: 16 },
  { x: 86, y: 24 },
  { x: 86, y: 40 },
  { x: 50, y: 48 },
  { x: 14, y: 56 },
  { x: 14, y: 72 },
  { x: 50, y: 80 },
  { x: 86, y: 88 },
];
const CERT_POS = { x: 50, y: 96 };

function buildPath(points) {
  // smooth-ish curve through points in 0-100 space
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1], p1 = points[i];
    const mx = (p0.x + p1.x) / 2;
    d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

function MapNode({ module, state, onClick, index }) {
  // state: 'completed' | 'current' | 'locked'
  const clickable = state !== 'locked';
  const c = module.colors;
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 120 + index * 70); return () => clearTimeout(t); }, []);
  return (
    <button
      onClick={() => clickable && onClick(module.id)}
      style={{
        position: 'absolute', left: NODE_POS[index].x + '%', top: NODE_POS[index].y + '%',
        transform: `translate(-50%,-50%) scale(${on ? 1 : 0.5})`, background: 'none', padding: 0,
        cursor: clickable ? 'pointer' : 'default', zIndex: 3,
        opacity: on ? 1 : 0, transition: 'opacity .4s ease, transform .5s cubic-bezier(.2,.8,.3,1.2)'
      }}
    >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {state === 'current' && (
          <div style={{ position: 'absolute', top: -34, background: '#fff', color: c.c1, fontWeight: 800, fontSize: 11.5, padding: '5px 12px', borderRadius: 99, whiteSpace: 'nowrap', boxShadow: '0 6px 16px rgba(0,0,0,.25)', letterSpacing: '.03em' }}>
            ¡AQUÍ VAS!
            <span style={{ position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: 10, height: 10, background: '#fff' }} />
          </div>
        )}
        <div style={{
          width: 'clamp(74px,9vw,104px)', height: 'clamp(74px,9vw,104px)', borderRadius: '50%',
          display: 'grid', placeItems: 'center', position: 'relative',
          background: state === 'locked' ? 'rgba(255,255,255,.07)' : `linear-gradient(140deg,${c.c2},${c.c1})`,
          border: state === 'locked' ? '2px dashed rgba(255,255,255,.22)' : '4px solid rgba(255,255,255,.9)',
          boxShadow: state === 'locked' ? 'none' : `0 14px 30px -8px ${c.c1}, 0 0 0 6px ${c.c1}22`,
          transition: 'transform .2s ease',
          animation: state === 'current' ? 'pulseRing 2s infinite' : 'none',
          color: state === 'locked' ? 'rgba(255,255,255,.45)' : '#fff'
        }}
          onMouseEnter={(e) => { if (clickable) e.currentTarget.style.transform = 'scale(1.07)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <Icon name={state === 'locked' ? 'lock' : module.icon} size={state === 'locked' ? 30 : 40} stroke={2.1} />
          {/* número */}
          <div style={{ position: 'absolute', bottom: -8, right: -6, width: 30, height: 30, borderRadius: '50%', background: '#fff', color: c.c1, fontWeight: 900, fontSize: 14, display: 'grid', placeItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,.2)' }}>
            {state === 'completed' ? <Icon name="check" size={16} stroke={3} /> : module.id}
          </div>
        </div>
        <div style={{ marginTop: 14, textAlign: 'center', maxWidth: 156 }}>
          <div style={{ color: state === 'locked' ? 'rgba(255,255,255,.4)' : '#fff', fontWeight: 800, fontSize: 'clamp(12px,1.3vw,14px)', lineHeight: 1.25 }}>{module.title}</div>
          <div style={{ color: 'rgba(255,255,255,.45)', fontSize: 10.5, fontWeight: 600, letterSpacing: '.05em', marginTop: 5, textTransform: 'uppercase', lineHeight: 1.3 }}>{module.cap}</div>
        </div>
      </div>
    </button>
  );
}

function LevelMap({ modules, progress, name, xp, onSelectModule, onCertificate, onReset }) {
  const completed = progress.completed || {};
  const completedCount = Object.keys(completed).length;
  const allDone = completedCount >= modules.length;

  function stateFor(id) {
    if (completed[id]) return 'completed';
    // current = lowest id not completed
    const firstIncomplete = modules.find(m => !completed[m.id]);
    if (firstIncomplete && firstIncomplete.id === id) return 'current';
    return 'locked';
  }

  const pathPoints = [...NODE_POS, CERT_POS];

  return (
    <div className="stage" style={{
      background: 'radial-gradient(1100px 700px at 85% -10%, #1c2c5e 0%, rgba(28,44,94,0) 55%), radial-gradient(900px 600px at -5% 105%, #123a6b 0%, rgba(18,58,107,0) 55%), linear-gradient(160deg,#0a1228,#0f1a3a)',
      position: 'relative'
    }}>

      {/* Header — grid 3 columnas: responsive sin solapamientos */}
      <header className="map-header" style={{
        position: 'relative',
        padding: 'clamp(12px,2.4vw,26px) clamp(16px,5vw,54px)',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '10px 16px'
      }}>
        {/* Izquierda: XP */}
        <div className="map-xp xp-bar-min" style={{ minWidth: 140 }}><XPBar xp={xp} light /></div>

        {/* Centro: logo ITM */}
        <div className="map-logo-center" style={{ justifySelf: 'center' }}>
          <ITMMark light />
        </div>

        {/* Derecha: usuario */}
        <div className="map-user" style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 9, color: '#fff' }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,var(--ing-2),var(--ing-3))', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 15, flexShrink: 0 }}>
            {(name || '?').trim().charAt(0).toUpperCase()}
          </div>
          <div style={{ lineHeight: 1.15, minWidth: 0 }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', fontWeight: 600, whiteSpace: 'nowrap' }}>Participante</div>
            <div style={{ fontSize: 14, fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 140 }}>{name}</div>
          </div>
        </div>
      </header>

      {/* Título de sección */}
      <div style={{ position: 'relative', textAlign: 'center', padding: '4px 20px 0' }}>
        <h1 style={{ color: '#fff', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900 }}>Tu ruta de aprendizaje</h1>
      </div>

      {/* Mapa */}
      <main style={{ position: 'relative', flex: 1, padding: 'clamp(56px,7vw,72px) clamp(8px,4vw,40px) 16px', overflow: 'visible' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 1080, margin: '0 auto', height: 'clamp(600px,80vh,920px)', overflow: 'visible' }}>
          {/* camino */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <path d={buildPath(pathPoints)} fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="1.6" strokeLinecap="round" />
            <path d={buildPath(pathPoints)} fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="0.5 3" />
          </svg>

          {modules.map((m, i) => (
            <MapNode key={m.id} module={m} index={i} state={stateFor(m.id)} onClick={onSelectModule} />
          ))}

          {/* Nodo certificado */}
          <button
            onClick={() => allDone && onCertificate()}
            style={{
              position: 'absolute', left: CERT_POS.x + '%', top: CERT_POS.y + '%', transform: 'translate(-50%,-50%)',
              background: 'none', padding: 0, cursor: allDone ? 'pointer' : 'default', zIndex: 3
            }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 'clamp(74px,9vw,104px)', height: 'clamp(74px,9vw,104px)', borderRadius: '50%', display: 'grid', placeItems: 'center',
                background: allDone ? 'linear-gradient(140deg,var(--gold),var(--gold-deep))' : 'rgba(255,255,255,.07)',
                border: allDone ? '4px solid #fff' : '2px dashed rgba(255,255,255,.22)',
                boxShadow: allDone ? '0 14px 34px -6px var(--gold-deep), 0 0 0 6px rgba(244,200,74,.2)' : 'none',
                color: allDone ? '#5a3e00' : 'rgba(255,255,255,.45)',
                animation: allDone ? 'pulseRing 2s infinite' : 'none'
              }}>
                <Icon name="trophy" size={42} stroke={2} />
              </div>
              <div style={{ marginTop: 14, textAlign: 'center' }}>
                <div style={{ color: allDone ? 'var(--gold)' : 'rgba(255,255,255,.4)', fontWeight: 800, fontSize: 'clamp(12px,1.3vw,14px)' }}>Constancia</div>
                <div style={{ color: 'rgba(255,255,255,.45)', fontSize: 10.5, fontWeight: 600, letterSpacing: '.05em', marginTop: 3, textTransform: 'uppercase' }}>Meta final</div>
              </div>
            </div>
          </button>
        </div>
      </main>

      {/* Estante de insignias */}
      <footer className="map-badge-shelf" style={{ position: 'relative', padding: 'clamp(10px,1.8vw,18px) clamp(14px,5vw,54px)', borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <span style={{ color: 'rgba(255,255,255,.6)', fontWeight: 700, fontSize: 12.5, letterSpacing: '.05em', textTransform: 'uppercase' }}>Insignias {completedCount}/{modules.length}</span>
          <div style={{ display: 'flex', gap: 4 }}>
            {modules.map(m => (
              <div key={m.id} title={m.badge.tag} style={{ opacity: completed[m.id] ? 1 : .28, filter: completed[m.id] ? 'none' : 'grayscale(1)' }}>
                <Badge module={m} size={42} state={completed[m.id] ? 'earned' : 'locked'} showNumber={false} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={onReset} className="no-print" style={{ background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.65)', fontWeight: 700, fontSize: 12.5, padding: '9px 16px', borderRadius: 99 }}>
          Reiniciar progreso
        </button>
      </footer>
    </div>
  );
}

window.LevelMap = LevelMap;
