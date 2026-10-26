// Runde 6 „Das Maß“: Füllung steigt, Spiegel schwappt nach, Eichstrich zählt bis zum Doppelstück
(() => {
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobil = matchMedia('(max-width: 760px)').matches;
  const root = document.documentElement;
  const hero = document.querySelector('.hero');
  const film = document.querySelector('.film');
  const textBlock = document.querySelector('.hero__text');
  const pfadWein = document.querySelector('.spiegel__wein');
  const pfadStrich = document.querySelector('.spiegel__strich');
  const nameEl = document.querySelector('.eichstrich__name');
  const zahlEl = document.querySelector('.eichstrich__zahl');

  // Film je Format
  film.src = mobil ? film.dataset.srcMobil : film.dataset.src;
  if (mobil) film.poster = film.dataset.posterMobil;
  if (ruhig) film.removeAttribute('autoplay'); else film.play().catch(() => {});

  // Maße: Glas bis Doppelstück
  const stufen = [
    [0, 'Glas', 0.2], [0.25, 'Viertelstück', 300], [0.5, 'Halbstück', 600],
    [0.72, 'Stück', 1200], [0.9, 'Doppelstück', 2400]
  ];
  const fmt = v => v < 1 ? v.toFixed(1).replace('.', ',') : String(Math.round(v));

  // Grundfüllung: so hoch, dass der Satz ganz auf dem Wein steht
  let basis = 46;
  const misseBasis = () => {
    const vh = innerHeight / 100;
    const noetig = (textBlock.offsetHeight + parseFloat(getComputedStyle(textBlock).bottom) + 56) / vh;
    basis = Math.min(80, Math.max(mobil ? 56 : 44, noetig));
  };
  misseBasis();

  let fuell = ruhig ? basis : 0;       // aktuelle Höhe in svh
  let ziel = basis;
  let welle = 0, wellePhase = 0;       // Schwappen
  let anzeige = 0.2, anzeigeZiel = 0.2, stufe = 0;
  let intro = !ruhig;

  const spiegel = () => {
    const a = welle * Math.sin(wellePhase);
    const b = welle * Math.cos(wellePhase * 1.3) * 0.6;
    const d = `M0,${20 + a} C250,${20 - b} 500,${20 + b} 750,${20 - a} S1000,${20 + a * 0.5} 1000,${20 + a * 0.5}`;
    pfadStrich.setAttribute('d', d);
    pfadWein.setAttribute('d', d + ' L1000,40 L0,40 Z');
  };

  const fortschritt = () => {
    const r = hero.getBoundingClientRect();
    const weg = hero.offsetHeight - innerHeight;
    return Math.min(1, Math.max(0, -r.top / weg));
  };

  let zuletzt = performance.now();
  const naeher = (rate, dt) => ruhig ? 1 : 1 - Math.exp(-rate * dt);
  const tick = jetzt => {
    const dt = Math.min(0.25, ((jetzt || performance.now()) - zuletzt) / 1000);
    zuletzt = jetzt || performance.now();
    const p = fortschritt();
    if (!intro) ziel = basis + (100 - basis) * p;
    const vorher = fuell;
    fuell += (ziel - fuell) * naeher(intro ? 2.4 : 9, dt);
    // Schwappen kommt aus der Bewegung und klingt ab
    welle = Math.min(9, welle * Math.exp(-3.5 * dt) + Math.abs(fuell - vorher) * 1.6);
    wellePhase += dt * 9.5;
    if (fuell > basis * 0.8) document.body.classList.add('ist-bereit');
    if (intro && Math.abs(ziel - fuell) < 0.4) intro = false;
    root.style.setProperty('--fuell', fuell.toFixed(2));
    spiegel();

    // Eichstrich zählt mit
    let s = 0;
    stufen.forEach((st, i) => { if (p >= st[0]) s = i; });
    if (s !== stufe) { stufe = s; nameEl.textContent = stufen[s][1]; anzeigeZiel = stufen[s][2]; }
    anzeige += (anzeigeZiel - anzeige) * naeher(7, dt);
    zahlEl.textContent = fmt(Math.abs(anzeigeZiel - anzeige) < 0.5 ? anzeigeZiel : anzeige);

    document.body.classList.toggle('ist-voll', p > 0.86);
    document.body.classList.toggle('nach-hero', hero.getBoundingClientRect().bottom < 72);
    requestAnimationFrame(tick);
  };

  addEventListener('resize', misseBasis);
  setTimeout(() => { zuletzt = performance.now(); requestAnimationFrame(tick); }, ruhig ? 0 : 600);

  // Pegel der Angebote
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('ist-sichtbar'); io.unobserve(e.target); }
  }), { threshold: 0.4 });
  document.querySelectorAll('.stueck').forEach(el => io.observe(el));

  // Weiches Scrollen
  if (!ruhig && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1 });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
})();
