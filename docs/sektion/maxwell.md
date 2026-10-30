# Sektion: Maxwell Wines (maxwellwines.com.au)

Gemessen am 30.10.2026 mit Playwright headless, Desktop 1440 × 900 und mobil 390 × 844. Kein Alters-Gate, kein Cookie-Banner. Shopify-Theme (Swiper, AOS), Schriften Utopia Std, Replica Bold, Nunito Sans, Bricolage Grotesque. Startseite 7945 px hoch (mobil 4341 px), 621 Wörter im Hauptteil. Rohdaten und Skripte: `/private/tmp/claude-501/sektion/maxwell/`.

## 1. Die eine Idee

**Alles auf der Seite steht auf Kalkstein: der Boden des Guts ist die Farbe, die Fläche und das Motiv, auf dem Wein, Essen und Familie liegen.**

So erkennt man sie in jedem Abschnitt:

| Abschnitt | Kalkstein darin |
|---|---|
| Hero (Film) | Das erste Bild ist ein Paar, das eine Treppe an einer Kalksteinmauer hinabgeht. Satz: „Grounded in limestone & legacy“. |
| Familienkapitel | Seitengrund #E3E1E1, ein kühles Steingrau statt Weiß oder Creme; Text: „limestone character of the estate“. |
| Restaurant | Teller aus grauer Steinzeugkeramik, von oben auf einer Steinplatte fotografiert. Das Essen liegt sichtbar auf Stein. |
| Shop Wine | „Estate grown on our limestone ridge.“ Flaschenbild vor rauer Felswand (Lime Cave). |
| Team | Küchenteam in Schürzen vor der Kalksteinwand, an der das Wappen hängt. |
| Wappen | Schild mit M und X, gefüllt mit einem Punktraster, das wie Kalkkorn wirkt. |
| Footer | Kein Farbwechsel: derselbe Steingrund bis ganz unten, nur „MAXWELL–MADE“ groß. |

Wichtig: das Konzept wird nie als Grafik behauptet (keine Steintextur, kein Muster). Es steckt in Fotoregie, Grundfarbe und drei Textstellen. Darum wirkt es selbstverständlich statt ausgedacht.

## 2. Details

