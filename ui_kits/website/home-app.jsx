/* ── home-app.jsx — assembles the intent-led homepage ────────────── */
const HOME_WINES = [
  { id: 1, name: 'WASEM WEISS',      vintage: '2022', price: '€ 16,00', tags: ['LEHM','KALK'],     certs: ['BIO','VEGAN'] },
  { id: 2, name: 'WASEM ROT',        vintage: '2021', price: '€ 24,00', tags: ['LEHM','SCHIEFER'], certs: ['BIO'] },
  { id: 3, name: 'DOPPELSTÜCK ROSÉ', vintage: '2023', price: '€ 18,00', tags: ['KALK'],            certs: ['BIO','VEGAN'] },
  { id: 6, name: 'RIESLING',         vintage: '2023', price: '€ 19,00', tags: ['SCHIEFER','KALK'], certs: ['BIO','VEGAN'] },
];

function HomeApp() {
  const [lang, setLang] = React.useState(() => localStorage.getItem('wd-lang') || 'de');
  const onLang = (L) => { setLang(L); localStorage.setItem('wd-lang', L); };

  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  return (
    <div id="top" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', background: 'var(--color-warm-ivory)' }}>
      <WDHomeNav lang={lang} onLang={onLang} cartCount={2} />
      <main>
        <WHero lang={lang} />
        <WIntent lang={lang} />
        <WPress lang={lang} />
        <WTrust lang={lang} />
        <WShop lang={lang} wines={HOME_WINES} />
        <WHotel lang={lang} />
        <WWedding lang={lang} />
        <WBiz lang={lang} />
        <WEvents lang={lang} />
        <WJournal lang={lang} />
        <WFaq lang={lang} />
        <WNewsletter lang={lang} />
      </main>
      <WFooter lang={lang} onLang={onLang} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomeApp />);
