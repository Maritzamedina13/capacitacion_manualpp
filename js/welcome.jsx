/* ============================================================
   Pantalla de bienvenida + captura de nombre
   ============================================================ */
const { useState, useEffect } = React;
function Welcome({ modules, onStart, savedName, hasProgress, onContinue, completedCount }) {
  const [name, setName] = useState(savedName || '');
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);
  const valid = name.trim().length >= 2;

  return (
    <div className="stage" style={{
      background: 'radial-gradient(1200px 700px at 78% -8%, #1c2c5e 0%, rgba(28,44,94,0) 55%), radial-gradient(900px 600px at 0% 110%, #123a6b 0%, rgba(18,58,107,0) 50%), linear-gradient(160deg,#0a1228,#0f1a3a)',
      position: 'relative', overflow: 'hidden'
    }}>

      <header className="no-print" style={{ position: 'relative', padding: '26px clamp(20px,5vw,60px)' }}>
        <ITMMark light />
      </header>

      <main style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px clamp(20px,5vw,60px) 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,.85fr)', gap: 'clamp(30px,5vw,72px)', maxWidth: 1180, width: '100%', alignItems: 'center' }} className="welcome-grid">

          {/* Columna izquierda: copy + form */}
          <div>
            <div className="chip" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', marginBottom: 22 }}>
              <Icon name="sparkle" size={15} style={{ color: 'var(--gold)' }} /> Ruta de aprendizaje gamificada · Metodología OVA
            </div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(34px,5vw,58px)', fontWeight: 900, lineHeight: 1.03, letterSpacing: '-0.02em' }}>
              Manual de Prácticas<br />Profesionales <span style={{ color: 'var(--ing-3)' }}>ITM</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.78)', fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 520, marginTop: 18, lineHeight: 1.6 }}>
              Recorre el manual capítulo por capítulo en <strong style={{ color: '#fff' }}>6 módulos interactivos</strong>. Aprende, supera cada reto, gana una <strong style={{ color: 'var(--gold)' }}>insignia</strong> por módulo y obtén tu <strong style={{ color: '#fff' }}>constancia final</strong>.
            </p>

            {/* mini features */}
            <div style={{ display: 'flex', gap: 22, marginTop: 26, flexWrap: 'wrap' }}>
              {[['route', '6 módulos OVA'], ['shield', '6 insignias'], ['trophy', 'Constancia final']].map(([ic, tx]) => (
                <div key={tx} style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.85)', fontWeight: 600, fontSize: 14 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,255,255,.1)', display: 'grid', placeItems: 'center', color: 'var(--ing-3)' }}><Icon name={ic} size={18} /></span>
                  {tx}
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ marginTop: 36, maxWidth: 460 }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,.65)', fontWeight: 700, fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 10 }}>
                Escribe tu nombre para empezar
              </label>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && valid) onStart(name.trim()); }}
                  placeholder="Nombre y apellido"
                  style={{
                    flex: 1, minWidth: 220, padding: '15px 18px', borderRadius: 14, border: '1.5px solid rgba(255,255,255,.18)',
                    background: 'rgba(255,255,255,.07)', color: '#fff', fontSize: 16, fontWeight: 600, outline: 'none'
                  }}
                />
                <button className="btn btn-primary" disabled={!valid}
                  style={{ '--m-1': 'var(--ing-2)', '--m-2': 'var(--ing-3)' }}
                  onClick={() => valid && onStart(name.trim())}>
                  <Icon name="play" size={17} /> Comenzar ruta
                </button>
              </div>
              {hasProgress && (
                <button onClick={onContinue} style={{ marginTop: 16, background: 'none', color: 'rgba(255,255,255,.82)', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
                  <Icon name="arrowR" size={16} /> Continuar mi progreso ({completedCount}/6 módulos)
                </button>
              )}
            </div>
          </div>

          {/* Columna derecha: muestra de insignias */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="welcome-badges">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '18px 26px', padding: 8 }}>
              {modules.map((m, i) => (
                <div key={m.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'scale(.7)', transition: 'opacity .45s ease ' + (i * 80) + 'ms, transform .5s cubic-bezier(.2,.8,.3,1.2) ' + (i * 80) + 'ms' }}>
                  <Badge module={m} size={92} state={i === 0 ? 'earned' : 'locked'} showNumber={false} />
                  <span style={{ color: 'rgba(255,255,255,.6)', fontWeight: 700, fontSize: 11, letterSpacing: '.05em' }}>MÓDULO {m.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="no-print" style={{ position: 'relative', padding: '18px clamp(20px,5vw,60px)', color: 'rgba(255,255,255,.4)', fontSize: 12.5, fontWeight: 500, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span>Basado en el Manual de Prácticas Profesionales ITM · MDE 001 (V5)</span>
        <span>Oficina de Prácticas Profesionales ITM</span>
      </footer>
    </div>
  );
}

window.Welcome = Welcome;
