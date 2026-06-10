/* ── Navigation component ── export to window ─────────────────── */
function WDNavigation({ currentPage, onNavigate, cartCount = 0 }) {
  const links = [
    { id: 'shop',    label: 'WEINE' },
    { id: 'weingut', label: 'WEINGUT' },
    { id: 'herkunft',label: 'HERKUNFT' },
    { id: 'events',  label: 'EVENTS' },
    { id: 'hotel',   label: 'HOTEL' },
    { id: 'journal', label: 'JOURNAL' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      backgroundColor: 'var(--color-bottle-black)',
      height: 64, display: 'flex', alignItems: 'center',
      padding: '0 48px', gap: 0,
    }}>
      {/* Logo */}
      <button onClick={() => onNavigate('home')} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 10, padding: 0, flexShrink: 0,
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, color: 'var(--color-warm-ivory)', lineHeight: 1 }}>W</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 400, letterSpacing: '0.2em', color: 'rgba(246,241,232,0.75)', textTransform: 'uppercase', lineHeight: 1.5 }}>
          WASEM<br/>DOPPELSTÜCK
        </span>
      </button>

      {/* Nav links */}
      <div style={{ flex: 1, display: 'flex', gap: 28, justifyContent: 'center' }}>
        {links.map(({ id, label }) => (
          <button key={id} onClick={() => onNavigate(id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 0',
            color: currentPage === id ? 'var(--color-warm-ivory)' : 'rgba(246,241,232,0.55)',
            borderBottom: currentPage === id ? '1px solid rgba(246,241,232,0.6)' : '1px solid transparent',
            transition: 'color 220ms, border-color 220ms',
          }}>
            {label}
          </button>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(246,241,232,0.55)' }}>DE</button>
        <button onClick={() => onNavigate('cart')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(246,241,232,0.8)', position: 'relative', display: 'flex' }}>
          <svg width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}>
            <circle cx={9} cy={21} r={1}/><circle cx={20} cy={21} r={1}/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: -6, right: -6, background: 'var(--color-warm-ivory)', color: 'var(--color-bottle-black)', borderRadius: '50%', width: 14, height: 14, fontSize: 8, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

Object.assign(window, { WDNavigation });