| # | Detail (konkret, mit Wert) | Warum (Wirkung) | Markenidee | Bewusst / unbewusst |
|---|---|---|---|---|
| 1 | Seitengrund durchgehend `#E3E1E1` (rgb 227/225/225), auch Footer, keine farbige Fläche auf der ganzen Startseite | Ruhig, kühl, mineralisch; Essen und Wein leuchten davor, weil der Grund keine Wärme vorgibt | Kalkstein als Boden von allem | unbewusst (man spürt „edel, ruhig“, benennt es nicht) |
| 2 | Hero ist ein 23-s-Film (1080p, 1440 × 900, `object-fit: cover`, Mitte), Folge: Menschen an Kalkmauer, Fleisch im Makro, Gläser im Gegenlicht | Erzählt in 23 s den Besuch: ankommen, essen, trinken. Kein Produkt zuerst, sondern ein Nachmittag | Ort und Tisch gleichrangig | bewusst |
| 3 | Hero-Satz klein: Replica Bold 38 px Versal, Zeilenhöhe 1,0, zwei Zeilen, unten links bei 40 px Rand | Das Bild trägt, der Satz ist Bildunterschrift. Wirkt selbstbewusst, nicht marktschreierisch | Understatement einer alten Familie | halb bewusst |
| 4 | Hero-Unterzeile Nunito Sans **kursiv** 16 px bei Zeilenhöhe 29 px (1,8) | Sehr luftig gesetzt, wirkt wie ein gesprochener Nachsatz | Stimme der Familie | unbewusst |
| 5 | Lesbarkeit: einzige Abdunklung ist `linear-gradient(transparent, rgba(0,0,0,.4))` am unteren Rand. Der Film hat helle Bilder (Gläser, Weißwein) direkt hinter dem weißen Text | Bei hellen Bildern verschwindet die Kursive. **Das ist genau Ilonas Befund** | (Fehler, keine Idee) | bewusst, sobald man liest |
| 6 | Text unten links, Knöpfe „Plan your visit“ (weiß gefüllt) und „Shop now“ (Rahmen) unten rechts | Diagonale über das Bild; Blick wandert vom Satz zur Handlung | Besuch vor Kauf (gefüllter Knopf ist der Besuch) | unbewusst |
| 7 | „A Family Estate, / *Crafted By Generations.*“ Utopia 84 px, Zeilenhöhe 0,9, zweite Zeile kursiv, Laufweite 0 | Gerade Zeile = Tatsache, kursive Zeile = Gefühl. Die enge Zeilenhöhe macht zwei Zeilen zu einem Block | Familie über Generationen | bewusst als „schön“, unbewusst als Mechanik |
| 8 | Dieselbe Schaltung wiederholt: „Estate *Favourites*“ (nur das Gefühlswort kursiv), Mitgliederzitat ganz kursiv | Wiedererkennbare Geste ohne Logo; die Kursive gehört immer dem warmen Wort | Stimme der Familie | unbewusst |
| 9 | Fließtext neben der großen Headline als schmale Spalte rechts (x 980, ca. 440 px breit, 16/22,4 px), Headline links | Asymmetrie; Headline darf atmen, Erklärung steht daneben statt darunter | Ruhe, Großzügigkeit | unbewusst |
| 10 | Alle Bilder außer dem Hero mit 20 px Rand eingesetzt (1400 von 1440 px), Ecken 0 px | Wirkt wie Passepartout; Bilder werden gerahmt gezeigt statt vollflächig „geschrien“ | Galerie, Handwerk | unbewusst |
| 11 | Restaurantbild 1400 × 800 (1,75:1) streng von oben, Teller aus grauem Steinzeug auf grauer Steinplatte, Farbe fast nur Grau plus Rot (Fleisch, Sauce) und Grün | Das Foto hat die Farbpalette der Seite. Ein Akzent (Rot) reicht für Appetit | Essen liegt auf Kalkstein | unbewusst, aber stark |
| 12 | Ecken als Layout: Label „MAXWELL RESTAURANT“ (Replica 18 px) oben links im Bild, Text 16 px und „Make a reservation →“ unten rechts | Bildmitte bleibt frei für das Motiv; Text sitzt dort, wo das Foto ruhig ist | Bild zuerst | unbewusst |
| 13 | Auszeichnung im Fließtext, kursiv mit typografischen Einfachanführungen: ‘South Australian Restaurant of the Year’ mit Quelle Gourmet Traveller | Beweis ohne Badge oder Siegel; liest sich wie Erzählung | Understatement | bewusst |
| 14 | Abschnitte getrennt durch 1-px-Linie `rgba(112,111,111,.2)`, 1400 px breit, je 20 px Luft darüber und darunter | Struktur ohne Farbblöcke; die Seite bleibt eine Fläche | Ein Grund, ein Ort | unbewusst |
| 15 | Rhythmus: Bildblöcke fest 800 px hoch ohne Innenabstand (Restaurant, Kategorien, Club), Textblöcke dazwischen 80/40 px. Folge: 900 Film, 444 Text, 800 Bild, Linie, 800 Bildpaar, 712 Karussell, Linie, 747 Produkte, 800 Bild | Wechsel aus großem Bild und kurzem Text wie Filmschnitt; nie zwei Textabschnitte hintereinander | Bild zuerst | unbewusst |
| 16 | Bildpaar „Shop Wine“ / „Our Story“ je 690 × 800 (0,86 hochkant), Titel Utopia 36 px, Zähler „1 2“ in Replica 12 px | Hochformat wirkt wie Magazinseite; die zwei Wege (kaufen, Geschichte) stehen gleich groß | Wein und Familie gleichrangig | halb bewusst |
| 17 | „Experience Maxwell Wines“: 7 Angebote als Hochkant-Karten 330 × 504 (0,65), eine davon Film; von Fine Dining über Mead-Tasting bis Helikopterflug und „Maze & Picnic“ mit Kindern | Jede Zielgruppe findet sich (Paar, Feinschmecker, Familie); jede Karte hat dieselbe Handlung „Make a reservation“ | Das Gut als Ausflugsort | bewusst |
| 18 | Menschen echt und unbeschönigt: älterer Winzer im blauen Hemd lachend am Fass, zwei Männer im Gespräch am Tisch, Küchenteam in Schürzen mit Wappen | Vertrauen; man sieht, wer einen bedient | Familie, Generationen | bewusst |
| 19 | Produktbilder als Paare angelegt (`…bottle1200x1200.png` + `…lifestyleshot.jpg`, 306 × 306): Freisteller auf Grau, zweites Bild in Szene | Flasche bleibt ruhig im Raster; die Szene liefert Stimmung auf Abruf | Wein am Tisch, nicht im Regal | unbewusst (Wechsel nur aus Dateipaar belegt, nicht per Hover sichtbar gemacht) |
| 20 | Preise immer doppelt: „$40 \| $32 Wine Club Price“, Clubpreis 12 px gleich groß | Jeder Preis wirbt nebenbei für die Mitgliedschaft | Zugehörigkeit | bewusst |
| 21 | Club heißt „Maxwell Clan“, Zitat „Matthias, member since 2017“ in Utopia kursiv 18/27 px mit Linie links | Der Familienname Maxwell (schottischer Clan) wird zum Gemeinschaftswort; Datum macht das Zitat glaubwürdig | Familie, in die man aufgenommen wird | bewusst beim Lesen |
| 22 | Microcopy: Imperative mit Pfeil „Plan your visit“, „Join the Clan →“, „Make a reservation →“, im Mobilmenü „Book a Table“ | Kurz, freundlich, jede Zeile ist eine Handlung | Gastgeber | unbewusst |
| 23 | Footer „MAXWELL–MADE“ in Bricolage Grotesque 700, sehr groß, einziger Auftritt dieser Schrift | Schluss wie ein Stempel; „made“ klingt nach Handwerk und Herkunft | Handarbeit, Eigenes | bewusst |
| 24 | Wappen: Schild mit M/X und Punktraster, in Nav (52 px hoch), Footer groß und als echtes Schild an der Mauer im Teamfoto | Das Zeichen existiert auch im Ort, nicht nur auf dem Bildschirm | Legacy, Herkunft | unbewusst |
| 25 | Nav: 75 px fest, über dem Film durchsichtig mit weißer Schrift; nach dem Hero weißer Grund `#FFF` (nicht Steingrau), Übergang 0,3 s ease-out; versteckt sich nie | Weiß hebt die Nav als Werkzeugleiste vom Steingrund ab; immer erreichbar | Gastgeber, schnell buchen | unbewusst |
| 26 | Nav-Hover: nur 1 px Unterstrich unter dem Wort; „Reservations“ als einziger umrahmter Knopf rechts, Replica 10 px, Laufweite 2 px | Eine einzige Handlung ist hervorgehoben; Rest ist leise | Restaurant als Anker | unbewusst |
| 27 | Drei Stimmen, streng getrennt: Replica Bold Versal 10 bis 18 px mit 1,2 bis 2 px Laufweite = Wegweiser; Utopia Serif = Namen und Gefühl; Nunito Sans 16 px = Information | Man liest sofort, was Schild, was Erzählung, was Fakt ist | Ordnung eines alten Hauses | unbewusst |
| 28 | Mobil: Hero nur 500 px statt Vollbild, eigener kürzerer Satz („A limestone legacy of taste and tenacity“, 22 px), Knöpfe direkt im Hero; die nächste Headline schaut im ersten Screen schon herein | Daumen findet Handlung sofort; Seite lädt zum Weiterwischen ein | Besuch planen | unbewusst |
| 29 | Mobilmenü: Kapitel in Utopia 20 px Satzschreibung (Desktop: Versal), darunter Suche und ein Bildkärtchen „Book a Table“ | Menü fühlt sich an wie eine Karte im Restaurant, mit Empfehlung des Hauses | Restaurant als Anker | halb bewusst |
| 30 | Bewegung fast keine: Hover 0,25 bis 0,3 s ease-out, AOS-Einblendungen, Swiper; Bilder zoomen beim Hover nicht (`transform: none` gemessen), kein Scroll-Hijack | Ruhig, nichts drängt sich vor das Foto | Gelassenheit | unbewusst |

