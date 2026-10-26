// A-004 Runde 2: Nav-Zustand, Handy-Leiste, Fenster-Fortschritt (A), Wähler (B). Ohne Bibliothek.
const nav = document.querySelector('.nav');
const leiste = document.querySelector('.leiste');
const hero = document.querySelector('[data-hero]');
const fenster = document.querySelector('.fenster');
const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;

function beimScrollen() {
  const y = scrollY;
  const heroEnde = hero ? hero.offsetTop + hero.offsetHeight - 80 : 400;
  nav.classList.toggle('ist-gescrollt', y > heroEnde);
  if (leiste) leiste.classList.toggle('ist-da', y > innerHeight * .6);

  if (fenster && !ruhig && innerWidth > 760) {
    const strecke = fenster.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, (y - fenster.offsetTop) / strecke));
    fenster.style.setProperty('--p', p.toFixed(4));
    nav.classList.toggle('nav--hell', p > .8 && y <= heroEnde);
  }
}
addEventListener('scroll', beimScrollen, { passive: true });
addEventListener('resize', beimScrollen);
if (fenster && ruhig) fenster.style.setProperty('--p', 1);
beimScrollen();

// Wähler: Bild, Satz und Hauptweg wechseln mit der Absicht
const waehler = document.querySelector('.waehler');
if (waehler) {
  const tabs = [...waehler.querySelectorAll('[role="tab"]')];
  const bilder = [...document.querySelectorAll('.wahl__bilder img')];
  const satz = waehler.querySelector('[data-zeige-satz]');
  const weg = waehler.querySelector('[data-zeige-weg]');
  const waehle = (tab) => {
    tabs.forEach((t) => t.setAttribute('aria-selected', t === tab));
    bilder.forEach((b) => b.classList.toggle('ist-aktiv', b.dataset.fuer === tab.dataset.id));
    satz.textContent = tab.dataset.satz;
    weg.textContent = tab.dataset.weg;
    weg.href = tab.dataset.ziel;
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => waehle(t));
    t.addEventListener('keydown', (e) => {
      const n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      const ziel = tabs[(i + n + tabs.length) % tabs.length];
      ziel.focus();
      waehle(ziel);
    });
  });
}
