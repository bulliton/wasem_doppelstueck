# Sektion: Hotel Lorünser, Zürs (lorunser.com)

Gemessen am 30.10.2026 mit Playwright (Chromium headless), Desktop 1440 × 900 und mobil 390 × 844. Kein Cookie-Banner. Webflow, GSAP, ScrollTrigger, Lenis, Lottie. 482 Wörter, Seitenhöhe 8596 px (mobil 7376). Rohdaten, Skripte und alle Screenshots: `/private/tmp/claude-501/sektion/lorunser/` (`info.json`, `e.json`, `f.json`, `css.txt`).

Abgrenzung zum Geschmacksprofil: Dort steht „Zeilen-Masken-Reveal translateY 101 %“. Gemessen ist etwas anderes, und es ist wichtiger: Überschriften und Texte erscheinen mit `filter: blur(5px) → 0`, `opacity 0 → 1`, `translateY 25 % → 0`. Sie kommen aus dem Nebel, wie der Berg im Heldenfilm. Genau solche Gründe fehlen im Profil.

## 1. Die eine Idee

**Das Hotel ist ein alter Gast im Schnee: Es kommt aus dem Nebel, hinterlässt eine Spur und trägt ein Abzeichen.**

Woran man es in jedem Abschnitt erkennt:

| Abschnitt | Nebel (Ankommen) | Spur (Bewegung) | Abzeichen (Haus, Herkunft) |
|---|---|---|---|
| Hero | Film mit Wolkenfetzen, Text blendet unscharf ein | Passstraße läuft durch die Buchstaben der Wortmarke | Rotes Lapel hängt von der Oberkante, „Since 1927“, fünf Sterne als Punktreihe |
| „Beloved by Generations“ | Blur-Reveal | Filmfenster schiebt sich nach oben weg und gibt Sand frei | „Since 1927“ im ersten Satz |
| Stay | Blur-Reveal | Rote Skispur-Linie (SVG) läuft hinter Überschrift und Bildern; im Außenfoto echte Skispuren im Hang | Rote Fahnen an der Fassade, Schriftzug LORÜNSER am Haus |
| Ski | Ortsfilm randlos, „Zürs am Arlberg“ über die ganze Breite gesperrt | Skifahrer als kleine Figuren auf dem Grat | Ortsname statt Hotelname |
| Dine | Blur-Reveal | Zweite rote Spur-Linie (`ski-2-red.svg`) | Foto im Kartuschen-Rahmen mit Kerben, die Form des Lapels |
| Wellness | Blur-Reveal | Spur-Linie läuft weiter | Komma-Satz „The Slopes Beckon, the Spa Restores“ |
| Footer, Menü, 404 | Footer wird aufgedeckt (fixierte Maske), Seite hebt sich ab | | Maroon-Fläche, Lapel, Wortmarke, Hotel als rote Tuschezeichnung (404) |

## 2. Details

