/* Runde 5: Film-Quelle, Verbwechsel auf der Bühne, Nav, horizontale Reihe, Handy-Leiste */
(() => {
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const handy = matchMedia('(max-width: 767px)').matches;
  const breit = matchMedia('(min-width: 1024px)');
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  // Film: Quelle einmal setzen, Handy bekommt den Hochformat-Schnitt
  const film = document.querySelector('.film');
  if (film && !film.src) {
    if (handy) film.poster = film.dataset.posterMobil;
    film.src = handy ? film.dataset.srcMobil : film.dataset.src;
    if (ruhig) film.removeAttribute('autoplay');
    else film.play().catch(() => {});
  }

  // Verben in Buchstaben teilen, damit sie einzeln aufsteigen
  document.querySelectorAll('.verb').forEach((el) => {
    el.innerHTML = [...el.textContent].map((z, i) => `<span class="b" style="--d:${i}">${z}</span>`).join('');
  });

  const buehne = document.querySelector('.buehne');
  const zustaende = [...document.querySelectorAll('.zustand')];
  const bilder = [...document.querySelectorAll('.bild')];
  const schritte = [...document.querySelectorAll('.schritte li')];
  const nav = document.querySelector('.nav');
  const vorhaben = document.querySelector('.vorhaben');
  const reihe = document.querySelector('.reihe');
  let aktiv = 0;
  let letztesY = 0;
  let strecke = 0;

  function setzeZustand(i) {
    if (i === aktiv) return;
    aktiv = i;
    zustaende.forEach((z, k) => z.classList.toggle('ist-aktiv', k === i));
    bilder.forEach((b) => b.classList.toggle('ist-offen', Number(b.dataset.i) <= i));
    schritte.forEach((s, k) => s.classList.toggle('ist-voll', k < i));
    buehne.classList.toggle('ist-weiter', i > 0);
    if (!film || ruhig) return;
    if (i === 0) film.play().catch(() => {});
    else setTimeout(() => aktiv > 0 && film.pause(), 1200);
  }

  function messeReihe() {
    if (!breit.matches || ruhig) {
      vorhaben.style.height = '';
      reihe.style.transform = '';
      vorhaben.querySelector('.vorhaben__halt').style.cssText = '';
      strecke = 0;
      return;
    }
    const halt = vorhaben.querySelector('.vorhaben__halt');
    halt.style.cssText = 'position:sticky;top:0;height:100svh;overflow:hidden;padding-top:var(--nav);padding-bottom:0';
    strecke = Math.max(0, reihe.scrollWidth - (innerWidth - reihe.getBoundingClientRect().left) + 40);
    vorhaben.style.height = `${innerHeight + strecke}px`;
  }

  function beimScrollen() {
    const y = scrollY;
    const r = buehne.getBoundingClientRect();
    const lauf = buehne.offsetHeight - innerHeight;
    const p = clamp(-r.top / lauf);
    setzeZustand(Math.min(3, Math.floor(p * 3.999 + 0.12)));

    const aufFilm = r.bottom > 76;
    nav.classList.toggle('ist-auf-film', aufFilm);
    nav.classList.toggle('ist-weg', !aufFilm && y > letztesY && y - lauf > innerHeight * 0.3);
    document.body.classList.toggle('zeige-leiste', r.bottom < innerHeight * 0.5);
    letztesY = y;

    if (strecke) {
      const v = vorhaben.getBoundingClientRect();
      reihe.style.transform = `translate3d(${-clamp(-v.top / strecke) * strecke}px,0,0)`;
    }
  }

  // Startzustand ohne Umweg über setzeZustand
  zustaende[0].classList.add('ist-aktiv');

  if (!ruhig && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', beimScrollen);
    const tick = (t) => { lenis.raf(t); requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const ziel = document.querySelector(a.getAttribute('href'));
      if (ziel) { e.preventDefault(); lenis.scrollTo(ziel, { offset: -70 }); }
    }));
  } else {
    addEventListener('scroll', beimScrollen, { passive: true });
  }

  addEventListener('resize', () => { messeReihe(); beimScrollen(); });
  addEventListener('load', () => { messeReihe(); beimScrollen(); });
  messeReihe();
  beimScrollen();
})();
