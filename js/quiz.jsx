/* ============================================================
   Motor de quiz — tipos: mcq | tf | match | order
   ============================================================ */
const { useState, useRef } = React;
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TYPE_LABEL = { mcq: 'Opción múltiple', tf: 'Verdadero o Falso', match: 'Relacionar', order: 'Ordenar la secuencia' };

function QuizQuestion({ q, color, index, total, onAnswered }) {
  const [phase, setPhase] = useState('answering'); // answering | feedback
  const [correct, setCorrect] = useState(false);

  // estado por tipo
  const [sel, setSel] = useState(null);                 // mcq / tf
  const [assign, setAssign] = useState({});             // match: {leftIdx: rightStr}
  const [pickToken, setPickToken] = useState(null);     // match token seleccionado
  const rightPool = useRef(null);
  if (q.type === 'match' && !rightPool.current) rightPool.current = shuffle(q.pairs.map(p => p.r));
  const [order, setOrder] = useState(() => q.type === 'order' ? shuffle(q.steps) : []);

  function ready() {
    if (q.type === 'mcq' || q.type === 'tf') return sel !== null;
    if (q.type === 'match') return Object.keys(assign).length === q.pairs.length;
    if (q.type === 'order') return true;
    return false;
  }

  function evaluate() {
    let ok = false;
    if (q.type === 'mcq') ok = sel === q.answer;
    else if (q.type === 'tf') ok = sel === q.answer;
    else if (q.type === 'match') ok = q.pairs.every((p, i) => assign[i] === p.r);
    else if (q.type === 'order') ok = order.every((s, i) => s === q.steps[i]);
    setCorrect(ok);
    setPhase('feedback');
  }

  /* ---- match helpers ---- */
  function assignToken(leftIdx) {
    if (phase !== 'answering') return;
    if (assign[leftIdx]) {
      // liberar
      const n = { ...assign }; delete n[leftIdx]; setAssign(n); return;
    }
    if (pickToken == null) return;
    setAssign({ ...assign, [leftIdx]: pickToken });
    setPickToken(null);
  }
  const usedTokens = Object.values(assign);
  const availableTokens = rightPool.current ? rightPool.current.filter(t => !usedTokens.includes(t)) : [];

  /* ---- order helpers ---- */
  function move(i, dir) {
    if (phase !== 'answering') return;
    const j = i + dir;
    if (j < 0 || j >= order.length) return;
    const n = order.slice(); [n[i], n[j]] = [n[j], n[i]]; setOrder(n);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* encabezado pregunta */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
        <div className="chip" style={{ background: color.soft, color: color.c1, whiteSpace: 'nowrap' }}>
          <Icon name={q.type === 'order' ? 'flow' : q.type === 'match' ? 'route' : 'sparkle'} size={14} /> {TYPE_LABEL[q.type]}
        </div>
        <span style={{ fontWeight: 700, color: 'var(--ink-soft)', fontSize: 13 }}>Pregunta {index + 1} de {total}</span>
      </div>

      <h2 style={{ fontSize: 'clamp(20px,2.4vw,27px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 22 }}>{q.prompt}</h2>

      {/* cuerpo según tipo */}
      <div className="scroll-area" style={{ flex: 1, minHeight: 0, paddingRight: 4 }}>

        {/* MCQ */}
        {q.type === 'mcq' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {q.options.map((opt, i) => {
              const chosen = sel === i;
              const isCorrect = i === q.answer;
              let bg = '#fff', bd = 'var(--line)', cl = 'var(--ink)';
              if (phase === 'feedback') {
                if (isCorrect) { bg = '#eafaf0'; bd = 'var(--cea-1)'; cl = '#0a6b29'; }
                else if (chosen) { bg = '#fdecec'; bd = '#d64545'; cl = '#a32020'; }
              } else if (chosen) { bg = color.soft; bd = color.c1; }
              return (
                <button key={i} onClick={() => phase === 'answering' && setSel(i)}
                  style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 14, padding: '15px 18px', borderRadius: 14, border: `2px solid ${bd}`, background: bg, color: cl, fontWeight: 600, fontSize: 15.5, transition: 'all .15s ease' }}>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13, background: chosen || (phase === 'feedback' && isCorrect) ? (phase === 'feedback' ? (isCorrect ? 'var(--cea-1)' : '#d64545') : color.c1) : '#eef1f7', color: chosen || (phase === 'feedback' && isCorrect) ? '#fff' : 'var(--ink-soft)' }}>
                    {phase === 'feedback' && isCorrect ? <Icon name="check" size={15} stroke={3} /> : phase === 'feedback' && chosen ? <Icon name="x" size={15} stroke={3} /> : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {/* TRUE / FALSE */}
        {q.type === 'tf' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[{ v: true, t: 'Verdadero', ic: 'check' }, { v: false, t: 'Falso', ic: 'x' }].map(o => {
              const chosen = sel === o.v;
              const isCorrect = o.v === q.answer;
              let bg = '#fff', bd = 'var(--line)', cl = 'var(--ink)';
              if (phase === 'feedback') {
                if (isCorrect) { bg = '#eafaf0'; bd = 'var(--cea-1)'; cl = '#0a6b29'; }
                else if (chosen) { bg = '#fdecec'; bd = '#d64545'; cl = '#a32020'; }
              } else if (chosen) { bg = color.soft; bd = color.c1; cl = color.c1; }
              return (
                <button key={o.t} onClick={() => phase === 'answering' && setSel(o.v)}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '30px 18px', borderRadius: 16, border: `2px solid ${bd}`, background: bg, color: cl, fontWeight: 800, fontSize: 20, transition: 'all .15s ease' }}>
                  <Icon name={o.ic} size={34} stroke={2.4} />
                  {o.t}
                </button>
              );
            })}
          </div>
        )}

        {/* MATCH */}
        {q.type === 'match' && (
          <div>
            {phase === 'answering' && (
              <p style={{ color: 'var(--ink-soft)', fontSize: 13.5, marginBottom: 14 }}>
                Toca una opción de la derecha y luego la casilla que le corresponde. Toca una casilla llena para liberarla.
              </p>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px,3vw,28px)' }}>
              {/* columna izquierda con slots */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.pairs.map((p, i) => {
                  const val = assign[i];
                  const ok = phase === 'feedback' && val === p.r;
                  const bad = phase === 'feedback' && val && val !== p.r;
                  return (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--ink)' }}>{p.l}</div>
                      <button onClick={() => assignToken(i)}
                        style={{ minHeight: 46, borderRadius: 11, border: `2px ${val ? 'solid' : 'dashed'} ${ok ? 'var(--cea-1)' : bad ? '#d64545' : val ? color.c1 : 'var(--line)'}`, background: ok ? '#eafaf0' : bad ? '#fdecec' : val ? color.soft : '#fafbfe', color: ok ? '#0a6b29' : bad ? '#a32020' : 'var(--ink)', fontWeight: 600, fontSize: 13.5, padding: '8px 12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8 }}>
                        {val ? (<><span style={{ flex: 1 }}>{val}</span>{phase === 'feedback' && (ok ? <Icon name="check" size={15} stroke={3} /> : <Icon name="x" size={15} stroke={3} />)}</>) : <span style={{ color: 'var(--ink-soft)', opacity: .7 }}>Colocar aquí…</span>}
                      </button>
                      {bad && <span style={{ fontSize: 12, color: '#0a6b29', fontWeight: 600 }}>✓ Correcto: {p.r}</span>}
                    </div>
                  );
                })}
              </div>
              {/* tokens disponibles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignContent: 'start' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-soft)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Opciones</span>
                {availableTokens.length === 0 && phase === 'answering' && <span style={{ color: 'var(--ink-soft)', fontSize: 13, opacity: .7 }}>Todas asignadas ✓</span>}
                {availableTokens.map((t, i) => (
                  <button key={i} onClick={() => phase === 'answering' && setPickToken(pickToken === t ? null : t)}
                    style={{ padding: '12px 14px', borderRadius: 11, border: `2px solid ${pickToken === t ? color.c1 : 'var(--line)'}`, background: pickToken === t ? color.c1 : '#fff', color: pickToken === t ? '#fff' : 'var(--ink)', fontWeight: 600, fontSize: 13.5, textAlign: 'left', boxShadow: pickToken === t ? `0 6px 16px -6px ${color.c1}` : 'none', transition: 'all .15s ease' }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ORDER */}
        {q.type === 'order' && (
          <div>
            {phase === 'answering' && <p style={{ color: 'var(--ink-soft)', fontSize: 13.5, marginBottom: 14 }}>Usa las flechas para ordenar los pasos de primero (arriba) a último (abajo).</p>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {order.map((step, i) => {
                const ok = phase === 'feedback' && step === q.steps[i];
                const bad = phase === 'feedback' && step !== q.steps[i];
                return (
                  <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, border: `2px solid ${ok ? 'var(--cea-1)' : bad ? '#d64545' : 'var(--line)'}`, background: ok ? '#eafaf0' : bad ? '#fdecec' : '#fff' }}>
                    <span style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: color.c1, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 14 }}>{i + 1}</span>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: 14.5, color: 'var(--ink)' }}>{step}</span>
                    {phase === 'answering' ? (
                      <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <button onClick={() => move(i, -1)} disabled={i === 0} style={{ width: 30, height: 22, borderRadius: 7, background: i === 0 ? '#f0f2f7' : color.soft, color: i === 0 ? '#c2c9d6' : color.c1, display: 'grid', placeItems: 'center' }}><Icon name="arrowL" size={14} stroke={2.6} style={{ transform: 'rotate(90deg)' }} /></button>
                        <button onClick={() => move(i, 1)} disabled={i === order.length - 1} style={{ width: 30, height: 22, borderRadius: 7, background: i === order.length - 1 ? '#f0f2f7' : color.soft, color: i === order.length - 1 ? '#c2c9d6' : color.c1, display: 'grid', placeItems: 'center' }}><Icon name="arrowR" size={14} stroke={2.6} style={{ transform: 'rotate(90deg)' }} /></button>
                      </span>
                    ) : (ok ? <Icon name="check" size={18} stroke={3} style={{ color: 'var(--cea-1)' }} /> : <Icon name="x" size={18} stroke={3} style={{ color: '#d64545' }} />)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* feedback */}
      {phase === 'feedback' && (
        <div style={{ marginTop: 16, padding: '14px 18px', borderRadius: 14, background: correct ? '#eafaf0' : '#fdf3ec', border: `1.5px solid ${correct ? 'var(--cea-1)' : 'var(--eco-1)'}`, display: 'flex', gap: 12, animation: 'floatUp .3s both' }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', flexShrink: 0, background: correct ? 'var(--cea-1)' : 'var(--eco-1)', color: '#fff', display: 'grid', placeItems: 'center' }}>
            <Icon name={correct ? 'check' : 'sparkle'} size={17} stroke={3} />
          </div>
          <div>
            <div style={{ fontWeight: 800, color: correct ? '#0a6b29' : '#8a4b00', fontSize: 15 }}>{correct ? '¡Correcto!' : 'Revisa este punto'}</div>
            <div style={{ color: 'var(--ink)', fontSize: 13.5, marginTop: 2, lineHeight: 1.5 }}>{q.explain}</div>
          </div>
        </div>
      )}

      {/* acción */}
      <div style={{ marginTop: 18, display: 'flex', justifyContent: 'flex-end' }}>
        {phase === 'answering' ? (
          <button className="btn btn-primary" disabled={!ready()} style={{ '--m-1': color.c1, '--m-2': color.c2 }} onClick={evaluate}>
            Comprobar <Icon name="check" size={17} stroke={2.6} />
          </button>
        ) : (
          <button className="btn btn-primary" style={{ '--m-1': color.c1, '--m-2': color.c2 }} onClick={() => onAnswered(correct)}>
            {index + 1 === total ? 'Ver resultado' : 'Siguiente'} <Icon name="arrowR" size={17} stroke={2.6} />
          </button>
        )}
      </div>
    </div>
  );
}

window.QuizQuestion = QuizQuestion;
