// A-004 Runde 3: adaptives Logo, Handy-Leiste, Karten-Auftritt, Wortmarken-Flug (B). Ohne Bibliothek.
const nav = document.querySelector('.nav');
const leiste = document.querySelector('.leiste');
const flug = document.querySelector('[data-flug]');
const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
const gross = matchMedia('(min-width: 761px)');

// B: Die große Wortmarke fliegt in die Navigation und wird dort zum W
let start = null;
function messeFlug() {
  if (!flug) return;
  flug.classList.remove('ist-flug');
  flug.style.transform = '';
  start = null;
  if (ruhig || !gross.matches) return;
  const platz = flug.getBoundingClientRect();
  const ziel = nav.querySelector('.nav__marke').getBoundingClientRect();
  start = {
    x: platz.left, y: platz.top + scrollY, b: platz.width,
    zx: ziel.left + ziel.width / 2, zy: ziel.top + ziel.height / 2, zb: ziel.width
  };
  flug.style.width = platz.width + 'px';
  flug.classList.add('ist-flug');
}

function beimScrollen() {
  const y = scrollY;
  nav.classList.toggle('ist-gescrollt', y > 8);
  if (leiste) leiste.classList.toggle('ist-da', y > innerHeight * .5);

  if (start) {
    const strecke = Math.max(240, start.y - 20);
    const p = Math.min(1, y / strecke);
    const e = 1 - Math.pow(1 - p, 3);
    const s = 1 + (start.zb / start.b - 1) * e;
    const x = start.x + (start.zx - start.zb / 2 - start.x) * e;
    const hoehe = start.b * 328 / 4260;
    const zy = start.zy - (hoehe * s) / 2;
    const ty = start.y + (zy - start.y) * e;
    flug.style.transform = `translate(${x}px, ${ty}px) scale(${s})`;
    flug.style.opacity = p > .9 ? String(1 - (p - .9) * 10) : '1';
    nav.classList.toggle('ist-zeichen', p > .92);
  } else {
    nav.classList.toggle('ist-zeichen', y > 80);
  }
}

addEventListener('scroll', beimScrollen, { passive: true });
addEventListener('resize', () => { messeFlug(); beimScrollen(); });
if (flug) {
  const vorher = scrollY;
  scrollTo(0, 0);
  messeFlug();
  scrollTo(0, vorher);
}
beimScrollen();

// Karten und Familie: einmal auftreten, wenn sie ins Bild kommen
const auftritt = document.querySelectorAll('[data-zeige]');
if (ruhig || !('IntersectionObserver' in window)) {
  auftritt.forEach((el) => el.classList.add('ist-sichtbar'));
} else {
  const io = new IntersectionObserver((eintraege) => {
    eintraege.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('ist-sichtbar');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -18% 0px' });
  auftritt.forEach((el) => io.observe(el));
}
