/* Wasem Doppelstück Design System — component bundle */

(() => {

const __ds_ns = (window.WasemDoppelstCkDesignSystem_9fe068 = window.WasemDoppelstCkDesignSystem_9fe068 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = true,
  onClick,
  href,
  type = 'button',
  style: styleProp = {}
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
    lineHeight: 1
  };
  const sizes = {
    sm: {
      fontSize: '0.625rem',
      padding: '0.5rem 1rem'
    },
    md: {
      fontSize: '0.6875rem',
      padding: '0.75rem 1.5rem'
    },
    lg: {
      fontSize: '0.75rem',
      padding: '0.9rem 2rem'
    }
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--color-bottle-black)',
      color: 'var(--color-warm-ivory)',
      borderColor: 'var(--color-bottle-black)'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-bottle-black)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-bottle-black)',
      borderColor: 'transparent',
      letterSpacing: '0.06em'
    },
    'primary-light': {
      backgroundColor: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-warm-ivory)'
    },
    'secondary-light': {
      backgroundColor: 'transparent',
      color: 'var(--color-warm-ivory)',
      borderColor: 'rgba(246,241,232,0.5)'
    }
  };
  const Arrow = () => React.createElement('svg', {
    width: 12,
    height: 10,
    viewBox: '0 0 12 10',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    style: {
      flexShrink: 0
    }
  }, React.createElement('path', {
    d: 'M1 5h10M7 1l4 4-4 4'
  }));
  const buttonStyle = {
    ...base,
    ...(sizes[size] || sizes.md),
    ...(variants[variant] || variants.primary),
    ...styleProp
  };
  const tag = href ? 'a' : 'button';
  const props = {
    style: buttonStyle,
    onClick,
    ...(tag === 'button' ? {
      type,
      disabled
    } : {
      href
    })
  };
  return React.createElement(tag, props, children, icon && React.createElement(Arrow));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'default',
  size = 'md',
  style: styleProp = {}
}) {
  const sizes = {
    sm: {
      width: 36,
      height: 36,
      fontSize: '0.5rem'
    },
    md: {
      width: 46,
      height: 46,
      fontSize: '0.5625rem'
    },
    lg: {
      width: 60,
      height: 60,
      fontSize: '0.625rem'
    }
  };
  const variants = {
    default: {
      backgroundColor: 'transparent',
      color: 'var(--color-bottle-black)',
      border: '1px solid var(--color-bottle-black)'
    },
    bio: {
      backgroundColor: 'transparent',
      color: 'var(--color-vine-leaf)',
      border: '1px solid var(--color-vine-leaf)'
    },
    vegan: {
      backgroundColor: 'transparent',
      color: 'var(--color-vine-leaf)',
      border: '1px solid var(--color-vine-leaf)'
    },
    organic: {
      backgroundColor: 'var(--color-vine-leaf)',
      color: 'var(--color-warm-ivory)',
      border: '1px solid var(--color-vine-leaf)'
    },
    gold: {
      backgroundColor: 'transparent',
      color: 'var(--color-harvest-gold)',
      border: '1px solid var(--color-harvest-gold)'
    }
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
    ...(variants[variant] || variants.default),
    ...styleProp
  };
  return React.createElement('span', {
    style: badgeStyle
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  variant = 'default',
  size = 'sm',
  style: styleProp = {}
}) {
  const variants = {
    default: {
      color: 'var(--color-bottle-black)',
      border: '1px solid var(--border-default)',
      backgroundColor: 'transparent'
    },
    soil: {
      color: 'var(--color-vineyard-soil)',
      border: '1px solid var(--color-vineyard-soil)',
      backgroundColor: 'transparent'
    },
    green: {
      color: 'var(--color-vine-leaf)',
      border: '1px solid var(--color-vine-leaf)',
      backgroundColor: 'transparent'
    },
    filled: {
      color: 'var(--color-warm-ivory)',
      border: '1px solid var(--color-bottle-black)',
      backgroundColor: 'var(--color-bottle-black)'
    },
    muted: {
      color: 'var(--text-muted)',
      border: '1px solid var(--border-subtle)',
      backgroundColor: 'transparent'
    }
  };
  const sizes = {
    xs: {
      fontSize: '0.5625rem',
      padding: '2px 8px'
    },
    sm: {
      fontSize: '0.625rem',
      padding: '3px 10px'
    },
    md: {
      fontSize: '0.6875rem',
      padding: '4px 12px'
    }
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
    ...(sizes[size] || sizes.sm),
    ...(variants[variant] || variants.default),
    ...styleProp
  };
  return React.createElement('span', {
    style: tagStyle
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  hint,
  required = false,
  disabled = false,
  style: styleProp = {}
}) {
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    ...styleProp
  };
  const labelStyle = {
    fontSize: '0.625rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: error ? 'var(--color-vineyard-soil)' : 'var(--text-secondary)'
  };
  const inputStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    fontWeight: 400,
    color: 'var(--text-primary)',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${error ? 'var(--color-vineyard-soil)' : 'var(--border-default)'}`,
    padding: '10px 0',
    outline: 'none',
    width: '100%',
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    borderRadius: 0,
    transition: 'border-color 220ms ease'
  };
  const hintStyle = {
    fontSize: '0.6875rem',
    color: error ? 'var(--color-vineyard-soil)' : 'var(--text-muted)'
  };
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return React.createElement('div', {
    style: wrapStyle
  }, label && React.createElement('label', {
    htmlFor: inputId,
    style: labelStyle
  }, label, required && React.createElement('span', {
    style: {
      color: 'var(--color-vineyard-soil)',
      marginLeft: 3
    }
  }, '*')), React.createElement('input', {
    id: inputId,
    type,
    placeholder,
    value,
    onChange,
    disabled,
    required,
    style: inputStyle
  }), (hint || error) && React.createElement('span', {
    style: hintStyle
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/products/WineCard.jsx
try { (() => {
function WineCard({
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
  style: styleProp = {}
}) {
  const isGrid = variant === 'grid';
  const handleClick = e => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  /* ── Shared sub-components ───────────────────────────────────── */
  const ArrowBtn = () => React.createElement('button', {
    onClick: e => {
      e.preventDefault();
      onAddToCart && onAddToCart();
    },
    style: {
      width: 36,
      height: 36,
      border: '1px solid var(--color-bottle-black)',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'background-color 220ms ease'
    },
    onMouseEnter: e => e.currentTarget.style.backgroundColor = 'var(--color-bottle-black)',
    onMouseLeave: e => e.currentTarget.style.backgroundColor = 'transparent'
  }, React.createElement('svg', {
    width: 12,
    height: 10,
    viewBox: '0 0 12 10',
    fill: 'none',
    viewBox: '0 0 12 10'
  }, React.createElement('path', {
    d: 'M1 5h10M7 1l4 4-4 4',
    stroke: 'var(--color-bottle-black)',
    strokeWidth: 1.5
  })));
  const TagRow = () => React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4
    }
  }, ...tags.map((t, i) => React.createElement('span', {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 9999,
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '2px 8px'
    }
  }, t)), ...certifications.map((c, i) => React.createElement('span', {
    key: 'cert-' + i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 9999,
      border: '1px solid var(--color-vine-leaf)',
      color: 'var(--color-vine-leaf)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '2px 8px'
    }
  }, c)));
  const BottleImage = ({
    height
  }) => React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      overflow: 'hidden'
    }
  }, image ? React.createElement('img', {
    src: image,
    alt: name,
    style: {
      height: '100%',
      width: 'auto',
      objectFit: 'contain',
      transition: 'transform 380ms ease'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }) : React.createElement('div', {
    style: {
      width: 70,
      height: '90%',
      background: 'linear-gradient(180deg, #1a1a19 0%, #2a2a28 100%)',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      color: 'var(--color-label-cream)',
      opacity: 0.7
    }
  }, 'W')));

  /* ── Grid variant ────────────────────────────────────────────── */
  if (isGrid) {
    return React.createElement('a', {
      href,
      onClick: handleClick,
      style: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--surface-card)',
        textDecoration: 'none',
        color: 'inherit',
        padding: '24px 20px 20px',
        transition: 'box-shadow 220ms ease',
        ...styleProp
      },
      onMouseEnter: e => e.currentTarget.style.boxShadow = 'var(--shadow-md)',
      onMouseLeave: e => e.currentTarget.style.boxShadow = 'none'
    }, React.createElement(BottleImage, {
      height: 220
    }), React.createElement('div', {
      style: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '1.125rem',
        letterSpacing: '0.02em',
        color: 'var(--text-primary)',
        lineHeight: 1.2
      }
    }, name), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, vintage)), React.createElement(TagRow), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        fontWeight: 500,
        color: 'var(--text-primary)'
      }
    }, price), React.createElement(ArrowBtn))));
  }

  /* ── List variant ────────────────────────────────────────────── */
  return React.createElement('a', {
    href,
    onClick: handleClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'opacity 220ms ease',
      ...styleProp
    },
    onMouseEnter: e => e.currentTarget.style.opacity = '0.75',
    onMouseLeave: e => e.currentTarget.style.opacity = '1'
  }, React.createElement(BottleImage, {
    height: 80
  }), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.125rem',
      color: 'var(--text-primary)'
    }
  }, name + (vintage ? ' ' + vintage : '')), React.createElement(TagRow)), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, price), React.createElement(ArrowBtn)));
}
Object.assign(__ds_scope, { WineCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/products/WineCard.jsx", error: String((e && e.message) || e) }); }

// home-sections.jsx
try { (() => {
/* ── home-sections.jsx ─────────────────────────────────────────────
 * Hero, intent path-picker, trust strip, and the revenue-silo teasers
 * (Weinshop, Weinhotel, Hochzeiten, Firmen/Private events).
 * ------------------------------------------------------------------ */

/* Scroll-reveal wrapper — respects prefers-reduced-motion.
 * Defaults to VISIBLE whenever the page is hidden (static capture / print /
 * background tab) or reduced-motion is requested, so content is never stuck
 * invisible. Only runs the fade-up when the page is actually on screen. */
function Reveal({
  children,
  delay = 0,
  y = 18,
  style = {}
}) {
  const ref = React.useRef(null);
  const canAnimate = typeof window !== 'undefined' && document.visibilityState === 'visible' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [shown, setShown] = React.useState(!canAnimate);
  React.useEffect(() => {
    if (shown) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    if (el) io.observe(el);
    // Safety net: never leave content invisible if IO doesn't fire.
    const fallback = setTimeout(() => setShown(true), 700);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      ...style
    }
  }, children);
}

/* Small overline label */
function Over({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(246,241,232,0.5)' : 'var(--text-muted)',
      marginBottom: 14
    }
  }, children);
}
const PAD = 'clamp(20px, 5vw, 72px)';
const MAXW = 1240;

/* ── HERO ────────────────────────────────────────────────────────── */
function WHero({
  lang
}) {
  const t = window.WC[lang].hero;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--color-bottle-black)',
      overflow: 'hidden',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '52vw',
      fontWeight: 500,
      color: '#fff',
      opacity: 0.035,
      lineHeight: 0.8,
      right: '-6vw',
      bottom: '-14vw',
      userSelect: 'none',
      pointerEvents: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '46%',
      opacity: 0.62
    }
  }, /*#__PURE__*/React.createElement(WVideo, {
    src: window.WMedia.heroVideo,
    poster: window.WMedia.heroPoster,
    label: "VINEYARD \xB7 GOLDEN HOUR",
    tone: "dark",
    position: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, var(--color-bottle-black) 6%, transparent 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, var(--color-bottle-black) 2%, transparent 28%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `clamp(70px,11vh,140px) ${PAD} clamp(56px,8vh,96px)`,
      opacity: "1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--color-vineyard-soil)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-rheinhessen-sand)'
    }
  }, t.over))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(52px, 8vw, 104px)',
      lineHeight: 0.98,
      letterSpacing: '-0.015em',
      color: 'var(--color-warm-ivory)',
      margin: 0
    }
  }, t.title.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontStyle: i === 1 ? 'italic' : 'normal'
    }
  }, line)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(15px,1.4vw,18px)',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.66)',
      maxWidth: 460,
      margin: '32px 0 40px'
    }
  }, t.sub)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('light')
  }, t.ctaA, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("a", {
    href: "#stay",
    style: btn('outline-light')
  }, t.ctaB, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })))))));
}

/* ── INTENT PATH-PICKER ──────────────────────────────────────────── */
function WIntent({
  lang
}) {
  const t = window.WC[lang].intent;
  const [hov, setHov] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-warm-ivory)',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`,
      transform: 'translateY(-40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-white)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      padding: 'clamp(22px,3vw,32px) clamp(20px,3vw,36px) clamp(16px,2vw,22px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(24px,3vw,34px)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, t.over)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      borderTop: '1px solid var(--border-default)'
    }
  }, t.paths.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: '#' + p.id,
    onMouseEnter: () => setHov(p.id),
    onMouseLeave: () => setHov(null),
    style: {
      position: 'relative',
      textDecoration: 'none',
      color: 'inherit',
      padding: 'clamp(22px,2.6vw,34px) clamp(14px,1.6vw,22px) clamp(20px,2.4vw,30px)',
      borderRight: i < t.paths.length - 1 ? '1px solid var(--border-default)' : 'none',
      background: hov === p.id ? 'var(--color-bottle-black)' : 'transparent',
      transition: 'background 240ms ease',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 168
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: p.icon,
    size: 28,
    stroke: 1,
    color: hov === p.id ? 'var(--color-rheinhessen-sand)' : 'var(--color-vineyard-soil)',
    style: {
      transition: 'color 240ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(17px,1.5vw,21px)',
      fontWeight: 500,
      lineHeight: 1.15,
      color: hov === p.id ? 'var(--color-warm-ivory)' : 'var(--text-primary)',
      transition: 'color 240ms',
      marginBottom: 8,
      minHeight: '2.3em',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      lineHeight: 1.4,
      color: hov === p.id ? 'rgba(246,241,232,0.6)' : 'var(--text-muted)',
      transition: 'color 240ms'
    }
  }, p.sub)), /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 15,
    stroke: 1.5,
    color: hov === p.id ? 'var(--color-warm-ivory)' : 'var(--color-rheinhessen-sand)',
    style: {
      transition: 'color 240ms, transform 240ms',
      transform: hov === p.id ? 'translateX(4px)' : 'none'
    }
  })))))));
}