| # | Detail (konkret, mit Wert) | Warum (Wirkung beim Besucher) | Markenidee | Merkt man es? |
|---|---|---|---|---|
| 1 | **Bildbearbeitung folgt dem Tageslauf statt einem Einheitslook.** Hero-Film kühl, entsättigt, Nebel; Außenfoto knallblauer Mittagshimmel; Zimmer mit brennendem Kamin, Lampen an (amber); Bar warmes Holz, Abendlicht; Pool tiefblau, Nacht; Footer Maroon. | Man durchlebt beim Scrollen einen Skitag: Morgen am Pass, Mittag am Hang, Abend am Feuer, Nacht im Spa. Die Farbe erzählt die Reihenfolge, ohne dass ein Wort sie nennt. | Der Tag eines Gastes, der wiederkommt | unbewusst |
| 2 | **Innenräume immer mit Licht an:** Kamin brennt, Tischlampe, Pendelleuchten über der Bar, Obstteller auf dem Couchtisch. Kein Raum leer und kalt. | Ein Raum mit brennendem Licht sagt „jemand hat für dich vorbereitet“. Wärme ohne Menschen im Bild. | Gast wird „part of the house“ | halb bewusst |
| 3 | **Menschen nur als kleine Figuren in der Landschaft** (Skifahrer auf dem Grat im Ski-Film, wenige Prozent der Bildfläche). Keine Porträts, kein Personal, kein Familienfoto auf der Startseite. | Der Besucher setzt sich selbst ein. Der Ort ist der Held, die Familie steht im Text („Jochum family for three generations“). | Haus und Ort vor Personen | bewusst, wenn man sucht |
| 4 | **Das Außenfoto zeigt echte Skispuren im Hang hinter dem Hotel.** Bild 1510 × 1128, ragt links 126 px über den Rand, Innen-Parallax `scale(1.2)` plus `translateY`. | Das Bild beweist „ski-in, ski-out“ ohne Pfeil oder Icon: die Spuren enden am Haus. | Ski-in, ski-out als Fakt | unbewusst, bis man es sieht |
| 5 | **Rote Skispur als Linienzeichnung** (`ski-1-track.svg` 1296 × 1066, `ski-2-red.svg` 792 × 702), dünne rote Kurven hinter Text und Bildern, `z-index 1`. | Das Auge folgt der Linie von Abschnitt zu Abschnitt; die Seite wird zu einer Abfahrt. Greift die echten Spuren im Foto wieder auf. | Spur, Bewegung, Tradition des Skifahrens | unbewusst |
| 6 | **Die Wortmarke ist eine SVG-Datei, keine getippte Schrift**, im Hero 1392 px breit (Seitenbreite minus 2 × 24 px), mobil 360 px. Die Passstraße im Film läuft durch die Buchstaben. | Der Name wird zum Horizont. Weil es das echte Logo ist, stimmen Umlaut und Laufweite wie auf dem Hausschild. | Name gehört zum Ort | bewusst (Größe), unbewusst (Echtheit) |
| 7 | **Lapel: rotes Abzeichen 72 × 72 px mit geschwungener Kartuschenform**, hängt mittig von der Oberkante (top −2 px), wiederholt im Footer, im Menü, auf der 404. | Wirkt wie eine Anstecknadel am Revers oder ein Wappen am Portier. Klein, aber das einzige Rot im Hero. | Gastgeber, Uniform, Herkunft | bewusst |
| 8 | **Dieselbe Kartuschenform rahmt das Food-Foto** (`dine-shot-frame.png`, 449 × 294 px, Kerben an den Ecken, rote Haarlinie versetzt). Beim Laden um 9° gedreht (`matrix(0.988,-0.156,…)`), im Blick gerade. | Der Teller sieht aus wie auf einer alten Speisekarte oder einem Etikett. Das Abzeichen wird zum Rahmen. | Hausmarke durchzieht alles | unbewusst |
| 9 | **Überschriften als Zweiteiler: aufrecht dann kursiv.** „Stay in Timeless / *Alpine Elegance*“, „Beloved by / *Generations of Skiers*“, „*Zürs* am Arlberg“, „The Slopes Beckon, / *the Spa Restores*“. PP Editorial Old 400, Kursive gleiche Größe. | Der aufrechte Teil benennt, der kursive Teil fühlt. Das Auge liest zuerst den sachlichen Anker, dann die Stimmung. | Sport (Fakt) und Gastlichkeit (Gefühl) | halb bewusst |
| 10 | **Komma als Spannungsträger:** „The Slopes Beckon,“ endet mit Komma und läuft in die zweite Zeile. Footer-Navigation „About, / Stay, / Ski, / Dine, / Wellness“ mit Kommas, 28,8 px Serif. | Die Navigation liest sich als Satz, nicht als Liste. Das Komma verspricht, dass es weitergeht. | Ein Aufenthalt als zusammenhängende Erzählung | bewusst beim Footer |
| 11 | **Sehr enge Laufweite in Display-Größen:** 144 px mit `−5,76 px` (−0,04 em), 72 px mit `−2,88 px`, 60 px mit `−1,8 px`; Zeilenhöhe 1,0. | Die Wörter schließen sich zu einem Block, wirken gesetzt statt getippt. Nähe wie Gravur. | Zeitlosigkeit, Handwerk | unbewusst |
| 12 | **Winziges gesperrtes Label 8 px PP Museum 700, Versal, `letter-spacing 4,8 px` (0,6 em)**: „ZÜRS AM ARLBERG“ über dem Hero-Satz und im Footer. | Kontrast zur 144-px-Schrift. Wie eine Prägung auf einer Visitenkarte; man liest es erst beim zweiten Blick. | Ort als Absender | unbewusst |
| 13 | **Drei Textstufen mit drei Rollen:** Lead in Serif rot 19,2 px / 23 px; Fließtext Avenir Pro 15,2 px / 21,3 px in Braun #724F48; Link-Label PP Museum 12,8 px 700 Versal in Fast-Schwarz #2B2B2B mit rotem 1-px-Strich. | Kein reines Schwarz für Text, das Braun wirkt wie Tinte auf Papier. Das Label ist das einzige Schwarz und darum der Klickpunkt. | Altes Papier, Briefbogen | unbewusst |
| 14 | **Palette mit vier Werten und klaren Rollen:** Sand #F6EFE5 (Grund), Rot #AD1A1A (Überschrift, Knopf, Linie, Abzeichen), Maroon #48120E (Footer, Menü, 404), Braun #724F48 (Text). `::selection` Rot #AC211B. | Rot ist nie Fläche auf der Hauptseite, nur Schrift und Linie; die Fläche ist das dunkle Maroon. So knallt nichts, und doch ist das Rot überall. | Hausfarbe der Fahnen an der Fassade | bewusst (Rot), unbewusst (Disziplin) |
| 15 | **Die roten Fahnen an der Fassade im Außenfoto haben die Markenfarbe.** | Das Foto bestätigt die Website-Farbe als echte Hausfarbe, nicht als Designentscheidung. | Echtheit | unbewusst |
| 16 | **Hero ist ein gepinnter Film über drei Bildschirmhöhen:** Die Seite scrollt bis 960 px, dann steht der Hero bis 2496 px still, während „In the Heart of the Arlberg“ (72 px, kursive Unterzeile 21,6 px) über demselben Film einblendet; danach schiebt sich das Filmfenster nach oben und gibt Sand frei. | Ankommen braucht Zeit. Der Besucher bleibt am Pass, bevor das Haus kommt. Ersetzt eine Intro-Sektion. | Anreise über den Flexenpass | bewusst |
| 17 | **Reveal mit Unschärfe:** `filter blur(5px) → 0`, `opacity 0 → 1`, `translate3d(0, 25 %, 0) → 0` (Webflow IX) bei Überschriften und Absätzen getrennt. | Text kommt aus dem Nebel wie die Berge im Film. Keine Maske, kein Hüpfen. | Nebel, Höhe, Ruhe | unbewusst |
| 18 | **Bilder mit Innen-Parallax:** `scale(1.2)` plus `translateY` bis −94 px im Rahmen; Food-Rahmen `translate3d(0, −5,5 %, 0)`. | Bilder atmen, der Rahmen bleibt fest. Tiefe ohne dass etwas aus dem Raster fällt. | Bergpanorama, Tiefe | unbewusst |
| 19 | **Collage mit Größensprung 1 : 4:** Zimmerfoto 1144 × 854 rechts, Spielzimmer 256 × 358 hochkant links unten versetzt, überlappt die Unterkante. Gleiche Anordnung bei Pool und Sauna. | Das kleine Bild ist ein Detail zum Mitnehmen (Ecke, Buch, Sauna-Eimer), das große die Stimmung. Wiederholung macht es zum Muster des Hauses. | Großzügigkeit mit Liebe zum Kleinen | halb bewusst |
| 20 | **Abschnittsrhythmus über Tokens:** `--padding--large-gap 10rem`, `--x-large-gap 16rem`, `--medium-gap 6rem`; Kapitel 1100 bis 1300 px hoch, Dine kürzer (568 px). Seitenrand 24 px. | Weißraum zwischen den Kapiteln ist größer als innerhalb; man spürt Kapitel ohne Trennlinien. Der kurze Dine-Abschnitt wirkt wie ein Zwischengang. | Gemächlichkeit („unhurried affairs“) | unbewusst |
| 21 | **Jedes Kapitel endet mit genau einem Link zur Unterseite** in derselben Reihenfolge wie die Navigation (About, Stay, Ski, Dine, Wellness). | Die Startseite ist das Inhaltsverzeichnis des Hotels. Kein „Mehr erfahren“-Raten, jede Etappe hat ihr Ziel. | Ordnung eines Grandhotels | unbewusst |
| 22 | **Link-Hover:** roter 1-px-Strich unter dem Label zieht sich zusammen und zeichnet sich von links neu (`.btn-underline-top` width 0 → 100 %). | Klein, präzise, wie eine Unterschrift. Bestätigt, dass man richtig zielt. | Handschrift, Sorgfalt | bewusst beim Hovern |
| 23 | **Nav-Hover als Scheinwerfer:** Der gezielte Link bleibt weiß, alle anderen dimmen auf etwa 50 %. Nav-Links in Serif 19,2 px, nicht Versal. | Ruhiger als Unterstreichen; man sieht, wo man ist, ohne Lärm. | Diskretion | halb bewusst |
| 24 | **Buchen-Knopf als Etikett:** Rot mit innenliegender Sand-Haarlinie, Radius 0,25 em (4,4 px), Serif statt Grotesk. Hover: jeder Buchstabe rollt nach oben und kommt von unten zurück (`translateY −1,3 em`, 0,7 s `cubic-bezier(.625,.05,0,1)`), die Fläche zieht sich um 0,125 em nach innen. | Der Knopf sieht aus wie ein gedrucktes Schild am Hotel, nicht wie ein App-Button. Der Hover belohnt, ohne zu blinken. | Hausschild, Tradition | bewusst |
| 25 | **„Watch“-Vorschau oben rechts:** Nachtfoto des Hotels 194 × 129 mit gestrichelter Rahmenlinie wie eine Briefmarke, Play-Zeichen 6 × 8 px. | Lädt zum langen Film ein, ohne den Hero mit Ton und Knopfleiste zu stören. Das Nachtfoto ist der einzige warme Fleck im kalten Hero. | Postkarte aus den Ferien | bewusst |
| 26 | **Microcopy mit konkreten Bildern:** „the barman knows you by name and the martini is always cold“, „over 300 fine wines“, „the fire is lit“. Daneben generische Sätze in Stay („perfect blend of comfort and elegance“). | Die konkreten Sätze bleiben hängen, die generischen rutschen durch. Lehre: Der beste Text der Seite steht im Dine-Kapitel, weil er eine Szene zeigt. | Gastgeber, der dich kennt | bewusst |
| 27 | **Navigation ist nicht fixiert, weder Desktop noch mobil.** Die Leiste scrollt mit dem Hero weg und kommt nicht zurück; Buchen nur im Hero und im Footer. | Die Seite verkauft nicht bei jedem Scroll. Mutig, kostet Konversion, schützt die Ruhe. | Kein Verkaufsdruck, „part of the house“ | bewusst, wenn man buchen will |
| 28 | **Footer wird aufgedeckt:** `.footer-reveal-mask` `position: fixed`, Maroon #48120E, 900 px; die Sandseite hebt sich wie ein Vorhang. Darin Wortmarke, Lapel, Zweiteiler „In the Heart of Zurs / *On the Slopes of Perfection*“. | Ein Schlussbild statt einer Linkwüste. Der Abend nach dem Tag. | Nacht, Kaminzimmer | bewusst |
| 29 | **404 als Tuschezeichnung des Hotels** in Rot auf Maroon, „Page Not Found“ in Serif groß, echter Status 404. | Selbst der Fehler sieht aus wie Briefpapier des Hauses. Der Text ist dagegen Standard. | Haus als Zeichnung, Erbe | bewusst |
| 30 | **Mobil-Entscheidungen:** alles zentriert; Display 85,8 px (≈ 22 vw), Zeilenhöhe 0,9; „Zürs am Arlberg“ wandert vom Film auf Sand als rote Überschrift; Hero ohne langen Pin; Collage bleibt zweiteilig, aber gestapelt; Menü als Wort „Menu“ mit Burger, Knopf „Book“ in heller Variante (Sand mit roter Schrift); Menü als Maroon-Vollbild mit Wortmarke, Sternen, „Book Your Stay“, Kapiteln mit Haarlinien dazwischen. | Auf dem Handy wird aus der Bühne ein Buch: zentrierte Seiten, große Schrift, Film nur als Bild. Text auf Film würde bei 390 px untergehen. | Gleiche Marke, anderes Format | halb bewusst |

