/* ── Local component bundle for the standalone prototype ──────────────
 * Registers the same components under the shared namespace here.
 * Mirrors components/{core,feedback,forms,products}/*.jsx.
 * ------------------------------------------------------------------- */
window.WasemDoppelstCkDesignSystem_9fe068 = window.WasemDoppelstCkDesignSystem_9fe068 || {};

function Button({ children, variant = 'primary', size = 'md', disabled = false, icon = true, onClick, href, type = 'button', style: styleProp = {} }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.09em',
    textTransform: 'uppercase', cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background-color 220ms ease, color 220ms ease, border-color 220ms ease, opacity 220ms ease',
    textDecoration: 'none', whiteSpace: 'nowrap', borderRadius: 0,
    border: '1px solid transparent', outline: 'none', lineHeight: 1,
  };
  const sizes = {
    sm: { fontSize: '0.625rem', padding: '0.5rem 1rem' },
    md: { fontSize: '0.6875rem', padding: '0.75rem 1.5rem' },
    lg: { fontSize: '0.75rem', padding: '0.9rem 2rem' },
  };
  const variants = {
    primary:           { backgroundColor: 'var(--color-bottle-black)', color: 'var(--color-warm-ivory)', borderColor: 'var(--color-bottle-black)' },
    secondary:         { backgroundColor: 'transparent', color: 'var(--color-bottle-black)', borderColor: 'var(--color-bottle-black)' },
    ghost:             { backgroundColor: 'transparent', color: 'var(--color-bottle-black)', borderColor: 'transparent', letterSpacing: '0.06em' },
    'primary-light':   { backgroundColor: 'var(--color-warm-ivory)', color: 'var(--color-bottle-black)', borderColor: 'var(--color-warm-ivory)' },
    'secondary-light': { backgroundColor: 'transparent', color: 'var(--color-warm-ivory)', borderColor: 'rgba(246,241,232,0.5)' },
  };
  const Arrow = () => React.createElement('svg', { width: 12, height: 10, viewBox: '0 0 12 10', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, style: { flexShrink: 0 } },
    React.createElement('path', { d: 'M1 5h10M7 1l4 4-4 4' }));
  const buttonStyle = { ...base, ...(sizes[size] || sizes.md), ...(variants[variant] || variants.primary), ...styleProp };
  const tag = href ? 'a' : 'button';
  const props = { style: buttonStyle, onClick, ...(tag === 'button' ? { type, disabled } : { href }) };
  return React.createElement(tag, props, children, icon && React.createElement(Arrow));
}

function Badge({ children, variant = 'default', size = 'md', style: styleProp = {} }) {
  const sizes = {
    sm: { width: 36, height: 36, fontSize: '0.5rem' },
    md: { width: 46, height: 46, fontSize: '0.5625rem' },
    lg: { width: 60, height: 60, fontSize: '0.625rem' },
  };
  const variants = {
    default: { backgroundColor: 'transparent', color: 'var(--color-bottle-black)', border: '1px solid var(--color-bottle-black)' },
    bio:     { backgroundColor: 'transparent', color: 'var(--color-vine-leaf)', border: '1px solid var(--color-vine-leaf)' },
    vegan:   { backgroundColor: 'transparent', color: 'var(--color-vine-leaf)', border: '1px solid var(--color-vine-leaf)' },
    organic: { backgroundColor: 'var(--color-vine-leaf)', color: 'var(--color-warm-ivory)', border: '1px solid var(--color-vine-leaf)' },
    gold:    { backgroundColor: 'transparent', color: 'var(--color-harvest-gold)', border: '1px solid var(--color-harvest-gold)' },
  };
  const s = sizes[size] || sizes.md;
  const badgeStyle = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: s.width, height: s.height, borderRadius: '50%',
    fontFamily: 'var(--font-body)', fontSize: s.fontSize, fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center',
    lineHeight: 1.2, flexShrink: 0, ...(variants[variant] || variants.default), ...styleProp,
  };
  return React.createElement('span', { style: badgeStyle }, children);
}

function Tag({ children, variant = 'default', size = 'sm', style: styleProp = {} }) {
  const variants = {
    default: { color: 'var(--color-bottle-black)', border: '1px solid var(--border-default)', backgroundColor: 'transparent' },
    soil:    { color: 'var(--color-vineyard-soil)', border: '1px solid var(--color-vineyard-soil)', backgroundColor: 'transparent' },
    green:   { color: 'var(--color-vine-leaf)', border: '1px solid var(--color-vine-leaf)', backgroundColor: 'transparent' },
    filled:  { color: 'var(--color-warm-ivory)', border: '1px solid var(--color-bottle-black)', backgroundColor: 'var(--color-bottle-black)' },
    muted:   { color: 'var(--text-muted)', border: '1px solid var(--border-subtle)', backgroundColor: 'transparent' },
  };
  const sizes = {
    xs: { fontSize: '0.5625rem', padding: '2px 8px' },
    sm: { fontSize: '0.625rem', padding: '3px 10px' },
    md: { fontSize: '0.6875rem', padding: '4px 12px' },
  };
  const tagStyle = {
    display: 'inline-flex', alignItems: 'center', borderRadius: '9999px',
    fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.08em',
    textTransform: 'uppercase', lineHeight: 1, whiteSpace: 'nowrap',
    ...(sizes[size] || sizes.sm), ...(variants[variant] || variants.default), ...styleProp,
  };
  return React.createElement('span', { style: tagStyle }, children);
}

