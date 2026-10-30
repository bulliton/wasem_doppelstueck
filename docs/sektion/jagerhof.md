# Sektion: Jägerhof (jagerhof.net)

Gemessen am 30.10.2026 mit Playwright (Chromium headless), Desktop 1440 × 900 und mobil 390 × 844, Cookies abgelehnt, langsam durchgescrollt, Hover und Sommer/Winter-Schalter ausgelöst. Webflow, GSAP + ScrollTrigger + SplitText, Lenis. 884 Wörter, Seitenhöhe 10.904 px. Rohdaten und Skripte: `/private/tmp/claude-501/sektion/jagerhof/` (`d-data.json`, `m-data.json`, `hover-log.txt`, `season.json`).

## 1. Die eine Idee

**Die Seite ist ein Brief des Hauses an dich: ein offener Satz mit Komma („Dein Zuhause,“), den eine Handschrift unterschreibt („im Jägerhof.“), und alles Konkrete, was man anklicken kann, steht in der Grotesk, alles Gefühl in der Serife.**

Woran man es in jedem Abschnitt erkennt:

| Abschnitt | Wie die Idee dort auftaucht |
|---|---|
| Hero | „Dein“ in Grotesk, „Zuhause,“ in Serife, Unterschrift „im Jägerhof.“ als SVG-Handschrift, darunter vier Mini-Sätze mit Punkt („In der Natur. Am Tisch. In unseren Zimmern. Bei uns.“), die den Hintergrund wechseln. |
| Intro (grüne Fläche) | Ein einziger Satz, 83 px. Die vier Ziele („dein Zimmer“, „den Bergen,“, „unsere Küche“, „unsere Geschichte“) stehen in Grotesk und sind Links; der Rest in Serife ist Stimmung. |
| Lage-Slider | Label „DEIN KLEINES FAMILIÄRES HOTEL IN DEN BERGEN“: Du-Form, Besitzanzeige. |
| 5 Kapitel | Label in Grotesk-Versal (der Fakt: NATUR, GENUSS), Titel in Serife (das Gefühl: „Wo Natur zur Heimat wird“). |
| Riesenwort-Band | „reine Natur / purer Genuss“: Serife 216 px, die Wörter der Nav als Gefühl wiederholt. |
| Schluss | „Come stay“ Grotesk, „with us,“ Serife mit Komma, Unterschrift „at Jägerhof.“, daneben drei Mini-Sätze mit Punkt („Zimmer buchen. Route anzeigen. Kontakt aufnehmen.“). Der Hero kehrt als Briefschluss zurück. |
| Footer | Linkspalte wiederholt die Hero-Liste: „In der Natur. Am Tisch. In unseren Zimmern. Mit uns.“ (aus „Bei uns.“ wird beim Abschied „Mit uns.“). |

## 2. Details (28)