**Bewusst weggelassen:** Bewertungen und Sterne-Widgets (die fünf Sterne sind nur eine Punktreihe unter „Since 1927“), Preise, Angebotskacheln, Icons, Zahlenblöcke („300 Weine“ steht im Satz, nicht als Statistik), Newsletter-Feld, Personalfotos, Instagram-Feed, fixierte Leiste, Cookie-Banner auf der ersten Ansicht, Trennlinien zwischen Abschnitten, Schatten, Verläufe.

**Schwächen (nicht kopieren):** Versal-Labels in PP Museum zeigen „LORUNSER“ ohne Punkte, im Footer steht „In the Heart of Zurs“ ohne Umlaut. Stay-Text ist generisch. 404-Text ist Vorlagentext.

## 3. Was eine KI hier anders und schlechter machen würde

| KI-Lösung | Lorünser |
|---|---|
| Ein einheitlicher warmer Filter über alle Fotos, „cinematic“ Grading | Bildlicht folgt dem Tageslauf; kalter Morgen, blauer Mittag, Kaminabend, Nachtblau. Konsistenz liegt in der Reihenfolge, nicht im Filter. |
| Hotelname in einer Google-Serif getippt, `letter-spacing: 0.2em` Versal | Echte Wortmarke als SVG, randlos, mit negativer Laufweite in den Überschriften. |
| Drei Karten „Zimmer / Kulinarik / Wellness“ mit Icon, Titel, zwei Zeilen, Knopf | Fünf erzählte Kapitel in Nav-Reihenfolge, jedes mit eigener Komposition und genau einem Link. |
| Sticky Nav mit „Jetzt buchen“-Pille, die immer mitläuft | Nav scrollt weg, Buchen als Etikett im Hero und im Footer. |
| Fade-up 20 px mit `ease-out` auf jedem Element | Unschärfe-Reveal aus dem Nebel, weil der Ort Nebel hat. |
| Dekoration aus generischen Formen (Blobs, Verläufe, Kreise) | Zwei Formen aus dem Haus: die Skispur aus dem Foto und die Kartusche aus dem Lapel. |
| Überschriften als Wortspiel oder Dreierkette („Relax. Ski. Enjoy.“) | Zweiteiler aufrecht/kursiv: Fakt, dann Gefühl, verbunden durch ein Komma. |
| Footer mit vier Spalten, 40 Links, Newsletter | Maroon-Vorhang mit Wortmarke, einem Satzpaar, Adresse, Navigation als Satz. |

