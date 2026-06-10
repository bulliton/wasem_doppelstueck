/* ── home-content.jsx ──────────────────────────────────────────────
 * Bilingual content dictionary (DE / EN) + shared visual helpers
 * (thin-outline Icon system, striped image Placeholder).
 * Everything attaches to window so the other babel files can read it.
 * ------------------------------------------------------------------ */

/* ── Thin-outline icon system (Lucide-weight, 1.25px @ 24) ───────── */
function WIcon({ name, size = 24, stroke = 1.25, color = 'currentColor', style = {} }) {
  const P = {
    grape: <><path d="M12 6V3M12 3h3M8 9.5a2 2 0 1 0 0 .01M16 9.5a2 2 0 1 0 0 .01M12 12.5a2 2 0 1 0 0 .01M10 15.5a2 2 0 1 0 0 .01M14 15.5a2 2 0 1 0 0 .01M12 18.5a2 2 0 1 0 0 .01"/></>,
    bed: <><path d="M2 17v-5h20v5M2 17v3M22 17v3M2 12V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5M6 9h4M14 9h4"/></>,
    rings: <><circle cx="9" cy="14" r="5"/><circle cx="15" cy="14" r="5"/><path d="M9 9l1.5-3h3L15 9"/></>,
    briefcase: <><rect x="3" y="8" width="18" height="12"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></>,
    party: <><path d="M4 20l5-14 9 9-14 5zM9 6l1 4M14 11l4 1M11 4l.5 1.5M19 8l1.5.5M16 4l.5 1.5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    leaf: <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zm0 0a7 7 0 0 0 7-7"/>,
    family: <><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.2"/><path d="M3 20v-1a6 6 0 0 1 12 0v1M15.5 20v-.5a4 4 0 0 1 5.5-3.7"/></>,
    hand: <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8l3 3h1.5a4.5 4.5 0 0 0 4.5-4.5V11"/>,
    bottle: <><path d="M10 2h4M11 2v3.5c0 1-2 2-2 4.5v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V10c0-2.5-2-3.5-2-4.5V2"/><path d="M9 13h6"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    map: <><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></>,
    glass: <><path d="M8 3h8l-1 8a3 3 0 0 1-6 0L8 3zM12 14v5M8 21h8"/></>,
    gift: <><rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 4 7.5 4 5 8 5 8M12 8s2-4 4.5-4S19 8 19 8"/></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
    chevron: <path d="M6 9l6 6 6-6"/>,
    quote: <><path d="M7 7H4v6h5V7H7v3M18 7h-3v6h5V7h-2v3"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></>,
    star: <path d="M12 3l2.5 5.5 6 .5-4.5 4 1.5 6-5.5-3.5L6 19l1.5-6L3 9l6-.5L12 3z"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {P[name] || null}
    </svg>
  );
}

/* ── Striped image placeholder w/ monospace caption ──────────────── */
function WPlaceholder({ label = 'IMAGE', tone = 'sand', height = '100%', style = {} }) {
  const tones = {
    sand:  { bg: '#E7DAC4', stripe: 'rgba(154,118,85,0.14)', ink: '#9A7655' },
    cream: { bg: '#EFE4D1', stripe: 'rgba(154,118,85,0.10)', ink: '#9A7655' },
    green: { bg: '#2C3A26', stripe: 'rgba(246,241,232,0.06)', ink: 'rgba(246,241,232,0.55)' },
    dark:  { bg: '#161615', stripe: 'rgba(246,241,232,0.05)', ink: 'rgba(246,241,232,0.45)' },
  };
  const t = tones[tone] || tones.sand;
  return (
    <div style={{
      position: 'relative', width: '100%', height, overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, ${t.bg} 0, ${t.bg} 11px, ${t.stripe} 11px, ${t.stripe} 12px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', ...style,
    }}>
      <span style={{
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 10.5,
        letterSpacing: '0.18em', color: t.ink, textTransform: 'uppercase',
        background: t.bg, padding: '5px 10px', whiteSpace: 'nowrap',
      }}>{label}</span>
    </div>
  );
}

/* ── Real media from doppelstueck.com ────────────────────────────────
 * Live links to the winery's own photography + autumn vineyard video.
 * Each surface degrades to the striped WPlaceholder if a link breaks. */
