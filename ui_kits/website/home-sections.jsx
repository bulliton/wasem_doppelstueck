/* ── home-sections.jsx ─────────────────────────────────────────────
 * Hero, intent path-picker, trust strip, and the revenue-silo teasers
 * (Weinshop, Weinhotel, Hochzeiten, Firmen/Private events).
 * ------------------------------------------------------------------ */

/* Scroll-reveal wrapper — respects prefers-reduced-motion.
 * Defaults to VISIBLE whenever the page is hidden (static capture / print /
 * background tab) or reduced-motion is requested, so content is never stuck
 * invisible. Only runs the fade-up when the page is actually on screen. */
function Reveal({ children, delay = 0, y = 18, style = {} }) {
  const ref = React.useRef(null);
  const canAnimate = typeof window !== 'undefined'
    && document.visibilityState === 'visible'
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [shown, setShown] = React.useState(!canAnimate);
  React.useEffect(() => {
    if (shown) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    if (el) io.observe(el);
    // Safety net: never leave content invisible if IO doesn't fire.
    const fallback = setTimeout(() => setShown(true), 700);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

/* Small overline label */
function Over({ children, dark }) {
  return <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: dark ? 'rgba(246,241,232,0.5)' : 'var(--text-muted)', marginBottom: 14 }}>{children}</div>;
}

const PAD = 'clamp(20px, 5vw, 72px)';
const MAXW = 1240;

/* ── HERO ────────────────────────────────────────────────────────── */
function WHero({ lang }) {
  const t = window.WC[lang].hero;
  return (
    <section style={{ position: 'relative', background: 'radial-gradient(135% 115% at 14% 24%, #1C1A15 0%, #15130F 40%, var(--color-bottle-black) 78%)', overflow: 'hidden', paddingTop: 72 }}>
      {/* autumn-vineyard video — FULL-BLEED background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <WVideo src={window.WMedia.heroVideo} poster={window.WMedia.heroPoster} label="VINEYARD · GOLDEN HOUR" tone="dark" position="center" />
      </div>
      {/* W watermark — subtle brand texture over the video, lower-right */}
      <div style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '52vw', fontWeight: 500, color: '#fff', opacity: 0.05, lineHeight: 0.8, right: '-6vw', bottom: '-14vw', userSelect: 'none', pointerEvents: 'none', mixBlendMode: 'overlay' }}>W</div>
      {/* Cinematic luxury overlay — sits ON TOP of the full-bleed video:
          a long horizontal fade keeps the headline column perfectly legible while the
          right side reveals the vineyard, plus a warm sunset tint and a soft base settle. */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background:
          'linear-gradient(0deg, rgba(14,14,13,0.60) 0%, transparent 30%),'
        + 'linear-gradient(90deg, rgba(40,26,12,0.28) 0%, rgba(40,26,12,0.10) 50%, transparent 80%),'
        + 'linear-gradient(90deg, var(--color-bottle-black) 0%, rgba(14,14,13,0.88) 14%, rgba(14,14,13,0.62) 34%, rgba(14,14,13,0.28) 58%, rgba(14,14,13,0.08) 78%, transparent 92%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: MAXW, margin: '0 auto', padding: `clamp(70px,11vh,140px) ${PAD} clamp(56px,8vh,96px)` }}>
        <div style={{ maxWidth: 660 }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
              <span style={{ width: 28, height: 1, background: 'var(--color-vineyard-soil)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-rheinhessen-sand)' }}>{t.over}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(52px, 8vw, 104px)', lineHeight: 0.98, letterSpacing: '-0.015em', color: 'var(--color-warm-ivory)', margin: 0 }}>
              {t.title.map((line, i) => <div key={i} style={{ fontStyle: i === 1 ? 'italic' : 'normal' }}>{line}</div>)}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,1.4vw,18px)', fontWeight: 300, lineHeight: 1.7, color: 'rgba(246,241,232,0.66)', maxWidth: 460, margin: '32px 0 40px' }}>{t.sub}</p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#" style={btn('light')}>{t.ctaA}<WIcon name="arrow" size={13} stroke={1.6} /></a>
              <a href="#stay" style={btn('outline-light')}>{t.ctaB}<WIcon name="arrow" size={13} stroke={1.6} /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── INTENT PATH-PICKER ──────────────────────────────────────────── */
function WIntent({ lang }) {
  const t = window.WC[lang].intent;
  const [hov, setHov] = React.useState(null);
  return (
    <section style={{ background: 'var(--color-warm-ivory)', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: `0 ${PAD}`, transform: 'translateY(-40px)' }}>
        <div style={{ background: 'var(--color-white)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-default)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, padding: 'clamp(22px,3vw,32px) clamp(20px,3vw,36px) clamp(16px,2vw,22px)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(24px,3vw,34px)', margin: 0, letterSpacing: '-0.01em' }}>{t.title}</h2>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{t.over}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', borderTop: '1px solid var(--border-default)' }}>
            {t.paths.map((p, i) => (
              <a key={p.id} href={'#' + p.id}
                onMouseEnter={() => setHov(p.id)} onMouseLeave={() => setHov(null)}
                style={{
                  position: 'relative', textDecoration: 'none', color: 'inherit',
                  padding: 'clamp(22px,2.6vw,34px) clamp(14px,1.6vw,22px) clamp(20px,2.4vw,30px)',
                  borderRight: i < t.paths.length - 1 ? '1px solid var(--border-default)' : 'none',
                  background: hov === p.id ? 'var(--color-bottle-black)' : 'transparent',
                  transition: 'background 240ms ease',
                  display: 'flex', flexDirection: 'column', gap: 14, minHeight: 168,
                }}>
                <WIcon name={p.icon} size={28} stroke={1} color={hov === p.id ? 'var(--color-rheinhessen-sand)' : 'var(--color-vineyard-soil)'} style={{ transition: 'color 240ms' }} />
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(17px,1.5vw,21px)', fontWeight: 500, lineHeight: 1.15, color: hov === p.id ? 'var(--color-warm-ivory)' : 'var(--text-primary)', transition: 'color 240ms', marginBottom: 8, minHeight: '2.3em', display: 'flex', alignItems: 'flex-end' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, lineHeight: 1.4, color: hov === p.id ? 'rgba(246,241,232,0.6)' : 'var(--text-muted)', transition: 'color 240ms' }}>{p.sub}</div>
                </div>
                <WIcon name="arrow" size={15} stroke={1.5}
                  color={hov === p.id ? 'var(--color-warm-ivory)' : 'var(--color-rheinhessen-sand)'}
                  style={{ transition: 'color 240ms, transform 240ms', transform: hov === p.id ? 'translateX(4px)' : 'none' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PRESS + RATINGS BAR ─────────────────────────────────────────── */
function Stars({ value }) {
  // five glyphs; partial last star clipped to the fractional remainder
  return (
    <span style={{ display: 'inline-flex', gap: 1, lineHeight: 1 }} aria-label={value + ' / 5'}>
      {[0, 1, 2, 3, 4].map(i => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} style={{ position: 'relative', fontSize: 13, color: 'rgba(14,14,13,0.16)' }}>
            ★
            <span style={{ position: 'absolute', left: 0, top: 0, overflow: 'hidden', width: (fill * 100) + '%', color: 'var(--color-harvest-gold)' }}>★</span>
          </span>
        );
      })}
    </span>
  );
}

function RatingBlock({ initial, name, value, count }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
      <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--color-bottle-black)', color: 'var(--color-warm-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, flexShrink: 0 }}>{initial}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.02em', color: 'var(--text-primary)' }}>{name}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>{value.toString().replace('.', ',')}</span>
          <Stars value={value} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>({count})</span>
        </span>
      </div>
    </div>
  );
}

function WPress({ lang }) {
  const label = lang === 'de' ? 'Bekannt aus & empfohlen von' : 'As featured & recommended in';
  // typographic homages, not pixel logos — unified muted ink so they read as one wall
  const ink = 'rgba(14,14,13,0.62)';
  const press = [
    { name: 'falstaff',  style: { fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 600, letterSpacing: '-0.02em', textTransform: 'lowercase' } },
    { name: 'Vinum',     style: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 27, fontWeight: 500, letterSpacing: '0.01em' } },
    { name: 'FEINSCHMECKER', pre: 'DER', style: { fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, letterSpacing: '0.04em' } },
    { name: 'GAULT&MILLAU', style: { fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 700, letterSpacing: '0.01em' } },
  ];
  // one continuous set of wordmarks; rendered twice in the track for a seamless loop
  const Logo = ({ p }) => (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 4, color: ink, whiteSpace: 'nowrap', marginRight: 'clamp(30px,3.4vw,56px)', flexShrink: 0 }}>
      {p.pre && <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 500, fontStyle: 'italic', alignSelf: 'flex-start', marginTop: 1 }}>{p.pre}</span>}
      <span style={p.style}>{p.name}</span>
    </span>
  );
  const fade = 'linear-gradient(90deg, transparent 0, #000 9%, #000 88%, transparent 100%)';
  return (
    <section style={{ background: 'var(--color-warm-ivory)' }}>
      <style>{`
        @keyframes wpress-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .wpress-track { animation: wpress-marquee 26s linear infinite; }
        .wpress-window:hover .wpress-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .wpress-track { animation: none; } }
      `}</style>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: `clamp(36px,4.5vw,60px) ${PAD}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(20px,3vw,44px)', flexWrap: 'wrap', rowGap: 26 }}>
          {/* Press logos — auto-scrolling marquee, width-capped so ratings keep their line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2vw,28px)', flex: '1 1 460px', minWidth: 0, maxWidth: 560 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', maxWidth: 116, lineHeight: 1.5, flexShrink: 0 }}>{label}</span>
            <div className="wpress-window" style={{ flex: '1 1 auto', minWidth: 0, overflow: 'hidden', maskImage: fade, WebkitMaskImage: fade }}>
              <div className="wpress-track" style={{ display: 'flex', alignItems: 'center', width: 'max-content' }}>
                {press.map((p, i) => <Logo key={'a' + i} p={p} />)}
                {press.map((p, i) => <Logo key={'b' + i} p={p} />)}
              </div>
            </div>
          </div>
          {/* Ratings — stay on one line on desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(18px,2.2vw,32px)', flexWrap: 'nowrap', flexShrink: 0, paddingLeft: 'clamp(0px,2vw,28px)', borderLeft: '1px solid var(--border-default)' }}>
            <RatingBlock initial="G" name="Google" value={4.8} count={420} />
            <RatingBlock initial="T" name="Tripadvisor" value={4.7} count={298} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TRUST STRIP ─────────────────────────────────────────────────── */
function WTrust({ lang }) {
  const items = window.WC[lang].trust;
  return (
    <section style={{ background: 'var(--color-warm-ivory)' }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: `0 ${PAD}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 'clamp(18px,2vw,26px) clamp(12px,1.6vw,22px)', borderRight: i < 3 ? '1px solid var(--border-default)' : 'none' }}>
              <WIcon name={it.icon} size={26} stroke={1.1} color="var(--color-vineyard-soil)" />
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.02em', color: 'var(--text-primary)', marginBottom: 3 }}>{it.t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-muted)' }}>{it.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WEINSHOP ────────────────────────────────────────────────────── */
function WShop({ lang, wines }) {
  const t = window.WC[lang].shop;
  const { WineCard } = window.WasemDoppelstCkDesignSystem_9fe068;
  const bottle = '../../assets/bottle-sample.png';
  return (
    <section id="weinshop" style={{ background: 'var(--color-warm-ivory)', padding: `clamp(56px,7vw,104px) 0` }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: `0 ${PAD}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
            <div style={{ maxWidth: 520 }}>
              <Over>{t.over}</Over>
              <h2 style={sectionH2}>{t.title}</h2>
              <p style={{ ...sectionBody, marginTop: 18 }}>{t.body}</p>
            </div>
            <a href="#" style={btn('outline')}>{t.cta}<WIcon name="arrow" size={13} stroke={1.6} /></a>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border-default)', border: '1px solid var(--border-default)' }}>
            {(wines || []).slice(0, 4).map(w => (
              <WineCard key={w.id} name={w.name} vintage={w.vintage} price={w.price}
                image={bottle} tags={w.tags} certifications={w.certs}
                onAddToCart={() => {}} onClick={() => {}} href="#" />
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <a href="#" style={crossLink}>{t.cross}</a>
        </Reveal>
      </div>
    </section>
  );
}

/* ── WEINHOTEL ───────────────────────────────────────────────────── */
function WHotel({ lang }) {
  const t = window.WC[lang].hotel;
  return (
    <section id="stay" style={{ background: 'var(--color-label-cream)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', minHeight: 560 }}>
        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `clamp(48px,6vw,92px) clamp(24px,5vw,80px)` }}>
          <Reveal>
            <Over>{t.over}</Over>
            <h2 style={{ ...sectionH2, whiteSpace: 'pre-line', fontSize: 'clamp(34px,4vw,56px)' }}>{t.title}</h2>
            <p style={{ ...sectionBody, marginTop: 22, maxWidth: 420 }}>{t.body}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 28px', margin: '32px 0 36px', maxWidth: 420 }}>
              {t.rooms.map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, padding: '12px 0', borderBottom: '1px solid var(--border-default)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500 }}>{r.n}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-accent)', whiteSpace: 'nowrap' }}>{r.m}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#" style={btn('dark')}>{t.cta}<WIcon name="arrow" size={13} stroke={1.6} /></a>
              <a href="#" style={crossLinkInline}>{t.cross}</a>
            </div>
          </Reveal>
        </div>
        {/* Image grid — real hotel photography */}
        <div style={{ display: 'grid', gridTemplateRows: '1.3fr 1fr', gap: 2, background: 'var(--color-label-cream)', minHeight: 360 }}>
          <WImg src={window.WMedia.hotelHero} label="SUITE · VINEYARD VIEW" tone="green" position="center" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <WImg src={window.WMedia.hotelKlassik} label="WASEM KLASSIK" tone="sand" position="center" />
            <WImg src={window.WMedia.hotelStamm} label="STAMMHAUS" tone="cream" position="center" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOCHZEITEN ──────────────────────────────────────────────────── */
function WWedding({ lang }) {
  const t = window.WC[lang].wedding;
  return (
    <section id="hochzeiten" style={{ position: 'relative', background: 'var(--color-vine-leaf)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.32 }}>
        <WImg src={window.WMedia.weddingArch} label="CEREMONY AMONG THE VINES" tone="green" position="center" />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(44,58,38,0.55), rgba(44,58,38,0.78))' }} />
      <div style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '44vw', fontWeight: 500, color: '#fff', opacity: 0.04, lineHeight: 0.8, left: '-8vw', bottom: '-16vw', userSelect: 'none', pointerEvents: 'none' }}>W</div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: MAXW, margin: '0 auto', padding: `clamp(64px,8vw,120px) ${PAD}` }}>
        <Reveal>
          <div style={{ maxWidth: 580 }}>
            <Over dark>{t.over}</Over>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.02, letterSpacing: '-0.015em', color: 'var(--color-warm-ivory)', margin: 0, whiteSpace: 'pre-line' }}>{t.title}</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,1.3vw,17px)', fontWeight: 300, lineHeight: 1.7, color: 'rgba(246,241,232,0.72)', maxWidth: 460, margin: '26px 0 40px' }}>{t.body}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#" style={btn('light')}>{t.ctaA}<WIcon name="arrow" size={13} stroke={1.6} /></a>
              <a href="#" style={btn('outline-light')}>{t.ctaB}<WIcon name="arrow" size={13} stroke={1.6} /></a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: 'flex', gap: 'clamp(28px,5vw,72px)', flexWrap: 'wrap', borderTop: '1px solid rgba(246,241,232,0.18)', paddingTop: 32, maxWidth: 620 }}>
            {t.stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px,4vw,52px)', fontWeight: 500, color: 'var(--color-warm-ivory)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, letterSpacing: '0.04em', color: 'rgba(246,241,232,0.55)', marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── FIRMEN / PRIVATE EVENTS ─────────────────────────────────────── */
function WBiz({ lang }) {
  const t = window.WC[lang].biz;
  return (
    <section id="firmen" style={{ background: 'var(--color-warm-ivory)', padding: `clamp(56px,7vw,104px) 0` }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: `0 ${PAD}` }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
            <Over>{t.over}</Over>
            <h2 style={{ ...sectionH2, fontSize: 'clamp(30px,3.6vw,48px)' }}>{t.title}</h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'var(--border-default)', border: '1px solid var(--border-default)' }}>
          {t.cards.map((c, i) => (
            <Reveal key={c.id} delay={i * 90} style={{ display: 'flex' }}>
              <a id={c.id} href="#" style={{
                display: 'flex', flexDirection: 'column', gap: 18, textDecoration: 'none', color: 'inherit',
                background: 'var(--color-white)', padding: 'clamp(32px,4vw,56px)', width: '100%',
                transition: 'background 240ms ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-label-cream)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-white)'; }}>
                <WIcon name={c.icon} size={32} stroke={1} color="var(--color-vineyard-soil)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(24px,2.6vw,32px)', margin: 0, lineHeight: 1.1 }}>{c.t}</h3>
                <p style={{ ...sectionBody, fontSize: 15, maxWidth: 420, margin: 0 }}>{c.s}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', marginTop: 4 }}>{c.cta}<WIcon name="arrow" size={14} stroke={1.6} /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── shared style helpers ────────────────────────────────────────── */
const sectionH2 = { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px,3.4vw,46px)', lineHeight: 1.04, letterSpacing: '-0.01em', color: 'var(--text-primary)', margin: 0 };
const sectionBody = { fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1.2vw,16px)', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-secondary)', margin: 0 };
const crossLink = { display: 'inline-flex', marginTop: 28, fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 400, color: 'var(--text-accent)', textDecoration: 'none', borderBottom: '1px solid var(--color-rheinhessen-sand)', paddingBottom: 2 };
const crossLinkInline = { fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-accent)', textDecoration: 'none', borderBottom: '1px solid var(--color-rheinhessen-sand)', paddingBottom: 2 };

function btn(kind) {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '13px 24px', cursor: 'pointer', transition: 'background 220ms, color 220ms, border-color 220ms', border: '1px solid transparent', whiteSpace: 'nowrap' };
  const v = {
    dark:          { background: 'var(--color-bottle-black)', color: 'var(--color-warm-ivory)', borderColor: 'var(--color-bottle-black)' },
    outline:       { background: 'transparent', color: 'var(--color-bottle-black)', borderColor: 'var(--color-bottle-black)' },
    light:         { background: 'var(--color-warm-ivory)', color: 'var(--color-bottle-black)', borderColor: 'var(--color-warm-ivory)' },
    'outline-light': { background: 'transparent', color: 'var(--color-warm-ivory)', borderColor: 'rgba(246,241,232,0.45)' },
  };
  return { ...base, ...(v[kind] || v.dark) };
}

Object.assign(window, { Reveal, Over, WHero, WIntent, WPress, WTrust, WShop, WHotel, WWedding, WBiz, btn, sectionH2, sectionBody });