## 4. Übertragbar auf Wasem Doppelstück (ohne Kopie)

**a) Eigene Linie aus dem Ort statt Dekoration.** Lorünser zeichnet die Skispur aus dem eigenen Hangfoto als rote Linie hinter die Kapitel. Wasem-Übersetzung: die Rebzeile oder der Weg durch die Stiegelgasse von Nr. 50 (Weingut) zu Nr. 70 (Hotel) als dünne Cognac-Linie (#94623E, 1 px), die hinter den Kapiteln Wein → Hotel → Feste läuft und genau dort ansetzt, wo ein echtes Foto dieselbe Linie zeigt (Rebzeilen von oben, Gasse). Voraussetzung: ein Foto, in dem die Linie wirklich vorkommt, sonst ist es Ornament.

**b) Ein Abzeichen, das zum Rahmen wird.** Das Lapel hängt im Hero, im Footer, im Menü und wird im Dine-Kapitel zur Bildform. Wasem-Übersetzung: das Serifen-W vom Etikett bzw. die Etikettform (Leinen-Etikett aus Runde 9) einmal klein als Anhänger an der Oberkante (wie ein Flaschenanhänger), dann genau einmal als Bildrahmen für ein Weinmotiv (Glas, Flasche, Fass) mit Espresso-Haarlinie versetzt. Nicht öfter als drei Orte, sonst wird es Muster statt Zeichen.