**Bewusst weggelassen:** farbige Flächen, Icons, abgerundete Bildecken, Zahlenleisten („seit 1979, 40 ha“), Siegel und Badges, Verlauf hinter Text, Laufband, Preloader. Auch weggelassen, aber versehentlich: eine sichtbare H1 (die einzige H1 hat 0 px), Übersetzungsreste (`accessibility.decrease_quantity` im Text), doppeltes Leerzeichen in „Australian  Restaurant“, die Floskel „where tradition meets innovation“.

**Was Marie daran gefallen haben dürfte:** Essen und Menschen wie in einem guten Instagram-Feed (von oben, natürliches Licht, echte Leute), ein ruhiger Steinton statt Weinrot oder Gold, die kursive Serif als Eleganz ohne Protz, und vor allem die Angebotsleiste: Verkostung, Restaurant, Führung, Picknick mit Kindern, alles mit demselben Knopf buchbar. Das ist die Mischung, die Wasem selbst hat (Wein, Hotel, Feste, Tagungen). Ilonas Einwand trifft die Hero-Unterzeile und die Karten (weiße 16-px-Schrift auf hellem Foto, nur 40 % Verlauf).

## 3. Was eine KI hier anders und schlechter machen würde

| Maxwell | Typische KI-Lösung |
|---|---|
| Kalkstein steckt in Grundfarbe, Fototisch und drei Textstellen; nie als Grafik | Steintextur als Hintergrundbild, Icon eines Felsens, Abschnitt „Unser Boden“ mit drei Karten |
| Hero-Satz 38 px klein unten links, Film trägt | Riesige zentrierte Headline mit Verlauf über einem Standbild, zwei Pill-Knöpfe mittig |
| Kursiv nur für das Gefühlswort („Estate *Favourites*“) | Kursiv zufällig oder gar nicht; oder jedes zweite Wort hervorgehoben |
| Auszeichnung als kursives Zitat im Satz mit Quelle | Badge-Leiste mit Lorbeerkranz und „Award-winning“ |
| Restaurantfoto in der Farbpalette der Seite (Grau, ein Rot) | Stockfoto Teller auf Holz, warm gefiltert, passt farblich zu nichts |
| Club heißt „Clan“, abgeleitet aus dem Familiennamen | „Wine Club“ mit drei Preisstufen in gleichen Karten mit Häkchen |
| Abschnitte durch 1-px-Linie auf einem Grund getrennt | Wechsel Weiß, Beige, Dunkel pro Abschnitt, jeder mit eigener Überschrift zentriert |
| Mobil eigener, kürzerer Hero-Satz und halbe Hero-Höhe | Desktop-Satz einfach umbrochen auf fünf Zeilen, Vollbild-Hero, Knöpfe unter dem Falz |

