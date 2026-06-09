/* ============================================================
   Presentación del Manual de Prácticas Profesionales ITM
   11 diapositivas: portada + 9 capítulos + cierre
   ============================================================ */
const { useState, useEffect } = React;

/* ---- CSS responsive inyectado ---- */
function usePresStyles() {
  useEffect(() => {
    const s = document.createElement('style');
    s.id = 'exec-pres-styles';
    s.textContent = `
      /* Tablet (≤ 900px) */
      @media (max-width: 900px) {
        .exec-pres-slide-wrap {
          aspect-ratio: unset !important;
          height: min(72vw, 500px) !important;
        }
        .exec-cover { grid-template-columns: 1fr !important; }
        .exec-cover-right { display: none !important; }
        .exec-chapter-body { grid-template-columns: 1fr !important; }
        .exec-badge-col { display: none !important; }
      }
      /* Móvil (≤ 560px) */
      @media (max-width: 560px) {
        .exec-pres-slide-wrap { height: min(85vw, 380px) !important; }
        .exec-pres-dots { display: none !important; }
        .exec-ctrl-label { display: none !important; }
        .exec-pres-ctrl { gap: 7px !important; }
        .exec-hint { display: none !important; }
      }
    `;
    document.head.appendChild(s);
    return () => document.getElementById('exec-pres-styles')?.remove();
  }, []);
}