const WMedia = {
  heroVideo:   'https://doppelstueck.com/wp-content/uploads/2023/10/Herbstvideo.mp4',
  heroPoster:  'https://doppelstueck.com/wp-content/uploads/2024/02/06890_Wasem_web-e1708609980763-1024x527.jpg',
  vineyardWide:'https://doppelstueck.com/wp-content/uploads/2024/02/06890_Wasem_web-e1708609980763-1024x527.jpg',
  // Weinhotel
  hotelSuite:  'https://doppelstueck.com/wp-content/uploads/2022/12/07770_Wasem.jpg',
  hotelKlassik:'https://doppelstueck.com/wp-content/uploads/2024/03/Klassik-1024x1024.jpg',
  hotelStamm:  'https://doppelstueck.com/wp-content/uploads/2024/03/Stammhaus-1024x1024.jpg',
  hotelRoom2:  'https://doppelstueck.com/wp-content/uploads/2022/12/07557_Wasem-scaled.jpg',
  hotelHero:   'https://doppelstueck.com/wp-content/uploads/2023/04/2-1.jpg',
  // Hochzeiten
  weddingArch: 'https://doppelstueck.com/wp-content/uploads/2022/11/Doppelstueck_Ingelheim_Weingut_Hochzeit_Weinberge_Trauung_Bogen_2.jpg',
  weddingHut:  'https://doppelstueck.com/wp-content/uploads/2022/11/Doppelstueck_Ingelheim_Weingut_Hochzeit_Weinberge_Trauung_Bogen_2.jpg',
  // Banners / journal
  bannerSpaet: 'https://doppelstueck.com/wp-content/uploads/2025/03/Banner_Website_Ingelheimer-Spaetburgunder-scaled.jpg',
  bannerEvents:'https://doppelstueck.com/wp-content/uploads/2025/02/WeinEvents-Banner-scaled.jpg',
};

/* Real <img> with object-fit cover + striped-placeholder fallback */
function WImg({ src, label = 'IMAGE', tone = 'sand', position = 'center', style = {} }) {
  const [failed, setFailed] = React.useState(false);
  if (failed || !src) return <WPlaceholder label={label} tone={tone} style={style} />;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}>
      <img src={src} alt={label} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }} />
    </div>
  );
}

/* Autoplay muted-loop background video w/ poster + placeholder fallback */
function WVideo({ src, poster, label = 'VIDEO', tone = 'dark', position = 'center', style = {} }) {
  const [failed, setFailed] = React.useState(false);
  if (failed || !src) return <WPlaceholder label={label} tone={tone} style={style} />;
  return (
    <video src={src} poster={poster} autoPlay muted loop playsInline preload="metadata"
      onError={() => setFailed(true)}
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block', ...style }} />
  );
}