/* ── TRUST STRIP ─────────────────────────────────────────────────── */
function WTrust({
  lang
}) {
  const items = window.WC[lang].trust;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-warm-ivory)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 'clamp(18px,2vw,26px) clamp(12px,1.6vw,22px)',
      borderRight: i < 3 ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: it.icon,
    size: 26,
    stroke: 1.1,
    color: "var(--color-vineyard-soil)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--text-primary)',
      marginBottom: 3
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, it.s)))))));
}

/* ── WEINSHOP ────────────────────────────────────────────────────── */
function WShop({
  lang,
  wines
}) {
  const t = window.WC[lang].shop;
  const {
    WineCard
  } = window.WasemDoppelstCkDesignSystem_9fe068;
  const bottle = '../../assets/bottle-sample.png';
  return /*#__PURE__*/React.createElement("section", {
    id: "weinshop",
    style: {
      background: 'var(--color-warm-ivory)',
      padding: `clamp(56px,7vw,104px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: sectionH2
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sectionBody,
      marginTop: 18
    }
  }, t.body)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('outline')
  }, t.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--border-default)',
      border: '1px solid var(--border-default)'
    }
  }, (wines || []).slice(0, 4).map(w => /*#__PURE__*/React.createElement(WineCard, {
    key: w.id,
    name: w.name,
    vintage: w.vintage,
    price: w.price,
    image: bottle,
    tags: w.tags,
    certifications: w.certs,
    onAddToCart: () => {},
    onClick: () => {},
    href: "#"
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crossLink
  }, t.cross))));
}

/* ── WEINHOTEL ───────────────────────────────────────────────────── */
function WHotel({
  lang
}) {
  const t = window.WC[lang].hotel;
  return /*#__PURE__*/React.createElement("section", {
    id: "stay",
    style: {
      background: 'var(--color-label-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `clamp(48px,6vw,92px) clamp(24px,5vw,80px)`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sectionH2,
      whiteSpace: 'pre-line',
      fontSize: 'clamp(34px,4vw,56px)'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sectionBody,
      marginTop: 22,
      maxWidth: 420
    }
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 28px',
      margin: '32px 0 36px',
      maxWidth: 420
    }
  }, t.rooms.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10,
      padding: '12px 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 500
    }
  }, r.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-accent)',
      whiteSpace: 'nowrap'
    }
  }, r.m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('dark')
  }, t.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crossLinkInline
  }, t.cross)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1.3fr 1fr',
      gap: 2,
      background: 'var(--color-label-cream)',
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.hotelHero,
    label: "SUITE \xB7 VINEYARD VIEW",
    tone: "green",
    position: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.hotelKlassik,
    label: "WASEM KLASSIK",
    tone: "sand",
    position: "center"
  }), /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.hotelStamm,
    label: "STAMMHAUS",
    tone: "cream",
    position: "center"
  })))));
}

/* ── HOCHZEITEN ──────────────────────────────────────────────────── */
function WWedding({
  lang
}) {
  const t = window.WC[lang].wedding;
  return /*#__PURE__*/React.createElement("section", {
    id: "hochzeiten",
    style: {
      position: 'relative',
      background: 'var(--color-vine-leaf)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.weddingArch,
    label: "CEREMONY AMONG THE VINES",
    tone: "green",
    position: "center"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(44,58,38,0.55), rgba(44,58,38,0.78))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '44vw',
      fontWeight: 500,
      color: '#fff',
      opacity: 0.04,
      lineHeight: 0.8,
      left: '-8vw',
      bottom: '-16vw',
      userSelect: 'none',
      pointerEvents: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `clamp(64px,8vw,120px) ${PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 580
    }
  }, /*#__PURE__*/React.createElement(Over, {
    dark: true
  }, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(36px,5vw,64px)',
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      color: 'var(--color-warm-ivory)',
      margin: 0,
      whiteSpace: 'pre-line'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(15px,1.3vw,17px)',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.72)',
      maxWidth: 460,
      margin: '26px 0 40px'
    }
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('light')
  }, t.ctaA, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('outline-light')
  }, t.ctaB, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(28px,5vw,72px)',
      flexWrap: 'wrap',
      borderTop: '1px solid rgba(246,241,232,0.18)',
      paddingTop: 32,
      maxWidth: 620
    }
  }, t.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px,4vw,52px)',
      fontWeight: 500,
      color: 'var(--color-warm-ivory)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      letterSpacing: '0.04em',
      color: 'rgba(246,241,232,0.55)',
      marginTop: 8
    }
  }, s.l)))))));
}

