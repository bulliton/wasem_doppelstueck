export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = true,
  onClick,
  href,
  type = 'button',
  style: styleProp = {},
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.09em',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background-color 220ms ease, color 220ms ease, border-color 220ms ease, opacity 220ms ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    borderRadius: 0,
    border: '1px solid transparent',
    outline: 'none',
    lineHeight: 1,
  };

  const sizes = {
    sm: { fontSize: '0.625rem', padding: '0.5rem 1rem' },
    md: { fontSize: '0.6875rem', padding: '0.75rem 1.5rem' },
    lg: { fontSize: '0.75rem', padding: '0.9rem 2rem' },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-bottle-black)',
      color: 'var(--color-warm-ivory)',
      borderColor: 'var(--color-bottle-black)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-bottle-black)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-bottle-black)',
      borderColor: 'transparent',
      letterSpacing: '0.06em',
    },
    'primary-light': {
      backgroundColor: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-warm-ivory)',
    },
    'secondary-light': {
      backgroundColor: 'transparent',
      color: 'var(--color-warm-ivory)',
      borderColor: 'rgba(246,241,232,0.5)',
    },
  };

  const Arrow = () => React.createElement('svg', {
    width: 12, height: 10, viewBox: '0 0 12 10',
    fill: 'none', stroke: 'currentColor', strokeWidth: 1.5,
    style: { flexShrink: 0 },
  },
    React.createElement('path', { d: 'M1 5h10M7 1l4 4-4 4' })
  );

  const buttonStyle = {
    ...base,
    ...sizes[size] || sizes.md,
    ...variants[variant] || variants.primary,
    ...styleProp,
  };

  const tag = href ? 'a' : 'button';
  const props = {
    style: buttonStyle,
    onClick,
    ...(tag === 'button' ? { type, disabled } : { href }),
  };

  return React.createElement(tag, props,
    children,
    icon && React.createElement(Arrow)
  );
}
