/* ── home-nav.jsx ──────────────────────────────────────────────────
 * Dark fixed mega-nav with per-silo dropdown panels, language toggle,
 * search + cart. Reads bilingual copy from window.WC[lang].
 * ------------------------------------------------------------------ */
function WDHomeNav({ lang, onLang, cartCount = 0 }) {
  const t = window.WC[lang];
  const [open, setOpen] = React.useState(null);   // hovered silo id
  const [scrolled, setScrolled] = React.useState(false);
  const closeTimer = React.useRef(null);

  // Solid bar only once the page is scrolled; otherwise a soft top-down
  // gradient so the header melts into the hero video instead of a hard edge.
  React.useEffect(() => {
    const onScroll = (e) => {
      const tgt = (e && e.target && e.target !== document && typeof e.target.scrollTop === 'number') ? e.target.scrollTop : 0;
      const y = Math.max(
        window.scrollY || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0,
        tgt
      );
      setScrolled(y > 12);
    };
    onScroll();
    // capture:true also catches scroll from a nested scroll container
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => window.removeEventListener('scroll', onScroll, { capture: true });
  }, []);
  const solid = scrolled || open;

  const enter = (id) => { clearTimeout(closeTimer.current); setOpen(id); };
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(null), 120); };

  const activeLink = t.nav.links.find(l => l.id === open);

  return (
    <header
      onMouseLeave={leave}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        borderBottom: solid ? '1px solid rgba(246,241,232,0.10)' : '1px solid transparent',
        transition: 'border-color 220ms ease',
      }}>

      {/* Background layers — gradient at rest, solid once scrolled/open. Cross-fade. */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,14,13,0.78) 0%, rgba(14,14,13,0.40) 46%, transparent 100%)',
        opacity: solid ? 0 : 1, transition: 'opacity 350ms ease',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'var(--color-bottle-black)',
        opacity: solid ? 1 : 0, transition: 'opacity 350ms ease',
      }} />

      {/* Top bar */}
      <div style={{
        position: 'relative', zIndex: 1,
        height: 72, display: 'flex', alignItems: 'center', gap: 0,
        padding: '0 clamp(20px, 4vw, 56px)', maxWidth: 1600, margin: '0 auto',
      }}>
        {/* Logo */}
        <a href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'});}}
          style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0, marginRight: 'auto' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 500, color: 'var(--color-warm-ivory)', lineHeight: 0.9 }}>W</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 8.5, fontWeight: 500, letterSpacing: '0.22em', color: 'rgba(246,241,232,0.75)', textTransform: 'uppercase', lineHeight: 1.55 }}>
            WASEM<br/>DOPPELSTÜCK
          </span>
        </a>

        {/* Center links */}
        <nav style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(14px, 1.8vw, 30px)', height: '100%' }}>
          {t.nav.links.map(l => (
            <button key={l.id}
              onMouseEnter={() => enter(l.id)}
              onClick={() => enter(l.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', height: '100%',
                display: 'flex', alignItems: 'center', gap: 6, padding: 0,
                fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: open === l.id ? 'var(--color-warm-ivory)' : 'rgba(246,241,232,0.62)',
                borderBottom: open === l.id ? '1px solid var(--color-rheinhessen-sand)' : '1px solid transparent',
                transition: 'color 200ms ease',
              }}>
              {l.label}
              <WIcon name="chevron" size={11} stroke={1.5}
                style={{ opacity: 0.5, transform: open === l.id ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }} />
            </button>
          ))}
        </nav>

        {/* Right cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexShrink: 0, marginLeft: 'auto', paddingLeft: 28 }}>
          {/* Lang toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1px solid rgba(246,241,232,0.22)' }}>
            {['de', 'en'].map(L => (
              <button key={L} onClick={() => onLang(L)}
                style={{
                  background: lang === L ? 'rgba(246,241,232,0.95)' : 'transparent',
                  color: lang === L ? 'var(--color-bottle-black)' : 'rgba(246,241,232,0.6)',
                  border: 'none', cursor: 'pointer', padding: '5px 9px',
                  fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 600,
                  letterSpacing: '0.1em', transition: 'background 200ms, color 200ms',
                }}>{L.toUpperCase()}</button>
            ))}
          </div>
          <button aria-label="Search" style={iconBtn}><WIcon name="search" size={18} color="rgba(246,241,232,0.8)" /></button>
          <button aria-label="Cart" style={{ ...iconBtn, position: 'relative' }}>
            <WIcon name="bottle" size={18} color="rgba(246,241,232,0.8)" />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -5, right: -7, background: 'var(--color-warm-ivory)', color: 'var(--color-bottle-black)', borderRadius: '50%', width: 15, height: 15, fontSize: 8.5, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>
            )}
          </button>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none',
            background: 'var(--color-warm-ivory)', color: 'var(--color-bottle-black)',
            fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
            padding: '9px 16px', textTransform: 'uppercase',
          }}>{t.nav.book}</a>
        </div>
      </div>

      {/* Mega dropdown */}
      <div
        onMouseEnter={() => clearTimeout(closeTimer.current)}
        onMouseLeave={leave}
        style={{
          position: 'relative', zIndex: 1,
          overflow: 'hidden',
          maxHeight: open ? 360 : 0,
          opacity: open ? 1 : 0,
          transition: 'max-height 280ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease',
          background: 'var(--color-bottle-black)',
        }}>
        {activeLink && (
          <div style={{ maxWidth: 1600, margin: '0 auto', padding: '8px clamp(20px,4vw,56px) 40px', display: 'flex', gap: 80 }}>
            <div style={{ minWidth: 200 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 30, fontWeight: 500, color: 'var(--color-warm-ivory)', lineHeight: 1.1 }}>{activeLink.label.charAt(0) + activeLink.label.slice(1).toLowerCase()}</div>
              <div style={{ width: 28, height: 1, background: 'var(--color-vineyard-soil)', margin: '16px 0' }} />
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--color-rheinhessen-sand)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {lang === 'de' ? 'Übersicht' : 'Overview'} <WIcon name="arrow" size={13} stroke={1.5} />
              </a>
            </div>
            <div style={{ display: 'flex', gap: 64 }}>
              {activeLink.cols.map((c, ci) => (
                <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 150 }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--color-vineyard-soil)', textTransform: 'uppercase' }}>{c.head}</div>
                  {c.items.map((it, ii) => (
                    <a key={ii} href="#" style={megaItem}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-warm-ivory)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(246,241,232,0.65)'}>{it}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const iconBtn = { background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 };
const megaItem = { color: 'rgba(246,241,232,0.65)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 400, transition: 'color 180ms ease', lineHeight: 1 };

Object.assign(window, { WDHomeNav });