/* ── FIRMEN / PRIVATE EVENTS ─────────────────────────────────────── */
function WBiz({
  lang
}) {
  const t = window.WC[lang].biz;
  return /*#__PURE__*/React.createElement("section", {
    id: "firmen",
    style: {
      background: 'var(--color-warm-ivory)',
      padding: `clamp(56px,7vw,104px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sectionH2,
      fontSize: 'clamp(30px,3.6vw,48px)'
    }
  }, t.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 2,
      background: 'var(--border-default)',
      border: '1px solid var(--border-default)'
    }
  }, t.cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: i * 90,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("a", {
    id: c.id,
    href: "#",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--color-white)',
      padding: 'clamp(32px,4vw,56px)',
      width: '100%',
      transition: 'background 240ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-label-cream)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--color-white)';
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: c.icon,
    size: 32,
    stroke: 1,
    color: "var(--color-vineyard-soil)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(24px,2.6vw,32px)',
      margin: 0,
      lineHeight: 1.1
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sectionBody,
      fontSize: 15,
      maxWidth: 420,
      margin: 0
    }
  }, c.s), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, c.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 14,
    stroke: 1.6
  }))))))));
}

/* ── shared style helpers ────────────────────────────────────────── */
const sectionH2 = {
  fontFamily: 'var(--font-display)',
  fontWeight: 500,
  fontSize: 'clamp(30px,3.4vw,46px)',
  lineHeight: 1.04,
  letterSpacing: '-0.01em',
  color: 'var(--text-primary)',
  margin: 0
};
const sectionBody = {
  fontFamily: 'var(--font-body)',
  fontSize: 'clamp(14px,1.2vw,16px)',
  fontWeight: 300,
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
  margin: 0
};
const crossLink = {
  display: 'inline-flex',
  marginTop: 28,
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fontWeight: 400,
  color: 'var(--text-accent)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--color-rheinhessen-sand)',
  paddingBottom: 2
};
const crossLinkInline = {
  fontFamily: 'var(--font-body)',
  fontSize: 12.5,
  color: 'var(--text-accent)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--color-rheinhessen-sand)',
  paddingBottom: 2
};
function btn(kind) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '13px 24px',
    cursor: 'pointer',
    transition: 'background 220ms, color 220ms, border-color 220ms',
    border: '1px solid transparent',
    whiteSpace: 'nowrap'
  };
  const v = {
    dark: {
      background: 'var(--color-bottle-black)',
      color: 'var(--color-warm-ivory)',
      borderColor: 'var(--color-bottle-black)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-bottle-black)'
    },
    light: {
      background: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-warm-ivory)'
    },
    'outline-light': {
      background: 'transparent',
      color: 'var(--color-warm-ivory)',
      borderColor: 'rgba(246,241,232,0.45)'
    }
  };
  return {
    ...base,
    ...(v[kind] || v.dark)
  };
}
Object.assign(window, {
  Reveal,
  Over,
  WHero,
  WIntent,
  WTrust,
  WShop,
  WHotel,
  WWedding,
  WBiz,
  btn,
  sectionH2,
  sectionBody
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "home-sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* ── App — main router + data ─────────────────────────────────── */

const WINES = [{
  id: 1,
  name: 'WASEM WEISS',
  vintage: '2022',
  price: '€ 16,00',
  tags: ['LEHM', 'KALK'],
  certs: ['BIO', 'VEGAN'],
  category: 'weiss',
  desc: 'Frisch, elegant und mineralisch. Ein Weißwein mit Klarheit, Struktur und feiner Frucht.'
}, {
  id: 2,
  name: 'WASEM ROT',
  vintage: '2021',
  price: '€ 24,00',
  tags: ['LEHM', 'SCHIEFER'],
  certs: ['BIO'],
  category: 'rot',
  desc: 'Tiefgründig, würzig und elegant. Ein Rotwein mit Charakter und Länge, geprägt von Handwerk und Herkunft.'
}, {
  id: 3,
  name: 'DOPPELSTÜCK ROSÉ',
  vintage: '2023',
  price: '€ 18,00',
  tags: ['KALK'],
  certs: ['BIO', 'VEGAN'],
  category: 'rosé',
  desc: 'Zart und lebendig. Beerige Aromen mit einer feinen salzigen Mineralität — der ideale Sommerbegleiter.'
}, {
  id: 4,
  name: 'PINOT NOIR',
  vintage: '2020',
  price: '€ 32,00',
  tags: ['LEHM', 'KALK', 'SCHIEFER'],
  certs: [],
  category: 'rot',
  desc: 'Seidig und komplex. Eleganter Spätburgunder aus besten Rheinhessen-Lagen.'
}, {
  id: 5,
  name: 'GRAUER BURGUNDER',
  vintage: '2022',
  price: '€ 22,00',
  tags: ['KALK'],
  certs: ['BIO'],
  category: 'weiss',
  desc: 'Vollmundig und cremig mit eleganter Würze und reifer, gelber Frucht.'
}, {
  id: 6,
  name: 'RIESLING',
  vintage: '2023',
  price: '€ 19,00',
  tags: ['SCHIEFER', 'KALK'],
  certs: ['BIO', 'VEGAN'],
  category: 'weiss',
  desc: 'Klare Mineralität, lebendige Säure und zarte Pfirsichfrucht. Typisch Rheinhessen.'
}, {
  id: 7,
  name: 'SPÄTBURGUNDER',
  vintage: '2021',
  price: '€ 28,00',
  tags: ['LEHM'],
  certs: ['BIO'],
  category: 'rot',
  desc: 'Kräftig und ausdrucksstark. Schwarzkirsche, Gewürze und samtige Tannine.'
}, {
  id: 8,
  name: 'WEISSER BURGUNDER',
  vintage: '2022',
  price: '€ 17,00',
  tags: ['KALK'],
  certs: ['BIO', 'VEGAN'],
  category: 'weiss',
  desc: 'Frisch und fruchtig mit feiner Cremigkeit. Ideal als Aperitif oder zu leichten Speisen.'
}];
function App() {
  const [page, setPage] = React.useState('home');
  const [wine, setWine] = React.useState(null);
  const [cartCount, setCartCount] = React.useState(0);
  const navigate = p => {
    setPage(p);
    document.getElementById('app-scroll-top')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleWineSelect = w => {
    setWine(w);
    setPage('product');
  };
  const handleAddToCart = () => setCartCount(c => c + 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "app-scroll-top",
    style: {
      position: 'absolute',
      top: 0
    }
  }), /*#__PURE__*/React.createElement(WDNavigation, {
    currentPage: page,
    onNavigate: navigate,
    cartCount: cartCount
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 64
    }
  }, page === 'home' && /*#__PURE__*/React.createElement(WDHomePage, {
    onNavigate: navigate,
    onWineSelect: handleWineSelect,
    wines: WINES
  }), page === 'shop' && /*#__PURE__*/React.createElement(WDWineShop, {
    onWineSelect: handleWineSelect,
    wines: WINES
  }), page === 'product' && /*#__PURE__*/React.createElement(WDProductDetail, {
    wine: wine,
    onNavigate: navigate,
    onAddToCart: handleAddToCart
  }), page === 'hotel' && /*#__PURE__*/React.createElement(WDHotelPage, {
    onNavigate: navigate
  }), page === 'events' && /*#__PURE__*/React.createElement(WDEventsPage, {
    onNavigate: navigate
  }), (page === 'weingut' || page === 'herkunft' || page === 'journal' || page === 'kontakt' || page === 'cart') && /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-warm-ivory)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 80,
      fontWeight: 500,
      opacity: 0.08
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      fontStyle: 'italic'
    }
  }, {
    weingut: 'Das Weingut',
    herkunft: 'Unsere Herkunft',
    journal: 'Journal',
    kontakt: 'Kontakt',
    cart: 'Warenkorb'
  }[page]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Diese Seite ist im Prototyp noch nicht ausgebaut."))), /*#__PURE__*/React.createElement(WDFooter, {
    onNavigate: navigate
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventsPage.jsx
try { (() => {
/* ── EventsPage component ── export to window ─────────────────── */
function WDEventsPage({
  onNavigate
}) {
  const {
    Button,
    Tag
  } = window.WasemDoppelstCkDesignSystem_9fe068;
  const events = [{
    id: 1,
    category: 'WEINPROBE',
    date: 'Jeden Samstag',
    time: '14:00 Uhr',
    title: 'Weinprobe Classic',
    desc: 'Sechs ausgewählte Weine aus unserem Sortiment — begleitet von kleinen Häppchen und Geschichten aus dem Weingut.',
    price: '€ 35 / Person',
    spots: 'Plätze verfügbar'
  }, {
    id: 2,
    category: 'ERLEBNIS',
    date: 'Mai – Oktober',
    time: 'Nach Vereinbarung',
    title: 'Vineyard Walk',
    desc: 'Spaziergang durch unsere Weinberge mit Erklärungen zu Boden, Reben und Handlese. Abschluss mit Verkostung direkt am Weinberg.',
    price: '€ 48 / Person',
    spots: 'Buchung empfohlen'
  }, {
    id: 3,
    category: 'DINNER',
    date: 'Fr, 11. Juli 2025',
    time: '19:00 Uhr',
    title: 'Winemaker\'s Dinner',
    desc: 'Mehrgängiges Menü mit sorgfältig abgestimmten Weinen von Wasem Doppelstück — präsentiert von der Familie persönlich.',
    price: '€ 89 / Person',
    spots: 'Noch 4 Plätze frei'
  }, {
    id: 4,
    category: 'WEINGUT',
    date: 'Sa, 23. August 2025',
    time: '11:00 – 18:00 Uhr',
    title: 'Tag des offenen Weinguts',
    desc: 'Offener Keller, Weinproben, Live-Musik im Innenhof und kulinarische Stände. Eintritt frei — für die ganze Familie.',
    price: 'Eintritt frei',
    spots: 'Keine Anmeldung nötig'
  }, {
    id: 5,
    category: 'HOCHZEIT',
    date: 'Auf Anfrage',
    time: 'Ganzjährig',
    title: 'Feiern & Hochzeiten',
    desc: 'Ihr besonderer Tag in unserem historischen Gutshaus. Wir gestalten individuelle Feierlichkeiten inmitten der Weinberge.',
    price: 'Auf Anfrage',
    spots: 'Jetzt anfragen'
  }];
  const catColors = {
    WEINPROBE: 'var(--color-vine-leaf)',
    ERLEBNIS: 'var(--color-vineyard-soil)',
    DINNER: '#3d2c1e',
    WEINGUT: 'var(--color-soft-sage)',
    HOCHZEIT: 'var(--color-rheinhessen-sand)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-warm-ivory)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bottle-black)',
      padding: '64px 48px 56px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '40vw',
      fontWeight: 500,
      color: 'white',
      opacity: 0.03,
      lineHeight: 0.85,
      right: '-4vw',
      bottom: '-8vw',
      userSelect: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'var(--color-soft-sage)',
      marginBottom: 14,
      textTransform: 'uppercase'
    }
  }, "Erleben"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(36px, 5vw, 64px)',
      lineHeight: 1.05,
      color: 'var(--color-warm-ivory)',
      margin: '0 0 20px'
    }
  }, "Events & Weinproben"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.55)',
      maxWidth: 500,
      margin: 0
    }
  }, "Vom intimen Winemaker's Dinner bis zum Sommerfest im Weinberg \u2014 erleben Sie Wasem Doppelst\xFCck hautnah."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      background: 'var(--border-subtle)'
    }
  }, events.map(ev => /*#__PURE__*/React.createElement("div", {
    key: ev.id,
    style: {
      background: 'var(--surface-card)',
      display: 'grid',
      gridTemplateColumns: '220px 1fr auto',
      alignItems: 'start',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: catColors[ev.category] || 'var(--color-label-cream)',
      padding: '28px 24px',
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5rem',
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: 'rgba(246,241,232,0.6)',
      marginBottom: 12,
      textTransform: 'uppercase'
    }
  }, ev.category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--color-warm-ivory)',
      lineHeight: 1.3
    }
  }, ev.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'rgba(246,241,232,0.6)',
      marginTop: 4
    }
  }, ev.time))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      margin: '0 0 10px',
      lineHeight: 1.2
    }
  }, ev.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: '0 0 16px',
      maxWidth: 520
    }
  }, ev.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'var(--text-muted)'
    }
  }, ev.spots)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 28px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22
    }
  }, ev.price)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "BUCHEN")))))));
}
Object.assign(window, {
  WDEventsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* ── Footer component ── export to window ─────────────────────── */
function WDFooter({
  onNavigate
}) {
  const cols = [{
    title: 'WEINE',
    links: ['Weißweine', 'Rotweine', 'Rosé & Sekt', 'Naturweine', 'Raritäten']
  }, {
    title: 'WEINGUT',
    links: ['Über uns', 'Familie Wasem', 'Philosophie', 'Weinberge', 'Herkunft']
  }, {
    title: 'ERLEBNIS',
    links: ['Hotel', 'Weinproben', 'Vineyard Walk', 'Events & Feiern', 'Geschenke']
  }, {
    title: 'SERVICE',
    links: ['Kontakt', 'Versand & Lieferung', 'Rückgabe', 'Datenschutz', 'Impressum']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      backgroundColor: 'var(--color-bottle-black)',
      color: 'var(--color-warm-ivory)',
      padding: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 48,
      paddingBottom: 48,
      borderBottom: '1px solid rgba(246,241,232,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      fontWeight: 500,
      lineHeight: 0.85,
      marginBottom: 16
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      fontWeight: 400,
      letterSpacing: '0.18em',
      opacity: 0.6,
      marginBottom: 20
    }
  }, "WASEM DOPPELST\xDCCK"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'rgba(246,241,232,0.55)',
      lineHeight: 1.7,
      margin: '0 0 24px',
      maxWidth: 220
    }
  }, "Handgemachte Weine mit Charakter aus dem Herzen von Rheinhessen."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: '0.9375rem',
      color: 'rgba(246,241,232,0.45)'
    }
  }, "Familie Wasem")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 600,
      letterSpacing: '0.16em',
      marginBottom: 18,
      opacity: 0.45
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, col.links.map(link => /*#__PURE__*/React.createElement("a", {
    key: link,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'rgba(246,241,232,0.55)',
      textDecoration: 'none',
      transition: 'color 200ms'
    },
    onMouseEnter: e => e.target.style.color = 'var(--color-warm-ivory)',
    onMouseLeave: e => e.target.style.color = 'rgba(246,241,232,0.55)'
  }, link)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0',
      fontSize: '0.6875rem',
      color: 'rgba(246,241,232,0.3)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Weingut Wasem Doppelst\xFCck \xB7 Ingelheim, Rheinhessen"), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: '0.08em'
    }
  }, "Alle Preise inkl. MwSt. \xB7 0,75l \xB7 Enth\xE4lt Sulfite")));
}
Object.assign(window, {
  WDFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
/* ── HomePage component ── export to window ───────────────────── */
function WDHomePage({
  onNavigate,
  onWineSelect,
  wines
}) {
  const {
    Button,
    WineCard
  } = window.WasemDoppelstCkDesignSystem_9fe068;
  const bottle = '../../assets/bottle-sample.png';
  const trust = [{
    icon: 'family',
    title: 'Familienweingut',
    sub: 'Seit 2000'
  }, {
    icon: 'leaf',
    title: 'Nachhaltig zertifiziert',
    sub: 'Respekt vor Natur & Boden'
  }, {
    icon: 'hand',
    title: 'Handgelesen',
    sub: 'Selektive Handlese'
  }, {
    icon: 'natural',
    title: 'Spontanvergoren',
    sub: 'Mit natürlichen Hefen'
  }];
  const TrustIcon = ({
    type
  }) => {
    const paths = {
      family: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: 12,
        cy: 7,
        r: 3,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.25
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 21v-1a7 7 0 0 1 14 0v1",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.25
      })),
      leaf: /*#__PURE__*/React.createElement("path", {
        d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zm0 0a7 7 0 0 0 7-7",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.25
      }),
      hand: /*#__PURE__*/React.createElement("path", {
        d: "M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8l3 3h1.5a4.5 4.5 0 0 0 4.5-4.5V11",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.25
      }),
      natural: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: 12,
        cy: 12,
        r: 8,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.25
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 8c0 2.5-2 4-2 6s2 3.5 2 3.5S14 16.5 14 14s-2-3.5-2-6z",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.25
      }))
    };
    return /*#__PURE__*/React.createElement("svg", {
      width: 22,
      height: 22,
      viewBox: "0 0 24 24",
      style: {
        color: 'var(--color-soft-sage)'
      }
    }, paths[type]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-warm-ivory)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bottle-black)',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '55vw',
      fontWeight: 500,
      color: 'white',
      opacity: 0.035,
      lineHeight: 0.85,
      right: '-8vw',
      bottom: '-8vw',
      userSelect: 'none',
      pointerEvents: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 700
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'var(--color-soft-sage)',
      marginBottom: 28,
      textTransform: 'uppercase'
    }
  }, "Weingut Wasem Doppelst\xFCck \xB7 Ingelheim, Rheinhessen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(48px, 6vw, 88px)',
      lineHeight: 1.05,
      color: 'var(--color-warm-ivory)',
      margin: '0 0 32px',
      letterSpacing: '-0.01em'
    }
  }, "Charakter.", /*#__PURE__*/React.createElement("br", null), "Herkunft.", /*#__PURE__*/React.createElement("br", null), "Handwerk."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.6)',
      maxWidth: 440,
      margin: '0 0 40px'
    }
  }, "Wir machen Wein mit \xDCberzeugung \u2014 aus biologischem Anbau, mit Respekt vor dem Boden und der Natur Rheinhessens."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary-light",
    onClick: () => onNavigate('shop')
  }, "UNSERE WEINE"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-light",
    onClick: () => onNavigate('weingut')
  }, "MEHR ERFAHREN")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-label-cream)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      padding: '0 48px'
    }
  }, trust.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '24px 20px',
      borderRight: i < 3 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(TrustIcon, {
    type: t.icon
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.06em',
      color: 'var(--text-primary)',
      marginBottom: 2
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'var(--text-muted)'
    }
  }, t.sub)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      marginBottom: 8,
      textTransform: 'uppercase'
    }
  }, "Entdecken"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 42,
      margin: 0,
      lineHeight: 1.05
    }
  }, "Unsere Weine")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: false,
    onClick: () => onNavigate('shop')
  }, "Alle Weine ansehen \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--border-subtle)'
    }
  }, (wines || []).slice(0, 4).map(w => /*#__PURE__*/React.createElement(WineCard, {
    key: w.id,
    name: w.name,
    vintage: w.vintage,
    price: w.price,
    image: bottle,
    tags: w.tags,
    certifications: w.certs,
    onAddToCart: () => {},
    onClick: () => onWineSelect(w),
    href: "#"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-vine-leaf)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '72px 64px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '30vw',
      fontWeight: 500,
      color: 'white',
      opacity: 0.04,
      lineHeight: 0.85,
      right: -40,
      bottom: -40,
      userSelect: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(167,165,142,0.8)',
      marginBottom: 20,
      textTransform: 'uppercase'
    }
  }, "Unsere Geschichte"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 44,
      color: 'var(--color-warm-ivory)',
      lineHeight: 1.1,
      margin: '0 0 24px'
    }
  }, "Handwerk.", /*#__PURE__*/React.createElement("br", null), "Herkunft.", /*#__PURE__*/React.createElement("br", null), "Charakter."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.75,
      color: 'rgba(246,241,232,0.65)',
      margin: '0 0 36px',
      maxWidth: 380
    }
  }, "Wir arbeiten im Einklang mit der Natur und lassen unsere Weine Zeit, damit sie ihren eigenen Weg gehen k\xF6nnen. Guter Wein entsteht nicht im Keller, sondern im Weinberg."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary-light",
    onClick: () => onNavigate('weingut')
  }, "MEHR \xDCBER UNS"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-label-cream)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bottle,
    alt: "Wasem Doppelst\xFCck",
    style: {
      height: 360,
      width: 'auto',
      objectFit: 'contain'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      maxWidth: 1240,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      marginBottom: 8,
      textTransform: 'uppercase'
    }
  }, "\xDCbernachten"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 42,
      margin: '0 0 20px',
      lineHeight: 1.05
    }
  }, "Das Weinhotel"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.75,
      color: 'var(--text-secondary)',
      margin: '0 0 36px',
      maxWidth: 420
    }
  }, "Schlafen inmitten der Weinberge. Unsere Zimmer und Suiten verbinden Stille, Natur und die Herzlichkeit der Familie Wasem."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('hotel')
  }, "HOTEL ENTDECKEN")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 2
    }
  }, ['Weinberg Suite', 'Gutshof Zimmer', 'Gartenblick', 'Terrasse'].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: i % 2 === 0 ? 'var(--color-vine-leaf)' : 'var(--color-label-cream)',
      height: 140,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: i % 2 === 0 ? 'rgba(246,241,232,0.7)' : 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, r))))));
}
Object.assign(window, {
  WDHomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HotelPage.jsx
try { (() => {
/* ── HotelPage component ── export to window ──────────────────── */
function WDHotelPage({
  onNavigate
}) {
  const {
    Button
  } = window.WasemDoppelstCkDesignSystem_9fe068;
  const rooms = [{
    name: 'Weinberg Suite',
    size: '48 m²',
    guests: 2,
    price: '€ 195',
    desc: 'Großzügige Suite mit freiem Blick auf unsere Weinberge. Eigene Terrasse, Kingsize-Bett, Badewanne.',
    bg: 'var(--color-vine-leaf)'
  }, {
    name: 'Gutshof Zimmer',
    size: '34 m²',
    guests: 2,
    price: '€ 149',
    desc: 'Ruhiges Doppelzimmer im historischen Gutshaus. Warme Materialien, Rheinblick auf Anfrage.',
    bg: '#3d2c1e'
  }, {
    name: 'Gartenblick Zimmer',
    size: '28 m²',
    guests: 2,
    price: '€ 125',
    desc: 'Gemütliches Zimmer mit Blick in den begrünten Innenhof. Ideal für Weintourist:innen.',
    bg: '#4a3828'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-warm-ivory)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bottle-black)',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '0 48px 56px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '50vw',
      fontWeight: 500,
      color: 'white',
      opacity: 0.03,
      lineHeight: 0.85,
      right: '-6vw',
      top: '-10vw',
      userSelect: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 1240,
      width: '100%',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'flex-end',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'var(--color-soft-sage)',
      marginBottom: 16,
      textTransform: 'uppercase'
    }
  }, "Weinhotel \xB7 Ingelheim"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(40px, 5vw, 72px)',
      lineHeight: 1.05,
      color: 'var(--color-warm-ivory)',
      margin: '0 0 24px'
    }
  }, "Schlafen zwischen", /*#__PURE__*/React.createElement("br", null), "den Reben."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.75,
      color: 'rgba(246,241,232,0.6)',
      margin: '0 0 36px',
      maxWidth: 420
    }
  }, "Unser Weinhotel verbindet die Stille der Weinberge mit dem Komfort eines Boutique-Hotels. Zimmer und Suiten inmitten der Rheinhessener Weinlandschaft."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary-light"
  }, "ZIMMER BUCHEN")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 3
    }
  }, ['Suite', 'Terrasse', 'Weinberg', 'Frühstück'].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 120,
      background: ['#263321', '#3d2c1e', '#4a3828', '#2a3020'][i],
      display: 'flex',
      alignItems: 'flex-end',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      letterSpacing: '0.1em',
      color: 'rgba(246,241,232,0.5)',
      textTransform: 'uppercase'
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '72px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      marginBottom: 8,
      textTransform: 'uppercase'
    }
  }, "Zimmer & Suiten"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      margin: 0,
      lineHeight: 1.05
    }
  }, "Ihr Zuhause auf Zeit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 1,
      background: 'var(--border-subtle)'
    }
  }, rooms.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      background: 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: r.bg,
      height: 200,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 20,
      fontFamily: 'var(--font-display)',
      fontSize: 80,
      fontWeight: 500,
      color: 'white',
      opacity: 0.08,
      lineHeight: 1
    }
  }, "W")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 32px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      margin: 0,
      lineHeight: 1.2
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500
    }
  }, r.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      color: 'var(--text-muted)'
    }
  }, "pro Nacht"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 16,
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r.size), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, r.guests, " Personen")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: '0 0 24px',
      flex: 1
    }
  }, r.desc), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "ZIMMER BUCHEN")))))));
}
Object.assign(window, {
  WDHotelPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HotelPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navigation.jsx
try { (() => {
/* ── Navigation component ── export to window ─────────────────── */
function WDNavigation({
  currentPage,
  onNavigate,
  cartCount = 0
}) {
  const links = [{
    id: 'shop',
    label: 'WEINE'
  }, {
    id: 'weingut',
    label: 'WEINGUT'
  }, {
    id: 'herkunft',
    label: 'HERKUNFT'
  }, {
    id: 'events',
    label: 'EVENTS'
  }, {
    id: 'hotel',
    label: 'HOTEL'
  }, {
    id: 'journal',
    label: 'JOURNAL'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      backgroundColor: 'var(--color-bottle-black)',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 0,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 500,
      color: 'var(--color-warm-ivory)',
      lineHeight: 1
    }
  }, "W"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      fontWeight: 400,
      letterSpacing: '0.2em',
      color: 'rgba(246,241,232,0.75)',
      textTransform: 'uppercase',
      lineHeight: 1.5
    }
  }, "WASEM", /*#__PURE__*/React.createElement("br", null), "DOPPELST\xDCCK")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 28,
      justifyContent: 'center'
    }
  }, links.map(({
    id,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNavigate(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '4px 0',
      color: currentPage === id ? 'var(--color-warm-ivory)' : 'rgba(246,241,232,0.55)',
      borderBottom: currentPage === id ? '1px solid rgba(246,241,232,0.6)' : '1px solid transparent',
      transition: 'color 220ms, border-color 220ms'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgba(246,241,232,0.55)'
    }
  }, "DE"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('cart'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'rgba(246,241,232,0.8)',
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 21,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 20,
    cy: 21,
    r: 1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      background: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      borderRadius: '50%',
      width: 14,
      height: 14,
      fontSize: 8,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount))));
}
Object.assign(window, {
  WDNavigation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navigation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductDetail.jsx
try { (() => {
/* ── ProductDetail component ── export to window ──────────────── */
function WDProductDetail({
  wine,
  onNavigate,
  onAddToCart
}) {
  const {
    Button,
    Tag,
    Badge
  } = window.WasemDoppelstCkDesignSystem_9fe068;
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);
  const bottle = '../../assets/bottle-sample.png';
  const w = wine || {
    name: 'WASEM WEISS',
    vintage: '2022',
    price: '€ 16,00',
    tags: ['LEHM', 'KALK'],
    certs: ['BIO', 'VEGAN'],
    category: 'weiss',
    desc: 'Frisch, elegant und mineralisch. Ein Weißwein mit Klarheit, Struktur und feiner Frucht.'
  };
  const specs = [{
    label: 'Herkunft',
    value: 'Ingelheim, Rheinhessen'
  }, {
    label: 'Boden',
    value: 'Lehm & Kalk'
  }, {
    label: 'Ausbau',
    value: '8 Monate im Edelstahltank'
  }, {
    label: 'Alkohol',
    value: '12,5 % vol'
  }, {
    label: 'Trinkreife',
    value: '2023 – 2028'
  }];
  const handleAdd = () => {
    onAddToCart && onAddToCart(w, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-warm-ivory)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '24px 48px 0',
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'var(--text-muted)',
      letterSpacing: '0.06em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNavigate('shop')
  }, "WEINE"), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 8px',
      opacity: 0.4
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNavigate('shop')
  }, w.category?.toUpperCase() || 'WEISSWEINE'), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 8px',
      opacity: 0.4
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, w.name, " ", w.vintage)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '40px 48px 80px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 48,
      minHeight: 560,
      position: 'sticky',
      top: 80
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bottle,
    alt: w.name,
    style: {
      height: 480,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      marginBottom: 10,
      textTransform: 'uppercase'
    }
  }, w.vintage), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 48,
      lineHeight: 1.05,
      margin: '0 0 20px',
      letterSpacing: '-0.01em'
    }
  }, w.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.75,
      color: 'var(--text-secondary)',
      margin: '0 0 28px'
    }
  }, w.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 32
    }
  }, (w.tags || []).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)), (w.certs || []).map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    variant: "green"
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginBottom: 36
    }
  }, specs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-primary)'
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 32
    }
  }, w.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'var(--text-muted)'
    }
  }, "0,75 l \xB7 inkl. MwSt.", /*#__PURE__*/React.createElement("br", null), "zzgl. Versand")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => Math.max(1, q - 1)),
    style: {
      width: 40,
      height: 46,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--text-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      fontWeight: 500
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => q + 1),
    style: {
      width: 40,
      height: 46,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--text-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "+")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: false,
    onClick: handleAdd,
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, added ? '✓ HINZUGEFÜGT' : 'IN DEN WARENKORB')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })), "Versand in 2\u20133 Werktagen"))));
}
Object.assign(window, {
  WDProductDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WineShop.jsx
try { (() => {
/* ── WineShop component ── export to window ───────────────────── */
function WDWineShop({
  onWineSelect,
  wines
}) {
  const {
    WineCard,
    Tag
  } = window.WasemDoppelstCkDesignSystem_9fe068;
  const [activeFilter, setActiveFilter] = React.useState('alle');
  const bottle = '../../assets/bottle-sample.png';
  const filters = [{
    id: 'alle',
    label: 'ALLE'
  }, {
    id: 'weiss',
    label: 'WEISSWEIN'
  }, {
    id: 'rot',
    label: 'ROTWEIN'
  }, {
    id: 'rosé',
    label: 'ROSÉ'
  }, {
    id: 'natural',
    label: 'NATURWEIN'
  }];
  const filteredWines = activeFilter === 'alle' ? wines : activeFilter === 'natural' ? wines.filter(w => w.certs && w.certs.length > 0) : wines.filter(w => w.category === activeFilter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-warm-ivory)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 48px 32px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--color-warm-ivory)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.2em',
      color: 'var(--text-muted)',
      marginBottom: 10,
      textTransform: 'uppercase'
    }
  }, "Weingut Wasem Doppelst\xFCck"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 48,
      margin: '0 0 32px',
      lineHeight: 1.05
    }
  }, "Unsere Weine"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: -1
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setActiveFilter(f.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '0 0 12px',
      marginRight: 28,
      color: activeFilter === f.id ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: activeFilter === f.id ? '1.5px solid var(--color-bottle-black)' : '1.5px solid transparent',
      transition: 'color 200ms, border-color 200ms'
    }
  }, f.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 48px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6875rem',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      padding: '20px 0 24px',
      letterSpacing: '0.06em'
    }
  }, filteredWines.length, " Wein", filteredWines.length !== 1 ? 'e' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 1,
      background: 'var(--border-subtle)'
    }
  }, filteredWines.map(w => /*#__PURE__*/React.createElement(WineCard, {
    key: w.id,
    name: w.name,
    vintage: w.vintage,
    price: w.price,
    image: bottle,
    tags: w.tags,
    certifications: w.certs,
    onClick: () => onWineSelect(w),
    href: "#"
  })))));
}
Object.assign(window, {
  WDWineShop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WineShop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-app.jsx
try { (() => {
/* ── home-app.jsx — assembles the intent-led homepage ────────────── */
const HOME_WINES = [{
  id: 1,
  name: 'WASEM WEISS',
  vintage: '2022',
  price: '€ 16,00',
  tags: ['LEHM', 'KALK'],
  certs: ['BIO', 'VEGAN']
}, {
  id: 2,
  name: 'WASEM ROT',
  vintage: '2021',
  price: '€ 24,00',
  tags: ['LEHM', 'SCHIEFER'],
  certs: ['BIO']
}, {
  id: 3,
  name: 'DOPPELSTÜCK ROSÉ',
  vintage: '2023',
  price: '€ 18,00',
  tags: ['KALK'],
  certs: ['BIO', 'VEGAN']
}, {
  id: 6,
  name: 'RIESLING',
  vintage: '2023',
  price: '€ 19,00',
  tags: ['SCHIEFER', 'KALK'],
  certs: ['BIO', 'VEGAN']
}];
function HomeApp() {
  const [lang, setLang] = React.useState(() => localStorage.getItem('wd-lang') || 'de');
  const onLang = L => {
    setLang(L);
    localStorage.setItem('wd-lang', L);
  };
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'var(--color-warm-ivory)'
    }
  }, /*#__PURE__*/React.createElement(WDHomeNav, {
    lang: lang,
    onLang: onLang,
    cartCount: 2
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(WHero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WIntent, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WPress, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WTrust, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WShop, {
    lang: lang,
    wines: HOME_WINES
  }), /*#__PURE__*/React.createElement(WHotel, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WWedding, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WBiz, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WEvents, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WJournal, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WFaq, {
    lang: lang
  }), /*#__PURE__*/React.createElement(WNewsletter, {
    lang: lang
  })), /*#__PURE__*/React.createElement(WFooter, {
    lang: lang,
    onLang: onLang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(HomeApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-content.jsx
try { (() => {
/* ── home-content.jsx ──────────────────────────────────────────────
 * Bilingual content dictionary (DE / EN) + shared visual helpers
 * (thin-outline Icon system, striped image Placeholder).
 * Everything attaches to window so the other babel files can read it.
 * ------------------------------------------------------------------ */

/* ── Thin-outline icon system (Lucide-weight, 1.25px @ 24) ───────── */
function WIcon({
  name,
  size = 24,
  stroke = 1.25,
  color = 'currentColor',
  style = {}
}) {
  const P = {
    grape: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 6V3M12 3h3M8 9.5a2 2 0 1 0 0 .01M16 9.5a2 2 0 1 0 0 .01M12 12.5a2 2 0 1 0 0 .01M10 15.5a2 2 0 1 0 0 .01M14 15.5a2 2 0 1 0 0 .01M12 18.5a2 2 0 1 0 0 .01"
    })),
    bed: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 17v-5h20v5M2 17v3M22 17v3M2 12V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5M6 9h4M14 9h4"
    })),
    rings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "14",
      r: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "14",
      r: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 9l1.5-3h3L15 9"
    })),
    briefcase: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "8",
      width: "18",
      height: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"
    })),
    party: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 20l5-14 9 9-14 5zM9 6l1 4M14 11l4 1M11 4l.5 1.5M19 8l1.5.5M16 4l.5 1.5"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M8 3v4M16 3v4"
    })),
    leaf: /*#__PURE__*/React.createElement("path", {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zm0 0a7 7 0 0 0 7-7"
    }),
    family: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "9",
      r: "2.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 20v-1a6 6 0 0 1 12 0v1M15.5 20v-.5a4 4 0 0 1 5.5-3.7"
    })),
    hand: /*#__PURE__*/React.createElement("path", {
      d: "M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8l3 3h1.5a4.5 4.5 0 0 0 4.5-4.5V11"
    }),
    bottle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10 2h4M11 2v3.5c0 1-2 2-2 4.5v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V10c0-2.5-2-3.5-2-4.5V2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 13h6"
    })),
    sun: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
    })),
    map: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "2.5"
    })),
    glass: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M8 3h8l-1 8a3 3 0 0 1-6 0L8 3zM12 14v5M8 21h8"
    })),
    gift: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "8",
      width: "18",
      height: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12v9h14v-9M12 8v13M12 8S10 4 7.5 4 5 8 5 8M12 8s2-4 4.5-4S19 8 19 8"
    })),
    arrow: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }),
    chevron: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    quote: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M7 7H4v6h5V7H7v3M18 7h-3v6h5V7h-2v3"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4-4"
    })),
    star: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l2.5 5.5 6 .5-4.5 4 1.5 6-5.5-3.5L6 19l1.5-6L3 9l6-.5L12 3z"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, P[name] || null);
}

/* ── Striped image placeholder w/ monospace caption ──────────────── */
function WPlaceholder({
  label = 'IMAGE',
  tone = 'sand',
  height = '100%',
  style = {}
}) {
  const tones = {
    sand: {
      bg: '#E7DAC4',
      stripe: 'rgba(154,118,85,0.14)',
      ink: '#9A7655'
    },
    cream: {
      bg: '#EFE4D1',
      stripe: 'rgba(154,118,85,0.10)',
      ink: '#9A7655'
    },
    green: {
      bg: '#2C3A26',
      stripe: 'rgba(246,241,232,0.06)',
      ink: 'rgba(246,241,232,0.55)'
    },
    dark: {
      bg: '#161615',
      stripe: 'rgba(246,241,232,0.05)',
      ink: 'rgba(246,241,232,0.45)'
    }
  };
  const t = tones[tone] || tones.sand;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height,
      overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, ${t.bg} 0, ${t.bg} 11px, ${t.stripe} 11px, ${t.stripe} 12px)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      fontSize: 10.5,
      letterSpacing: '0.18em',
      color: t.ink,
      textTransform: 'uppercase',
      background: t.bg,
      padding: '5px 10px',
      whiteSpace: 'nowrap'
    }
  }, label));
}

/* ── Real media from doppelstueck.com ────────────────────────────────
 * Live links to the winery's own photography + autumn vineyard video.
 * Each surface degrades to the striped WPlaceholder if a link breaks. */
const WMedia = {
  heroVideo: 'https://doppelstueck.com/wp-content/uploads/2023/10/Herbstvideo.mp4',
  heroPoster: 'https://doppelstueck.com/wp-content/uploads/2024/02/06890_Wasem_web-e1708609980763-1024x527.jpg',
  vineyardWide: 'https://doppelstueck.com/wp-content/uploads/2024/02/06890_Wasem_web-e1708609980763-1024x527.jpg',
  // Weinhotel
  hotelSuite: 'https://doppelstueck.com/wp-content/uploads/2022/12/07770_Wasem.jpg',
  hotelKlassik: 'https://doppelstueck.com/wp-content/uploads/2024/03/Klassik-1024x1024.jpg',
  hotelStamm: 'https://doppelstueck.com/wp-content/uploads/2024/03/Stammhaus-1024x1024.jpg',
  hotelRoom2: 'https://doppelstueck.com/wp-content/uploads/2022/12/07557_Wasem-scaled.jpg',
  hotelHero: 'https://doppelstueck.com/wp-content/uploads/2022/05/5_Wasem_Stammhaus_Weinhotel_Hotel_Wasem_Doppelstueck_Ingelheim_Wein-1.jpg',
  // Hochzeiten
  weddingArch: 'https://doppelstueck.com/wp-content/uploads/2022/11/Doppelstueck_Ingelheim_Weingut_Hochzeit_Weinberge_Trauung_Bogen_2.jpg',
  weddingHut: 'https://doppelstueck.com/wp-content/uploads/2022/11/Doppelstueck_Ingelheim_Weingut_Hochzeit_Weinberge_Trauung_Bogen_2.jpg',
  // Banners / journal
  bannerSpaet: 'https://doppelstueck.com/wp-content/uploads/2025/03/Banner_Website_Ingelheimer-Spaetburgunder-scaled.jpg',
  bannerEvents: 'https://doppelstueck.com/wp-content/uploads/2025/02/WeinEvents-Banner-scaled.jpg'
};

/* Real <img> with object-fit cover + striped-placeholder fallback */
function WImg({
  src,
  label = 'IMAGE',
  tone = 'sand',
  position = 'center',
  style = {}
}) {
  const [failed, setFailed] = React.useState(false);
  if (failed || !src) return /*#__PURE__*/React.createElement(WPlaceholder, {
    label: label,
    tone: tone,
    style: style
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    loading: "lazy",
    referrerPolicy: "no-referrer",
    onError: () => setFailed(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block'
    }
  }));
}

/* Autoplay muted-loop background video w/ poster + placeholder fallback */
function WVideo({
  src,
  poster,
  label = 'VIDEO',
  tone = 'dark',
  position = 'center',
  style = {}
}) {
  const [failed, setFailed] = React.useState(false);
  if (failed || !src) return /*#__PURE__*/React.createElement(WPlaceholder, {
    label: label,
    tone: tone,
    style: style
  });
  return /*#__PURE__*/React.createElement("video", {
    src: src,
    poster: poster,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    onError: () => setFailed(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block',
      ...style
    }
  });
}

/* ── Bilingual content dictionary ────────────────────────────────── */
const WC = {
  de: {
    locale: 'de',
    nav: {
      tagline: 'WEINGUT · WEINHOTEL · EVENTS',
      links: [{
        id: 'weingut',
        label: 'WEINGUT',
        cols: [{
          head: 'Das Haus',
          items: ['Über uns', 'Winzerfamilie', 'Bio-Weingut', 'Nachhaltigkeit']
        }, {
          head: 'Erleben',
          items: ['Weinberge', 'Weinproben', 'Kellerführungen', 'Unsere Weine']
        }]
      }, {
        id: 'weinshop',
        label: 'WEINSHOP',
        cols: [{
          head: 'Sortiment',
          items: ['Weißwein', 'Rotwein', 'Rosé', 'Sekt']
        }, {
          head: 'Mehr',
          items: ['Weinpakete', 'Geschenkideen', 'Bestseller', 'Gutscheine']
        }]
      }, {
        id: 'weinhotel',
        label: 'WEINHOTEL',
        cols: [{
          head: 'Aufenthalt',
          items: ['Zimmer & Suiten', 'Preise', 'Arrangements', 'Weinwochenenden']
        }, {
          head: 'Service',
          items: ['Angebote', 'FAQ', 'Jetzt buchen']
        }]
      }, {
        id: 'hochzeiten',
        label: 'HOCHZEITEN',
        cols: [{
          head: 'Feiern',
          items: ['Hochzeitslocation', 'Freie Trauung', 'Hochzeitsfeier']
        }, {
          head: 'Planung',
          items: ['Pakete & Preise', 'Galerie', 'Referenzen', 'Anfrage stellen']
        }]
      }, {
        id: 'firmenevents',
        label: 'FIRMENEVENTS',
        cols: [{
          head: 'Formate',
          items: ['Tagungen', 'Seminare', 'Workshops', 'Incentives']
        }, {
          head: 'Mehr',
          items: ['Teambuilding', 'Weinproben für Firmen', 'Pakete', 'Anfrage']
        }]
      }, {
        id: 'aktuelles',
        label: 'AKTUELLES',
        cols: [{
          head: 'Magazin',
          items: ['Weinwissen', 'Rheinhessen', 'Hochzeiten', 'News']
        }, {
          head: 'Termine',
          items: ['Eventkalender', 'Private Events', 'Kontakt']
        }]
      }],
      book: 'JETZT BUCHEN'
    },
    hero: {
      over: 'Familienweingut · Ingelheim, Rheinhessen',
      title: ['Charakter.', 'Herkunft.', 'Handwerk.'],
      sub: 'Willkommen bei Wasem Doppelstück — Weingut, Weinhotel und Eventdestination im Herzen Rheinhessens. Ein Ort, an dem man willkommen ist.',
      ctaA: 'WEINE ENTDECKEN',
      ctaB: 'AUFENTHALT PLANEN'
    },
    intent: {
      over: 'Ihr Weg zu uns',
      title: 'Was möchten Sie erleben?',
      paths: [{
        id: 'weinshop',
        icon: 'bottle',
        name: 'Wein entdecken',
        sub: 'Bio-Weine direkt vom Winzer'
      }, {
        id: 'weinhotel',
        icon: 'bed',
        name: 'Hotel buchen',
        sub: 'Übernachten in den Weinbergen'
      }, {
        id: 'hochzeiten',
        icon: 'rings',
        name: 'Hochzeit planen',
        sub: 'Heiraten im Weingut'
      }, {
        id: 'firmen',
        icon: 'briefcase',
        name: 'Tagung organisieren',
        sub: 'Firmenevents & Seminare'
      }, {
        id: 'private',
        icon: 'party',
        name: 'Feier veranstalten',
        sub: 'Private Anlässe & Genuss'
      }]
    },
    trust: [{
      icon: 'leaf',
      t: 'Bio-zertifiziert',
      s: 'Ökologischer Anbau'
    }, {
      icon: 'family',
      t: 'Familienweingut',
      s: 'Seit Generationen'
    }, {
      icon: 'hand',
      t: 'Handgelesen',
      s: 'Selektive Handlese'
    }, {
      icon: 'map',
      t: 'Rheinhessen',
      s: 'Herkunft mit Charakter'
    }],
    shop: {
      over: 'Weinshop',
      title: 'Weine mit Charakter',
      body: 'Frische Weißweine, tiefgründige Rotweine, lebendige Rosés — alle aus biologischem Anbau, alle mit der Handschrift unserer Lagen.',
      cta: 'ALLE WEINE ANSEHEN',
      cross: 'Verschenken Sie Genuss — zu unseren Geschenkideen →'
    },
    hotel: {
      over: 'Weinhotel',
      title: 'Schlafen zwischen\nden Reben',
      body: 'Unsere Zimmer und Suiten verbinden Stille, Natur und die Herzlichkeit der Familie Wasem. Aufwachen mit Blick über die Weinberge Rheinhessens.',
      cta: 'ZIMMER & PREISE',
      rooms: [{
        n: 'Weinberg-Suite',
        m: 'ab € 180 / Nacht'
      }, {
        n: 'Gutshof-Zimmer',
        m: 'ab € 120 / Nacht'
      }, {
        n: 'Gartenblick',
        m: 'ab € 140 / Nacht'
      }, {
        n: 'Turmzimmer',
        m: 'ab € 160 / Nacht'
      }],
      cross: 'Bleiben Sie länger — entdecken Sie unsere Weinwochenenden →'
    },
    wedding: {
      over: 'Hochzeiten',
      title: 'Heiraten,\nwo der Wein wächst',
      body: 'Eine freie Trauung zwischen den Reben, gefeiert im historischen Gutshof. Wir gestalten Ihren Tag mit Herz, Handwerk und regionaler Küche.',
      ctaA: 'ANFRAGE STELLEN',
      ctaB: 'GALERIE ANSEHEN',
      stats: [{
        n: '120',
        l: 'Gäste im Gutshof'
      }, {
        n: '2',
        l: 'Locations vor Ort'
      }, {
        n: '15',
        l: 'Hotelzimmer'
      }]
    },
    biz: {
      over: 'Für Unternehmen',
      title: 'Tagen & feiern',
      cards: [{
        id: 'firmen',
        icon: 'briefcase',
        t: 'Firmenevents',
        s: 'Tagungen, Seminare und Workshops in inspirierender Umgebung — inklusive Weinprobe und Übernachtung.',
        cta: 'Tagung anfragen'
      }, {
        id: 'private',
        icon: 'glass',
        t: 'Private Events',
        s: 'Geburtstage, JGA, Familien- und Weihnachtsfeiern. Wir richten Ihren Anlass persönlich aus.',
        cta: 'Feier anfragen'
      }]
    },
    events: {
      over: 'Eventkalender',
      title: 'Demnächst bei uns',
      cta: 'ALLE TERMINE',
      list: [{
        d: '14',
        mo: 'JUN',
        y: '2026',
        t: 'Sommerliche Weinprobe im Weinberg',
        cat: 'WEINPROBE'
      }, {
        d: '28',
        mo: 'JUN',
        y: '2026',
        t: 'Winzer-BBQ & offener Keller',
        cat: 'GENUSS'
      }, {
        d: '12',
        mo: 'JUL',
        y: '2026',
        t: 'Rosé-Abend auf der Terrasse',
        cat: 'WEINPROBE'
      }, {
        d: '06',
        mo: 'SEP',
        y: '2026',
        t: 'Tag der offenen Weinberge',
        cat: 'FAMILIE'
      }]
    },
    journal: {
      over: 'Aktuelles',
      title: 'Aus dem Weingut',
      cta: 'ZUM MAGAZIN',
      posts: [{
        cat: 'WEINWISSEN',
        t: 'Was ist Bio-Wein wirklich?',
        m: '5 Min. Lesezeit'
      }, {
        cat: 'RHEINHESSEN',
        t: 'Ein Wochenende in Rheinhessen',
        m: '7 Min. Lesezeit'
      }, {
        cat: 'HOCHZEITEN',
        t: 'Checkliste: Hochzeit im Weingut',
        m: '6 Min. Lesezeit'
      }]
    },
    faq: {
      over: 'Häufige Fragen',
      title: 'Gut zu wissen',
      items: [{
        q: 'Kann ich Weine direkt online bestellen?',
        a: 'Ja. Unser Weinshop liefert deutschlandweit innerhalb von 2–4 Werktagen. Ab 12 Flaschen liefern wir versandkostenfrei.'
      }, {
        q: 'Wie buche ich ein Zimmer im Weinhotel?',
        a: 'Buchen Sie direkt über die Seite „Weinhotel" oder telefonisch. Frühstück mit regionalen Produkten ist immer inklusive.'
      }, {
        q: 'Was kostet eine Hochzeit im Weingut?',
        a: 'Unsere Hochzeitspakete beginnen bei einer Raummiete für bis zu 120 Gäste. Senden Sie uns eine Anfrage für ein individuelles Angebot.'
      }, {
        q: 'Bieten Sie Tagungen und Firmenevents an?',
        a: 'Ja. Vom Seminarraum bis zum Teambuilding mit Weinprobe — inklusive Technik, Verpflegung und optionaler Übernachtung.'
      }, {
        q: 'Sind Ihre Weine biologisch und vegan?',
        a: 'Alle unsere Weine stammen aus zertifiziert biologischem Anbau. Viele sind zusätzlich vegan — gekennzeichnet mit dem BIO- und VEGAN-Siegel.'
      }]
    },
    news: {
      over: 'Newsletter',
      title: 'Bleiben Sie in Verbindung',
      body: 'Neue Jahrgänge, Termine im Weingut und Angebote für Hotel und Events — etwa einmal im Monat, nie mehr.',
      ph: 'Ihre E-Mail-Adresse',
      cta: 'ANMELDEN',
      note: 'Mit der Anmeldung stimmen Sie unserer Datenschutzerklärung zu. Abmeldung jederzeit möglich.',
      ok: 'Danke! Bitte bestätigen Sie die E-Mail in Ihrem Postfach.'
    },
    footer: {
      blurb: 'Familiengeführtes Bio-Weingut, Weinhotel und Eventdestination in Ingelheim, Rheinhessen.',
      cols: [{
        head: 'WEINGUT',
        items: ['Über uns', 'Bio-Weingut', 'Nachhaltigkeit', 'Weinberge', 'Kellerführungen']
      }, {
        head: 'WEINSHOP',
        items: ['Weißwein', 'Rotwein', 'Rosé', 'Weinpakete', 'Gutscheine']
      }, {
        head: 'AUFENTHALT',
        items: ['Weinhotel', 'Arrangements', 'Hochzeiten', 'Firmenevents', 'Private Events']
      }, {
        head: 'SERVICE',
        items: ['Eventkalender', 'Aktuelles', 'FAQ', 'Kontakt', 'Anfahrt']
      }],
      visit: 'Besuchen Sie uns',
      address: ['Weingut Wasem Doppelstück', 'Burkhard Wasem', 'Stiegelgasse 50', '55218 Ingelheim'],
      rights: '© 2026 Weingut Wasem Doppelstück · Alle Rechte vorbehalten',
      legal: ['Impressum', 'Datenschutz', 'AGB']
    }
  },
  en: {
    locale: 'en',
    nav: {
      tagline: 'WINERY · WINE HOTEL · EVENTS',
      links: [{
        id: 'weingut',
        label: 'WINERY',
        cols: [{
          head: 'The House',
          items: ['About Us', 'The Family', 'Organic Estate', 'Sustainability']
        }, {
          head: 'Experience',
          items: ['Vineyards', 'Wine Tastings', 'Cellar Tours', 'Our Wines']
        }]
      }, {
        id: 'weinshop',
        label: 'WINE SHOP',
        cols: [{
          head: 'Range',
          items: ['White Wine', 'Red Wine', 'Rosé', 'Sparkling']
        }, {
          head: 'More',
          items: ['Wine Sets', 'Gift Ideas', 'Bestsellers', 'Vouchers']
        }]
      }, {
        id: 'weinhotel',
        label: 'WINE HOTEL',
        cols: [{
          head: 'Stay',
          items: ['Rooms & Suites', 'Rates', 'Packages', 'Wine Weekends']
        }, {
          head: 'Service',
          items: ['Offers', 'FAQ', 'Book Now']
        }]
      }, {
        id: 'hochzeiten',
        label: 'WEDDINGS',
        cols: [{
          head: 'Celebrate',
          items: ['Wedding Venue', 'Free Ceremony', 'Reception']
        }, {
          head: 'Planning',
          items: ['Packages & Pricing', 'Gallery', 'References', 'Make Enquiry']
        }]
      }, {
        id: 'firmenevents',
        label: 'CORPORATE',
        cols: [{
          head: 'Formats',
          items: ['Conferences', 'Seminars', 'Workshops', 'Incentives']
        }, {
          head: 'More',
          items: ['Team Building', 'Corporate Tastings', 'Packages', 'Enquiry']
        }]
      }, {
        id: 'aktuelles',
        label: 'JOURNAL',
        cols: [{
          head: 'Magazine',
          items: ['Wine Knowledge', 'Rheinhessen', 'Weddings', 'News']
        }, {
          head: 'Dates',
          items: ['Event Calendar', 'Private Events', 'Contact']
        }]
      }],
      book: 'BOOK NOW'
    },
    hero: {
      over: 'Family Winery · Ingelheim, Rheinhessen',
      title: ['Character.', 'Origin.', 'Craft.'],
      sub: 'Welcome to Wasem Doppelstück — winery, wine hotel and event destination in the heart of Rheinhessen. A place where you are welcomed.',
      ctaA: 'DISCOVER WINES',
      ctaB: 'PLAN A STAY'
    },
    intent: {
      over: 'Your path to us',
      title: 'What would you like to experience?',
      paths: [{
        id: 'weinshop',
        icon: 'bottle',
        name: 'Discover wine',
        sub: 'Organic wines from the grower'
      }, {
        id: 'weinhotel',
        icon: 'bed',
        name: 'Book the hotel',
        sub: 'Stay among the vineyards'
      }, {
        id: 'hochzeiten',
        icon: 'rings',
        name: 'Plan a wedding',
        sub: 'Marry at the estate'
      }, {
        id: 'firmen',
        icon: 'briefcase',
        name: 'Host a conference',
        sub: 'Corporate events & seminars'
      }, {
        id: 'private',
        icon: 'party',
        name: 'Throw a party',
        sub: 'Private occasions & pleasure'
      }]
    },
    trust: [{
      icon: 'leaf',
      t: 'Certified Organic',
      s: 'Ecological farming'
    }, {
      icon: 'family',
      t: 'Family Estate',
      s: 'For generations'
    }, {
      icon: 'hand',
      t: 'Hand-Harvested',
      s: 'Selective hand-picking'
    }, {
      icon: 'map',
      t: 'Rheinhessen',
      s: 'Origin with character'
    }],
    shop: {
      over: 'Wine Shop',
      title: 'Wines with character',
      body: 'Fresh whites, profound reds, lively rosés — all organically grown, all carrying the signature of our sites.',
      cta: 'VIEW ALL WINES',
      cross: 'Give the gift of pleasure — see our gift ideas →'
    },
    hotel: {
      over: 'Wine Hotel',
      title: 'Sleep among\nthe vines',
      body: 'Our rooms and suites blend quiet, nature and the warmth of the Wasem family. Wake up overlooking the vineyards of Rheinhessen.',
      cta: 'ROOMS & RATES',
      rooms: [{
        n: 'Vineyard Suite',
        m: 'from € 180 / night'
      }, {
        n: 'Estate Room',
        m: 'from € 120 / night'
      }, {
        n: 'Garden View',
        m: 'from € 140 / night'
      }, {
        n: 'Tower Room',
        m: 'from € 160 / night'
      }],
      cross: 'Stay longer — discover our wine weekends →'
    },
    wedding: {
      over: 'Weddings',
      title: 'Marry where\nthe wine grows',
      body: 'A free ceremony among the vines, celebrated in the historic estate house. We craft your day with heart, craftsmanship and regional cuisine.',
      ctaA: 'MAKE AN ENQUIRY',
      ctaB: 'VIEW GALLERY',
      stats: [{
        n: '120',
        l: 'Guests in the estate'
      }, {
        n: '2',
        l: 'On-site locations'
      }, {
        n: '15',
        l: 'Hotel rooms'
      }]
    },
    biz: {
      over: 'For Business',
      title: 'Meet & celebrate',
      cards: [{
        id: 'firmen',
        icon: 'briefcase',
        t: 'Corporate Events',
        s: 'Conferences, seminars and workshops in inspiring surroundings — including tasting and overnight stay.',
        cta: 'Enquire about meetings'
      }, {
        id: 'private',
        icon: 'glass',
        t: 'Private Events',
        s: 'Birthdays, parties, family and Christmas celebrations. We host your occasion personally.',
        cta: 'Enquire about a party'
      }]
    },
    events: {
      over: 'Event Calendar',
      title: 'Coming up at the estate',
      cta: 'ALL DATES',
      list: [{
        d: '14',
        mo: 'JUN',
        y: '2026',
        t: 'Summer wine tasting in the vineyard',
        cat: 'TASTING'
      }, {
        d: '28',
        mo: 'JUN',
        y: '2026',
        t: 'Winemaker BBQ & open cellar',
        cat: 'PLEASURE'
      }, {
        d: '12',
        mo: 'JUL',
        y: '2026',
        t: 'Rosé evening on the terrace',
        cat: 'TASTING'
      }, {
        d: '06',
        mo: 'SEP',
        y: '2026',
        t: 'Open vineyards day',
        cat: 'FAMILY'
      }]
    },
    journal: {
      over: 'Journal',
      title: 'From the estate',
      cta: 'TO THE MAGAZINE',
      posts: [{
        cat: 'WINE KNOWLEDGE',
        t: 'What organic wine really means',
        m: '5 min read'
      }, {
        cat: 'RHEINHESSEN',
        t: 'A weekend in Rheinhessen',
        m: '7 min read'
      }, {
        cat: 'WEDDINGS',
        t: 'Checklist: a wedding at the estate',
        m: '6 min read'
      }]
    },
    faq: {
      over: 'Frequently Asked',
      title: 'Good to know',
      items: [{
        q: 'Can I order wines directly online?',
        a: 'Yes. Our wine shop ships across Germany within 2–4 business days. Shipping is free from 12 bottles.'
      }, {
        q: 'How do I book a room at the wine hotel?',
        a: 'Book directly via the "Wine Hotel" page or by phone. Breakfast with regional produce is always included.'
      }, {
        q: 'What does a wedding at the estate cost?',
        a: 'Our wedding packages start with a venue hire for up to 120 guests. Send us an enquiry for an individual quote.'
      }, {
        q: 'Do you host conferences and corporate events?',
        a: 'Yes. From the seminar room to team building with a wine tasting — including technology, catering and optional overnight stays.'
      }, {
        q: 'Are your wines organic and vegan?',
        a: 'All of our wines are certified organically grown. Many are also vegan — marked with the BIO and VEGAN seals.'
      }]
    },
    news: {
      over: 'Newsletter',
      title: 'Stay in touch',
      body: 'New vintages, dates at the estate and offers for the hotel and events — about once a month, never more.',
      ph: 'Your email address',
      cta: 'SUBSCRIBE',
      note: 'By subscribing you agree to our privacy policy. Unsubscribe at any time.',
      ok: 'Thank you! Please confirm the email in your inbox.'
    },
    footer: {
      blurb: 'Family-run organic winery, wine hotel and event destination in Ingelheim, Rheinhessen.',
      cols: [{
        head: 'WINERY',
        items: ['About Us', 'Organic Estate', 'Sustainability', 'Vineyards', 'Cellar Tours']
      }, {
        head: 'WINE SHOP',
        items: ['White Wine', 'Red Wine', 'Rosé', 'Wine Sets', 'Vouchers']
      }, {
        head: 'STAY',
        items: ['Wine Hotel', 'Packages', 'Weddings', 'Corporate', 'Private Events']
      }, {
        head: 'SERVICE',
        items: ['Event Calendar', 'Journal', 'FAQ', 'Contact', 'Directions']
      }],
      visit: 'Visit us',
      address: ['Weingut Wasem Doppelstück', 'Burkhard Wasem', 'Stiegelgasse 50', '55218 Ingelheim'],
      rights: '© 2026 Weingut Wasem Doppelstück · All rights reserved',
      legal: ['Imprint', 'Privacy', 'Terms']
    }
  }
};
Object.assign(window, {
  WIcon,
  WPlaceholder,
  WMedia,
  WImg,
  WVideo,
  WC
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-extras.jsx
try { (() => {
/* ── home-extras.jsx ───────────────────────────────────────────────
 * Eventkalender preview · Aktuelles/Journal · FAQ accordion ·
 * Newsletter signup · Footer with full sitemap.
 * ------------------------------------------------------------------ */
const X_PAD = 'clamp(20px, 5vw, 72px)';
const X_MAXW = 1240;

/* ── EVENTKALENDER ───────────────────────────────────────────────── */
function WEvents({
  lang
}) {
  const t = window.WC[lang].events;
  return /*#__PURE__*/React.createElement("section", {
    id: "eventkalender",
    style: {
      background: 'var(--color-bottle-black)',
      padding: `clamp(56px,7vw,104px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: X_MAXW,
      margin: '0 auto',
      padding: `0 ${X_PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Over, {
    dark: true
  }, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(30px,3.4vw,46px)',
      color: 'var(--color-warm-ivory)',
      margin: 0,
      lineHeight: 1.04
    }
  }, t.title)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('outline-light')
  }, t.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(246,241,232,0.16)'
    }
  }, t.list.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'grid',
      gridTemplateColumns: '92px 1fr auto auto',
      alignItems: 'center',
      gap: 'clamp(16px,3vw,40px)',
      textDecoration: 'none',
      color: 'inherit',
      padding: 'clamp(18px,2.4vw,28px) 0',
      borderBottom: '1px solid rgba(246,241,232,0.16)',
      transition: 'opacity 200ms'
    },
    onMouseEnter: e2 => e2.currentTarget.style.opacity = '0.62',
    onMouseLeave: e2 => e2.currentTarget.style.opacity = '1'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px,3.6vw,48px)',
      fontWeight: 500,
      color: 'var(--color-warm-ivory)'
    }
  }, e.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: 'var(--color-vineyard-soil)',
      marginTop: 6
    }
  }, e.mo, " ", e.y)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(19px,1.9vw,26px)',
      fontWeight: 500,
      color: 'var(--color-warm-ivory)',
      lineHeight: 1.2
    }
  }, e.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: 'rgba(246,241,232,0.6)',
      border: '1px solid rgba(246,241,232,0.3)',
      borderRadius: 9999,
      padding: '5px 12px',
      justifySelf: 'start'
    }
  }, e.cat), /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 18,
    stroke: 1.4,
    color: "var(--color-rheinhessen-sand)"
  })))))));
}

/* ── AKTUELLES / JOURNAL ─────────────────────────────────────────── */
function WJournal({
  lang
}) {
  const t = window.WC[lang].journal;
  const tones = ['sand', 'green', 'cream'];
  const imgs = [window.WMedia.bannerSpaet, window.WMedia.vineyardWide, window.WMedia.weddingHut];
  return /*#__PURE__*/React.createElement("section", {
    id: "aktuelles",
    style: {
      background: 'var(--color-warm-ivory)',
      padding: `clamp(56px,7vw,104px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: X_MAXW,
      margin: '0 auto',
      padding: `0 ${X_PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: sectionH2
  }, t.title)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('outline')
  }, t.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'clamp(16px,2vw,28px)'
    }
  }, t.posts.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--color-white)',
      border: '1px solid var(--border-default)',
      height: '100%'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.querySelector('.jt').style.color = 'var(--text-accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.querySelector('.jt').style.color = 'var(--text-primary)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200
    }
  }, /*#__PURE__*/React.createElement(WImg, {
    src: imgs[i % 3],
    label: p.cat,
    tone: tones[i % 3],
    position: "center"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(20px,2vw,28px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      fontWeight: 600,
      letterSpacing: '0.16em',
      color: 'var(--text-accent)'
    }
  }, p.cat), /*#__PURE__*/React.createElement("h3", {
    className: "jt",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(20px,2vw,26px)',
      lineHeight: 1.2,
      margin: 0,
      transition: 'color 200ms',
      textWrap: 'pretty'
    }
  }, p.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 'auto'
    }
  }, p.m))))))));
}

/* ── FAQ ACCORDION ───────────────────────────────────────────────── */
function WFaq({
  lang
}) {
  const t = window.WC[lang].faq;
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: 'var(--color-label-cream)',
      padding: `clamp(56px,7vw,104px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: '0 auto',
      padding: `0 ${X_PAD}`,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.7fr) minmax(0,1.3fr)',
      gap: 'clamp(28px,5vw,72px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sectionH2,
      position: 'sticky',
      top: 96
    }
  }, t.title))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)'
    }
  }, t.items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 'clamp(18px,2vw,24px) 0',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(17px,1.7vw,22px)',
        fontWeight: 500,
        color: 'var(--text-primary)',
        lineHeight: 1.25
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        textWrap: 'pretty'
      }
    }, it.q), /*#__PURE__*/React.createElement(WIcon, {
      name: "chevron",
      size: 18,
      stroke: 1.5,
      color: "var(--color-vineyard-soil)",
      style: {
        flexShrink: 0,
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform 240ms'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: isOpen ? 220 : 0,
        opacity: isOpen ? 1 : 0,
        transition: 'max-height 320ms cubic-bezier(0.4,0,0.2,1), opacity 240ms'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        fontWeight: 300,
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
        margin: 0,
        padding: '0 0 24px',
        maxWidth: 540
      }
    }, it.a)));
  })))));
}

