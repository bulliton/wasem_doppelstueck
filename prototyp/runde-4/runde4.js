// A-004 Runde 4: Smooth Scroll (Lenis, wenn geladen), Navigation, Hero-Scrub über --p, Intro über --intro,
// Innen-Parallax über --py, Auftritte. Alle Bewegung sitzt in CSS, hier werden nur Zahlen gesetzt.
const nav = document.querySelector('.nav');
const leiste = document.querySelector('.leiste');
const hero = document.querySelector('.hero');
const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
const handy = matchMedia('(max-width: 760px)');
const root = document.documentElement;

// Intro: --intro läuft 0 → 1, die Hero-CSS hängt daran
function intro() {
  if (ruhig) { root.style.setProperty('--intro', 1); document.body.classList.add('ist-geladen'); return; }
  const dauer = 1300;
  const t0 = performance.now();
  function tick(t) {
    const p = Math.min(1, (t - t0) / dauer);
    const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
    root.style.setProperty('--intro', e.toFixed(4));
    if (p < 1) requestAnimationFrame(tick); else document.body.classList.add('ist-geladen');
  }
  document.body.classList.add('ist-am-laden');
  requestAnimationFrame(tick);
}

// Navigation: beim Runterscrollen weg, beim Hochscrollen zurück auf Sand
let letztesY = 0;
function navigation(y) {
  nav.classList.toggle('ist-fest', y > 8);
  nav.classList.toggle('ist-zeichen', y > 80);
  const runter = y > letztesY + 4 && y > innerHeight * .6;
  const hoch = y < letztesY - 4;
  if (runter) nav.classList.add('ist-weg');
  if (hoch || y < 8) nav.classList.remove('ist-weg');
  letztesY = y;
  if (leiste) leiste.classList.toggle('ist-da', y > innerHeight * .7 && document.body.offsetHeight - y - innerHeight > 240);
}

// Hero-Scrub: --p von 0 (oben) bis 1 (Hero zu Ende)
function heroScrub() {
  if (!hero) return;
  if (ruhig) { hero.style.setProperty('--p', 1); return; }
  const r = hero.getBoundingClientRect();
  const strecke = hero.offsetHeight - innerHeight;
  const p = strecke > 0 ? Math.min(1, Math.max(0, -r.top / strecke)) : 1;
  hero.style.setProperty('--p', p.toFixed(4));
}

// Innen-Parallax: --py von −1 (Bild unten im Fenster) bis 1 (oben)
const parallax = document.querySelectorAll('[data-parallax]');
function innenParallax() {
  if (ruhig) return;
  const faktor = handy.matches ? .5 : 1;
  parallax.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const mitte = (r.top + r.height / 2 - innerHeight / 2) / (innerHeight / 2 + r.height / 2);
    el.style.setProperty('--py', (Math.max(-1, Math.min(1, mitte)) * faktor).toFixed(3));
  });
}

let angefragt = false;
function beimScrollen() {
  if (angefragt) return;
  angefragt = true;
  requestAnimationFrame(() => {
    angefragt = false;
    const y = scrollY;
    navigation(y);
    heroScrub();
    innenParallax();
  });
}

// Lenis, wenn das Skript da ist; sonst nativer Scroll
if (window.Lenis && !ruhig) {
  const lenis = new Lenis({ lerp: .085, wheelMultiplier: 1 });
  window.__lenis = lenis;
  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  lenis.on('scroll', beimScrollen);
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const ziel = document.querySelector(a.getAttribute('href'));
      if (!ziel) return;
      ev.preventDefault();
      lenis.scrollTo(ziel, { offset: -72 });
    });
  });
} else {
  addEventListener('scroll', beimScrollen, { passive: true });
}
addEventListener('resize', beimScrollen);
beimScrollen();
intro();

// Auftritte: einmal, wenn sie ins Bild kommen
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
  }, { rootMargin: '0px 0px -16% 0px' });
  auftritt.forEach((el) => io.observe(el));
}
