/* ============================================================
   Componentes compartidos: iconos, insignias, XP, confeti, marca
   Expone componentes en window
   ============================================================ */
const { useState, useEffect, useRef } = React;

/* ---------------- Iconos (SVG stroke) ---------------- */
const ICON_PATHS = {
  compass: '<circle cx="12" cy="12" r="9"/><polygon points="16.2 7.8 13.4 13.4 7.8 16.2 10.6 10.6" fill="currentColor" stroke="none"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5A2.5 2.5 0 0 0 6.5 8H20"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>',
  route: '<circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="6" r="2.4"/><path d="M8.4 18H14a3.5 3.5 0 0 0 0-7H9.5A3.5 3.5 0 0 1 9.5 4H15.6"/>',
  flow: '<rect x="3" y="4" width="6" height="5" rx="1.2"/><rect x="15" y="15" width="6" height="5" rx="1.2"/><path d="M6 9v4a3 3 0 0 0 3 3h6"/>',
  scale: '<path d="M12 3v18"/><path d="M7 21h10"/><path d="M5 7h14l-1-1"/><path d="M5 7l-2.5 5a3 3 0 0 0 5 0z"/><path d="M19 7l2.5 5a3 3 0 0 1-5 0z"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  check: '<path d="M5 13l4 4L19 7"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  star: '<polygon points="12 3 14.6 9 21 9.6 16.2 14 17.6 20.4 12 17 6.4 20.4 7.8 14 3 9.6 9.4 9"/>',
  trophy: '<path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M12 13v4M9 21h6M10 17h4"/>',
  print: '<path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M8 17h8v4H8z"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
  play: '<polygon points="8 5 19 12 8 19" fill="currentColor" stroke="none"/>',
  medal: '<circle cx="12" cy="15" r="5"/><path d="M9 10L6 3M15 10l3-7M9 3h6"/><path d="M12 13l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2L9.1 15l2-.3z" fill="currentColor" stroke="none"/>',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/>',
};
function Icon({ name, size = 24, stroke = 2, style, className }) {
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round',
    strokeLinejoin: 'round', style, className,
    dangerouslySetInnerHTML: { __html: ICON_PATHS[name] || '' }
  });
}

/* ---------------- Reveal (entrada por transición) ---------------- */
function Reveal({ children, delay = 0, variant, style, className = '', onClick, title, tag = 'div' }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), 30 + delay);
    return () => clearTimeout(t);
  }, []);
  const cls = 'rv ' + (variant ? 'rv-' + variant + ' ' : '') + (on ? 'in ' : '') + className;
  return React.createElement(tag, { className: cls, style, onClick, title }, children);
}