function Input({ label, id, type = 'text', placeholder = '', value, onChange, error, hint, required = false, disabled = false, style: styleProp = {} }) {
  const wrapStyle = { display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-body)', ...styleProp };
  const labelStyle = { fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: error ? 'var(--color-vineyard-soil)' : 'var(--text-secondary)' };
  const inputStyle = {
    fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 400, color: 'var(--text-primary)',
    backgroundColor: 'transparent', border: 'none',
    borderBottom: `1px solid ${error ? 'var(--color-vineyard-soil)' : 'var(--border-default)'}`,
    padding: '10px 0', outline: 'none', width: '100%', opacity: disabled ? 0.4 : 1,
    cursor: disabled ? 'not-allowed' : 'text', borderRadius: 0, transition: 'border-color 220ms ease',
  };
  const hintStyle = { fontSize: '0.6875rem', color: error ? 'var(--color-vineyard-soil)' : 'var(--text-muted)' };
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return React.createElement('div', { style: wrapStyle },
    label && React.createElement('label', { htmlFor: inputId, style: labelStyle }, label,
      required && React.createElement('span', { style: { color: 'var(--color-vineyard-soil)', marginLeft: 3 } }, '*')),
    React.createElement('input', { id: inputId, type, placeholder, value, onChange, disabled, required, style: inputStyle }),
    (hint || error) && React.createElement('span', { style: hintStyle }, error || hint));
}

function WineCard({ name = 'WASEM WEISS', vintage = '2022', price = '€ 16,00', image, tags = ['LEHM', 'KALK'], certifications = [], variant = 'grid', onAddToCart, onClick, href = '#', style: styleProp = {} }) {
  const isGrid = variant === 'grid';
  const handleClick = (e) => { if (onClick) { e.preventDefault(); onClick(); } };
  const ArrowBtn = () => React.createElement('button', {
    onClick: (e) => { e.preventDefault(); onAddToCart && onAddToCart(); },
    style: { width: 36, height: 36, border: '1px solid var(--color-bottle-black)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background-color 220ms ease' },
    onMouseEnter: e => e.currentTarget.style.backgroundColor = 'var(--color-bottle-black)',
    onMouseLeave: e => e.currentTarget.style.backgroundColor = 'transparent',
  }, React.createElement('svg', { width: 12, height: 10, viewBox: '0 0 12 10', fill: 'none' },
      React.createElement('path', { d: 'M1 5h10M7 1l4 4-4 4', stroke: 'var(--color-bottle-black)', strokeWidth: 1.5 })));
  const TagRow = () => React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 4 } },
    ...tags.map((t, i) => React.createElement('span', { key: i, style: { display: 'inline-flex', alignItems: 'center', borderRadius: 9999, border: '1px solid var(--border-default)', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 8px' } }, t)),
    ...certifications.map((c, i) => React.createElement('span', { key: 'cert-' + i, style: { display: 'inline-flex', alignItems: 'center', borderRadius: 9999, border: '1px solid var(--color-vine-leaf)', color: 'var(--color-vine-leaf)', fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 8px' } }, c)));
  const BottleImage = ({ height }) => React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height, overflow: 'hidden' } },
    image
      ? React.createElement('img', { src: image, alt: name, style: { height: '100%', width: 'auto', objectFit: 'contain', transition: 'transform 380ms ease' },
          onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
          onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)' })
      : React.createElement('div', { style: { width: 70, height: '90%', background: 'linear-gradient(180deg, #1a1a19 0%, #2a2a28 100%)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' } },
          React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500, color: 'var(--color-label-cream)', opacity: 0.7 } }, 'W')));

  if (isGrid) {
    return React.createElement('a', {
      href, onClick: handleClick, style: { display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface-card)', textDecoration: 'none', color: 'inherit', padding: '24px 20px 20px', transition: 'box-shadow 220ms ease', ...styleProp },
      onMouseEnter: e => e.currentTarget.style.boxShadow = 'var(--shadow-md)',
      onMouseLeave: e => e.currentTarget.style.boxShadow = 'none',
    },
      React.createElement(BottleImage, { height: 220 }),
      React.createElement('div', { style: { marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 } },
        React.createElement('div', null,
          React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.125rem', letterSpacing: '0.02em', color: 'var(--text-primary)', lineHeight: 1.2 } }, name),
          React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 } }, vintage)),
        React.createElement(TagRow),
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 } },
          React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' } }, price),
          React.createElement(ArrowBtn))));
  }
  return React.createElement('a', {
    href, onClick: handleClick, style: { display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none', color: 'inherit', transition: 'opacity 220ms ease', ...styleProp },
    onMouseEnter: e => e.currentTarget.style.opacity = '0.75',
    onMouseLeave: e => e.currentTarget.style.opacity = '1',
  },
    React.createElement(BottleImage, { height: 80 }),
    React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', gap: 6 } },
      React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.125rem', color: 'var(--text-primary)' } }, name + (vintage ? ' ' + vintage : '')),
      React.createElement(TagRow)),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 } },
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text-primary)' } }, price),
      React.createElement(ArrowBtn)));
}

Object.assign(window.WasemDoppelstCkDesignSystem_9fe068, { Button, Badge, Tag, Input, WineCard });