/* ── NEWSLETTER ──────────────────────────────────────────────────── */
function WNewsletter({
  lang
}) {
  const t = window.WC[lang].news;
  const [val, setVal] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (val.trim()) setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--color-bottle-black)',
      overflow: 'hidden',
      padding: `clamp(64px,8vw,120px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '40vw',
      fontWeight: 500,
      color: '#fff',
      opacity: 0.03,
      lineHeight: 0.8,
      right: '-4vw',
      top: '-12vw',
      userSelect: 'none',
      pointerEvents: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 720,
      margin: '0 auto',
      padding: `0 ${X_PAD}`,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Over, {
    dark: true
  }, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: 'clamp(32px,4.4vw,56px)',
      color: 'var(--color-warm-ivory)',
      margin: '0 0 18px',
      lineHeight: 1.05
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(14px,1.2vw,16px)',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.6)',
      maxWidth: 480,
      margin: '0 auto 36px'
    }
  }, t.body), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--color-rheinhessen-sand)',
      padding: '16px 24px',
      border: '1px solid rgba(246,241,232,0.2)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "star",
    size: 18,
    stroke: 1.4,
    color: "var(--color-rheinhessen-sand)"
  }), t.ok) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: 0,
      maxWidth: 460,
      margin: '0 auto',
      border: '1px solid rgba(246,241,232,0.28)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: val,
    onChange: e => setVal(e.target.value),
    placeholder: t.ph,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--color-warm-ivory)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      padding: '15px 18px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.12em',
      padding: '0 22px',
      textTransform: 'uppercase'
    }
  }, t.cta)), !sent && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'rgba(246,241,232,0.4)',
      maxWidth: 400,
      margin: '18px auto 0',
      lineHeight: 1.5
    }
  }, t.note))));
}

/* ── FOOTER ──────────────────────────────────────────────────────── */
function WFooter({
  lang,
  onLang
}) {
  const t = window.WC[lang].footer;
  const nav = window.WC[lang].nav;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-bottle-black)',
      borderTop: '1px solid rgba(246,241,232,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: X_MAXW,
      margin: '0 auto',
      padding: `clamp(56px,6vw,88px) ${X_PAD} 40px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) repeat(4, minmax(0,1fr))',
      gap: 'clamp(24px,3vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      fontWeight: 500,
      color: 'var(--color-warm-ivory)',
      lineHeight: 0.9
    }
  }, "W"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      fontWeight: 500,
      letterSpacing: '0.22em',
      color: 'rgba(246,241,232,0.75)',
      textTransform: 'uppercase',
      lineHeight: 1.55
    }
  }, "WASEM", /*#__PURE__*/React.createElement("br", null), "DOPPELST\xDCCK")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.55)',
      margin: '0 0 24px'
    }
  }, t.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: '0.18em',
      color: 'var(--color-vineyard-soil)',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, t.visit), t.address.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(246,241,232,0.6)',
      lineHeight: 1.6
    }
  }, a))), t.cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: '0.18em',
      color: 'rgba(246,241,232,0.45)',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, c.head), c.items.map((it, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(246,241,232,0.7)',
      textDecoration: 'none',
      transition: 'color 180ms',
      width: 'fit-content'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-warm-ivory)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(246,241,232,0.7)'
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 'clamp(40px,5vw,64px)',
      paddingTop: 28,
      borderTop: '1px solid rgba(246,241,232,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'rgba(246,241,232,0.4)'
    }
  }, t.rights), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, t.legal.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'rgba(246,241,232,0.55)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid rgba(246,241,232,0.22)'
    }
  }, ['de', 'en'].map(L => /*#__PURE__*/React.createElement("button", {
    key: L,
    onClick: () => onLang(L),
    style: {
      background: lang === L ? 'rgba(246,241,232,0.92)' : 'transparent',
      color: lang === L ? 'var(--color-bottle-black)' : 'rgba(246,241,232,0.55)',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 9px',
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      fontWeight: 600,
      letterSpacing: '0.1em'
    }
  }, L.toUpperCase())))))));
}
Object.assign(window, {
  WEvents,
  WJournal,
  WFaq,
  WNewsletter,
  WFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-extras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-nav.jsx
try { (() => {
/* ── home-nav.jsx ──────────────────────────────────────────────────
 * Dark fixed mega-nav with per-silo dropdown panels, language toggle,
 * search + cart. Reads bilingual copy from window.WC[lang].
 * ------------------------------------------------------------------ */
function WDHomeNav({
  lang,
  onLang,
  cartCount = 0
}) {
  const t = window.WC[lang];
  const [open, setOpen] = React.useState(null); // hovered silo id
  const [scrolled, setScrolled] = React.useState(false);
  const closeTimer = React.useRef(null);

  // Solid bar only once the page is scrolled; otherwise a soft top-down
  // gradient so the header melts into the hero video instead of a hard edge.
  React.useEffect(() => {
    const onScroll = e => {
      const tgt = e && e.target && e.target !== document && typeof e.target.scrollTop === 'number' ? e.target.scrollTop : 0;
      const y = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0, document.body.scrollTop || 0, tgt);
      setScrolled(y > 12);
    };
    onScroll();
    // capture:true also catches scroll from a nested scroll container
    window.addEventListener('scroll', onScroll, {
      passive: true,
      capture: true
    });
    return () => window.removeEventListener('scroll', onScroll, {
      capture: true
    });
  }, []);
  const solid = scrolled || open;
  const enter = id => {
    clearTimeout(closeTimer.current);
    setOpen(id);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };
  const activeLink = t.nav.links.find(l => l.id === open);
  return /*#__PURE__*/React.createElement("header", {
    onMouseLeave: leave,
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      borderBottom: solid ? '1px solid rgba(246,241,232,0.10)' : '1px solid transparent',
      transition: 'border-color 220ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg, rgba(14,14,13,0.78) 0%, rgba(14,14,13,0.40) 46%, transparent 100%)',
      opacity: solid ? 0 : 1,
      transition: 'opacity 350ms ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'var(--color-bottle-black)',
      opacity: solid ? 1 : 0,
      transition: 'opacity 350ms ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      padding: '0 clamp(20px, 4vw, 56px)',
      maxWidth: 1600,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      flexShrink: 0,
      marginRight: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 500,
      color: 'var(--color-warm-ivory)',
      lineHeight: 0.9
    }
  }, "W"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 8.5,
      fontWeight: 500,
      letterSpacing: '0.22em',
      color: 'rgba(246,241,232,0.75)',
      textTransform: 'uppercase',
      lineHeight: 1.55
    }
  }, "WASEM", /*#__PURE__*/React.createElement("br", null), "DOPPELST\xDCCK")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(14px, 1.8vw, 30px)',
      height: '100%'
    }
  }, t.nav.links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onMouseEnter: () => enter(l.id),
    onClick: () => enter(l.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: open === l.id ? 'var(--color-warm-ivory)' : 'rgba(246,241,232,0.62)',
      borderBottom: open === l.id ? '1px solid var(--color-rheinhessen-sand)' : '1px solid transparent',
      transition: 'color 200ms ease'
    }
  }, l.label, /*#__PURE__*/React.createElement(WIcon, {
    name: "chevron",
    size: 11,
    stroke: 1.5,
    style: {
      opacity: 0.5,
      transform: open === l.id ? 'rotate(180deg)' : 'none',
      transition: 'transform 200ms ease'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexShrink: 0,
      marginLeft: 'auto',
      paddingLeft: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      border: '1px solid rgba(246,241,232,0.22)'
    }
  }, ['de', 'en'].map(L => /*#__PURE__*/React.createElement("button", {
    key: L,
    onClick: () => onLang(L),
    style: {
      background: lang === L ? 'rgba(246,241,232,0.95)' : 'transparent',
      color: lang === L ? 'var(--color-bottle-black)' : 'rgba(246,241,232,0.6)',
      border: 'none',
      cursor: 'pointer',
      padding: '5px 9px',
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      fontWeight: 600,
      letterSpacing: '0.1em',
      transition: 'background 200ms, color 200ms'
    }
  }, L.toUpperCase()))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "search",
    size: 18,
    color: "rgba(246,241,232,0.8)"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cart",
    style: {
      ...iconBtn,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "bottle",
    size: 18,
    color: "rgba(246,241,232,0.8)"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      right: -7,
      background: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      borderRadius: '50%',
      width: 15,
      height: 15,
      fontSize: 8.5,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      textDecoration: 'none',
      background: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.12em',
      padding: '9px 16px',
      textTransform: 'uppercase'
    }
  }, t.nav.book))), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => clearTimeout(closeTimer.current),
    onMouseLeave: leave,
    style: {
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      maxHeight: open ? 360 : 0,
      opacity: open ? 1 : 0,
      transition: 'max-height 280ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease',
      background: 'var(--color-bottle-black)'
    }
  }, activeLink && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1600,
      margin: '0 auto',
      padding: '8px clamp(20px,4vw,56px) 40px',
      display: 'flex',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 30,
      fontWeight: 500,
      color: 'var(--color-warm-ivory)',
      lineHeight: 1.1
    }
  }, activeLink.label.charAt(0) + activeLink.label.slice(1).toLowerCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--color-vineyard-soil)',
      margin: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      color: 'var(--color-rheinhessen-sand)',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, lang === 'de' ? 'Übersicht' : 'Overview', " ", /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, activeLink.cols.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: '0.18em',
      color: 'var(--color-vineyard-soil)',
      textTransform: 'uppercase'
    }
  }, c.head), c.items.map((it, ii) => /*#__PURE__*/React.createElement("a", {
    key: ii,
    href: "#",
    style: megaItem,
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-warm-ivory)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(246,241,232,0.65)'
  }, it))))))));
}
const iconBtn = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: 0
};
const megaItem = {
  color: 'rgba(246,241,232,0.65)',
  textDecoration: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: 13.5,
  fontWeight: 400,
  transition: 'color 180ms ease',
  lineHeight: 1
};
Object.assign(window, {
  WDHomeNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-sections.jsx
try { (() => {
/* ── home-sections.jsx ─────────────────────────────────────────────
 * Hero, intent path-picker, trust strip, and the revenue-silo teasers
 * (Weinshop, Weinhotel, Hochzeiten, Firmen/Private events).
 * ------------------------------------------------------------------ */

/* Scroll-reveal wrapper — respects prefers-reduced-motion.
 * Defaults to VISIBLE whenever the page is hidden (static capture / print /
 * background tab) or reduced-motion is requested, so content is never stuck
 * invisible. Only runs the fade-up when the page is actually on screen. */
function Reveal({
  children,
  delay = 0,
  y = 18,
  style = {}
}) {
  const ref = React.useRef(null);
  const canAnimate = typeof window !== 'undefined' && document.visibilityState === 'visible' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [shown, setShown] = React.useState(!canAnimate);
  React.useEffect(() => {
    if (shown) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    if (el) io.observe(el);
    // Safety net: never leave content invisible if IO doesn't fire.
    const fallback = setTimeout(() => setShown(true), 700);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      ...style
    }
  }, children);
}

/* Small overline label */
function Over({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(246,241,232,0.5)' : 'var(--text-muted)',
      marginBottom: 14
    }
  }, children);
}
const PAD = 'clamp(20px, 5vw, 72px)';
const MAXW = 1240;

/* ── HERO ────────────────────────────────────────────────────────── */
function WHero({
  lang
}) {
  const t = window.WC[lang].hero;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'radial-gradient(135% 115% at 14% 24%, #1C1A15 0%, #15130F 40%, var(--color-bottle-black) 78%)',
      overflow: 'hidden',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(WVideo, {
    src: window.WMedia.heroVideo,
    poster: window.WMedia.heroPoster,
    label: "VINEYARD \xB7 GOLDEN HOUR",
    tone: "dark",
    position: "center"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '52vw',
      fontWeight: 500,
      color: '#fff',
      opacity: 0.05,
      lineHeight: 0.8,
      right: '-6vw',
      bottom: '-14vw',
      userSelect: 'none',
      pointerEvents: 'none',
      mixBlendMode: 'overlay'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(0deg, rgba(14,14,13,0.60) 0%, transparent 30%),' + 'linear-gradient(90deg, rgba(40,26,12,0.28) 0%, rgba(40,26,12,0.10) 50%, transparent 80%),' + 'linear-gradient(90deg, var(--color-bottle-black) 0%, rgba(14,14,13,0.88) 14%, rgba(14,14,13,0.62) 34%, rgba(14,14,13,0.28) 58%, rgba(14,14,13,0.08) 78%, transparent 92%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `clamp(70px,11vh,140px) ${PAD} clamp(56px,8vh,96px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--color-vineyard-soil)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-rheinhessen-sand)'
    }
  }, t.over))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(52px, 8vw, 104px)',
      lineHeight: 0.98,
      letterSpacing: '-0.015em',
      color: 'var(--color-warm-ivory)',
      margin: 0
    }
  }, t.title.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontStyle: i === 1 ? 'italic' : 'normal'
    }
  }, line)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(15px,1.4vw,18px)',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.66)',
      maxWidth: 460,
      margin: '32px 0 40px'
    }
  }, t.sub)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('light')
  }, t.ctaA, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("a", {
    href: "#stay",
    style: btn('outline-light')
  }, t.ctaB, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })))))));
}

/* ── INTENT PATH-PICKER ──────────────────────────────────────────── */
function WIntent({
  lang
}) {
  const t = window.WC[lang].intent;
  const [hov, setHov] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-warm-ivory)',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`,
      transform: 'translateY(-40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-white)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      padding: 'clamp(22px,3vw,32px) clamp(20px,3vw,36px) clamp(16px,2vw,22px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(24px,3vw,34px)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, t.over)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      borderTop: '1px solid var(--border-default)'
    }
  }, t.paths.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: '#' + p.id,
    onMouseEnter: () => setHov(p.id),
    onMouseLeave: () => setHov(null),
    style: {
      position: 'relative',
      textDecoration: 'none',
      color: 'inherit',
      padding: 'clamp(22px,2.6vw,34px) clamp(14px,1.6vw,22px) clamp(20px,2.4vw,30px)',
      borderRight: i < t.paths.length - 1 ? '1px solid var(--border-default)' : 'none',
      background: hov === p.id ? 'var(--color-bottle-black)' : 'transparent',
      transition: 'background 240ms ease',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 168
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: p.icon,
    size: 28,
    stroke: 1,
    color: hov === p.id ? 'var(--color-rheinhessen-sand)' : 'var(--color-vineyard-soil)',
    style: {
      transition: 'color 240ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(17px,1.5vw,21px)',
      fontWeight: 500,
      lineHeight: 1.15,
      color: hov === p.id ? 'var(--color-warm-ivory)' : 'var(--text-primary)',
      transition: 'color 240ms',
      marginBottom: 8,
      minHeight: '2.3em',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      lineHeight: 1.4,
      color: hov === p.id ? 'rgba(246,241,232,0.6)' : 'var(--text-muted)',
      transition: 'color 240ms'
    }
  }, p.sub)), /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 15,
    stroke: 1.5,
    color: hov === p.id ? 'var(--color-warm-ivory)' : 'var(--color-rheinhessen-sand)',
    style: {
      transition: 'color 240ms, transform 240ms',
      transform: hov === p.id ? 'translateX(4px)' : 'none'
    }
  })))))));
}

