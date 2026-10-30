// Runde 9: Nav-Zustände, Menü als Raum, mobile Leiste
(() => {
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  const leiste = document.querySelector('.leiste');
  let letzte = scrollY;
  const pruefen = () => {
    const y = scrollY, grenze = hero.offsetHeight - nav.offsetHeight;
    nav.classList.toggle('fest', y > grenze);
    nav.classList.toggle('weg', y > grenze + 80 && y > letzte);
    if (leiste) leiste.classList.toggle('da', y > 40);
    letzte = y;
  };
  addEventListener('scroll', pruefen, { passive: true });
  pruefen();

  const menue = document.getElementById('menue');
  const auf = document.querySelector('.nav__menue');
  const zu = menue.querySelector('.menue__zu');
  const bilder = menue.querySelectorAll('.menue__bild img');
  const fokusbar = () => menue.querySelectorAll('a, button');
  const setzen = offen => {
    menue.classList.toggle('offen', offen);
    menue.setAttribute('aria-hidden', !offen);
    auf.setAttribute('aria-expanded', offen);
    document.body.style.overflow = offen ? 'hidden' : '';
    (offen ? zu : auf).focus({ preventScroll: true });
  };
  auf.addEventListener('click', () => setzen(true));
  zu.addEventListener('click', () => setzen(false));
  menue.querySelectorAll('ol a').forEach((a, i) => {
    a.addEventListener('click', () => setzen(false));
    const zeigen = () => bilder.forEach((b, j) => b.classList.toggle('an', j === i));
    a.addEventListener('mouseenter', zeigen);
    a.addEventListener('focus', zeigen);
  });
  menue.addEventListener('keydown', e => {
    if (e.key === 'Escape') return setzen(false);
    if (e.key !== 'Tab') return;
    const f = fokusbar(), erst = f[0], letzt = f[f.length - 1];
    if (e.shiftKey && document.activeElement === erst) { e.preventDefault(); letzt.focus(); }
    else if (!e.shiftKey && document.activeElement === letzt) { e.preventDefault(); erst.focus(); }
  });

  requestAnimationFrame(() => document.documentElement.classList.add('geladen'));
})();
