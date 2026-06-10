/* ── EventsPage component ── export to window ─────────────────── */
function WDEventsPage({ onNavigate }) {
  const { Button, Tag } = window.WasemDoppelstCkDesignSystem_9fe068;

  const events = [
    { id: 1, category: 'WEINPROBE', date: 'Jeden Samstag', time: '14:00 Uhr', title: 'Weinprobe Classic', desc: 'Sechs ausgewählte Weine aus unserem Sortiment — begleitet von kleinen Häppchen und Geschichten aus dem Weingut.', price: '€ 35 / Person', spots: 'Plätze verfügbar' },
    { id: 2, category: 'ERLEBNIS', date: 'Mai – Oktober', time: 'Nach Vereinbarung', title: 'Vineyard Walk', desc: 'Spaziergang durch unsere Weinberge mit Erklärungen zu Boden, Reben und Handlese. Abschluss mit Verkostung direkt am Weinberg.', price: '€ 48 / Person', spots: 'Buchung empfohlen' },
    { id: 3, category: 'DINNER', date: 'Fr, 11. Juli 2025', time: '19:00 Uhr', title: 'Winemaker\'s Dinner', desc: 'Mehrgängiges Menü mit sorgfältig abgestimmten Weinen von Wasem Doppelstück — präsentiert von der Familie persönlich.', price: '€ 89 / Person', spots: 'Noch 4 Plätze frei' },
    { id: 4, category: 'WEINGUT', date: 'Sa, 23. August 2025', time: '11:00 – 18:00 Uhr', title: 'Tag des offenen Weinguts', desc: 'Offener Keller, Weinproben, Live-Musik im Innenhof und kulinarische Stände. Eintritt frei — für die ganze Familie.', price: 'Eintritt frei', spots: 'Keine Anmeldung nötig' },
    { id: 5, category: 'HOCHZEIT', date: 'Auf Anfrage', time: 'Ganzjährig', title: 'Feiern & Hochzeiten', desc: 'Ihr besonderer Tag in unserem historischen Gutshaus. Wir gestalten individuelle Feierlichkeiten inmitten der Weinberge.', price: 'Auf Anfrage', spots: 'Jetzt anfragen' },
  ];

  const catColors = { WEINPROBE: 'var(--color-vine-leaf)', ERLEBNIS: 'var(--color-vineyard-soil)', DINNER: '#3d2c1e', WEINGUT: 'var(--color-soft-sage)', HOCHZEIT: 'var(--color-rheinhessen-sand)' };

  return (
    <div style={{ background: 'var(--color-warm-ivory)', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ background: 'var(--color-bottle-black)', padding: '64px 48px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '40vw', fontWeight: 500, color: 'white', opacity: 0.03, lineHeight: 0.85, right: '-4vw', bottom: '-8vw', userSelect: 'none' }}>W</div>
        <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--color-soft-sage)', marginBottom: 14, textTransform: 'uppercase' }}>Erleben</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, color: 'var(--color-warm-ivory)', margin: '0 0 20px' }}>Events & Weinproben</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.7, color: 'rgba(246,241,232,0.55)', maxWidth: 500, margin: 0 }}>
            Vom intimen Winemaker's Dinner bis zum Sommerfest im Weinberg — erleben Sie Wasem Doppelstück hautnah.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border-subtle)' }}>
          {events.map(ev => (
            <div key={ev.id} style={{ background: 'var(--surface-card)', display: 'grid', gridTemplateColumns: '220px 1fr auto', alignItems: 'start', gap: 0 }}>

              {/* Date/category */}
              <div style={{ background: catColors[ev.category] || 'var(--color-label-cream)', padding: '28px 24px', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.16em', color: 'rgba(246,241,232,0.6)', marginBottom: 12, textTransform: 'uppercase' }}>{ev.category}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18, color: 'var(--color-warm-ivory)', lineHeight: 1.3 }}>{ev.date}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'rgba(246,241,232,0.6)', marginTop: 4 }}>{ev.time}</div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 32px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, margin: '0 0 10px', lineHeight: 1.2 }}>{ev.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: '0 0 16px', maxWidth: 520 }}>{ev.desc}</p>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{ev.spots}</div>
              </div>

              {/* Price + CTA */}
              <div style={{ padding: '28px 32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', alignSelf: 'stretch', borderLeft: '1px solid var(--border-subtle)' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22 }}>{ev.price}</div>
                </div>
                <Button variant="primary" size="sm">BUCHEN</Button>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { WDEventsPage });