/* ---- Genera ventana de impresión con todas las diapositivas ---- */
function handlePrint() {
  const wrapper = document.querySelector('.exec-pres-slide-wrap');
  if (!wrapper) return;
  const base = window.location.href.replace(/\/[^\/]*$/, '/');
  let html = wrapper.innerHTML;
  html = html.replace(/src="recursos\//g, 'src="' + base + 'recursos/');

  const pw = window.open('', '_blank', 'width=1280,height=900');
  if (!pw) { alert('Permite ventanas emergentes para descargar el PDF.'); return; }

  pw.document.write(`<!DOCTYPE html>
<html lang="es"><head>
<meta charset="UTF-8">
<title>Manual de Prácticas Profesionales ITM</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:"Montserrat",system-ui,sans-serif;background:#fff;-webkit-font-smoothing:antialiased}
:root{--ink:#16203a;--ink-soft:#4a5675;--line:#e3e8f2;--gold:#f4c84a;
  --ing-1:#102D69;--ing-2:#00A0B7;--ing-3:#56ACDE;--cea-1:#009030}
img{max-width:100%;height:auto}
.exec-pres-slide-wrap{width:100%;display:block}
.exec-slide{
  width:100% !important;height:100vh !important;
  display:flex !important;flex-direction:column !important;
  position:relative !important;inset:unset !important;
  overflow:hidden;break-after:page;page-break-after:always}
.exec-cover{width:100% !important;height:100% !important;display:grid !important}
@page{size:A4 landscape;margin:0}
</style>
</head><body>
<div class="exec-pres-slide-wrap">${html}</div>
</body></html>`);

  pw.document.close();
  pw.focus();
  setTimeout(() => { pw.print(); }, 1000);
}

/* ---- Componente principal ---- */
function ExecutivePresentation({ modules, onClose }) {
  usePresStyles();
  const [cur, setCur] = useState(0);
  const TOTAL = modules.length + 2;
  const prev = () => setCur(c => Math.max(0, c - 1));
  const next = () => setCur(c => Math.min(TOTAL - 1, c + 1));

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [cur]);

  const vis = (i) => ({ display: cur === i ? 'flex' : 'none', position: 'absolute', inset: 0, flexDirection: 'column', overflow: 'hidden' });

  /* ── PORTADA: split azul | blanco ── */
  function Portada() {
    return (
      <div className="exec-slide exec-cover" style={{
        ...vis(0),
        display: cur === 0 ? 'grid' : 'none',
        gridTemplateColumns: '55% 45%',
        position: 'absolute', inset: 0
      }}>
        {/* Panel izquierdo — azul */}
        <div style={{
          background: 'linear-gradient(145deg,#071530 0%,#102D69 55%,#0e3a7a 100%)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '7% 7% 5% 8%',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position:'absolute', bottom:'-20%', right:'-12%', width:'65%', height:'75%', borderRadius:'50%', background:'rgba(0,160,183,0.14)', pointerEvents:'none' }} />
          <svg style={{ position:'absolute', top:'-5%', right:'-5%', opacity:.06, pointerEvents:'none' }} width="220" height="220" viewBox="0 0 100 100">
            <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" fill="none" stroke="white" strokeWidth="1.5"/>
          </svg>

          <img src="recursos/logo-itm-2.png" alt="ITM"
            style={{ height:'clamp(42px,5.2vw,68px)', marginBottom:'8%', objectFit:'contain', alignSelf:'flex-start' }} />

          <h1 style={{ color:'#fff', fontSize:'clamp(23px,3.2vw,44px)', fontWeight:900, lineHeight:1.08, marginBottom:'4%' }}>
            Manual de<br/>Prácticas<br/>Profesionales ITM
          </h1>

          <div style={{ width:48, height:4, background:'linear-gradient(90deg,#56ACDE,#00A0B7)', borderRadius:99, marginBottom:'5%' }} />

          <p style={{ color:'rgba(255,255,255,0.72)', fontSize:'clamp(13px,1.3vw,16px)', lineHeight:1.7, maxWidth:360 }}>
            Guía estructurada por capítulos que resume el contenido del manual vigente
            y sirve como punto de partida para la ruta de aprendizaje del ITM.
          </p>

          <div style={{ marginTop:'auto', paddingTop:'8%', color:'rgba(255,255,255,0.35)', fontSize:'clamp(10px,0.95vw,12px)', fontWeight:600 }}>
            MDE 001 · V5 · Oficina de Prácticas Profesionales ITM
          </div>
        </div>

        {/* Panel derecho — blanco */}
        <div className="exec-cover-right" style={{
          background: '#fff', display:'flex', flexDirection:'column',
          justifyContent:'center', padding:'6% 7% 5% 6%', gap:'5%'
        }}>
          <div style={{ height:5, background:'linear-gradient(90deg,#102D69,#00A0B7)', borderRadius:99, width:'55%' }} />

          <div style={{ fontWeight:800, fontSize:'clamp(13px,1.2vw,15px)', color:'#102D69', letterSpacing:'.1em', textTransform:'uppercase' }}>
            Contenido de la presentación
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {[
              { n:'9',      l:'Capítulos del Manual',    icon:'book'  },
              { n:'9',      l:'Módulos de Aprendizaje',  icon:'route' },
              { n:'10 000', l:'XP Máximo disponible',    icon:'star'  },
              { n:'1',      l:'Constancia de Finalización', icon:'trophy' },
            ].map(({ n, l, icon }) => (
              <div key={l} style={{ display:'flex', alignItems:'center', gap:'4%', padding:'3.5% 0', borderBottom:'1px solid #e8ecf5' }}>
                <div style={{ width:'clamp(34px,4vw,46px)', height:'clamp(34px,4vw,46px)', borderRadius:10, background:'linear-gradient(135deg,#102D69,#00A0B7)', display:'grid', placeItems:'center', color:'#fff', flexShrink:0 }}>
                  <Icon name={icon} size={18} />
                </div>
                <div>
                  <div style={{ fontWeight:900, fontSize:'clamp(19px,2.3vw,30px)', color:'#102D69', lineHeight:1 }}>{n}</div>
                  <div style={{ fontWeight:600, fontSize:'clamp(11px,1.05vw,14px)', color:'#8a96b0', marginTop:2 }}>{l}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', gap:'clamp(4px,0.8vw,10px)', flexWrap:'wrap', paddingTop:'2%' }}>
            {modules.slice(0, 5).map(m => (
              <Badge key={m.id} module={m} size={Math.min(54, window.innerWidth * 0.042)} state="earned" showNumber={false} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── SLIDE DE CAPÍTULO ── */
  function ChapterSlide({ m, idx }) {
    const c = m.colors;
    return (
      <div className="exec-slide" style={{ ...vis(idx), background:'#fff' }}>
        <div style={{ height:6, background:`linear-gradient(90deg,${c.c1},${c.c2})`, flexShrink:0 }} />

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'2% 4% 1.5%', borderBottom:`1px solid ${c.c1}18`, flexShrink:0 }}>
          <img src="recursos/logo-itm-1.png" alt="ITM" style={{ height:'clamp(28px,3.5vw,46px)', objectFit:'contain' }} />
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:30, height:30, borderRadius:'50%', background:`linear-gradient(135deg,${c.c1},${c.c2})`, display:'grid', placeItems:'center', color:'#fff', fontWeight:900, fontSize:14 }}>{m.id}</div>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontWeight:800, fontSize:'clamp(12px,1.2vw,15px)', color:c.c1, letterSpacing:'.06em', textTransform:'uppercase' }}>{m.cap}</div>
              <div style={{ fontWeight:600, fontSize:'clamp(11px,1vw,13px)', color:'#8a96b0', letterSpacing:'.04em', textTransform:'uppercase' }}>Prácticas Profesionales ITM</div>
            </div>
          </div>
        </div>

        <div className="exec-chapter-body" style={{ flex:1, display:'grid', gridTemplateColumns:'26% 1fr', gap:'2% 3%', padding:'2% 4%', minHeight:0 }}>
          <div className="exec-badge-col" style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'5%' }}>
            <Badge module={m} size={Math.min(115, window.innerWidth * 0.092)} state="earned" showNumber />
            <div style={{ textAlign:'center' }}>
              <div style={{ fontWeight:800, fontSize:'clamp(11px,1.05vw,13px)', color:c.c1, letterSpacing:'.08em', textTransform:'uppercase' }}>Insignia</div>
              <div style={{ fontWeight:900, fontSize:'clamp(13px,1.25vw,15px)', color:'#16203a', marginTop:2 }}>{m.badge.tag}</div>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', gap:'3%', minWidth:0 }}>
            <div>
              <h2 style={{ fontSize:'clamp(17px,2.1vw,26px)', fontWeight:900, color:'#16203a', lineHeight:1.1, marginBottom:'1%' }}>{m.title}</h2>
              <p style={{ fontSize:'clamp(12px,1.15vw,14px)', color:'#56608a', fontStyle:'italic', lineHeight:1.4 }}>{m.subtitle}</p>
            </div>

            <div style={{ background:`${c.c1}0c`, border:`1px solid ${c.c1}22`, borderLeft:`3px solid ${c.c1}`, borderRadius:'0 8px 8px 0', padding:'2% 3%' }}>
              <div style={{ fontWeight:800, fontSize:'clamp(11px,1.05vw,13px)', color:c.c1, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'1.5%' }}>Objetivo</div>
              <p style={{ fontSize:'clamp(12px,1.15vw,14px)', color:'#16203a', lineHeight:1.5 }}>{m.objective}</p>
            </div>

            <div>
              <div style={{ fontWeight:800, fontSize:'clamp(11px,1.05vw,13px)', color:'#4a5675', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'1.5%' }}>Competencias clave</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5% 2%' }}>
                {m.learn.slice(0,4).map((p, i) => (
                  <div key={i} style={{ display:'flex', gap:'4%', alignItems:'flex-start' }}>
                    <span style={{ width:18, height:18, borderRadius:'50%', background:`linear-gradient(135deg,${c.c1},${c.c2})`, display:'grid', placeItems:'center', flexShrink:0, marginTop:2 }}>
                      <Icon name="check" size={12} stroke={3} style={{ color:'#fff' }} />
                    </span>
                    <span style={{ fontSize:'clamp(11px,1.05vw,13px)', color:'#16203a', lineHeight:1.4 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1% 4%', borderTop:`1px solid ${c.c1}15`, flexShrink:0 }}>
          <span style={{ fontSize:'clamp(10px,0.95vw,12px)', color:'#8a96b0', fontWeight:600 }}>Manual de Prácticas Profesionales ITM · MDE 001 V5</span>
          <span style={{ fontSize:'clamp(10px,0.95vw,12px)', color:c.c1, fontWeight:700 }}>{idx} / {TOTAL - 1}</span>
        </div>
      </div>
    );
  }

  /* ── CIERRE ── */
  function Cierre() {
    return (
      <div className="exec-slide" style={{ ...vis(TOTAL - 1), background:'linear-gradient(145deg,#050d20,#0a1e4a 50%,#102D69)' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
          <div style={{ position:'absolute', top:'-20%', left:'-10%', width:'50%', height:'100%', borderRadius:'50%', background:'rgba(0,160,183,0.08)' }} />
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'4% 6%', position:'relative', textAlign:'center', gap:'3%' }}>
          <div style={{ fontWeight:800, fontSize:'clamp(12px,1.2vw,15px)', color:'#56ACDE', letterSpacing:'.14em', textTransform:'uppercase' }}>Ruta de Aprendizaje</div>
          <h2 style={{ color:'#fff', fontSize:'clamp(22px,3vw,40px)', fontWeight:900, lineHeight:1.1, maxWidth:600 }}>
            ¡Ahora estás listo para comenzar tu ruta!
          </h2>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'clamp(13px,1.3vw,16px)', maxWidth:520, lineHeight:1.65 }}>
            Completa los 9 módulos, supera cada reto con mínimo <strong style={{ color:'#56ACDE' }}>80% de aprobación</strong>,
            gana tus insignias y obtén tu constancia de finalización.
          </p>
          <div style={{ display:'flex', gap:'clamp(5px,1vw,12px)', flexWrap:'wrap', justifyContent:'center' }}>
            {modules.map(m => (
              <Badge key={m.id} module={m} size={Math.min(58, window.innerWidth * 0.046)} state="earned" showNumber={false} />
            ))}
          </div>
          <div style={{ display:'flex', gap:'clamp(18px,2.8vw,44px)', flexWrap:'wrap', justifyContent:'center' }}>
            {[['10 000','XP máximo'],['9','Insignias'],['1','Constancia']].map(([n,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ color:'#f4c84a', fontWeight:900, fontSize:'clamp(19px,2.5vw,30px)', lineHeight:1 }}>{n}</div>
                <div style={{ color:'rgba(255,255,255,0.5)', fontWeight:600, fontSize:'clamp(11px,1.05vw,13px)', textTransform:'uppercase', letterSpacing:'.06em', marginTop:3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding:'1.5% 5%', display:'flex', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.35)', fontSize:'clamp(10px,0.95vw,12px)', fontWeight:600 }}>
          <span>Oficina de Prácticas Profesionales ITM</span>
          <span>{TOTAL - 1} / {TOTAL - 1}</span>
        </div>
      </div>
    );
  }

  /* ── RENDER PRINCIPAL ── */
  return (
    <div id="exec-pres-root" className="exec-pres-overlay" style={{
      position:'fixed', inset:0, zIndex:300,
      background:'rgba(5,12,30,0.92)',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'clamp(8px,2vw,20px)',
      backdropFilter:'blur(6px)'
    }}>
      {/* Slide */}
      <div className="exec-pres-slide-wrap" style={{
        width:'min(98vw,1440px)',
        aspectRatio:'16/9',
        position:'relative',
        borderRadius:10,
        overflow:'hidden',
        boxShadow:'0 40px 100px rgba(0,0,0,0.7)',
        flexShrink:0
      }}>
        <Portada />
        {modules.map((m, i) => <ChapterSlide key={m.id} m={m} idx={i + 1} />)}
        <Cierre />
      </div>

      {/* Dots */}
      <div className="exec-pres-dots" style={{ display:'flex', gap:5, marginTop:10, flexWrap:'wrap', justifyContent:'center', maxWidth:'90vw' }}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{
            width: i === cur ? 20 : 7, height:7, borderRadius:99,
            background: i === cur ? '#56ACDE' : 'rgba(255,255,255,0.28)',
            border:'none', cursor:'pointer', transition:'all .25s', padding:0
          }} />
        ))}
      </div>

      {/* Controles */}
      <div className="exec-pres-ctrl" style={{ display:'flex', alignItems:'center', gap:8, marginTop:10, flexWrap:'wrap', justifyContent:'center' }}>
        <button onClick={prev} disabled={cur === 0} style={{
          display:'flex', alignItems:'center', gap:5,
          background:'rgba(255,255,255,0.1)', color:'#fff', border:'1px solid rgba(255,255,255,0.2)',
          borderRadius:999, padding:'8px 16px', fontWeight:700, fontSize:13, cursor:'pointer',
          opacity: cur === 0 ? 0.4 : 1
        }}>
          <Icon name="arrowL" size={14} /><span className="exec-ctrl-label">Anterior</span>
        </button>

        <span style={{ color:'rgba(255,255,255,0.5)', fontWeight:700, fontSize:12, minWidth:52, textAlign:'center' }}>
          {cur + 1} / {TOTAL}
        </span>

        <button onClick={next} disabled={cur === TOTAL - 1} style={{
          display:'flex', alignItems:'center', gap:5,
          background:'rgba(255,255,255,0.1)', color:'#fff', border:'1px solid rgba(255,255,255,0.2)',
          borderRadius:999, padding:'8px 16px', fontWeight:700, fontSize:13, cursor:'pointer',
          opacity: cur === TOTAL - 1 ? 0.4 : 1
        }}>
          <span className="exec-ctrl-label">Siguiente</span><Icon name="arrowR" size={14} />
        </button>

        <button onClick={handlePrint} style={{
          display:'flex', alignItems:'center', gap:6,
          background:'linear-gradient(135deg,#102D69,#00A0B7)', color:'#fff',
          border:'none', borderRadius:999, padding:'8px 18px',
          fontWeight:700, fontSize:13, cursor:'pointer',
          boxShadow:'0 6px 18px -6px #102D6988'
        }}>
          <Icon name="print" size={14} /><span className="exec-ctrl-label">Descargar PDF</span>
        </button>

        <button onClick={onClose} style={{
          display:'flex', alignItems:'center', gap:5,
          background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.7)',
          border:'1px solid rgba(255,255,255,0.15)',
          borderRadius:999, padding:'8px 16px', fontWeight:700, fontSize:13, cursor:'pointer'
        }}>
          <Icon name="x" size={14} /><span className="exec-ctrl-label">Cerrar</span>
        </button>
      </div>

      <div className="exec-hint" style={{ color:'rgba(255,255,255,0.22)', fontSize:10, fontWeight:600, marginTop:6 }}>
        ← → para navegar · ESC para cerrar
      </div>
    </div>
  );
}

window.ExecutivePresentation = ExecutivePresentation;
