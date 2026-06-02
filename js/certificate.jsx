/* ============================================================
   Certificado final — imprimible (PDF)
   ============================================================ */
function Certificate({ modules, name, xp, progress, onExit }) {
  const completed = progress.completed || {};
  const date = new Date();
  const fecha = date.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
  const allScores = modules.map(m => completed[m.id] ? completed[m.id].score : 0);
  const avg = Math.round(allScores.reduce((a, b) => a + b, 0) / modules.length);
  const total = modules.length;

  return (
    <div className="stage" style={{ background: 'linear-gradient(160deg,#0a1228,#16224a)', position: 'relative' }}>
      <Confetti run />
      <header className="no-print" style={{ position: 'relative', padding: 'clamp(16px,2.2vw,24px) clamp(20px,5vw,54px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 70 }}>
        <ITMMark light compact />
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn" style={{ background: 'rgba(255,255,255,.14)', color: '#fff', padding: '10px 18px', fontSize: 14 }} onClick={onExit}><Icon name="arrowL" size={16} /> Mapa</button>
          <button className="btn" style={{ background: 'var(--gold)', color: '#4a3500', padding: '10px 20px', fontSize: 14 }} onClick={() => window.print()}><Icon name="print" size={16} /> Imprimir / PDF</button>
        </div>
      </header>

      <main style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(14px,3vw,34px)', zIndex: 65 }}>
        <div id="cert" style={{
          width: '100%', maxWidth: 980, aspectRatio: '1.414 / 1', background: '#fff', borderRadius: 12,
          boxShadow: '0 30px 80px rgba(0,0,0,.45)', position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column'
        }}>
          {/* Marco decorativo */}
          <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--ing-1)', margin: 14, borderRadius: 6, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--ing-2)', margin: 19, borderRadius: 4, pointerEvents: 'none' }} />

          {/* Franja cromática superior con colores de los 9 módulos */}
          <div style={{ position: 'absolute', top: 14, left: 14, right: 14, height: 8, display: 'flex' }}>
            {modules.map(m => (
              <div key={m.id} style={{ flex: 1, background: m.colors.c1 }} />
            ))}
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(18px,4%,46px) clamp(24px,7%,80px)' }}>

            {/* Logo ITM real + título institucional */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: '2%' }}>
              <img
                src="recursos/logo-itm-1.png"
                alt="Institución Universitaria ITM"
                style={{ height: 'clamp(44px,5.5vw,66px)', width: 'auto', objectFit: 'contain' }}
              />
              <div style={{ fontWeight: 700, fontSize: 'clamp(9px,1.05vw,12px)', color: 'var(--ing-1)', letterSpacing: '.16em', textTransform: 'uppercase' }}>
                Oficina de Prácticas Profesionales ITM
              </div>
            </div>

            {/* Etiqueta */}
            <div style={{ fontWeight: 700, fontSize: 'clamp(9px,1.1vw,12px)', color: 'var(--ing-2)', letterSpacing: '.2em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Constancia de finalización
            </div>

            {/* Título */}
            <h1 style={{ fontSize: 'clamp(18px,2.9vw,30px)', fontWeight: 900, color: 'var(--ing-1)', marginTop: '2%', lineHeight: 1.1 }}>
              Ruta del Manual de Prácticas<br />Profesionales ITM
            </h1>

            {/* Destinatario */}
            <p style={{ fontSize: 'clamp(10px,1.3vw,14px)', color: 'var(--ink-soft)', marginTop: '3.5%' }}>Se otorga a</p>
            <div style={{
              fontSize: 'clamp(24px,4.4vw,42px)', fontWeight: 800, color: 'var(--ink)',
              margin: '1.2% 0 1.8%', fontStyle: 'italic',
              borderBottom: '2px solid var(--line)', paddingBottom: '1%', minWidth: '55%'
            }}>
              {name}
            </div>

            {/* Mensaje profesional y motivador */}
            <p style={{ fontSize: 'clamp(10px,1.22vw,13px)', color: 'var(--ink-soft)', maxWidth: '84%', lineHeight: 1.7 }}>
              En reconocimiento a su{' '}
              <strong style={{ color: 'var(--ink)' }}>dedicación, disciplina y compromiso</strong>, por haber completado
              con éxito los <strong style={{ color: 'var(--ing-1)' }}>{total} módulos</strong> de la{' '}
              <strong style={{ color: 'var(--ink)' }}>Ruta del Manual de Prácticas Profesionales ITM</strong>,
              superando capítulo por capítulo con un promedio de{' '}
              <strong style={{ color: 'var(--ing-1)' }}>{avg}% de aprobación</strong>,
              se acredita este logro formativo y se otorgan las{' '}
              <strong style={{ color: 'var(--ing-1)' }}>{total} insignias de excelencia</strong>{' '}
              que certifican su preparación integral para el proceso de prácticas profesionales en el ITM.
            </p>

            {/* Insignias de los 9 módulos con nombre */}
            <div style={{ display: 'flex', gap: 'clamp(4px,1.1vw,12px)', marginTop: '2.5%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
              {modules.map(m => (
                <div key={m.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  <Badge module={m} size={58} state="earned" showNumber={false} />
                  <div style={{
                    fontSize: 'clamp(6.5px,.75vw,8.5px)', fontWeight: 800,
                    color: m.colors.c1, letterSpacing: '.04em',
                    textTransform: 'uppercase', textAlign: 'center',
                    maxWidth: 58, lineHeight: 1.2
                  }}>
                    {m.badge.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Pie: fecha + XP */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(28px,5vw,60px)', width: '100%', marginTop: 'auto', paddingTop: '3%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 'clamp(38px,4.5vw,52px)', height: 'clamp(38px,4.5vw,52px)', borderRadius: '50%', border: '2px solid var(--gold-deep)', display: 'grid', placeItems: 'center', color: 'var(--gold-deep)' }}>
                  <Icon name="medal" size={26} />
                </div>
                <div style={{ fontSize: 'clamp(8px,.95vw,11px)', color: 'var(--ink-soft)', fontWeight: 700 }}>{xp} XP</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 'clamp(11px,1.4vw,15px)', color: 'var(--ink)' }}>{fecha}</div>
                <div style={{ fontSize: 'clamp(8px,1vw,11px)', color: 'var(--ink-soft)', marginTop: 4, fontWeight: 600 }}>Fecha de emisión</div>
              </div>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
}

window.Certificate = Certificate;
