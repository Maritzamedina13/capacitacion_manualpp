/* ============================================================
   Pantalla de bienvenida + captura de nombre
   ============================================================ */
const { useState, useEffect } = React;
function Welcome({ modules, onStart, savedName, hasProgress, onContinue, completedCount }) {
  const [name, setName] = useState(savedName || '');
  const [mounted, setMounted] = useState(false);
  const [showPres, setShowPres] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);
  const valid = name.trim().length >= 2;

  return (
    <div className="stage" style={{
      background: 'linear-gradient(155deg, #050d20 0%, #09132e 45%, #060f1e 100%)',
      position: 'relative', overflow: 'hidden'
    }}>

      {/* ── Fondo decorativo ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position:'absolute', top:'-180px', right:'-100px', width:'680px', height:'680px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,160,183,0.20) 0%, transparent 65%)' }} />
        <div style={{ position:'absolute', bottom:'-100px', left:'-80px', width:'480px', height:'480px', borderRadius:'50%', background:'radial-gradient(circle, rgba(16,45,105,0.55) 0%, transparent 70%)' }} />
        <div style={{ position:'absolute', top:'40%', right:'30%', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(86,172,222,0.10) 0%, transparent 70%)' }} />
        {/* Hexágono decorativo sutil */}
        <svg style={{ position:'absolute', bottom:'-40px', right:'5%', opacity:.04 }} width="340" height="340" viewBox="0 0 100 100">
          <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" fill="none" stroke="white" strokeWidth="1.2"/>
          <polygon points="50,15 84,33 84,67 50,85 16,67 16,33" fill="none" stroke="white" strokeWidth="0.7"/>
        </svg>
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

          {/* ── Columna izquierda: PANEL BLANCO sobre fondo azul ── */}
          <div style={{
            background: '#ffffff',
            borderRadius: 24,
            padding: 'clamp(24px,3.5vw,48px)',
            boxShadow: '0 24px 70px rgba(0,0,0,0.38), 0 0 0 1px rgba(255,255,255,0.08)',
            position: 'relative', overflow: 'hidden'
          }}>
            {/* Acento azul superior */}
            <div style={{ position:'absolute', top:0, left:0, right:0, height:5, background:'linear-gradient(90deg,#102D69,#00A0B7,#56ACDE)' }} />

            {/* Chip de categoría */}
            <div style={{ marginBottom: 20, marginTop: 6 }}>
              <span className="chip" style={{
                background: '#eef5ff',
                color: '#102D69',
                border: '1px solid #c8dcf8'
              }}>
                <Icon name="sparkle" size={13} style={{ color: '#00A0B7' }} />
                Ruta de aprendizaje Manual de Prácticas Profesionales ITM
              </span>
            </div>

            {/* Título principal */}
            <h1 style={{
              color: '#16203a',
              fontSize: 'clamp(30px,4.4vw,54px)',
              fontWeight: 900, lineHeight: 1.02,
              letterSpacing: '-0.03em', marginBottom: 18
            }}>
              Manual de<br />Prácticas<br />
              <span style={{
                background: 'linear-gradient(125deg, #102D69 0%, #00A0B7 55%, #56ACDE 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>
                Profesionales ITM
              </span>
            </h1>

            {/* Descripción */}
            <p style={{
              color: '#4a5675',
              fontSize: 'clamp(13px,1.4vw,16px)',
              maxWidth: 480, lineHeight: 1.72, marginBottom: 26
            }}>
              Recorre el manual capítulo por capítulo en{' '}
              <strong style={{ color: '#102D69' }}>9 módulos interactivos</strong>.
              Aprende, supera cada reto, gana una{' '}
              <strong style={{ color: '#00A0B7' }}>insignia</strong> por módulo y obtén tu{' '}
              <strong style={{ color: '#102D69' }}>constancia final</strong>.
            </p>

            {/* Tarjeta de estadísticas */}
            <div style={{
              display: 'flex', marginBottom: 28,
              background: '#f0f6ff',
              border: '1px solid #d0e4f8',
              borderRadius: 16, overflow: 'hidden', maxWidth: 420
            }}>
              {[
                { icon: 'route',  val: '9', label: 'Módulos'   },
                { icon: 'shield', val: '9', label: 'Insignias' },
                { icon: 'trophy', val: '1', label: 'Constancia'},
              ].map(({ icon, val, label }, i) => (
                <div key={label} style={{
                  flex: 1, padding: '14px 8px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  borderRight: i < 2 ? '1px solid #cde0f5' : 'none'
                }}>
                  <Icon name={icon} size={18} style={{ color: '#00A0B7' }} />
                  <span style={{ color: '#102D69', fontWeight: 900, fontSize: 22, lineHeight: 1 }}>{val}</span>
                  <span style={{ color: '#7a8aaa', fontWeight: 600, fontSize: 11 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Formulario */}
            <div style={{ maxWidth: 440 }}>
              <label style={{
                display: 'block', color: '#7a8aaa',
                fontWeight: 700, fontSize: 11, letterSpacing: '.07em',
                textTransform: 'uppercase', marginBottom: 8
              }}>
                Tu nombre para comenzar
              </label>
              <div className="welcome-form-row" style={{
                display: 'flex', gap: 8, alignItems: 'center',
                background: '#f8faff',
                border: '1.5px solid #c8dcf0',
                borderRadius: 14, padding: '5px 5px 5px 16px',
              }}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && valid) onStart(name.trim()); }}
                  placeholder="Nombre y apellido"
                  style={{
                    flex: 1, border: 'none', outline: 'none',
                    background: 'transparent', color: '#16203a',
                    fontSize: 15, fontWeight: 600, padding: '9px 0', minWidth: 0
                  }}
                />
                <button
                  className="btn btn-primary"
                  disabled={!valid}
                  style={{ '--m-1': '#102D69', '--m-2': '#00A0B7', padding: '11px 20px', borderRadius: 11, fontSize: 14 }}
                  onClick={() => valid && onStart(name.trim())}
                >
                  <Icon name="play" size={15} /> Comenzar
                </button>
              </div>

              {/* Botón presentación */}
              <button
                onClick={() => setShowPres(true)}
                style={{
                  marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, width: '100%',
                  background: 'linear-gradient(135deg,#102D69,#0e6a8e)',
                  color: '#fff', fontWeight: 700, fontSize: 13,
                  padding: '11px 18px', borderRadius: 11, cursor: 'pointer', border: 'none',
                  transition: 'filter .18s'
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.12)'}
                onMouseLeave={e => e.currentTarget.style.filter = ''}
              >
                <Icon name="sparkle" size={15} style={{ color: '#f4c84a' }} />
                Ver Presentación del Manual
                <Icon name="arrowR" size={13} style={{ marginLeft: 'auto', opacity: 0.7 }} />
              </button>

              {/* Botón ver manual digital */}
              <a
                href="https://heyzine.com/flip-book/d912237a0e.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 8, display: 'flex', alignItems: 'center', gap: 8,
                  background: '#fff', border: '1.5px solid #c8dcf0',
                  color: '#102D69', fontWeight: 700, fontSize: 13,
                  padding: '11px 18px', borderRadius: 11, textDecoration: 'none',
                  transition: 'border-color .18s, background .18s'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00A0B7'; e.currentTarget.style.background = '#f0f9ff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#c8dcf0'; e.currentTarget.style.background = '#fff'; }}
              >
                <Icon name="book" size={15} style={{ color: '#00A0B7' }} />
                Ver Manual de Prácticas Profesionales ITM
                <Icon name="arrowR" size={13} style={{ marginLeft: 'auto', color: '#00A0B7' }} />
              </a>

              {hasProgress && (
                <button
                  onClick={onContinue}
                  style={{
                    marginTop: 10, background: 'none', border: 'none',
                    color: '#4a5675', fontWeight: 700, fontSize: 13,
                    display: 'flex', alignItems: 'center', gap: 7, padding: '4px 0', cursor: 'pointer'
                  }}
                >
                  <Icon name="arrowR" size={14} style={{ color: '#00A0B7' }} />
                  Continuar mi progreso ({completedCount}/9 módulos)
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
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                gap: '18px 22px', padding: 12, position: 'relative'
              }}>
                {modules.map((m, i) => (
                  <div key={m.id} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'none' : 'scale(.62) translateY(20px)',
                    transition: `opacity .5s ease ${i * 70}ms, transform .5s cubic-bezier(.18,.85,.3,1.25) ${i * 70}ms`
                  }}>
                    <Badge module={m} size={82} state={i === 0 ? 'earned' : 'locked'} showNumber={false} />
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

      {/* Modal: Presentación ejecutiva */}
      {showPres && <ExecutivePresentation modules={modules} onClose={() => setShowPres(false)} />}
    </div>
  );
}

window.Welcome = Welcome;
