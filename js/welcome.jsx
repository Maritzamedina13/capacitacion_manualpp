/* ============================================================
   Pantalla de bienvenida + captura de nombre
   ============================================================ */
const { useState, useEffect } = React;
function Welcome({ modules, onStart, savedName, hasProgress, onContinue, completedCount }) {
  const [name, setName] = useState(savedName || '');
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);
  const valid = name.trim().length >= 2;

  return (
    <div className="stage" style={{
      background: 'linear-gradient(155deg, #050d20 0%, #09132e 45%, #060f1e 100%)',
      position: 'relative', overflow: 'hidden'
    }}>

      {/* ── Fondo decorativo ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-200px', right: '-130px',
          width: '720px', height: '720px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,160,183,0.17) 0%, transparent 65%)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-120px', left: '-110px',
          width: '520px', height: '520px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,200,74,0.09) 0%, transparent 65%)'
        }} />
        <div style={{
          position: 'absolute', top: '25%', left: '15%',
          width: '460px', height: '460px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,45,105,0.50) 0%, transparent 70%)'
        }} />
      </div>

      {/* ── Header ── */}
      <header className="no-print" style={{
        position: 'relative',
        padding: '18px clamp(20px,5vw,64px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <ITMMark light />
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.13)',
          borderRadius: 999, padding: '6px 14px 6px 10px'
        }}>
          <span style={{
            display: 'block', width: 7, height: 7, borderRadius: '50%',
            background: '#4ade80', boxShadow: '0 0 8px #4ade8088', flexShrink: 0
          }} />
          <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: 12, fontWeight: 700, letterSpacing: '.02em', whiteSpace: 'nowrap' }}>
            Plataforma activa
          </span>
        </div>
      </header>

      {/* ── Contenido principal ── */}
      <main style={{
        position: 'relative', flex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px clamp(20px,5vw,64px) 52px'
      }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,.8fr)',
            gap: 'clamp(32px,5vw,88px)',
            maxWidth: 1220, width: '100%', alignItems: 'center'
          }}
          className="welcome-grid"
        >

          {/* ── Columna izquierda ── */}
          <div>

            {/* Chip de categoría */}
            <div style={{ marginBottom: 22 }}>
              <span className="chip" style={{
                background: 'rgba(86,172,222,0.13)',
                color: 'var(--ing-3)',
                border: '1px solid rgba(86,172,222,0.28)'
              }}>
                <Icon name="sparkle" size={13} style={{ color: 'var(--gold)' }} />
                Ruta de aprendizaje Manual de Prácticas Profesionales ITM
              </span>
            </div>

            {/* Título principal */}
            <h1 style={{
              color: '#fff',
              fontSize: 'clamp(36px,5vw,62px)',
              fontWeight: 900, lineHeight: 1.01,
              letterSpacing: '-0.03em', marginBottom: 22
            }}>
              Manual de<br />Prácticas<br />
              <span style={{
                background: 'linear-gradient(125deg, var(--ing-3) 0%, #7dd3ef 50%, var(--ing-2) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>
                Profesionales ITM
              </span>
            </h1>

            {/* Descripción */}
            <p style={{
              color: 'rgba(255,255,255,0.68)',
              fontSize: 'clamp(14px,1.5vw,17px)',
              maxWidth: 490, lineHeight: 1.72, marginBottom: 32
            }}>
              Recorre el manual capítulo por capítulo en{' '}
              <strong style={{ color: '#fff' }}>9 módulos interactivos</strong>.
              Aprende, supera cada reto, gana una{' '}
              <strong style={{ color: 'var(--gold)' }}>insignia</strong> por módulo y obtén tu{' '}
              <strong style={{ color: '#fff' }}>constancia final</strong>.
            </p>

            {/* Tarjeta de estadísticas */}
            <div style={{
              display: 'flex', marginBottom: 36,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 18, overflow: 'hidden', maxWidth: 440
            }}>
              {[
                { icon: 'route',  val: '9', label: 'Módulos OVA' },
                { icon: 'shield', val: '9', label: 'Insignias' },
                { icon: 'trophy', val: '1', label: 'Constancia' },
              ].map(({ icon, val, label }, i) => (
                <div key={label} style={{
                  flex: 1, padding: '16px 8px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.09)' : 'none'
                }}>
                  <Icon name={icon} size={19} style={{ color: 'var(--ing-3)', opacity: 0.9 }} />
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: 24, lineHeight: 1 }}>{val}</span>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: 11 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Formulario */}
            <div style={{ maxWidth: 460 }}>
              <label style={{
                display: 'block', color: 'rgba(255,255,255,0.45)',
                fontWeight: 700, fontSize: 12, letterSpacing: '.07em',
                textTransform: 'uppercase', marginBottom: 10
              }}>
                Tu nombre para comenzar
              </label>
              <div style={{
                display: 'flex', gap: 8, alignItems: 'center',
                background: 'rgba(255,255,255,0.06)',
                border: '1.5px solid rgba(255,255,255,0.14)',
                borderRadius: 16, padding: '6px 6px 6px 18px',
              }}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && valid) onStart(name.trim()); }}
                  placeholder="Nombre y apellido"
                  style={{
                    flex: 1, border: 'none', outline: 'none',
                    background: 'transparent', color: '#fff',
                    fontSize: 15, fontWeight: 600, padding: '9px 0', minWidth: 0
                  }}
                />
                <button
                  className="btn btn-primary"
                  disabled={!valid}
                  style={{ '--m-1': 'var(--ing-2)', '--m-2': 'var(--ing-3)', padding: '12px 22px', borderRadius: 12, fontSize: 15 }}
                  onClick={() => valid && onStart(name.trim())}
                >
                  <Icon name="play" size={16} /> Comenzar
                </button>
              </div>
              {hasProgress && (
                <button
                  onClick={onContinue}
                  style={{
                    marginTop: 16, background: 'none',
                    color: 'rgba(255,255,255,0.75)', fontWeight: 700, fontSize: 14,
                    display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0'
                  }}
                >
                  <Icon name="arrowR" size={15} /> Continuar mi progreso ({completedCount}/6 módulos)
                </button>
              )}
            </div>
          </div>

          {/* ── Columna derecha: insignias ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="welcome-badges">
            <div style={{ position: 'relative' }}>
              {/* Halo ambiental detrás de las insignias */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(86,172,222,0.16) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
                gap: '22px 30px', padding: 12, position: 'relative'
              }}>
                {modules.map((m, i) => (
                  <div key={m.id} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'none' : 'scale(.62) translateY(20px)',
                    transition: `opacity .5s ease ${i * 90}ms, transform .55s cubic-bezier(.18,.85,.3,1.25) ${i * 90}ms`
                  }}>
                    <Badge module={m} size={96} state={i === 0 ? 'earned' : 'locked'} showNumber={false} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        color: i === 0 ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.42)',
                        fontWeight: 800, fontSize: 10.5, letterSpacing: '.06em',
                        textTransform: 'uppercase', lineHeight: 1.3
                      }}>
                        {m.badge.name}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.28)', fontWeight: 600, fontSize: 10, marginTop: 2 }}>
                        Módulo {m.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="no-print" style={{
        position: 'relative',
        padding: '15px clamp(20px,5vw,64px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 8
      }}>
        <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12, fontWeight: 500 }}>
          Manual de Prácticas Profesionales ITM · MDE 001 (V5)
        </span>
        <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12, fontWeight: 500 }}>
          Oficina de Prácticas Profesionales ITM
        </span>
      </footer>
    </div>
  );
}

window.Welcome = Welcome;
