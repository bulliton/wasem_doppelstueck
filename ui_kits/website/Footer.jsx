/* ── Footer component ── export to window ─────────────────────── */
function WDFooter({ onNavigate }) {
  const cols = [
    { title: 'WEINE', links: ['Weißweine', 'Rotweine', 'Rosé & Sekt', 'Naturweine', 'Raritäten'] },
    { title: 'WEINGUT', links: ['Über uns', 'Familie Wasem', 'Philosophie', 'Weinberge', 'Herkunft'] },
    { title: 'ERLEBNIS', links: ['Hotel', 'Weinproben', 'Vineyard Walk', 'Events & Feiern', 'Geschenke'] },
    { title: 'SERVICE', links: ['Kontakt', 'Versand & Lieferung', 'Rückgabe', 'Datenschutz', 'Impressum'] },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-bottle-black)', color: 'var(--color-warm-ivory)', padding: '64px 48px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(246,241,232,0.1)' }}>

        {/* Brand column */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 500, lineHeight: 0.85, marginBottom: 16 }}>W</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 400, letterSpacing: '0.18em', opacity: 0.6, marginBottom: 20 }}>WASEM DOPPELSTÜCK</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(246,241,232,0.55)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 220 }}>
            Handgemachte Weine mit Charakter aus dem Herzen von Rheinhessen.
          </p>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', fontSize: '0.9375rem', color: 'rgba(246,241,232,0.45)' }}>
            Familie Wasem
          </div>
        </div>

        {/* Nav columns */}
        {cols.map(col => (
          <div key={col.title}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.16em', marginBottom: 18, opacity: 0.45 }}>{col.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.links.map(link => (
                <a key={link} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(246,241,232,0.55)', textDecoration: 'none', transition: 'color 200ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--color-warm-ivory)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(246,241,232,0.55)'}
                >{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', fontSize: '0.6875rem', color: 'rgba(246,241,232,0.3)', fontFamily: 'var(--font-body)' }}>
        <span>© 2025 Weingut Wasem Doppelstück · Ingelheim, Rheinhessen</span>
        <span style={{ letterSpacing: '0.08em' }}>Alle Preise inkl. MwSt. · 0,75l · Enthält Sulfite</span>
      </div>
    </footer>
  );
}

Object.assign(window, { WDFooter });
