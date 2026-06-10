/* ── WineShop component ── export to window ───────────────────── */
function WDWineShop({ onWineSelect, wines }) {
  const { WineCard, Tag } = window.WasemDoppelstCkDesignSystem_9fe068;
  const [activeFilter, setActiveFilter] = React.useState('alle');
  const bottle = '../../assets/bottle-sample.png';

  const filters = [
    { id: 'alle',   label: 'ALLE' },
    { id: 'weiss',  label: 'WEISSWEIN' },
    { id: 'rot',    label: 'ROTWEIN' },
    { id: 'rosé',   label: 'ROSÉ' },
    { id: 'natural',label: 'NATURWEIN' },
  ];

  const filteredWines = activeFilter === 'alle'
    ? wines
    : activeFilter === 'natural'
      ? wines.filter(w => w.certs && w.certs.length > 0)
      : wines.filter(w => w.category === activeFilter);

  return (
    <div style={{ background: 'var(--color-warm-ivory)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '56px 48px 32px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--color-warm-ivory)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase' }}>Weingut Wasem Doppelstück</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 48, margin: '0 0 32px', lineHeight: 1.05 }}>Unsere Weine</h1>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border-subtle)', marginBottom: -1 }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => setActiveFilter(f.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0 0 12px',
                marginRight: 28,
                color: activeFilter === f.id ? 'var(--text-primary)' : 'var(--text-muted)',
                borderBottom: activeFilter === f.id ? '1.5px solid var(--color-bottle-black)' : '1.5px solid transparent',
                transition: 'color 200ms, border-color 200ms',
              }}>{f.label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Wine grid */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px 80px' }}>
        <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-body)', color: 'var(--text-muted)', padding: '20px 0 24px', letterSpacing: '0.06em' }}>
          {filteredWines.length} Wein{filteredWines.length !== 1 ? 'e' : ''}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'var(--border-subtle)' }}>
          {filteredWines.map(w => (
            <WineCard
              key={w.id}
              name={w.name}
              vintage={w.vintage}
              price={w.price}
              image={bottle}
              tags={w.tags}
              certifications={w.certs}
              onClick={() => onWineSelect(w)}
              href="#"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WDWineShop });