/* ── PRESS + RATINGS BAR ─────────────────────────────────────────── */
function Stars({
  value
}) {
  // five glyphs; partial last star clipped to the fractional remainder
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1,
      lineHeight: 1
    },
    "aria-label": value + ' / 5'
  }, [0, 1, 2, 3, 4].map(i => {
    const fill = Math.max(0, Math.min(1, value - i));
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        fontSize: 13,
        color: 'rgba(14,14,13,0.16)'
      }
    }, "\u2605", /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
        width: fill * 100 + '%',
        color: 'var(--color-harvest-gold)'
      }
    }, "\u2605"));
  }));
}
function RatingBlock({
  initial,
  name,
  value,
  count
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--color-bottle-black)',
      color: 'var(--color-warm-ivory)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 500,
      flexShrink: 0
    }
  }, initial), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, value.toString().replace('.', ',')), /*#__PURE__*/React.createElement(Stars, {
    value: value
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"))));
}
function WPress({
  lang
}) {
  const label = lang === 'de' ? 'Bekannt aus & empfohlen von' : 'As featured & recommended in';
  // typographic homages, not pixel logos — unified muted ink so they read as one wall
  const ink = 'rgba(14,14,13,0.62)';
  const press = [{
    name: 'falstaff',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 27,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      textTransform: 'lowercase'
    }
  }, {
    name: 'Vinum',
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 27,
      fontWeight: 500,
      letterSpacing: '0.01em'
    }
  }, {
    name: 'FEINSCHMECKER',
    pre: 'DER',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '0.04em'
    }
  }, {
    name: 'GAULT&MILLAU',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '0.01em'
    }
  }];
  // one continuous set of wordmarks; rendered twice in the track for a seamless loop
  const Logo = ({
    p
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 4,
      color: ink,
      whiteSpace: 'nowrap',
      marginRight: 'clamp(30px,3.4vw,56px)',
      flexShrink: 0
    }
  }, p.pre && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 10,
      fontWeight: 500,
      fontStyle: 'italic',
      alignSelf: 'flex-start',
      marginTop: 1
    }
  }, p.pre), /*#__PURE__*/React.createElement("span", {
    style: p.style
  }, p.name));
  const fade = 'linear-gradient(90deg, transparent 0, #000 9%, #000 88%, transparent 100%)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-warm-ivory)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes wpress-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .wpress-track { animation: wpress-marquee 26s linear infinite; }
        .wpress-window:hover .wpress-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .wpress-track { animation: none; } }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `clamp(36px,4.5vw,60px) ${PAD}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'clamp(20px,3vw,44px)',
      flexWrap: 'wrap',
      rowGap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(16px,2vw,28px)',
      flex: '1 1 460px',
      minWidth: 0,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      maxWidth: 116,
      lineHeight: 1.5,
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "wpress-window",
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      overflow: 'hidden',
      maskImage: fade,
      WebkitMaskImage: fade
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpress-track",
    style: {
      display: 'flex',
      alignItems: 'center',
      width: 'max-content'
    }
  }, press.map((p, i) => /*#__PURE__*/React.createElement(Logo, {
    key: 'a' + i,
    p: p
  })), press.map((p, i) => /*#__PURE__*/React.createElement(Logo, {
    key: 'b' + i,
    p: p
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(18px,2.2vw,32px)',
      flexWrap: 'nowrap',
      flexShrink: 0,
      paddingLeft: 'clamp(0px,2vw,28px)',
      borderLeft: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(RatingBlock, {
    initial: "G",
    name: "Google",
    value: 4.8,
    count: 420
  }), /*#__PURE__*/React.createElement(RatingBlock, {
    initial: "T",
    name: "Tripadvisor",
    value: 4.7,
    count: 298
  })))));
}

/* ── TRUST STRIP ─────────────────────────────────────────────────── */
function WTrust({
  lang
}) {
  const items = window.WC[lang].trust;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-warm-ivory)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 'clamp(18px,2vw,26px) clamp(12px,1.6vw,22px)',
      borderRight: i < 3 ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: it.icon,
    size: 26,
    stroke: 1.1,
    color: "var(--color-vineyard-soil)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--text-primary)',
      marginBottom: 3
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, it.s)))))));
}

/* ── WEINSHOP ────────────────────────────────────────────────────── */
function WShop({
  lang,
  wines
}) {
  const t = window.WC[lang].shop;
  const {
    WineCard
  } = window.WasemDoppelstCkDesignSystem_9fe068;
  const bottle = '../../assets/bottle-sample.png';
  return /*#__PURE__*/React.createElement("section", {
    id: "weinshop",
    style: {
      background: 'var(--color-warm-ivory)',
      padding: `clamp(56px,7vw,104px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: sectionH2
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sectionBody,
      marginTop: 18
    }
  }, t.body)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('outline')
  }, t.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--border-default)',
      border: '1px solid var(--border-default)'
    }
  }, (wines || []).slice(0, 4).map(w => /*#__PURE__*/React.createElement(WineCard, {
    key: w.id,
    name: w.name,
    vintage: w.vintage,
    price: w.price,
    image: bottle,
    tags: w.tags,
    certifications: w.certs,
    onAddToCart: () => {},
    onClick: () => {},
    href: "#"
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crossLink
  }, t.cross))));
}

