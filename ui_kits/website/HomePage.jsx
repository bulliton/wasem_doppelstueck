/* ── HomePage component ── export to window ───────────────────── */
function WDHomePage({ onNavigate, onWineSelect, wines }) {
  const { Button, WineCard } = window.WasemDoppelstCkDesignSystem_9fe068;
  const bottle = '../../assets/bottle-sample.png';

  const trust = [
    { icon: 'family',   title: 'Familienweingut', sub: 'Seit 2000' },
    { icon: 'leaf',     title: 'Nachhaltig zertifiziert', sub: 'Respekt vor Natur & Boden' },
    { icon: 'hand',     title: 'Handgelesen', sub: 'Selektive Handlese' },
    { icon: 'natural',  title: 'Spontanvergoren', sub: 'Mit natürlichen Hefen' },
  ];

  const TrustIcon = ({ type }) => {
    const paths = {
      family:  <><circle cx={12} cy={7} r={3} fill="none" stroke="currentColor" strokeWidth={1.25}/><path d="M5 21v-1a7 7 0 0 1 14 0v1" fill="none" stroke="currentColor" strokeWidth={1.25}/></>,
      leaf:    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zm0 0a7 7 0 0 0 7-7" fill="none" stroke="currentColor" strokeWidth={1.25}/>,
      hand:    <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8l3 3h1.5a4.5 4.5 0 0 0 4.5-4.5V11" fill="none" stroke="currentColor" strokeWidth={1.25}/>,
      natural: <><circle cx={12} cy={12} r={8} fill="none" stroke="currentColor" strokeWidth={1.25}/><path d="M12 8c0 2.5-2 4-2 6s2 3.5 2 3.5S14 16.5 14 14s-2-3.5-2-6z" fill="none" stroke="currentColor" strokeWidth={1.25}/></>,
    };
    return <svg width={22} height={22} viewBox="0 0 24 24" style={{ color: 'var(--color-soft-sage)' }}>{paths[type]}</svg>;
  };

  return (
    <div style={{ background: 'var(--color-warm-ivory)' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-bottle-black)', minHeight: '88vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 48px' }}>
        <div style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '55vw', fontWeight: 500, color: 'white', opacity: 0.035, lineHeight: 0.85, right: '-8vw', bottom: '-8vw', userSelect: 'none', pointerEvents: 'none' }}>W</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--color-soft-sage)', marginBottom: 28, textTransform: 'uppercase' }}>Weingut Wasem Doppelstück · Ingelheim, Rheinhessen</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.05, color: 'var(--color-warm-ivory)', margin: '0 0 32px', letterSpacing: '-0.01em' }}>
            Charakter.<br/>Herkunft.<br/>Handwerk.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: 'rgba(246,241,232,0.6)', maxWidth: 440, margin: '0 0 40px' }}>
            Wir machen Wein mit Überzeugung — aus biologischem Anbau, mit Respekt vor dem Boden und der Natur Rheinhessens.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Button variant="primary-light" onClick={() => onNavigate('shop')}>UNSERE WEINE</Button>
            <Button variant="secondary-light" onClick={() => onNavigate('weingut')}>MEHR ERFAHREN</Button>
          </div>
        </div>
      </section>

      {/* ── Trust badges ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-label-cream)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '0 48px' }}>
          {trust.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '24px 20px', borderRight: i < 3 ? '1px solid var(--border-subtle)' : 'none' }}>
              <TrustIcon type={t.icon} />
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--text-primary)', marginBottom: 2 }}>{t.title}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured wines ───────────────────────────────────────── */}
      <section style={{ padding: '80px 48px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase' }}>Entdecken</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 42, margin: 0, lineHeight: 1.05 }}>Unsere Weine</h2>
          </div>
          <Button variant="ghost" icon={false} onClick={() => onNavigate('shop')}>Alle Weine ansehen →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border-subtle)' }}>
          {(wines || []).slice(0, 4).map(w => (
            <WineCard key={w.id} name={w.name} vintage={w.vintage} price={w.price}
              image={bottle} tags={w.tags} certifications={w.certs}
              onAddToCart={() => {}} onClick={() => onWineSelect(w)} href="#"
            />
          ))}
        </div>
      </section>

      {/* ── Editorial: Family story ───────────────────────────────── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 480 }}>
        <div style={{ background: 'var(--color-vine-leaf)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '30vw', fontWeight: 500, color: 'white', opacity: 0.04, lineHeight: 0.85, right: -40, bottom: -40, userSelect: 'none' }}>W</div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(167,165,142,0.8)', marginBottom: 20, textTransform: 'uppercase' }}>Unsere Geschichte</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 44, color: 'var(--color-warm-ivory)', lineHeight: 1.1, margin: '0 0 24px' }}>
              Handwerk.<br/>Herkunft.<br/>Charakter.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(246,241,232,0.65)', margin: '0 0 36px', maxWidth: 380 }}>
              Wir arbeiten im Einklang mit der Natur und lassen unsere Weine Zeit, damit sie ihren eigenen Weg gehen können. Guter Wein entsteht nicht im Keller, sondern im Weinberg.
            </p>
            <Button variant="primary-light" onClick={() => onNavigate('weingut')}>MEHR ÜBER UNS</Button>
          </div>
        </div>
        <div style={{ background: 'var(--color-label-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
          <img src={bottle} alt="Wasem Doppelstück" style={{ height: 360, width: 'auto', objectFit: 'contain' }} />
        </div>
      </section>

      {/* ── Hotel teaser ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 48px', maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase' }}>Übernachten</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 42, margin: '0 0 20px', lineHeight: 1.05 }}>Das Weinhotel</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-secondary)', margin: '0 0 36px', maxWidth: 420 }}>
            Schlafen inmitten der Weinberge. Unsere Zimmer und Suiten verbinden Stille, Natur und die Herzlichkeit der Familie Wasem.
          </p>
          <Button variant="primary" onClick={() => onNavigate('hotel')}>HOTEL ENTDECKEN</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {['Weinberg Suite', 'Gutshof Zimmer', 'Gartenblick', 'Terrasse'].map((r, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? 'var(--color-vine-leaf)' : 'var(--color-label-cream)', height: 140, display: 'flex', alignItems: 'flex-end', padding: 14 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.08em', color: i % 2 === 0 ? 'rgba(246,241,232,0.7)' : 'var(--text-muted)', textTransform: 'uppercase' }}>{r}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

Object.assign(window, { WDHomePage });
