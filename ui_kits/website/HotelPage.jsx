/* ── HotelPage component ── export to window ──────────────────── */
function WDHotelPage({ onNavigate }) {
  const { Button } = window.WasemDoppelstCkDesignSystem_9fe068;

  const rooms = [
    { name: 'Weinberg Suite', size: '48 m²', guests: 2, price: '€ 195', desc: 'Großzügige Suite mit freiem Blick auf unsere Weinberge. Eigene Terrasse, Kingsize-Bett, Badewanne.', bg: 'var(--color-vine-leaf)' },
    { name: 'Gutshof Zimmer', size: '34 m²', guests: 2, price: '€ 149', desc: 'Ruhiges Doppelzimmer im historischen Gutshaus. Warme Materialien, Rheinblick auf Anfrage.', bg: '#3d2c1e' },
    { name: 'Gartenblick Zimmer', size: '28 m²', guests: 2, price: '€ 125', desc: 'Gemütliches Zimmer mit Blick in den begrünten Innenhof. Ideal für Weintourist:innen.', bg: '#4a3828' },
  ];

  return (
    <div style={{ background: 'var(--color-warm-ivory)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'var(--color-bottle-black)', minHeight: '60vh', display: 'flex', alignItems: 'flex-end', padding: '0 48px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '50vw', fontWeight: 500, color: 'white', opacity: 0.03, lineHeight: 0.85, right: '-6vw', top: '-10vw', userSelect: 'none' }}>W</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1240, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'flex-end', gap: 64 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--color-soft-sage)', marginBottom: 16, textTransform: 'uppercase' }}>Weinhotel · Ingelheim</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, color: 'var(--color-warm-ivory)', margin: '0 0 24px' }}>
              Schlafen zwischen<br/>den Reben.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(246,241,232,0.6)', margin: '0 0 36px', maxWidth: 420 }}>
              Unser Weinhotel verbindet die Stille der Weinberge mit dem Komfort eines Boutique-Hotels. Zimmer und Suiten inmitten der Rheinhessener Weinlandschaft.
            </p>
            <Button variant="primary-light">ZIMMER BUCHEN</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            {['Suite', 'Terrasse', 'Weinberg', 'Frühstück'].map((l, i) => (
              <div key={i} style={{ height: 120, background: ['#263321','#3d2c1e','#4a3828','#2a3020'][i], display: 'flex', alignItems: 'flex-end', padding: 10 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.1em', color: 'rgba(246,241,232,0.5)', textTransform: 'uppercase' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 48px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase' }}>Zimmer & Suiten</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 40, margin: 0, lineHeight: 1.05 }}>Ihr Zuhause auf Zeit</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border-subtle)' }}>
          {rooms.map(r => (
            <div key={r.name} style={{ background: 'var(--surface-card)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: r.bg, height: 200, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: 16, left: 20, fontFamily: 'var(--font-display)', fontSize: 80, fontWeight: 500, color: 'white', opacity: 0.08, lineHeight: 1 }}>W</div>
              </div>
              <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, margin: 0, lineHeight: 1.2 }}>{r.name}</h3>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>{r.price}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', color: 'var(--text-muted)' }}>pro Nacht</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 16, fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                  <span>{r.size}</span><span>·</span><span>{r.guests} Personen</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: '0 0 24px', flex: 1 }}>{r.desc}</p>
                <Button variant="secondary" size="sm">ZIMMER BUCHEN</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { WDHotelPage });
