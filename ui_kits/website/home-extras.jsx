/* ── home-extras.jsx ───────────────────────────────────────────────
 * Eventkalender preview · Aktuelles/Journal · FAQ accordion ·
 * Newsletter signup · Footer with full sitemap.
 * ------------------------------------------------------------------ */
const X_PAD = 'clamp(20px, 5vw, 72px)';
const X_MAXW = 1240;

/* ── EVENTKALENDER ───────────────────────────────────────────────── */
function WEvents({ lang }) {
  const t = window.WC[lang].events;
  return (
    <section id="eventkalender" style={{ background: 'var(--color-bottle-black)', padding: `clamp(56px,7vw,104px) 0` }}>
      <div style={{ maxWidth: X_MAXW, margin: '0 auto', padding: `0 ${X_PAD}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
            <div style={{ flexShrink: 0 }}>
              <Over dark>{t.over}</Over>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px,3.4vw,46px)', color: 'var(--color-warm-ivory)', margin: 0, lineHeight: 1.04 }}>{t.title}</h2>
            </div>
            <a href="#" style={btn('outline-light')}>{t.cta}<WIcon name="arrow" size={13} stroke={1.6} /></a>
          </div>
        </Reveal>
        <div style={{ borderTop: '1px solid rgba(246,241,232,0.16)' }}>
          {t.list.map((e, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href="#" style={{
                display: 'grid', gridTemplateColumns: '92px 1fr auto auto', alignItems: 'center', gap: 'clamp(16px,3vw,40px)',
                textDecoration: 'none', color: 'inherit', padding: 'clamp(18px,2.4vw,28px) 0',
                borderBottom: '1px solid rgba(246,241,232,0.16)', transition: 'opacity 200ms',
              }}
                onMouseEnter={e2 => e2.currentTarget.style.opacity = '0.62'}
                onMouseLeave={e2 => e2.currentTarget.style.opacity = '1'}>
                <div style={{ textAlign: 'center', lineHeight: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px,3.6vw,48px)', fontWeight: 500, color: 'var(--color-warm-ivory)' }}>{e.d}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', color: 'var(--color-vineyard-soil)', marginTop: 6 }}>{e.mo} {e.y}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(19px,1.9vw,26px)', fontWeight: 500, color: 'var(--color-warm-ivory)', lineHeight: 1.2 }}>{e.t}</div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(246,241,232,0.6)', border: '1px solid rgba(246,241,232,0.3)', borderRadius: 9999, padding: '5px 12px', justifySelf: 'start' }}>{e.cat}</span>
                <WIcon name="arrow" size={18} stroke={1.4} color="var(--color-rheinhessen-sand)" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── AKTUELLES / JOURNAL ─────────────────────────────────────────── */
function WJournal({ lang }) {
  const t = window.WC[lang].journal;
  const tones = ['sand', 'green', 'cream'];
  const imgs = [window.WMedia.bannerSpaet, window.WMedia.vineyardWide, window.WMedia.weddingHut];
  return (
    <section id="aktuelles" style={{ background: 'var(--color-warm-ivory)', padding: `clamp(56px,7vw,104px) 0` }}>
      <div style={{ maxWidth: X_MAXW, margin: '0 auto', padding: `0 ${X_PAD}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
            <div style={{ flexShrink: 0 }}>
              <Over>{t.over}</Over>
              <h2 style={sectionH2}>{t.title}</h2>
            </div>
            <a href="#" style={btn('outline')}>{t.cta}<WIcon name="arrow" size={13} stroke={1.6} /></a>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(16px,2vw,28px)' }}>
          {t.posts.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <a href="#" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', background: 'var(--color-white)', border: '1px solid var(--border-default)', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.querySelector('.jt').style.color = 'var(--text-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.querySelector('.jt').style.color = 'var(--text-primary)'; }}>
                <div style={{ height: 200 }}><WImg src={imgs[i % 3]} label={p.cat} tone={tones[i % 3]} position="center" /></div>
                <div style={{ padding: 'clamp(20px,2vw,28px)', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.16em', color: 'var(--text-accent)' }}>{p.cat}</span>
                  <h3 className="jt" style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(20px,2vw,26px)', lineHeight: 1.2, margin: 0, transition: 'color 200ms', textWrap: 'pretty' }}>{p.t}</h3>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', marginTop: 'auto' }}>{p.m}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ACCORDION ───────────────────────────────────────────────── */
function WFaq({ lang }) {
  const t = window.WC[lang].faq;
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ background: 'var(--color-label-cream)', padding: `clamp(56px,7vw,104px) 0` }}>
      <div style={{ maxWidth: 940, margin: '0 auto', padding: `0 ${X_PAD}`, display: 'grid', gridTemplateColumns: 'minmax(0,0.7fr) minmax(0,1.3fr)', gap: 'clamp(28px,5vw,72px)' }}>
        <Reveal>
          <div>
            <Over>{t.over}</Over>
            <h2 style={{ ...sectionH2, position: 'sticky', top: 96 }}>{t.title}</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ borderTop: '1px solid var(--border-default)' }}>
            {t.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--border-default)' }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    padding: 'clamp(18px,2vw,24px) 0', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(17px,1.7vw,22px)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.25,
                  }}>
                    <span style={{ textWrap: 'pretty' }}>{it.q}</span>
                    <WIcon name="chevron" size={18} stroke={1.5} color="var(--color-vineyard-soil)"
                      style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 240ms' }} />
                  </button>
                  <div style={{ overflow: 'hidden', maxHeight: isOpen ? 220 : 0, opacity: isOpen ? 1 : 0, transition: 'max-height 320ms cubic-bezier(0.4,0,0.2,1), opacity 240ms' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 300, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, padding: '0 0 24px', maxWidth: 540 }}>{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── NEWSLETTER ──────────────────────────────────────────────────── */
function WNewsletter({ lang }) {
  const t = window.WC[lang].news;
  const [val, setVal] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (val.trim()) setSent(true); };
  return (
    <section style={{ position: 'relative', background: 'var(--color-bottle-black)', overflow: 'hidden', padding: `clamp(64px,8vw,120px) 0` }}>
      <div style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '40vw', fontWeight: 500, color: '#fff', opacity: 0.03, lineHeight: 0.8, right: '-4vw', top: '-12vw', userSelect: 'none', pointerEvents: 'none' }}>W</div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto', padding: `0 ${X_PAD}`, textAlign: 'center' }}>
        <Reveal>
          <Over dark>{t.over}</Over>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(32px,4.4vw,56px)', color: 'var(--color-warm-ivory)', margin: '0 0 18px', lineHeight: 1.05 }}>{t.title}</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1.2vw,16px)', fontWeight: 300, lineHeight: 1.7, color: 'rgba(246,241,232,0.6)', maxWidth: 480, margin: '0 auto 36px' }}>{t.body}</p>
          {sent ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-rheinhessen-sand)', padding: '16px 24px', border: '1px solid rgba(246,241,232,0.2)' }}>
              <WIcon name="star" size={18} stroke={1.4} color="var(--color-rheinhessen-sand)" />{t.ok}
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', gap: 0, maxWidth: 460, margin: '0 auto', border: '1px solid rgba(246,241,232,0.28)' }}>
              <input type="email" required value={val} onChange={e => setVal(e.target.value)} placeholder={t.ph}
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-warm-ivory)', fontFamily: 'var(--font-body)', fontSize: 14, padding: '15px 18px' }} />
              <button type="submit" style={{ background: 'var(--color-warm-ivory)', color: 'var(--color-bottle-black)', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.12em', padding: '0 22px', textTransform: 'uppercase' }}>{t.cta}</button>
            </form>
          )}
          {!sent && <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(246,241,232,0.4)', maxWidth: 400, margin: '18px auto 0', lineHeight: 1.5 }}>{t.note}</p>}
        </Reveal>
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────────────────────── */
function WFooter({ lang, onLang }) {
  const t = window.WC[lang].footer;
  const nav = window.WC[lang].nav;
  return (
    <footer style={{ background: 'var(--color-bottle-black)', borderTop: '1px solid rgba(246,241,232,0.12)' }}>
      <div style={{ maxWidth: X_MAXW, margin: '0 auto', padding: `clamp(56px,6vw,88px) ${X_PAD} 40px` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(4, minmax(0,1fr))', gap: 'clamp(24px,3vw,48px)' }}>
          {/* Brand block */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 500, color: 'var(--color-warm-ivory)', lineHeight: 0.9 }}>W</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 500, letterSpacing: '0.22em', color: 'rgba(246,241,232,0.75)', textTransform: 'uppercase', lineHeight: 1.55 }}>WASEM<br/>DOPPELSTÜCK</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: 'rgba(246,241,232,0.55)', margin: '0 0 24px' }}>{t.blurb}</p>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--color-vineyard-soil)', textTransform: 'uppercase', marginBottom: 10 }}>{t.visit}</div>
            {t.address.map((a, i) => (
              <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(246,241,232,0.6)', lineHeight: 1.6 }}>{a}</div>
            ))}
          </div>
          {/* Sitemap cols */}
          {t.cols.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: 'rgba(246,241,232,0.45)', textTransform: 'uppercase', marginBottom: 4 }}>{c.head}</div>
              {c.items.map((it, j) => (
                <a key={j} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(246,241,232,0.7)', textDecoration: 'none', transition: 'color 180ms', width: 'fit-content' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-warm-ivory)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(246,241,232,0.7)'}>{it}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 'clamp(40px,5vw,64px)', paddingTop: 28, borderTop: '1px solid rgba(246,241,232,0.12)' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'rgba(246,241,232,0.4)' }}>{t.rights}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {t.legal.map((l, i) => (
              <a key={i} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'rgba(246,241,232,0.55)', textDecoration: 'none' }}>{l}</a>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(246,241,232,0.22)' }}>
              {['de', 'en'].map(L => (
                <button key={L} onClick={() => onLang(L)} style={{ background: lang === L ? 'rgba(246,241,232,0.92)' : 'transparent', color: lang === L ? 'var(--color-bottle-black)' : 'rgba(246,241,232,0.55)', border: 'none', cursor: 'pointer', padding: '4px 9px', fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.1em' }}>{L.toUpperCase()}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { WEvents, WJournal, WFaq, WNewsletter, WFooter });