| # | Detail (konkret, mit Wert) | Warum (Wirkung beim Besucher) | Welche Markenidee es trägt | Wie schwer zu übersehen |
|---|---|---|---|---|
| 1 | **Schriftwechsel = Klickbarkeit.** Im Intro-Satz (Bon Vivant Serif 82,9 px) sind genau die vier Linkziele in Ronzino gesetzt, gleiche Größe, gleiche Laufweite −0,03 em. Keine Unterstreichung, keine Farbe. | Man liest einen Satz und merkt erst beim Zeigen, dass er ein Menü ist. Navigation fühlt sich an wie Erzählung. | Brief statt Prospekt; das Konkrete (Zimmer, Küche) ist greifbar, das Drumherum Gefühl. | Unbewusst. Man spürt „da ist was anders“, benennt es selten. |
| 2 | **Hover im Intro dimmt den ganzen Satz auf 20 %** (`color-mix(in srgb, currentcolor 20%, transparent)`, 0,3 s), nur das gezeigte Wort bleibt Off-White, wird unterstrichen und ein Foto (Bett 402 × 419 px, Pasta-Hand 536 × 298 px) erscheint frei daneben. | Fokus wie beim Vorlesen: ein Wort tritt vor, die Welt dahinter wird sichtbar. | Zuhause zeigen statt aufzählen. | Bewusst, ein kleines Wow-Moment. |
| 3 | **Hero-Hover tauscht den Vollbild-Hintergrund.** Jeder der vier Mini-Sätze blendet über das Video ein eigenes Bild (Wald, Risotto, Bett, Team); Geschwister werden grau, das aktive Wort unterstrichen. | Der Besucher „probiert“ das Haus aus, bevor er scrollt. Vier Welten in einem Screen ohne Karussell. | „In der Natur. Am Tisch. In unseren Zimmern. Bei uns.“ = vier Orte eines Zuhauses. | Bewusst, wer mit der Maus drübergeht; mobil fällt es weg. |
| 4 | **Sommer/Winter-Schalter** in der festen Unterleiste. Winter tauscht jedes Kapitelbild gegen sein Winter-Pendant (Bergsee → vereister Fluss, Holzbank → Hütte im Schnee) und färbt den ganzen Grund von Sand #E9E1D6 auf Kiefer #2F4F3E, Text auf Off-White. Wahl wird in localStorage gemerkt. | Der Gast sieht sein Reisedatum. Kein „auch im Winter schön“-Absatz nötig. | Rhythmus der Jahreszeiten (steht wörtlich im Intro-Satz). | Bewusst, und es bleibt hängen. |
| 5 | **Jedes Kapitel hat zwei Bildsätze** (Sommer + Winter), je ein großes Hochformat 725 × 1088 (2:3) und ein kleines eingesetztes 218 × 272 (4:5). | Das System wurde fotografiert, nicht nachträglich befüllt. | Echtheit; das Haus lebt zwei Jahreszeiten. | Unbewusst (man sieht nur eine Hälfte). |
| 6 | **Bild-im-Bild mit wechselnder Lage.** Das kleine Bild sitzt per `data-position` mal mittig, mal bei 35/35 %, mal rechts unten über dem großen. | Tiefe und Nähe: Totale plus Detail, wie ein Foto, das man auf ein anderes legt. Durch die wechselnde Lage kein Raster-Gefühl. | Erinnerungsalbum, Zuhause. | Bewusst als Motiv, unbewusst in der Variation. |
| 7 | **Großes Bild immer genau halbe Breite plus Rand** (725 px von 1440, randlos zur Seite), Text in der anderen Hälfte; Seite wechselt pro Kapitel. Kapitelhöhe 906 px = 1 Bildschirm. | Ruhiger Takt, jedes Kapitel ist ein Blatt. | Ordnung eines gepflegten Hauses. | Unbewusst. |
| 8 | **Fließtext ist 115 px gegen Label und Titel eingerückt** (Titel x 842, Text x 957; links 139 → 254), Spalte nur 300 px. | Wie ein gesetzter Brief mit Einzug; Titel atmet, Text wirkt als Nebenstimme. | Brief, Handwerk im Satz. | Unbewusst, aber er macht das „gestaltet“-Gefühl. |
| 9 | **Display-Laufweite überall exakt −0,03 em** (201 px → −6,03; 82,9 → −2,49; 53,1 → −1,59; 216 → −6,48), Zeilenhöhe 1,0. | Große Serife wirkt geschlossen wie ein Wort-Bild, nicht wie vergrößerter Fließtext. | Eine Stimme, ein Maß. | Unbewusst. |
| 10 | **Versal-Labels mit negativer Laufweite** (13 px, 700, −0,02 em) statt der üblichen gesperrten Versalien, Farbe helles Moos #6C8A5E. | Labels wirken wie gestempelte Kategorien, nicht wie Corporate-Kicker. | Bodenständig, nicht Luxus-Pose. | Unbewusst. |
| 11 | **Komma am Ende großer Zeilen** („Dein Zuhause,“ „Come stay with us,“). Das Satzende liefert die Handschrift („im Jägerhof.“ / „at Jägerhof.“) als SVG. | Der Satz bleibt offen, bis der Gastgeber unterschreibt. Persönlich ohne Porträt. | Brief, Gastgeber spricht. | Bewusst für Typo-Leute, unbewusst für Gäste. |
| 12 | **Mini-Sätze mit Punkt als Linklisten** (Hero, Schluss, Footer). „Zimmer buchen.“ statt Knopf „Jetzt buchen“. | Links lesen sich wie Antworten, nicht wie Befehle. | Ruhige Gastfreundschaft. | Unbewusst. |
| 13 | **Hero und Schluss sind dieselbe Grammatik** (Grotesk-Wort + Serifen-Wort mit Komma + Unterschrift + Punkt-Liste rechts daneben). | Die Seite schließt sich wie ein Brief; man fühlt ein Ende statt eines Abbruchs. | Klammer, Wiedererkennung. | Unbewusst. |
| 14 | **Footer-Liste wiederholt den Hero, ändert ein Wort**: „Bei uns.“ → „Mit uns.“ | Beim Gehen wird aus Ort Beziehung. | Familie, Bindung. | Fast unsichtbar; ein Geschenk für Aufmerksame. |
| 15 | **Drei Ausreißer, sonst Raster**: Hero-Wort 201 px, grüne Intro-Fläche, Riesenwort-Band 216 px. Alles andere 53 px Titel / 16 px Text. | Spannung durch Kontrast, nicht durch viele Effekte. | Ruhe als Grundton. | Bewusst die Ausreißer, unbewusst die Disziplin dazwischen. |
| 16 | **Riesenwort-Band mit eingestreuten Bildchen**: „reine Natur / purer Genuss“, zwei Zeilen gegeneinander versetzt (−72 / +72 px), kleine Fotos 324 × 216 (Wald, Gnocchi) sitzen zwischen den Wörtern und laufen gegenläufig mit. | Wort und Bild werden ein Satz; der Leser „liest“ die Fotos mit. | Natur und Genuss als die zwei Säulen. | Bewusst. |
| 17 | **Abstandssystem aus drei Stufen**: Spacer 105 / 175 / 247 px (klein / groß / Seitenanfang), sonst kein Padding. | Gleicher Atem zwischen allen Abschnitten, kein zufälliger Weißraum. | Verlässlichkeit. | Unbewusst. |
| 18 | **Übergang Hero → Intro ohne Kante in Grün**: Hero liegt auf Kiefer #2F4F3E, das Video läuft in die grüne Intro-Fläche, die einzige Volltonfläche der Seite im Sommer. | Der Einstieg wirkt wie ein Raum, den man betritt; danach öffnet sich Sand. | Wald, Berge. | Unbewusst. |
| 19 | **Knopf-Hover**: Ton-Fläche Clay, beim Hover schiebt sich eine um 15° gekippte Charcoal-Fläche (120 % breit) von unten herein, der Text rollt per Text-Schatten-Duplikat 1,5 em hoch; 0,525 s `cubic-bezier(.625,.05,0,1)`. Radius 10 px, Höhe 40 px, keine Pille. | Der Knopf antwortet mit Gewicht, wie ein Lederetikett, das umklappt. | Handwerk, Sorgfalt im Kleinen. | Bewusst als „fühlt sich gut an“, Mechanik unbewusst. |
| 20 | **Footer-Hover dimmt die Nachbarn auf 0,5** (0,3 s), statt den Link einzufärben. | Ruhige Orientierung in langen Linklisten. | Zurückhaltung. | Unbewusst. |
| 21 | **Header ohne Buchen-Knopf.** Nur Wortmarke, fünf Kapitel (Hotel, Genuss, Natur, Wir, Wellness), FAQ, Kontakt, DE. Buchen liegt in einer schwebenden Unterleiste (Saison-Schalter + „Verfügbarkeit“ in Clay), Desktop und mobil gleich, immer sichtbar. | Der Kopf bleibt Magazin, der Verkauf ist trotzdem nie weiter als ein Daumen. | Gastgeber drängt nicht, ist aber da. | Bewusst die Leiste, unbewusst die Ruhe oben. |
| 22 | **Nav über dem Hero transparent mit hellem Text, danach Sand mit Moos-Text**; Höhe schrumpft per Padding 2 rem → 1 rem (0,75 s ease); sie versteckt sich nicht. | Keine Unruhe beim Scrollen; die Kapitel sind immer erreichbar. | Orientierung wie im eigenen Haus. | Unbewusst. |
| 23 | **Nav-Wörter sind Gefühle, Pfade sind Fakten**: „Genuss“ → `/food`, „Wir“ → `/about`, „Natur“ → `/nature`. | Menü liest sich als Versprechen, nicht als Sitemap. | Ton aus „Natur, Genuss, Wir“. | Unbewusst. |
| 24 | **Bildmotive: Hände bei der Arbeit statt Gesichter in Pose** (Tagliatelle werden geschüttelt, Pinzette legt Spargel, Senior-Paar mit Pfanne lacht), dazu Profi-Fotos (DSCF, Fuji) gemischt mit Handy-Fotos (IMG_9358 drei Bergseen). Kein Bild ist leer oder generisch, jedes zeigt etwas, das nur hier passiert. | Glaubwürdigkeit: es sieht aus wie gelebt, nicht wie gebucht. | Familie, Echtheit, „Bei uns.“ | Unbewusst als „echt“. |
| 25 | **Licht und Farbe der Fotos**: warm, eher weiches Seitenlicht, Grüntöne aus Wald und Wiese decken sich mit Moos #2F4F3E und #6C8A5E; kein knalliges Blau außer dem Bergsee-Himmel. Fotos sind nicht gefiltert (CSS `filter: none`), die Palette wurde aus den Fotos gezogen, nicht umgekehrt. | Seite und Bild wirken wie ein Material. | Natur. | Unbewusst. |
| 26 | **Mobil: Hover wird zur festen Collage.** Auf Touch zeigt das Intro alle vier Bilder fest an den Ecken (`@media (hover:none)`), Hero-Wort 57 px (28 % von Desktop), Intro und Kapiteltitel beide 42,7 px, Band läuft über den Rand, Unterleiste bleibt. | Der Effekt wird übersetzt, nicht gestrichen. | Gleiche Geschichte, anderes Gerät. | Unbewusst. |
| 27 | **Gästestimmen mit Vorname + Initial und Herkunftsland** („Deutschland“, „Italien“), grüne Karten, waagrecht ziehbar, Link „Teilen Sie Ihre Erfahrung“ direkt auf Google. | Echt wirkend, nicht ausgedacht. | Vertrauen. | Bewusst. |
| 28 | **Bewusst weggelassen**: kein Preis, kein Sterne-Siegel, kein „Willkommen“-Text, keine Icon-Reihe (Wifi, Parken), kein Zimmer-Kartenraster, kein Popup, kein Video-Ton, keine Pfeile in Knöpfen, keine Hero-Slideshow. Die Zertifikate (Bio Fair, Bett&Bike, Regio Hotel) stehen klein im Footer. | Der erste Eindruck ist Atmosphäre, Fakten warten eine Ebene tiefer. | Zuhause, nicht Hotelprospekt. | Unbewusst: man vermisst nichts. |

