// Signatur: Die Stiegelgasse schließt sich beim Scrollen, aus der Fuge öffnet sich das Abendlicht.
// Schreibt nur zwei CSS-Variablen (--p, --q); Reduced Motion setzt beide in CSS auf 1.
(() => {
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gasse = document.querySelector('.gasse');
  const fuge = document.querySelector('.fuge');
  const clamp = (v) => Math.min(1, Math.max(0, v));
  let wartet = false;

  function rechnen() {
    wartet = false;
    const h = innerHeight;
    if (gasse) {
      const r = gasse.querySelector('.gasse__haeuser').getBoundingClientRect();
      // 0, wenn die Häuser unten ins Bild kommen; 1, wenn ihre Mitte bei 40 % der Höhe steht
      gasse.style.setProperty('--p', clamp((h * .85 - r.top) / (h * .85 - (h * .4 - r.height / 2))).toFixed(3));
    }
    if (fuge) {
      const r = fuge.getBoundingClientRect();
      fuge.style.setProperty('--q', clamp((h - r.top) / (h * .55)).toFixed(3));
    }
  }
  if (!ruhig) {
    addEventListener('scroll', () => { if (!wartet) { wartet = true; requestAnimationFrame(rechnen); } }, { passive: true });
    addEventListener('resize', rechnen);
    rechnen();
  }

  // Menü mobil
  const nav = document.querySelector('.nav');
  const knopf = document.querySelector('.nav__menue');
  knopf?.addEventListener('click', () => {
    const offen = nav.classList.toggle('nav--offen');
    knopf.setAttribute('aria-expanded', offen);
    knopf.textContent = offen ? 'Schließen' : 'Menü';
  });

  // Buchen-Leiste mobil: erst nach dem ersten Bildschirm, über dem Fuß wieder weg
  const leiste = document.querySelector('.leiste');
  const fuss = document.querySelector('.fuss');
  if (leiste) {
    const zeigen = () => {
      const unten = fuss ? fuss.getBoundingClientRect().top < innerHeight : false;
      leiste.classList.toggle('leiste--da', scrollY > innerHeight * .6 && !unten);
    };
    addEventListener('scroll', zeigen, { passive: true });
    zeigen();
  }

  // Formular-Satz: Prototyp schickt nichts ab
  document.querySelectorAll('.anfrage form').forEach((f) => f.addEventListener('submit', (e) => {
    e.preventDefault();
    const danke = f.querySelector('.anfrage__danke');
    danke.hidden = false;
    danke.focus();
  }));
})();