/* ── WEINHOTEL ───────────────────────────────────────────────────── */
function WHotel({
  lang
}) {
  const t = window.WC[lang].hotel;
  return /*#__PURE__*/React.createElement("section", {
    id: "stay",
    style: {
      background: 'var(--color-label-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `clamp(48px,6vw,92px) clamp(24px,5vw,80px)`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sectionH2,
      whiteSpace: 'pre-line',
      fontSize: 'clamp(34px,4vw,56px)'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sectionBody,
      marginTop: 22,
      maxWidth: 420
    }
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 28px',
      margin: '32px 0 36px',
      maxWidth: 420
    }
  }, t.rooms.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10,
      padding: '12px 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 500
    }
  }, r.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-accent)',
      whiteSpace: 'nowrap'
    }
  }, r.m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('dark')
  }, t.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crossLinkInline
  }, t.cross)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1.3fr 1fr',
      gap: 2,
      background: 'var(--color-label-cream)',
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.hotelHero,
    label: "SUITE \xB7 VINEYARD VIEW",
    tone: "green",
    position: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.hotelKlassik,
    label: "WASEM KLASSIK",
    tone: "sand",
    position: "center"
  }), /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.hotelStamm,
    label: "STAMMHAUS",
    tone: "cream",
    position: "center"
  })))));
}