Schwächen, die man nicht übernehmen sollte: Die Fließtexte sind schwächer als das System (Dreier-Ketten wie „Ehrlich, Regional, Nachhaltig“ und „Entspannen, Abschalten, Genießen“, ein Tippfehler „Es ist es mehr als ein Trend“, Du und Sie gemischt: „Teilen Sie Ihre Erfahrung“). Die Seite lebt von Entscheidungen im Satz und in der Struktur, nicht von der Copy.

## 3. Was eine KI hier anders und schlechter machen würde

| KI-Lösung | Jägerhof-Entscheidung |
|---|---|
| Hero: „Willkommen im Hotel Jägerhof“ + Untertitel + zwei Knöpfe „Zimmer buchen“ / „Mehr erfahren“ über einem Slider. | Offener Satz mit Komma, Handschrift als Unterschrift, vier Mini-Sätze, die den Hintergrund tauschen. Kein Knopf im Hero. |
| Drei Karten „Zimmer · Kulinarik · Wellness“ mit Icon, Titel, zwei Zeilen Text. | Ein einziger Satz, in dem die Ziele per Schriftwechsel klickbar sind. |
| Ein Bild pro Kapitel, gleich groß, immer links. | Zwei Bilder ineinander (Totale + Detail), Lage wechselt pro Kapitel, und es gibt jedes Bild zweimal (Sommer/Winter). |
| „Auch im Winter ein Erlebnis“ als eigener Abschnitt mit Schneefoto. | Ein Schalter, der die ganze Seite in den Winter versetzt, Farbe inklusive. |
| Versal-Labels gesperrt 0,2 em, Gold, „ENTDECKEN SIE“. | Versalien leicht negativ gesperrt, helles Moos, Kapitelwort („NATUR“) oder Satz in Du-Form. |
| Buchen-Pille oben rechts im Header plus Sticky-Header, der sich einfärbt. | Ruhiger Header ohne Verkauf, Buchen in einer kleinen schwebenden Unterleiste zusammen mit der Saison. |
| Footer: Logo, vier Spalten, Newsletter. Schluss ohne Gedanken. | Vor dem Footer der Briefschluss „Come stay with us, at Jägerhof.“ mit derselben Grammatik wie der Hero; die Footer-Liste wiederholt den Hero mit einem geänderten Wort. |
| Hover: Link wird Akzentfarbe, Knopf wird etwas dunkler. | Hover verändert die Umgebung (Satz dimmt, Bild erscheint, Hintergrund wechselt, Nachbarn treten zurück), nicht nur das Element. |