/* ---------------- Marca ITM (placeholder wordmark) ---------------- */
function ITMMark({ light = false, compact = false }) {
  const fg = light ? '#fff' : 'var(--ink)';
  const sub = light ? 'rgba(255,255,255,.7)' : 'var(--ink-soft)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 46, height: 46, borderRadius: 12,
        background: light ? 'rgba(255,255,255,.14)' : 'linear-gradient(135deg,var(--ing-1),var(--ing-2))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: light ? 'inset 0 0 0 1.5px rgba(255,255,255,.35)' : '0 6px 16px -6px var(--ing-1)',
        flexShrink: 0
      }}>
        <span style={{ color: '#fff', fontWeight: 900, fontSize: 19, letterSpacing: '.02em' }}>ITM</span>
      </div>
      {!compact && (
        <div style={{ lineHeight: 1.15, whiteSpace: 'nowrap' }}>
          <div style={{ fontWeight: 800, fontSize: 14, color: fg, letterSpacing: '.01em' }}>Institución Universitaria ITM</div>
          <div style={{ fontWeight: 600, fontSize: 11, color: sub, letterSpacing: '.06em', textTransform: 'uppercase' }}>Prácticas Profesionales</div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Insignia (emblema hexagonal) ---------------- */
function Badge({ module, size = 96, state = 'earned', showNumber = true }) {
  // state: 'earned' | 'locked' | 'available'
  const c = module.colors;
  const earned = state === 'earned';
  const locked = state === 'locked';
  const id = 'bg' + module.id + '-' + size;
  const fill = locked ? '#cfd6e6' : `url(#${id})`;
  return (
    <div style={{ position: 'relative', width: size, height: size * 1.1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size * 1.1} viewBox="0 0 100 110" style={{ filter: earned ? `drop-shadow(0 10px 18px ${c.c1}55)` : 'none' }}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={c.c2} />
            <stop offset="1" stopColor={c.c1} />
          </linearGradient>
        </defs>
        <polygon points="50,3 92,27 92,83 50,107 8,83 8,27" fill={fill} stroke={locked ? '#b7c0d4' : '#fff'} strokeWidth="3" />
        <polygon points="50,3 92,27 92,83 50,107 8,83 8,27" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" transform="scale(.86) translate(8,9)" />
      </svg>
      <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: locked ? '#8a93a8' : '#fff' }}>
        <Icon name={locked ? 'lock' : module.icon} size={size * 0.34} stroke={2.1} />
        {showNumber && !locked && (
          <div style={{ fontSize: size * 0.13, fontWeight: 800, marginTop: 2, letterSpacing: '.04em', opacity: .9 }}>
            {module.badge.name.toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Barra de XP ---------------- */
function XPBar({ xp, max = 2400, light = false }) {
  const pct = Math.min(100, (xp / max) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gold)' }}>
        <Icon name="star" size={18} stroke={0} style={{ fill: 'var(--gold)' }} />
        <span style={{ fontWeight: 800, fontSize: 15, color: light ? '#fff' : 'var(--ink)' }}>{xp}</span>
        <span style={{ fontWeight: 600, fontSize: 12, color: light ? 'rgba(255,255,255,.6)' : 'var(--ink-soft)' }}>XP</span>
      </div>
      <div style={{ flex: 1, height: 9, borderRadius: 99, background: light ? 'rgba(255,255,255,.16)' : 'var(--line)', overflow: 'hidden', minWidth: 90 }}>
        <div style={{ width: pct + '%', height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,var(--gold),var(--gold-deep))', transition: 'width .8s cubic-bezier(.2,.8,.2,1)' }} />
      </div>
    </div>
  );
}

/* ---------------- Confeti ---------------- */
function Confetti({ run = true, count = 90 }) {
  const colors = ['#1F6FB2', '#4DA6E0', '#7FC4ED', '#102D69', '#00A0B7', '#56ACDE', '#009030', '#98BF13', '#F19800', '#F6B63E', '#f4c84a'];
  const pieces = useRef(null);
  if (!pieces.current) {
    pieces.current = Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      dur: 2.4 + Math.random() * 1.8,
      color: colors[i % colors.length],
      size: 6 + Math.random() * 8,
      rot: Math.random() * 360,
      round: Math.random() > 0.6
    }));
  }
  if (!run) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 60 }}>
      {pieces.current.map((p, i) => (
        <div key={i} style={{
          position: 'absolute', top: -20, left: p.left + '%',
          width: p.size, height: p.size * (p.round ? 1 : 1.6),
          background: p.color, borderRadius: p.round ? '50%' : 2,
          transform: `rotate(${p.rot}deg)`,
          animation: `confettiFall ${p.dur}s ${p.delay}s cubic-bezier(.3,.5,.6,1) forwards`
        }} />
      ))}
    </div>
  );
}

/* ---------------- Chip de progreso (puntos) ---------------- */
function Dots({ total, active, color = '#fff' }) {
  return (
    <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: i === active ? 22 : 8, height: 8, borderRadius: 99,
          background: i <= active ? color : 'rgba(0,0,0,.14)',
          opacity: i <= active ? 1 : .6,
          transition: 'all .3s ease'
        }} />
      ))}
    </div>
  );
}

/* ---------------- Anillo de puntaje ---------------- */
function ScoreRing({ pct, color, size = 150 }) {
  const r = (size - 18) / 2;
  const circ = 2 * Math.PI * r;
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setShown(pct), 200);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth="11" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="11"
          strokeLinecap="round" strokeDasharray={circ}
          strokeDashoffset={circ - (circ * shown) / 100}
          style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: size * 0.26, fontWeight: 900, color: 'var(--ink)', lineHeight: 1 }}>{Math.round(shown)}<span style={{ fontSize: size * 0.13 }}>%</span></span>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-soft)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Aciertos</span>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Reveal, ITMMark, Badge, XPBar, Confetti, Dots, ScoreRing });
