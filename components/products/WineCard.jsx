export function WineCard({
  name = 'WASEM WEISS',
  vintage = '2022',
  price = '€ 16,00',
  image,
  tags = ['LEHM', 'KALK'],
  certifications = [],
  variant = 'grid',
  onAddToCart,
  onClick,
  href = '#',
  style: styleProp = {},
}) {
  const isGrid = variant === 'grid';

  const handleClick = (e) => { if (onClick) { e.preventDefault(); onClick(); } };

  /* ── Shared sub-components ───────────────────────────────────── */
  const ArrowBtn = () => React.createElement('button', {
    onClick: (e) => { e.preventDefault(); onAddToCart && onAddToCart(); },
    style: {
      width: 36, height: 36,
      border: '1px solid var(--color-bottle-black)',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      transition: 'background-color 220ms ease',
    },
    onMouseEnter: e => e.currentTarget.style.backgroundColor = 'var(--color-bottle-black)',
    onMouseLeave: e => e.currentTarget.style.backgroundColor = 'transparent',
  },
    React.createElement('svg', {
      width: 12, height: 10, viewBox: '0 0 12 10',
      fill: 'none', viewBox: '0 0 12 10',
    },
      React.createElement('path', {
        d: 'M1 5h10M7 1l4 4-4 4',
        stroke: 'var(--color-bottle-black)',
        strokeWidth: 1.5,
      })
    )
  );

  const TagRow = () => React.createElement('div', {
    style: { display: 'flex', flexWrap: 'wrap', gap: 4 }
  },
    ...tags.map((t, i) => React.createElement('span', {
      key: i,
      style: {
        display: 'inline-flex', alignItems: 'center',
        borderRadius: 9999,
        border: '1px solid var(--border-default)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.5625rem', fontWeight: 500,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '2px 8px',
      }
    }, t)),
    ...certifications.map((c, i) => React.createElement('span', {
      key: 'cert-' + i,
      style: {
        display: 'inline-flex', alignItems: 'center',
        borderRadius: 9999,
        border: '1px solid var(--color-vine-leaf)',
        color: 'var(--color-vine-leaf)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.5625rem', fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '2px 8px',
      }
    }, c))
  );

  const BottleImage = ({ height }) => React.createElement('div', {
    style: {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height, overflow: 'hidden',
    }
  },
    image
      ? React.createElement('img', {
          src: image, alt: name,
          style: { height: '100%', width: 'auto', objectFit: 'contain', transition: 'transform 380ms ease' },
          onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
          onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)',
        })
      : React.createElement('div', {
          style: {
            width: 70, height: '90%',
            background: 'linear-gradient(180deg, #1a1a19 0%, #2a2a28 100%)',
            borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }
        },
          React.createElement('span', {
            style: {
              fontFamily: 'var(--font-display)', fontSize: 28,
              fontWeight: 500, color: 'var(--color-label-cream)', opacity: 0.7,
            }
          }, 'W')
        )
  );

  /* ── Grid variant ────────────────────────────────────────────── */
  if (isGrid) {
    return React.createElement('a', {
      href,
      onClick: handleClick,
      style: {
        display: 'flex', flexDirection: 'column',
        backgroundColor: 'var(--surface-card)',
        textDecoration: 'none', color: 'inherit',
        padding: '24px 20px 20px',
        transition: 'box-shadow 220ms ease',
        ...styleProp,
      },
      onMouseEnter: e => e.currentTarget.style.boxShadow = 'var(--shadow-md)',
      onMouseLeave: e => e.currentTarget.style.boxShadow = 'none',
    },
      React.createElement(BottleImage, { height: 220 }),
      React.createElement('div', { style: { marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 } },
        React.createElement('div', null,
          React.createElement('div', {
            style: {
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: '1.125rem', letterSpacing: '0.02em',
              color: 'var(--text-primary)', lineHeight: 1.2,
            }
          }, name),
          React.createElement('div', {
            style: {
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              color: 'var(--text-muted)', marginTop: 2,
            }
          }, vintage)
        ),
        React.createElement(TagRow),
        React.createElement('div', {
          style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }
        },
          React.createElement('div', {
            style: {
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              fontWeight: 500, color: 'var(--text-primary)',
            }
          }, price),
          React.createElement(ArrowBtn)
        )
      )
    );
  }

  /* ── List variant ────────────────────────────────────────────── */
  return React.createElement('a', {
    href,
    onClick: handleClick,
    style: {
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)',
      textDecoration: 'none', color: 'inherit',
      transition: 'opacity 220ms ease',
      ...styleProp,
    },
    onMouseEnter: e => e.currentTarget.style.opacity = '0.75',
    onMouseLeave: e => e.currentTarget.style.opacity = '1',
  },
    React.createElement(BottleImage, { height: 80 }),
    React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', gap: 6 } },
      React.createElement('div', {
        style: {
          fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: '1.125rem', color: 'var(--text-primary)',
        }
      }, name + (vintage ? ' ' + vintage : '')),
      React.createElement(TagRow)
    ),
    React.createElement('div', {
      style: { display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }
    },
      React.createElement('div', {
        style: {
          fontFamily: 'var(--font-body)', fontSize: '0.9375rem',
          fontWeight: 500, color: 'var(--text-primary)',
        }
      }, price),
      React.createElement(ArrowBtn)
    )
  );
}