**c) Zweiteiler-Überschriften: aufrecht der Fakt, kursiv das Gefühl.** Bona Nova hat eine echte Kursive; das trägt die Regel ohne zweite Display-Schrift. Wasem-Übersetzung als Vorschlag (nicht freigegeben, durch `text-kritik`): aufrecht der Ort oder das Angebot, kursiv was Gäste davon haben, z. B. „Zimmer in der Stiegelgasse, *zwei Häuser weiter vom Keller*“. Dazu Footer-Navigation als Satz mit Kommas („Wein, Hotel, Feste, Tagungen“), weil Wasem in Bereichen denkt, die sich mischen. Prüfmarke: Kursive nur für die zweite Hälfte, nie für ganze Zeilen.

Nicht übertragen: die nicht fixierte Navigation. Wasem verkauft vier Angebote an Planerinnen, die schnell anfragen wollen (Personas Runde 9); dort ist ein ständig erreichbares „Anfragen“ richtig.

## 5. Screenshots

1. `/private/tmp/claude-501/sektion/lorunser/lorunser-hero-wortmarke-lapel-desktop.png` (Hero: Wortmarke randlos, Lapel, Etikett-Knopf, Watch-Briefmarke)
2. `/private/tmp/claude-501/sektion/lorunser/lorunser-stay-spur-collage-desktop.png` (Zweiteiler-Überschrift, rote Spur-Linie, Collage 1 : 4)
3. `/private/tmp/claude-501/sektion/lorunser/lorunser-dine-rahmen-desktop.png` (Kartuschen-Rahmen aus der Lapel-Form, Bar im Abendlicht)
4. `/private/tmp/claude-501/sektion/lorunser/lorunser-footer-maroon-desktop.png` (Maroon-Vorhang, Navigation als Satz mit Kommas)

Zusätzlich: `lorunser-hover-zustaende.png` (Nav-Scheinwerfer, Buchstaben-Rollen, Unterstrich-Neuzeichnung) und `lorunser-404-tusche.png` im selben Ordner.
