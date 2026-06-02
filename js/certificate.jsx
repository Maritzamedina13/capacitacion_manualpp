/* ============================================================
   Certificado final — imprimible (PDF)
   ============================================================ */
function makeFolio(name) {
  let h = 0;
  const base = (name || 'ITM') + '|practicas';
  for (let i = 0; i < base.length; i++) h = (h * 31 + base.charCodeAt(i)) >>> 0;
  const code = h.toString(36).toUpperCase().padStart(6, '0').slice(0, 6);
  return `ITM-PP-${code}`;
}

function Certificate({ modules, name, xp, progress, onExit }) {
  const completed = progress.completed || {};
  const date = new Date();
  const fecha = date.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
  const folio = makeFolio(name);
  const allScores = modules.map(m => completed[m.id] ? completed[m.id].score : 0);
  const avg = Math.round(allScores.reduce((a, b) => a + b, 0) / modules.length);

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
          {/* marco decorativo */}
          <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--ing-1)', margin: 14, borderRadius: 6, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--ing-2)', margin: 19, borderRadius: 4, pointerEvents: 'none' }} />
          {/* franja de color facultades arriba */}
          <div style={{ display: 'flex', height: '1.2%' }} />
          <div style={{ position: 'absolute', top: 14, left: 14, right: 14, height: 8, display: 'flex' }}>
            {['#1F6FB2', '#4DA6E0', '#102D69', '#00A0B7', '#009030', '#98BF13', '#F19800', '#F6B63E'].map((col, i) => <div key={i} style={{ flex: 1, background: col }} />)}
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(18px,4%,46px) clamp(24px,7%,80px)' }}>
            {/* sello ITM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '2.5%' }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: 'linear-gradient(135deg,var(--ing-1),var(--ing-2))', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 900, fontSize: 20 }}>ITM</div>
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <div style={{ fontWeight: 800, fontSize: 'clamp(13px,1.5vw,16px)', color: 'var(--ink)' }}>Institución Universitaria ITM</div>
                <div style={{ fontWeight: 600, fontSize: 'clamp(9px,1vw,11px)', color: 'var(--ink-soft)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Oficina de Prácticas Profesionales</div>
              </div>
            </div>

            <div style={{ fontWeight: 700, fontSize: 'clamp(9px,1.1vw,12px)', color: 'var(--ing-2)', letterSpacing: '.2em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Constancia de finalización</div>
            <h1 style={{ fontSize: 'clamp(18px,2.9vw,30px)', fontWeight: 900, color: 'var(--ing-1)', marginTop: '2%', lineHeight: 1.1 }}>Ruta del Manual de Prácticas<br />Profesionales ITM</h1>

            <p style={{ fontSize: 'clamp(10px,1.3vw,14px)', color: 'var(--ink-soft)', marginTop: '4%' }}>Se otorga a</p>
            <div style={{ fontSize: 'clamp(24px,4.4vw,42px)', fontWeight: 800, color: 'var(--ink)', margin: '1.2% 0 1.6%', fontStyle: 'italic', borderBottom: '2px solid var(--line)', paddingBottom: '1%', minWidth: '55%' }}>{name}</div>
            <p style={{ fontSize: 'clamp(10px,1.3vw,14px)', color: 'var(--ink-soft)', maxWidth: '78%', lineHeight: 1.5 }}>
              por completar los <strong style={{ color: 'var(--ink)' }}>6 módulos</strong> de la ruta gamificada, comprendiendo capítulo por capítulo el contenido del Manual de Prácticas Profesionales ITM, con un promedio de <strong style={{ color: 'var(--ing-1)' }}>{avg}% de aciertos</strong>.
            </p>

            {/* insignias */}
            <div style={{ display: 'flex', gap: 'clamp(4px,1.2vw,14px)', marginTop: '3%' }}>
              {modules.map(m => (
                <div key={m.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  <Badge module={m} size={48} state="earned" showNumber={false} />
                </div>
              ))}
            </div>

            {/* pie: firma, fecha, folio */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', marginTop: 'auto', paddingTop: '3.5%' }}>
              <div style={{ textAlign: 'center', minWidth: '26%' }}>
                <div style={{ fontFamily: "'Montserrat'", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(12px,1.6vw,18px)', color: 'var(--ing-1)', borderBottom: '1.5px solid var(--ink)', paddingBottom: 4 }}>Oficina de Prácticas</div>
                <div style={{ fontSize: 'clamp(8px,1vw,11px)', color: 'var(--ink-soft)', marginTop: 5, fontWeight: 600 }}>Vicerrectoría de Docencia</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <div style={{ width: 'clamp(40px,5vw,58px)', height: 'clamp(40px,5vw,58px)', borderRadius: '50%', border: '2px solid var(--gold-deep)', display: 'grid', placeItems: 'center', color: 'var(--gold-deep)' }}><Icon name="medal" size={28} /></div>
                <div style={{ fontSize: 'clamp(8px,.95vw,10px)', color: 'var(--ink-soft)', fontWeight: 700 }}>{xp} XP</div>
              </div>
              <div style={{ textAlign: 'center', minWidth: '26%' }}>
                <div style={{ fontWeight: 700, fontSize: 'clamp(11px,1.4vw,15px)', color: 'var(--ink)', borderBottom: '1.5px solid var(--ink)', paddingBottom: 4 }}>{fecha}</div>
                <div style={{ fontSize: 'clamp(8px,1vw,11px)', color: 'var(--ink-soft)', marginTop: 5, fontWeight: 600 }}>Fecha de emisión</div>
              </div>
            </div>
            <div style={{ fontSize: 'clamp(8px,1vw,11px)', color: 'var(--ink-soft)', marginTop: '1.5%', letterSpacing: '.1em', fontWeight: 600 }}>FOLIO DE VERIFICACIÓN · {folio}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

window.Certificate = Certificate;