## 4. Übertragung auf Wasem Doppelstück (übersetzen, nicht kopieren)

**a) Schriftwechsel als Bedeutung: Albert Sans = das, was man buchen kann; Bona Nova = das, was es bedeutet.**
Ein Satz im Namenskapitel oder als Anlass-Satz, in Bona Nova auf Leinen, in dem genau die vier Angebote in Albert Sans gleicher Größe stehen und Links sind (Vorschlag, Wortlaut mit text-kritik prüfen): „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch eure **Feier**, eure **Tagung**, euren Abend mit **unserem Wein** und die Nacht im **Weinhotel**.“ Hover: Rest des Satzes auf 20 % Espresso, das Wort bleibt, ein Bild aus dieser Welt erscheint daneben; mobil feste Collage. Das ersetzt eine Angebotsliste und trägt den Namensgedanken. Nicht übernehmen: das Komma-plus-Handschrift-Motiv.

**b) Statt Sommer/Winter: Tag/Abend als Schalter, weil Wasem zwei Tageszeiten verkauft (Weinprobe und Tagung am Tag, Feste und Hotelnacht am Abend).**
Ein kleiner Schalter in der Mobil-Leiste neben „Anfragen“ (Sonne / Kerze oder schlicht „Tag“ / „Abend“) tauscht die Kapitelbilder gegen ihre Abendfassung und schaltet den Grund von Leinen #EEE7DD auf Espresso #2B201A mit Gold-Linien. Voraussetzung wie beim Jägerhof: jedes Kapitelbild existiert zweimal (Shotliste für den Fotografen). Ohne zweiten Bildsatz nicht bauen, sonst wird es ein leerer Farbwechsel.