/* ── HOCHZEITEN ──────────────────────────────────────────────────── */
function WWedding({
  lang
}) {
  const t = window.WC[lang].wedding;
  return /*#__PURE__*/React.createElement("section", {
    id: "hochzeiten",
    style: {
      position: 'relative',
      background: 'var(--color-vine-leaf)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement(WImg, {
    src: window.WMedia.weddingArch,
    label: "CEREMONY AMONG THE VINES",
    tone: "green",
    position: "center"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(44,58,38,0.55), rgba(44,58,38,0.78))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: '44vw',
      fontWeight: 500,
      color: '#fff',
      opacity: 0.04,
      lineHeight: 0.8,
      left: '-8vw',
      bottom: '-16vw',
      userSelect: 'none',
      pointerEvents: 'none'
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `clamp(64px,8vw,120px) ${PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 580
    }
  }, /*#__PURE__*/React.createElement(Over, {
    dark: true
  }, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(36px,5vw,64px)',
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      color: 'var(--color-warm-ivory)',
      margin: 0,
      whiteSpace: 'pre-line'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(15px,1.3vw,17px)',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(246,241,232,0.72)',
      maxWidth: 460,
      margin: '26px 0 40px'
    }
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('light')
  }, t.ctaA, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: btn('outline-light')
  }, t.ctaB, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 13,
    stroke: 1.6
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(28px,5vw,72px)',
      flexWrap: 'wrap',
      borderTop: '1px solid rgba(246,241,232,0.18)',
      paddingTop: 32,
      maxWidth: 620
    }
  }, t.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px,4vw,52px)',
      fontWeight: 500,
      color: 'var(--color-warm-ivory)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      letterSpacing: '0.04em',
      color: 'rgba(246,241,232,0.55)',
      marginTop: 8
    }
  }, s.l)))))));
}

/* ── FIRMEN / PRIVATE EVENTS ─────────────────────────────────────── */
function WBiz({
  lang
}) {
  const t = window.WC[lang].biz;
  return /*#__PURE__*/React.createElement("section", {
    id: "firmen",
    style: {
      background: 'var(--color-warm-ivory)',
      padding: `clamp(56px,7vw,104px) 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAXW,
      margin: '0 auto',
      padding: `0 ${PAD}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement(Over, null, t.over), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sectionH2,
      fontSize: 'clamp(30px,3.6vw,48px)'
    }
  }, t.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 2,
      background: 'var(--border-default)',
      border: '1px solid var(--border-default)'
    }
  }, t.cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: i * 90,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("a", {
    id: c.id,
    href: "#",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--color-white)',
      padding: 'clamp(32px,4vw,56px)',
      width: '100%',
      transition: 'background 240ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-label-cream)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--color-white)';
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: c.icon,
    size: 32,
    stroke: 1,
    color: "var(--color-vineyard-soil)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(24px,2.6vw,32px)',
      margin: 0,
      lineHeight: 1.1
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sectionBody,
      fontSize: 15,
      maxWidth: 420,
      margin: 0
    }
  }, c.s), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, c.cta, /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow",
    size: 14,
    stroke: 1.6
  }))))))));
}

/* ── shared style helpers ────────────────────────────────────────── */
const sectionH2 = {
  fontFamily: 'var(--font-display)',
  fontWeight: 500,
  fontSize: 'clamp(30px,3.4vw,46px)',
  lineHeight: 1.04,
  letterSpacing: '-0.01em',
  color: 'var(--text-primary)',
  margin: 0
};
const sectionBody = {
  fontFamily: 'var(--font-body)',
  fontSize: 'clamp(14px,1.2vw,16px)',
  fontWeight: 300,
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
  margin: 0
};
const crossLink = {
  display: 'inline-flex',
  marginTop: 28,
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fontWeight: 400,
  color: 'var(--text-accent)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--color-rheinhessen-sand)',
  paddingBottom: 2
};
const crossLinkInline = {
  fontFamily: 'var(--font-body)',
  fontSize: 12.5,
  color: 'var(--text-accent)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--color-rheinhessen-sand)',
  paddingBottom: 2
};
function btn(kind) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '13px 24px',
    cursor: 'pointer',
    transition: 'background 220ms, color 220ms, border-color 220ms',
    border: '1px solid transparent',
    whiteSpace: 'nowrap'
  };
  const v = {
    dark: {
      background: 'var(--color-bottle-black)',
      color: 'var(--color-warm-ivory)',
      borderColor: 'var(--color-bottle-black)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-bottle-black)'
    },
    light: {
      background: 'var(--color-warm-ivory)',
      color: 'var(--color-bottle-black)',
      borderColor: 'var(--color-warm-ivory)'
    },
    'outline-light': {
      background: 'transparent',
      color: 'var(--color-warm-ivory)',
      borderColor: 'rgba(246,241,232,0.45)'
    }
  };
  return {
    ...base,
    ...(v[kind] || v.dark)
  };
}
Object.assign(window, {
  Reveal,
  Over,
  WHero,
  WIntent,
  WPress,
  WTrust,
  WShop,
  WHotel,
  WWedding,
  WBiz,
  btn,
  sectionH2,
  sectionBody
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.WineCard = __ds_scope.WineCard;

})();
