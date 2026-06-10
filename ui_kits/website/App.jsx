/* ── App — main router + data ─────────────────────────────────── */

const WINES = [
  { id: 1, name: 'WASEM WEISS',       vintage: '2022', price: '€ 16,00', tags: ['LEHM','KALK'],          certs: ['BIO','VEGAN'], category: 'weiss', desc: 'Frisch, elegant und mineralisch. Ein Weißwein mit Klarheit, Struktur und feiner Frucht.' },
  { id: 2, name: 'WASEM ROT',         vintage: '2021', price: '€ 24,00', tags: ['LEHM','SCHIEFER'],      certs: ['BIO'],         category: 'rot',   desc: 'Tiefgründig, würzig und elegant. Ein Rotwein mit Charakter und Länge, geprägt von Handwerk und Herkunft.' },
  { id: 3, name: 'DOPPELSTÜCK ROSÉ',  vintage: '2023', price: '€ 18,00', tags: ['KALK'],                 certs: ['BIO','VEGAN'], category: 'rosé',  desc: 'Zart und lebendig. Beerige Aromen mit einer feinen salzigen Mineralität — der ideale Sommerbegleiter.' },
  { id: 4, name: 'PINOT NOIR',        vintage: '2020', price: '€ 32,00', tags: ['LEHM','KALK','SCHIEFER'], certs: [],            category: 'rot',   desc: 'Seidig und komplex. Eleganter Spätburgunder aus besten Rheinhessen-Lagen.' },
  { id: 5, name: 'GRAUER BURGUNDER',  vintage: '2022', price: '€ 22,00', tags: ['KALK'],                 certs: ['BIO'],         category: 'weiss', desc: 'Vollmundig und cremig mit eleganter Würze und reifer, gelber Frucht.' },
  { id: 6, name: 'RIESLING',          vintage: '2023', price: '€ 19,00', tags: ['SCHIEFER','KALK'],      certs: ['BIO','VEGAN'], category: 'weiss', desc: 'Klare Mineralität, lebendige Säure und zarte Pfirsichfrucht. Typisch Rheinhessen.' },
  { id: 7, name: 'SPÄTBURGUNDER',     vintage: '2021', price: '€ 28,00', tags: ['LEHM'],                 certs: ['BIO'],         category: 'rot',   desc: 'Kräftig und ausdrucksstark. Schwarzkirsche, Gewürze und samtige Tannine.' },
  { id: 8, name: 'WEISSER BURGUNDER', vintage: '2022', price: '€ 17,00', tags: ['KALK'],                 certs: ['BIO','VEGAN'], category: 'weiss', desc: 'Frisch und fruchtig mit feiner Cremigkeit. Ideal als Aperitif oder zu leichten Speisen.' },
];

function App() {
  const [page,        setPage]        = React.useState('home');
  const [wine,        setWine]        = React.useState(null);
  const [cartCount,   setCartCount]   = React.useState(0);

  const navigate = (p) => {
    setPage(p);
    document.getElementById('app-scroll-top')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWineSelect = (w) => {
    setWine(w);
    setPage('product');
  };

  const handleAddToCart = () => setCartCount(c => c + 1);

  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
      <div id="app-scroll-top" style={{ position: 'absolute', top: 0 }} />
      <WDNavigation currentPage={page} onNavigate={navigate} cartCount={cartCount} />

      <div style={{ paddingTop: 64 }}>
        {page === 'home'    && <WDHomePage    onNavigate={navigate} onWineSelect={handleWineSelect} wines={WINES} />}
        {page === 'shop'    && <WDWineShop    onWineSelect={handleWineSelect} wines={WINES} />}
        {page === 'product' && <WDProductDetail wine={wine} onNavigate={navigate} onAddToCart={handleAddToCart} />}
        {page === 'hotel'   && <WDHotelPage   onNavigate={navigate} />}
        {page === 'events'  && <WDEventsPage  onNavigate={navigate} />}
        {(page === 'weingut' || page === 'herkunft' || page === 'journal' || page === 'kontakt' || page === 'cart') && (
          <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--color-warm-ivory)', gap: 16 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 80, fontWeight: 500, opacity: 0.08 }}>W</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, fontStyle: 'italic' }}>
              {({ weingut: 'Das Weingut', herkunft: 'Unsere Herkunft', journal: 'Journal', kontakt: 'Kontakt', cart: 'Warenkorb' })[page]}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: 4 }}>Diese Seite ist im Prototyp noch nicht ausgebaut.</div>
          </div>
        )}
      </div>

      <WDFooter onNavigate={navigate} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
