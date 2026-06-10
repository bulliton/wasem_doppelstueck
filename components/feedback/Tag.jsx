export function Tag({
  children,
  variant = 'default',
  size = 'sm',
  style: styleProp = {},
}) {
  const variants = {
    default: {
      color: 'var(--color-bottle-black)',
      border: '1px solid var(--border-default)',
      backgroundColor: 'transparent',
    },
    soil: {
      color: 'var(--color-vineyard-soil)',
      border: '1px solid var(--color-vineyard-soil)',
      backgroundColor: 'transparent',
    },
    green: {
      color: 'var(--color-vine-leaf)',
      border: '1px solid var(--color-vine-leaf)',
      backgroundColor: 'transparent',
    },
    filled: {
      color: 'var(--color-warm-ivory)',
      border: '1px solid var(--color-bottle-black)',
      backgroundColor: 'var(--color-bottle-black)',
    },
    muted: {
      color: 'var(--text-muted)',
      border: '1px solid var(--border-subtle)',
      backgroundColor: 'transparent',
    },
  };

  const sizes = {
    xs: { fontSize: '0.5625rem', padding: '2px 8px' },
    sm: { fontSize: '0.625rem', padding: '3px 10px' },
    md: { fontSize: '0.6875rem', padding: '4px 12px' },
  };

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '9999px',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...sizes[size] || sizes.sm,
    ...variants[variant] || variants.default,
    ...styleProp,
  };

  return React.createElement('span', { style: tagStyle }, children);
}
