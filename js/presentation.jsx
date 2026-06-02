/* ============================================================
   Presentación Ejecutiva — Manual de Prácticas Profesionales ITM
   11 diapositivas: portada + 9 capítulos + cierre
   ============================================================ */
const { useState, useEffect, useCallback } = React;

/* ---- Genera ventana de impresión con todas las diapositivas ---- */
function handlePrint() {
  const wrapper = document.querySelector('.exec-pres-slide-wrap');
  if (!wrapper) return;

  const base = window.location.href.replace(/\/[^\/]*$/, '/');
  let html = wrapper.innerHTML;
  // Convierte paths relativos a absolutos para que las imágenes carguen
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
  overflow:hidden;break-after:page;page-break-after:always;
  background:#fff}
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
  const [cur, setCur] = useState(0);
  const TOTAL = modules.length + 2; // portada + 9 módulos + cierre
  const prev = () => setCur(c => Math.max(0, c - 1));
  const next = () => setCur(c => Math.min(TOTAL - 1, c + 1));

  // Teclas de navegación
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const slideStyle = (visible) => ({
    display: visible ? 'flex' : 'none',
    position: 'absolute', inset: 0,
    flexDirection: 'column',
    background: '#fff',
    overflow: 'hidden',
  });

  /* ---- PORTADA ---- */
  function Portada() {
    return (
      <div className="exec-slide" style={{ ...slideStyle(cur === 0), background: 'linear-gradient(145deg,#0a1e4a 0%,#102D69 45%,#00A0B7 100%)' }}>
        {/* Decoración fondo */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-15%', right:'-10%', width:'55%', height:'120%', borderRadius:'50%', background:'rgba(86,172,222,0.12)' }} />
          <div style={{ position:'absolute', bottom:'-20%', left:'-5%',  width:'40%', height:'80%',  borderRadius:'50%', background:'rgba(0,160,183,0.10)' }} />
          <svg style={{ position:'absolute', top:0, right:0, opacity:.07 }} width="300" height="300" viewBox="0 0 100 100">
            <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" fill="none" stroke="white" strokeWidth="1" />
            <polygon points="50,15 84,33 84,67 50,85 16,67 16,33" fill="none" stroke="white" strokeWidth="0.6" />
          </svg>
        </div>

        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'5% 8%', position:'relative', textAlign:'center' }}>
          <img src="recursos/logo-itm-2.png" alt="ITM" style={{ height:'clamp(44px,6vw,70px)', marginBottom:'3%', objectFit:'contain' }} />

          <h1 style={{ color:'#fff', fontSize:'clamp(24px,3.6vw,46px)', fontWeight:900, lineHeight:1.1, maxWidth:720 }}>
            Manual de Prácticas<br />Profesionales ITM
          </h1>

          <div style={{ width:60, height:4, background:'linear-gradient(90deg,#56ACDE,#00A0B7)', borderRadius:99, margin:'2.5% auto' }} />

          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:'clamp(12px,1.4vw,16px)', maxWidth:580, lineHeight:1.65, marginBottom:'3%' }}>
            Una guía estructurada por capítulos que resume el contenido del manual vigente
            y sirve como abrebocas a la ruta de aprendizaje del ITM.
          </p>

          <div style={{ display:'flex', gap:'clamp(16px,2.5vw,36px)', flexWrap:'wrap', justifyContent:'center' }}>
            {[['9', 'Capítulos'], ['9', 'Módulos'], ['10 000', 'XP máximo']].map(([n, l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ color:'#56ACDE', fontWeight:900, fontSize:'clamp(20px,2.8vw,32px)', lineHeight:1 }}>{n}</div>
                <div style={{ color:'rgba(255,255,255,0.6)', fontWeight:600, fontSize:'clamp(10px,1vw,12px)', textTransform:'uppercase', letterSpacing:'.06em', marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding:'2% 6%', display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.45)', fontSize:'clamp(9px,0.9vw,11px)', fontWeight:600 }}>
          <span>Oficina de Prácticas Profesionales ITM · Vicerrectoría de Docencia</span>
          <span>MDE 001 · V5</span>
        </div>
      </div>
    );
  }

  /* ---- SLIDE DE CAPÍTULO ---- */
  function ChapterSlide({ m, idx }) {
    const visible = cur === idx;
    const c = m.colors;
    const keyPoints = m.learn.slice(0, 4);
    return (
      <div className="exec-slide" style={{ ...slideStyle(visible), position: visible ? 'absolute' : 'absolute' }}>
        {/* Barra de color del módulo */}
        <div style={{ height:6, background:`linear-gradient(90deg,${c.c1},${c.c2})`, flexShrink:0 }} />

        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'2% 4% 1.5%', borderBottom:`1px solid ${c.c1}18`, flexShrink:0 }}>
          <img src="recursos/logo-itm-1.png" alt="ITM" style={{ height:'clamp(28px,3.5vw,42px)', objectFit:'contain' }} />
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:28, height:28, borderRadius:'50%', background:`linear-gradient(135deg,${c.c1},${c.c2})`, display:'grid', placeItems:'center', color:'#fff', fontWeight:900, fontSize:13, flexShrink:0 }}>{m.id}</div>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontWeight:800, fontSize:'clamp(10px,1.1vw,13px)', color:c.c1, letterSpacing:'.06em', textTransform:'uppercase' }}>{m.cap}</div>
              <div style={{ fontWeight:600, fontSize:'clamp(9px,0.9vw,11px)', color:'#8a96b0', letterSpacing:'.04em', textTransform:'uppercase' }}>Prácticas Profesionales ITM</div>
            </div>
          </div>
        </div>

        {/* Cuerpo */}
        <div style={{ flex:1, display:'grid', gridTemplateColumns:'28% 1fr', gap:'2% 3%', padding:'2% 4%', minHeight:0 }}>
          {/* Columna izquierda: badge + insignia */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'5%' }}>
            <Badge module={m} size={Math.min(110, window.innerWidth * 0.09)} state="earned" showNumber />
            <div style={{ textAlign:'center' }}>
              <div style={{ fontWeight:800, fontSize:'clamp(9px,0.95vw,11px)', color:c.c1, letterSpacing:'.08em', textTransform:'uppercase' }}>Insignia</div>
              <div style={{ fontWeight:900, fontSize:'clamp(11px,1.15vw,13px)', color:'#16203a', marginTop:2 }}>{m.badge.tag}</div>
            </div>
          </div>

          {/* Columna derecha: contenido */}
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', gap:'3%', minWidth:0 }}>
            <div>
              <h2 style={{ fontSize:'clamp(16px,2vw,24px)', fontWeight:900, color:'#16203a', lineHeight:1.1, marginBottom:'1%' }}>{m.title}</h2>
              <p style={{ fontSize:'clamp(10px,1.1vw,13px)', color:'#56608a', fontStyle:'italic', lineHeight:1.4 }}>{m.subtitle}</p>
            </div>

            <div style={{ background:`${c.c1}0c`, border:`1px solid ${c.c1}22`, borderLeft:`3px solid ${c.c1}`, borderRadius:'0 8px 8px 0', padding:'2% 3%' }}>
              <div style={{ fontWeight:800, fontSize:'clamp(9px,0.9vw,11px)', color:c.c1, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'1.5%' }}>Objetivo</div>
              <p style={{ fontSize:'clamp(10px,1.05vw,12.5px)', color:'#16203a', lineHeight:1.5 }}>{m.objective}</p>
            </div>

            <div>
              <div style={{ fontWeight:800, fontSize:'clamp(9px,0.9vw,11px)', color:'#4a5675', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'1.5%' }}>Competencias clave</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5% 2%' }}>
                {keyPoints.map((p, i) => (
                  <div key={i} style={{ display:'flex', gap:'6%', alignItems:'flex-start' }}>
                    <span style={{ width:18, height:18, borderRadius:'50%', background:`linear-gradient(135deg,${c.c1},${c.c2})`, display:'grid', placeItems:'center', flexShrink:0, marginTop:2 }}>
                      <Icon name="check" size={11} stroke={3} style={{ color:'#fff' }} />
                    </span>
                    <span style={{ fontSize:'clamp(9px,0.95vw,11.5px)', color:'#16203a', lineHeight:1.4 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1% 4%', borderTop:`1px solid ${c.c1}15`, flexShrink:0 }}>
          <span style={{ fontSize:'clamp(8px,0.85vw,10px)', color:'#8a96b0', fontWeight:600 }}>Manual de Prácticas Profesionales ITM · MDE 001 V5</span>
          <span style={{ fontSize:'clamp(8px,0.85vw,10px)', color:c.c1, fontWeight:700 }}>{idx} / {TOTAL - 1}</span>
        </div>
      </div>
    );
  }

  /* ---- CIERRE ---- */
  function Cierre() {
    const visible = cur === TOTAL - 1;
    return (
      <div className="exec-slide" style={{ ...slideStyle(visible), background:'linear-gradient(145deg,#050d20 0%,#0a1e4a 50%,#102D69 100%)' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-20%', left:'-10%', width:'50%', height:'100%', borderRadius:'50%', background:'rgba(0,160,183,0.08)' }} />
        </div>

        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'4% 6%', position:'relative', textAlign:'center' }}>
          <div style={{ fontWeight:800, fontSize:'clamp(10px,1.1vw,13px)', color:'#56ACDE', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:'1.5%' }}>Ruta de Aprendizaje</div>

          <h2 style={{ color:'#fff', fontSize:'clamp(20px,3vw,38px)', fontWeight:900, lineHeight:1.1, maxWidth:600, marginBottom:'1.5%' }}>
            ¡Ahora estás listo para comenzar tu ruta!
          </h2>

          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'clamp(11px,1.2vw,14px)', maxWidth:560, lineHeight:1.65, marginBottom:'2.5%' }}>
            Completa los 9 módulos, supera cada reto con mínimo <strong style={{ color:'#56ACDE' }}>80% de aprobación</strong>,
            gana tus insignias y obtén tu constancia de finalización.
          </p>

          {/* Insignias */}
          <div style={{ display:'flex', gap:'clamp(6px,1.2vw,14px)', flexWrap:'wrap', justifyContent:'center', marginBottom:'2.5%' }}>
            {modules.map((m, i) => (
              <div key={m.id} title={m.title}>
                <Badge module={m} size={Math.min(54, window.innerWidth * 0.045)} state="earned" showNumber={false} />
              </div>
            ))}
          </div>

          <div style={{ display:'flex', gap:'clamp(20px,3vw,48px)', flexWrap:'wrap', justifyContent:'center' }}>
            {[['10 000', 'XP máximo'], ['9', 'Insignias'], ['1', 'Constancia']].map(([n, l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ color:'var(--gold,#f4c84a)', fontWeight:900, fontSize:'clamp(18px,2.4vw,28px)', lineHeight:1 }}>{n}</div>
                <div style={{ color:'rgba(255,255,255,0.5)', fontWeight:600, fontSize:'clamp(9px,0.9vw,11px)', textTransform:'uppercase', letterSpacing:'.06em', marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding:'1.5% 5%', display:'flex', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.35)', fontSize:'clamp(9px,0.85vw,11px)', fontWeight:600 }}>
          <span>Oficina de Prácticas Profesionales ITM</span>
          <span>{TOTAL - 1} / {TOTAL - 1}</span>
        </div>
      </div>
    );
  }

  /* ---- RENDER PRINCIPAL ---- */
  return (
    <div id="exec-pres-root" className="exec-pres-overlay" style={{
      position:'fixed', inset:0, zIndex:300,
      background:'rgba(5,12,30,0.92)',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'clamp(10px,2vw,24px)',
      backdropFilter:'blur(6px)'
    }}>
      {/* Contenedor de la diapositiva */}
      <div className="exec-pres-slide-wrap" style={{
        width:'min(97vw,1180px)',
        aspectRatio:'16/9',
        position:'relative',
        borderRadius:10,
        overflow:'hidden',
        boxShadow:'0 40px 100px rgba(0,0,0,0.7)'
      }}>
        <Portada />
        {modules.map((m, i) => <ChapterSlide key={m.id} m={m} idx={i + 1} />)}
        <Cierre />
      </div>

      {/* Puntos de navegación */}
      <div className="exec-pres-dots" style={{ display:'flex', gap:6, marginTop:14 }}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{
            width: i === cur ? 22 : 8, height:8, borderRadius:99,
            background: i === cur ? '#56ACDE' : 'rgba(255,255,255,0.3)',
            border:'none', cursor:'pointer', transition:'all .25s ease', padding:0
          }} />
        ))}
      </div>

      {/* Controles */}
      <div className="exec-pres-ctrl" style={{ display:'flex', alignItems:'center', gap:10, marginTop:14, flexWrap:'wrap', justifyContent:'center' }}>
        {/* Anterior */}
        <button onClick={prev} disabled={cur === 0} style={{
          display:'flex', alignItems:'center', gap:6,
          background:'rgba(255,255,255,0.1)', color:'#fff', border:'1px solid rgba(255,255,255,0.2)',
          borderRadius:999, padding:'9px 18px', fontWeight:700, fontSize:13, cursor:'pointer',
          opacity: cur === 0 ? 0.4 : 1, transition:'opacity .2s'
        }}>
          <Icon name="arrowL" size={15} /> Anterior
        </button>

        {/* Contador */}
        <span style={{ color:'rgba(255,255,255,0.5)', fontWeight:700, fontSize:13, minWidth:60, textAlign:'center' }}>
          {cur + 1} / {TOTAL}
        </span>

        {/* Siguiente */}
        <button onClick={next} disabled={cur === TOTAL - 1} style={{
          display:'flex', alignItems:'center', gap:6,
          background:'rgba(255,255,255,0.1)', color:'#fff', border:'1px solid rgba(255,255,255,0.2)',
          borderRadius:999, padding:'9px 18px', fontWeight:700, fontSize:13, cursor:'pointer',
          opacity: cur === TOTAL - 1 ? 0.4 : 1, transition:'opacity .2s'
        }}>
          Siguiente <Icon name="arrowR" size={15} />
        </button>

        {/* Descargar PDF */}
        <button onClick={handlePrint} style={{
          display:'flex', alignItems:'center', gap:7,
          background:'linear-gradient(135deg,#102D69,#00A0B7)', color:'#fff',
          border:'none', borderRadius:999, padding:'9px 20px',
          fontWeight:700, fontSize:13, cursor:'pointer',
          boxShadow:'0 6px 18px -6px #102D6988'
        }}>
          <Icon name="print" size={15} /> Descargar PDF
        </button>

        {/* Cerrar */}
        <button onClick={onClose} style={{
          display:'flex', alignItems:'center', gap:6,
          background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.7)',
          border:'1px solid rgba(255,255,255,0.15)',
          borderRadius:999, padding:'9px 18px', fontWeight:700, fontSize:13, cursor:'pointer'
        }}>
          <Icon name="x" size={15} /> Cerrar
        </button>
      </div>

      {/* Hint teclado */}
      <div style={{ color:'rgba(255,255,255,0.25)', fontSize:11, fontWeight:600, marginTop:8 }}>
        ← → para navegar · ESC para cerrar
      </div>
    </div>
  );
}

window.ExecutivePresentation = ExecutivePresentation;
