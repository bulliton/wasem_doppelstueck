/* ── ProductDetail component ── export to window ──────────────── */
function WDProductDetail({ wine, onNavigate, onAddToCart }) {
  const { Button, Tag, Badge } = window.WasemDoppelstCkDesignSystem_9fe068;
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);
  const bottle = '../../assets/bottle-sample.png';
  const w = wine || {
    name: 'WASEM WEISS', vintage: '2022', price: '€ 16,00',
    tags: ['LEHM', 'KALK'], certs: ['BIO', 'VEGAN'], category: 'weiss',
    desc: 'Frisch, elegant und mineralisch. Ein Weißwein mit Klarheit, Struktur und feiner Frucht.',
  };

  const specs = [
    { label: 'Herkunft',    value: 'Ingelheim, Rheinhessen' },
    { label: 'Boden',       value: 'Lehm & Kalk' },
    { label: 'Ausbau',      value: '8 Monate im Edelstahltank' },
    { label: 'Alkohol',     value: '12,5 % vol' },
    { label: 'Trinkreife',  value: '2023 – 2028' },
  ];

  const handleAdd = () => {
    onAddToCart && onAddToCart(w, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div style={{ background: 'var(--color-warm-ivory)', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 48px 0', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
        <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('shop')}>WEINE</span>
        <span style={{ margin: '0 8px', opacity: 0.4 }}>›</span>
        <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('shop')}>{w.category?.toUpperCase() || 'WEISSWEINE'}</span>
        <span style={{ margin: '0 8px', opacity: 0.4 }}>›</span>
        <span style={{ color: 'var(--text-primary)' }}>{w.name} {w.vintage}</span>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 48px 80px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 80, alignItems: 'start' }}>

        {/* Bottle image */}
        <div style={{ background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48, minHeight: 560, position: 'sticky', top: 80 }}>
          <img src={bottle} alt={w.name} style={{ height: 480, width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* Details */}
        <div style={{ paddingTop: 8 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase' }}>
            {w.vintage}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 48, lineHeight: 1.05, margin: '0 0 20px', letterSpacing: '-0.01em' }}>{w.name}</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-secondary)', margin: '0 0 28px' }}>{w.desc}</p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 32 }}>
            {(w.tags || []).map(t => <Tag key={t}>{t}</Tag>)}
            {(w.certs || []).map(c => <Tag key={c} variant="green">{c}</Tag>)}
          </div>

          {/* Specs table */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', marginBottom: 36 }}>
            {specs.map(s => (
              <div key={s.label} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-body)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.label}</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{s.value}</span>
              </div>
            ))}
          </div>

          {/* Price + cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 32 }}>{w.price}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>0,75 l · inkl. MwSt.<br/>zzgl. Versand</div>
          </div>

          {/* Quantity + add to cart */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
            {/* Qty selector */}
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-default)' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 40, height: 46, background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
              <span style={{ width: 36, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500 }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={{ width: 40, height: 46, background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
            </div>
            <Button variant="primary" size="lg" icon={false} onClick={handleAdd} style={{ flex: 1, justifyContent: 'center' }}>
              {added ? '✓ HINZUGEFÜGT' : 'IN DEN WARENKORB'}
            </Button>
          </div>

          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Versand in 2–3 Werktagen
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WDProductDetail });