**c) Die Seite schließt mit dem Hero-Satz, verändert um ein Wort.**
Wenn der Hero das Etikett mit den vier Angeboten trägt, endet die Seite mit demselben Etikett, aber als Abschied mit der echten W-Marke als Siegel statt einer Handschrift, und die Footer-Liste wiederholt die vier Angebote in Mini-Sätzen mit Punkt („Wein probieren. Übernachten. Feiern. Tagen.“, Vorschlag). Ein Wort wird zum Schluss persönlicher (zum Beispiel „Bei uns.“ im Hero, „Mit uns.“ im Footer wäre Jägerhof; für Wasem eher ein Zeitwort, weil der Name von Zeit handelt). Kostet nichts, schließt die Geschichte.

## 5. Screenshots (zugeschnitten, ≤ 1440 px)

1. `/private/tmp/claude-501/sektion/jagerhof/jagerhof-hero-hover-am-tisch.png` (Hero, Hover auf „Am Tisch.“: Hintergrund wird Risotto, Geschwister grau)
2. `/private/tmp/claude-501/sektion/jagerhof/jagerhof-intro-hover-dein-zimmer.png` (Intro-Satz, Hover auf „dein Zimmer“: Satz dimmt auf 20 %, Bettfoto erscheint)
3. `/private/tmp/claude-501/sektion/jagerhof/jagerhof-natur-sommer-winter.png` (Kapitel Natur: Sommer auf Sand gegen Winter auf Kiefer, beide Bildsätze)
4. `/private/tmp/claude-501/sektion/jagerhof/jagerhof-schluss-come-stay-signatur.png` (Briefschluss mit Unterschrift und Punkt-Liste)

Zusatz: `crop-button-hover.png` (Knopf vor/nach Hover), `sheet-d1.png`, `sheet-d2.png`, `sheet-m.png` (Kontaktbögen Desktop und mobil).