## 4. Übertragbar auf Wasem Doppelstück (ohne Kopie)

1. **Der Untergrund als Fotoregel, nicht als Grafik.** Maxwell fotografiert Essen auf Stein und färbt die Seite steingrau. Für Wasem: jedes Wein-, Speise- und Zimmerbild auf den eigenen Materialien des Hauses (Leinen-Tischtuch, Eichenholz des Fasses, Sandstein der Gasse), damit die Fotos die Palette Leinen #EEE7DD, Sand, Cognac, Espresso schon mitbringen und ein Akzent (Rotwein, Cognac-Leder) reicht. Folge: Shoot-Liste mit „Tisch von oben auf Leinen“ und „Glas vor Fassholz“; keine Textur im Layout.
2. **Gerade = Tatsache, Kursiv = Gefühl, als feste Schaltung.** Bona Nova hat eine echte Kursive. Regel: in jeder großen Headline steht die Tatsache gerade und das warme Wort oder der Nachsatz kursiv, sonst nirgends Kursive. Beispiel als Vorschlag, nicht freigegeben: „Weingut und Weinhotel *in einer Gasse.*“ Wiederholt sich in Kapitelüberschriften (Wein, Hotel, Feste, Tagungen) und wird zur Geste, die man ohne Logo erkennt.
3. **Ein Gemeinschaftswort aus dem eigenen Namen.** Maxwell macht aus dem Familiennamen den „Clan“ und zeigt den Clubpreis neben jedem Preis. Für Wasem liegt das Wort im Namen selbst: ein Doppelstück ist ein Fass, das man teilt und dem man Zeit lässt. Übersetzung: Newsletter oder Stammgastliste bekommt einen Namen aus diesem Gedanken (Wortwahl mit Julia und Marie klären, nichts erfinden), und überall, wo gebucht wird, steht dieselbe eine Handlung („Anfragen“) wie Maxwells „Make a reservation“ unter jeder Angebotskarte. Lesbarkeit dabei von Maxwell lernen, aber nicht kopieren: Text nie direkt auf ein Foto (Ilona), sondern auf Leinen-Etikett, wie in Runde 9 A schon angelegt.

## 5. Screenshots

- `/private/tmp/claude-501/sektion/maxwell/z-hero-text.png` (760 px): Hero-Satz und kursive Unterzeile auf hellem Filmbild, Beleg für das Lesbarkeitsproblem.
- `/private/tmp/claude-501/sektion/maxwell/z-mega.png` (1440 px): Kursiv-Schaltung „Crafted By Generations.“, schmale Textspalte rechts, eingesetztes Restaurantbild mit 20 px Rand, Nav mit Unterstrich-Hover.
- `/private/tmp/claude-501/sektion/maxwell/z-cards-pre.png` (1440 px): Angebotskarussell, Hochkant-Karten mit echten Menschen, Titel in Utopia auf Foto.
- `/private/tmp/claude-501/sektion/maxwell/z-footer.png` (1440 px): Footer ohne Farbwechsel, Wappen, „MAXWELL–MADE“.
- Zusatz mobil: `/private/tmp/claude-501/sektion/maxwell/z-m-menu.png` (Menü mit „Book a Table“-Karte).