/* ── Bilingual content dictionary ────────────────────────────────── */
const WC = {
  de: {
    locale: 'de',
    nav: {
      tagline: 'WEINGUT · WEINHOTEL · EVENTS',
      links: [
        { id: 'weingut',  label: 'WEINGUT',  cols: [
          { head: 'Das Haus', items: ['Über uns', 'Winzerfamilie', 'Bio-Weingut', 'Nachhaltigkeit'] },
          { head: 'Erleben',  items: ['Weinberge', 'Weinproben', 'Kellerführungen', 'Unsere Weine'] },
        ]},
        { id: 'weinshop', label: 'WEINSHOP', cols: [
          { head: 'Sortiment', items: ['Weißwein', 'Rotwein', 'Rosé', 'Sekt'] },
          { head: 'Mehr',      items: ['Weinpakete', 'Geschenkideen', 'Bestseller', 'Gutscheine'] },
        ]},
        { id: 'weinhotel', label: 'WEINHOTEL', cols: [
          { head: 'Aufenthalt', items: ['Zimmer & Suiten', 'Preise', 'Arrangements', 'Weinwochenenden'] },
          { head: 'Service',    items: ['Angebote', 'FAQ', 'Jetzt buchen'] },
        ]},
        { id: 'hochzeiten', label: 'HOCHZEITEN', cols: [
          { head: 'Feiern',   items: ['Hochzeitslocation', 'Freie Trauung', 'Hochzeitsfeier'] },
          { head: 'Planung',  items: ['Pakete & Preise', 'Galerie', 'Referenzen', 'Anfrage stellen'] },
        ]},
        { id: 'firmenevents', label: 'FIRMENEVENTS', cols: [
          { head: 'Formate',  items: ['Tagungen', 'Seminare', 'Workshops', 'Incentives'] },
          { head: 'Mehr',     items: ['Teambuilding', 'Weinproben für Firmen', 'Pakete', 'Anfrage'] },
        ]},
        { id: 'aktuelles', label: 'AKTUELLES', cols: [
          { head: 'Magazin',  items: ['Weinwissen', 'Rheinhessen', 'Hochzeiten', 'News'] },
          { head: 'Termine',  items: ['Eventkalender', 'Private Events', 'Kontakt'] },
        ]},
      ],
      book: 'JETZT BUCHEN',
    },
    hero: {
      over: 'Familienweingut · Ingelheim, Rheinhessen',
      title: ['Charakter.', 'Herkunft.', 'Handwerk.'],
      sub: 'Willkommen bei Wasem Doppelstück — Weingut, Weinhotel und Eventdestination im Herzen Rheinhessens. Ein Ort, an dem man willkommen ist.',
      ctaA: 'WEINE ENTDECKEN', ctaB: 'AUFENTHALT PLANEN',
    },
    intent: {
      over: 'Ihr Weg zu uns',
      title: 'Was möchten Sie erleben?',
      paths: [
        { id: 'weinshop',   icon: 'bottle',   name: 'Wein entdecken',   sub: 'Bio-Weine direkt vom Winzer' },
        { id: 'weinhotel',  icon: 'bed',      name: 'Hotel buchen',     sub: 'Übernachten in den Weinbergen' },
        { id: 'hochzeiten', icon: 'rings',    name: 'Hochzeit planen',  sub: 'Heiraten im Weingut' },
        { id: 'firmen',     icon: 'briefcase',name: 'Tagung organisieren', sub: 'Firmenevents & Seminare' },
        { id: 'private',    icon: 'party',    name: 'Feier veranstalten', sub: 'Private Anlässe & Genuss' },
      ],
    },
    trust: [
      { icon: 'leaf',   t: 'Bio-zertifiziert',   s: 'Ökologischer Anbau' },
      { icon: 'family', t: 'Familienweingut',    s: 'Seit Generationen' },
      { icon: 'hand',   t: 'Handgelesen',        s: 'Selektive Handlese' },
      { icon: 'map',    t: 'Rheinhessen',        s: 'Herkunft mit Charakter' },
    ],
    shop: {
      over: 'Weinshop', title: 'Weine mit Charakter',
      body: 'Frische Weißweine, tiefgründige Rotweine, lebendige Rosés — alle aus biologischem Anbau, alle mit der Handschrift unserer Lagen.',
      cta: 'ALLE WEINE ANSEHEN', cross: 'Verschenken Sie Genuss — zu unseren Geschenkideen →',
    },
    hotel: {
      over: 'Weinhotel', title: 'Schlafen zwischen\nden Reben',
      body: 'Unsere Zimmer und Suiten verbinden Stille, Natur und die Herzlichkeit der Familie Wasem. Aufwachen mit Blick über die Weinberge Rheinhessens.',
      cta: 'ZIMMER & PREISE', rooms: [
        { n: 'Weinberg-Suite', m: 'ab € 180 / Nacht' },
        { n: 'Gutshof-Zimmer', m: 'ab € 120 / Nacht' },
        { n: 'Gartenblick',    m: 'ab € 140 / Nacht' },
        { n: 'Turmzimmer',     m: 'ab € 160 / Nacht' },
      ],
      cross: 'Bleiben Sie länger — entdecken Sie unsere Weinwochenenden →',
    },
    wedding: {
      over: 'Hochzeiten', title: 'Heiraten,\nwo der Wein wächst',
      body: 'Eine freie Trauung zwischen den Reben, gefeiert im historischen Gutshof. Wir gestalten Ihren Tag mit Herz, Handwerk und regionaler Küche.',
      ctaA: 'ANFRAGE STELLEN', ctaB: 'GALERIE ANSEHEN',
      stats: [{ n: '120', l: 'Gäste im Gutshof' }, { n: '2', l: 'Locations vor Ort' }, { n: '15', l: 'Hotelzimmer' }],
    },
    biz: {
      over: 'Für Unternehmen', title: 'Tagen & feiern',
      cards: [
        { id: 'firmen',  icon: 'briefcase', t: 'Firmenevents', s: 'Tagungen, Seminare und Workshops in inspirierender Umgebung — inklusive Weinprobe und Übernachtung.', cta: 'Tagung anfragen' },
        { id: 'private', icon: 'glass',     t: 'Private Events', s: 'Geburtstage, JGA, Familien- und Weihnachtsfeiern. Wir richten Ihren Anlass persönlich aus.', cta: 'Feier anfragen' },
      ],
    },
    events: {
      over: 'Eventkalender', title: 'Demnächst bei uns', cta: 'ALLE TERMINE',
      list: [
        { d: '14', mo: 'JUN', y: '2026', t: 'Sommerliche Weinprobe im Weinberg', cat: 'WEINPROBE' },
        { d: '28', mo: 'JUN', y: '2026', t: 'Winzer-BBQ & offener Keller', cat: 'GENUSS' },
        { d: '12', mo: 'JUL', y: '2026', t: 'Rosé-Abend auf der Terrasse', cat: 'WEINPROBE' },
        { d: '06', mo: 'SEP', y: '2026', t: 'Tag der offenen Weinberge', cat: 'FAMILIE' },
      ],
    },
    journal: {
      over: 'Aktuelles', title: 'Aus dem Weingut', cta: 'ZUM MAGAZIN',
      posts: [
        { cat: 'WEINWISSEN', t: 'Was ist Bio-Wein wirklich?', m: '5 Min. Lesezeit' },
        { cat: 'RHEINHESSEN', t: 'Ein Wochenende in Rheinhessen', m: '7 Min. Lesezeit' },
        { cat: 'HOCHZEITEN', t: 'Checkliste: Hochzeit im Weingut', m: '6 Min. Lesezeit' },
      ],
    },
    faq: {
      over: 'Häufige Fragen', title: 'Gut zu wissen',
      items: [
        { q: 'Kann ich Weine direkt online bestellen?', a: 'Ja. Unser Weinshop liefert deutschlandweit innerhalb von 2–4 Werktagen. Ab 12 Flaschen liefern wir versandkostenfrei.' },
        { q: 'Wie buche ich ein Zimmer im Weinhotel?', a: 'Buchen Sie direkt über die Seite „Weinhotel" oder telefonisch. Frühstück mit regionalen Produkten ist immer inklusive.' },
        { q: 'Was kostet eine Hochzeit im Weingut?', a: 'Unsere Hochzeitspakete beginnen bei einer Raummiete für bis zu 120 Gäste. Senden Sie uns eine Anfrage für ein individuelles Angebot.' },
        { q: 'Bieten Sie Tagungen und Firmenevents an?', a: 'Ja. Vom Seminarraum bis zum Teambuilding mit Weinprobe — inklusive Technik, Verpflegung und optionaler Übernachtung.' },
        { q: 'Sind Ihre Weine biologisch und vegan?', a: 'Alle unsere Weine stammen aus zertifiziert biologischem Anbau. Viele sind zusätzlich vegan — gekennzeichnet mit dem BIO- und VEGAN-Siegel.' },
      ],
    },
    news: {
      over: 'Newsletter', title: 'Bleiben Sie in Verbindung',
      body: 'Neue Jahrgänge, Termine im Weingut und Angebote für Hotel und Events — etwa einmal im Monat, nie mehr.',
      ph: 'Ihre E-Mail-Adresse', cta: 'ANMELDEN', note: 'Mit der Anmeldung stimmen Sie unserer Datenschutzerklärung zu. Abmeldung jederzeit möglich.',
      ok: 'Danke! Bitte bestätigen Sie die E-Mail in Ihrem Postfach.',
    },
    footer: {
      blurb: 'Familiengeführtes Bio-Weingut, Weinhotel und Eventdestination in Ingelheim, Rheinhessen.',
      cols: [
        { head: 'WEINGUT', items: ['Über uns', 'Bio-Weingut', 'Nachhaltigkeit', 'Weinberge', 'Kellerführungen'] },
        { head: 'WEINSHOP', items: ['Weißwein', 'Rotwein', 'Rosé', 'Weinpakete', 'Gutscheine'] },
        { head: 'AUFENTHALT', items: ['Weinhotel', 'Arrangements', 'Hochzeiten', 'Firmenevents', 'Private Events'] },
        { head: 'SERVICE', items: ['Eventkalender', 'Aktuelles', 'FAQ', 'Kontakt', 'Anfahrt'] },
      ],
      visit: 'Besuchen Sie uns', address: ['Wasem Doppelstück', 'Weinbergstraße 1', '55218 Ingelheim am Rhein'],
      rights: '© 2026 Weingut Wasem Doppelstück · Alle Rechte vorbehalten',
      legal: ['Impressum', 'Datenschutz', 'AGB'],
    },
  },

  en: {
    locale: 'en',
    nav: {
      tagline: 'WINERY · WINE HOTEL · EVENTS',
      links: [
        { id: 'weingut',  label: 'WINERY', cols: [
          { head: 'The House', items: ['About Us', 'The Family', 'Organic Estate', 'Sustainability'] },
          { head: 'Experience', items: ['Vineyards', 'Wine Tastings', 'Cellar Tours', 'Our Wines'] },
        ]},
        { id: 'weinshop', label: 'WINE SHOP', cols: [
          { head: 'Range', items: ['White Wine', 'Red Wine', 'Rosé', 'Sparkling'] },
          { head: 'More',  items: ['Wine Sets', 'Gift Ideas', 'Bestsellers', 'Vouchers'] },
        ]},
        { id: 'weinhotel', label: 'WINE HOTEL', cols: [
          { head: 'Stay',    items: ['Rooms & Suites', 'Rates', 'Packages', 'Wine Weekends'] },
          { head: 'Service', items: ['Offers', 'FAQ', 'Book Now'] },
        ]},
        { id: 'hochzeiten', label: 'WEDDINGS', cols: [
          { head: 'Celebrate', items: ['Wedding Venue', 'Free Ceremony', 'Reception'] },
          { head: 'Planning',  items: ['Packages & Pricing', 'Gallery', 'References', 'Make Enquiry'] },
        ]},
        { id: 'firmenevents', label: 'CORPORATE', cols: [
          { head: 'Formats', items: ['Conferences', 'Seminars', 'Workshops', 'Incentives'] },
          { head: 'More',    items: ['Team Building', 'Corporate Tastings', 'Packages', 'Enquiry'] },
        ]},
        { id: 'aktuelles', label: 'JOURNAL', cols: [
          { head: 'Magazine', items: ['Wine Knowledge', 'Rheinhessen', 'Weddings', 'News'] },
          { head: 'Dates',    items: ['Event Calendar', 'Private Events', 'Contact'] },
        ]},
      ],
      book: 'BOOK NOW',
    },
    hero: {
      over: 'Family Winery · Ingelheim, Rheinhessen',
      title: ['Character.', 'Origin.', 'Craft.'],
      sub: 'Welcome to Wasem Doppelstück — winery, wine hotel and event destination in the heart of Rheinhessen. A place where you are welcomed.',
      ctaA: 'DISCOVER WINES', ctaB: 'PLAN A STAY',
    },
    intent: {
      over: 'Your path to us',
      title: 'What would you like to experience?',
      paths: [
        { id: 'weinshop',   icon: 'bottle',   name: 'Discover wine',      sub: 'Organic wines from the grower' },
        { id: 'weinhotel',  icon: 'bed',      name: 'Book the hotel',     sub: 'Stay among the vineyards' },
        { id: 'hochzeiten', icon: 'rings',    name: 'Plan a wedding',     sub: 'Marry at the estate' },
        { id: 'firmen',     icon: 'briefcase',name: 'Host a conference',  sub: 'Corporate events & seminars' },
        { id: 'private',    icon: 'party',    name: 'Throw a party',      sub: 'Private occasions & pleasure' },
      ],
    },
    trust: [
      { icon: 'leaf',   t: 'Certified Organic', s: 'Ecological farming' },
      { icon: 'family', t: 'Family Estate',     s: 'For generations' },
      { icon: 'hand',   t: 'Hand-Harvested',    s: 'Selective hand-picking' },
      { icon: 'map',    t: 'Rheinhessen',       s: 'Origin with character' },
    ],
    shop: {
      over: 'Wine Shop', title: 'Wines with character',
      body: 'Fresh whites, profound reds, lively rosés — all organically grown, all carrying the signature of our sites.',
      cta: 'VIEW ALL WINES', cross: 'Give the gift of pleasure — see our gift ideas →',
    },
    hotel: {
      over: 'Wine Hotel', title: 'Sleep among\nthe vines',
      body: 'Our rooms and suites blend quiet, nature and the warmth of the Wasem family. Wake up overlooking the vineyards of Rheinhessen.',
      cta: 'ROOMS & RATES', rooms: [
        { n: 'Vineyard Suite', m: 'from € 180 / night' },
        { n: 'Estate Room',    m: 'from € 120 / night' },
        { n: 'Garden View',    m: 'from € 140 / night' },
        { n: 'Tower Room',     m: 'from € 160 / night' },
      ],
      cross: 'Stay longer — discover our wine weekends →',
    },
    wedding: {
      over: 'Weddings', title: 'Marry where\nthe wine grows',
      body: 'A free ceremony among the vines, celebrated in the historic estate house. We craft your day with heart, craftsmanship and regional cuisine.',
      ctaA: 'MAKE AN ENQUIRY', ctaB: 'VIEW GALLERY',
      stats: [{ n: '120', l: 'Guests in the estate' }, { n: '2', l: 'On-site locations' }, { n: '15', l: 'Hotel rooms' }],
    },
    biz: {
      over: 'For Business', title: 'Meet & celebrate',
      cards: [
        { id: 'firmen',  icon: 'briefcase', t: 'Corporate Events', s: 'Conferences, seminars and workshops in inspiring surroundings — including tasting and overnight stay.', cta: 'Enquire about meetings' },
        { id: 'private', icon: 'glass',     t: 'Private Events', s: 'Birthdays, parties, family and Christmas celebrations. We host your occasion personally.', cta: 'Enquire about a party' },
      ],
    },
    events: {
      over: 'Event Calendar', title: 'Coming up at the estate', cta: 'ALL DATES',
      list: [
        { d: '14', mo: 'JUN', y: '2026', t: 'Summer wine tasting in the vineyard', cat: 'TASTING' },
        { d: '28', mo: 'JUN', y: '2026', t: 'Winemaker BBQ & open cellar', cat: 'PLEASURE' },
        { d: '12', mo: 'JUL', y: '2026', t: 'Rosé evening on the terrace', cat: 'TASTING' },
        { d: '06', mo: 'SEP', y: '2026', t: 'Open vineyards day', cat: 'FAMILY' },
      ],
    },
    journal: {
      over: 'Journal', title: 'From the estate', cta: 'TO THE MAGAZINE',
      posts: [
        { cat: 'WINE KNOWLEDGE', t: 'What organic wine really means', m: '5 min read' },
        { cat: 'RHEINHESSEN', t: 'A weekend in Rheinhessen', m: '7 min read' },
        { cat: 'WEDDINGS', t: 'Checklist: a wedding at the estate', m: '6 min read' },
      ],
    },
    faq: {
      over: 'Frequently Asked', title: 'Good to know',
      items: [
        { q: 'Can I order wines directly online?', a: 'Yes. Our wine shop ships across Germany within 2–4 business days. Shipping is free from 12 bottles.' },
        { q: 'How do I book a room at the wine hotel?', a: 'Book directly via the "Wine Hotel" page or by phone. Breakfast with regional produce is always included.' },
        { q: 'What does a wedding at the estate cost?', a: 'Our wedding packages start with a venue hire for up to 120 guests. Send us an enquiry for an individual quote.' },
        { q: 'Do you host conferences and corporate events?', a: 'Yes. From the seminar room to team building with a wine tasting — including technology, catering and optional overnight stays.' },
        { q: 'Are your wines organic and vegan?', a: 'All of our wines are certified organically grown. Many are also vegan — marked with the BIO and VEGAN seals.' },
      ],
    },
    news: {
      over: 'Newsletter', title: 'Stay in touch',
      body: 'New vintages, dates at the estate and offers for the hotel and events — about once a month, never more.',
      ph: 'Your email address', cta: 'SUBSCRIBE', note: 'By subscribing you agree to our privacy policy. Unsubscribe at any time.',
      ok: 'Thank you! Please confirm the email in your inbox.',
    },
    footer: {
      blurb: 'Family-run organic winery, wine hotel and event destination in Ingelheim, Rheinhessen.',
      cols: [
        { head: 'WINERY', items: ['About Us', 'Organic Estate', 'Sustainability', 'Vineyards', 'Cellar Tours'] },
        { head: 'WINE SHOP', items: ['White Wine', 'Red Wine', 'Rosé', 'Wine Sets', 'Vouchers'] },
        { head: 'STAY', items: ['Wine Hotel', 'Packages', 'Weddings', 'Corporate', 'Private Events'] },
        { head: 'SERVICE', items: ['Event Calendar', 'Journal', 'FAQ', 'Contact', 'Directions'] },
      ],
      visit: 'Visit us', address: ['Wasem Doppelstück', 'Weinbergstraße 1', '55218 Ingelheim am Rhein'],
      rights: '© 2026 Weingut Wasem Doppelstück · All rights reserved',
      legal: ['Imprint', 'Privacy', 'Terms'],
    },
  },
};

Object.assign(window, { WIcon, WPlaceholder, WMedia, WImg, WVideo, WC });
