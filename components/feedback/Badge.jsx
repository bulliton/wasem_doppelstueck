export function Badge({
  children,
  variant = 'default',
  size = 'md',
  style: styleProp = {},
}) {
  const sizes = {
    sm: { width: 36, height: 36, fontSize: '0.5rem' },
    md: { width: 46, height: 46, fontSize: '0.5625rem' },
    lg: { width: 60, height: 60, fontSize: '0.625rem' },
  };

  const variants = {
    default: {
      backgroundColor: 'transparent',
      color: 'var(--color-bottle-black)',
      border: '1px solid var(--color-bottle-black)',
    },
    bio: {
      backgroundColor: 'transparent',
      color: 'var(--color-vine-leaf)',
      border: '1px solid var(--color-vine-leaf)',
    },
    vegan: {
      backgroundColor: 'transparent',
      color: 'var(--color-vine-leaf)',
      border: '1px solid var(--color-vine-leaf)',
    },
    organic: {
      backgroundColor: 'var(--color-vine-leaf)',
      color: 'var(--color-warm-ivory)',
      border: '1px solid var(--color-vine-leaf)',
    },
    gold: {
      backgroundColor: 'transparent',
      color: 'var(--color-harvest-gold)',
      border: '1px solid var(--color-harvest-gold)',
    },
  };

  const s = sizes[size] || sizes.md;

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: s.width,
    height: s.height,
    borderRadius: '50%',
    fontFamily: 'var(--font-body)',
    fontSize: s.fontSize,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 1.2,
    flexShrink: 0,
    ...variants[variant] || variants.default,
    ...styleProp,
  };

  return React.createElement('span', { style: badgeStyle }, children);
}
