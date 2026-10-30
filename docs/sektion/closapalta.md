# Sektion: Clos Apalta Residence (closapaltaresidence.com)

Gemessen am 30.10.2026 mit Playwright, Desktop 1440 × 900 und mobil 390 × 844, Startseite. Rohdaten und Skripte: `/private/tmp/claude-501/sektion/closapalta/` (`d-info.json`, `d-css.json`, `d-nav.json`, `m-info.json`). Kein Cookie-Banner, kein Alters-Gate.

## 1. Die eine Idee

**Das Haus ist im Bild immer klein und die Landschaft groß: man wohnt nicht in einem Hotel, man wohnt im Weinberg einer Familie, die leise davon erzählt.**

Woran man es in jedem Abschnitt erkennt:

| Abschnitt | Wie die Idee dort auftaucht |
|---|---|
| Film-Hero | Luftaufnahme, die Villen sind Streichholzschachteln im Hang, darunter nur Name und Ort |
| Zitat | Die Familie spricht zuerst, in der ersten Person („our family’s private residence“), nicht das Hotel |
| Galerie 16:9 | Erstes Bild: Hügel voller Wald, die Häuser liegen im unteren Drittel und verschwinden fast |
| Navy-Fläche | Zwei versetzte Bilder: Dächer von oben zwischen Bäumen, ein Haus hinter Gegenlicht und Laub |
| 6 Villas / 4 Casitas | Das Zimmerbild zeigt die Terrasse mit Blick ins Tal, also wieder die Landschaft |
| Restaurant | Makro von rosa Pfeffer, kein Teller, kein Saal |
| A Warming Stay | Steinschalen im Abendlicht statt Spa-Liege; Text: „Surrounded by vines. Embraced by nature.“ |
| Schluss | Drohnenbild des Weinbergwegs, zwei winzige Menschen, Überschrift „A lodge immersed in a vineyard“ |

## 2. Details

| # | Detail (konkret, mit Wert) | Warum (Wirkung beim Besucher) | Markenidee | Merkt man es |
|---|---|---|---|---|
| 1 | **Bildbearbeitung Hero:** Film gedämpft und dunstig, mittlere Sättigung 70/255 (HSV), Galerie 143/255. Kein Farbverlauf, kein Overlay; der Text bekommt nur `text-shadow: 1px 1px 2px rgba(0,0,0,.5)` | Der Einstieg wirkt wie früher Morgen, ruhig, nicht werblich. Das Bild bleibt unverfälscht, weil keine graue Schicht darüber liegt | Natur ist der Star, nicht die Inszenierung | unbewusst |
| 2 | **Motivabstand:** Fast jedes Architekturbild ist eine Totale oder Drohne (Dateinamen `DJI_…` 9 von ~30 Bildern). Häuser nehmen selten mehr als 15 % der Bildfläche ein | Das Hotel wirkt wie ein Teil des Hangs, nie wie ein Gebäude, das sich zeigt | Lodge im Weinberg | unbewusst, prägt aber das Gefühl am stärksten |
| 3 | **Menschen:** Ein einziges Porträt (Mann zwischen Olivenzweigen, halb verdeckt, Blick zur Seite) und zwei winzige Figuren auf dem Weinbergweg im Schlussbild. Keine Gäste beim Anstoßen | Menschen sind Maßstab und Spur, keine Statisten. Man projiziert sich selbst hinein | Privat, nicht Event | bewusst erst beim zweiten Hinsehen |
| 4 | **Bild statt Gericht:** Restaurant als 7-s-Loop (`duration 7.06`) rosa Pfeffer in Nahaufnahme, randlos | Appetit über Textur, nicht über Anrichteteller, die überall gleich aussehen | Herkunft der Zutat, „Chilean by birth“ | bewusst (es fällt auf, weil es kein Teller ist) |
| 5 | **Stillleben statt Spa-Foto:** Wellness wird mit zwei Steinschalen im Streiflicht gezeigt (702 × 749, fast quadratisch 0,94) | Ruhe wird als Material gezeigt, nicht als Bademantel-Klischee | Kontemplation | unbewusst |
| 6 | **Seitenverhältnisse als Grammatik:** Landschaft immer 16:9 randlos (1440 × 810 bzw. 90vh), Nähe immer hochkant (0,67 / 0,76 / 0,92 / 0,94). `object-position` überall 50 % 50 % | Breit heißt „schau hinaus“, hoch heißt „komm näher“. Die Fotos sind für den Beschnitt fotografiert, keine Fokuspunkt-Tricks nötig | Weite und Rückzug | unbewusst |
| 7 | **Hero-Text klein und unten:** Name nur 45 px Gelica Light (300) mittig unten, darüber Ortszeile 16 px Museo 500 versal | Kein Claim schreit; das Bild bekommt 90 % der Aufmerksamkeit. Wer klein spricht, wirkt sicher | Understatement einer alten Familie | bewusst als „ruhig“, Mechanik unbewusst |
| 8 | **Ortszeile als Zoom-out:** „Relais & Châteaux. Apalta Valley, Chile, South America“ | Liest sich wie eine Kamerafahrt vom Tal zum Kontinent. Zugleich Gütesiegel und Adresse in einer Zeile | Verwurzelung im Ort | unbewusst |
| 9 | **Zwei gegenläufige Laufweiten:** alle Gelica-Überschriften `letter-spacing: -0.01em` (−0,45 px bei 45, −0,56 px bei 56), alle Versal-Labels Museo +0,15em (2,4 px bei 16 px) | Überschriften wirken gesetzt und dicht wie in einem Buch, Labels luftig wie Prägung auf einem Etikett. Der Kontrast macht Ordnung ohne Linien | Handwerk, Druckkultur | unbewusst |
| 10 | **Nur ein Gewicht der Display-Schrift:** Gelica 300 wird geladen und genutzt; 400 bis 700 sind im Font-Set, aber `unloaded`, also nie im Einsatz | Keine fetten Stellen, nichts drängelt. Hierarchie entsteht nur über Größe und Abstand | Leise Sprache | unbewusst |
| 11 | **Fließtextfarbe Grau statt Schwarz:** Text #504F52 auf Crema #E8E5D8, Nav-Text Schiefer #414B5A | Weicher Kontrast, wirkt wie Druck auf Naturpapier | Natürlichkeit | unbewusst |
| 12 | **Eine dunkle Fläche:** Navy #20304C erscheint genau einmal großflächig (Abschnitt „An Ode To The Past“), sonst nur im Newsletter-Overlay | Der Farbwechsel markiert das Kapitel Herkunft; danach fühlt sich der helle Rest wie Tag an | Geschichte der Familie | bewusst als Bruch, Absicht unbewusst |
| 13 | **Gold nur für Buchen und Logo:** Dorado #A4884D nur im Knopf „Book your stay“ und im Logo der angehefteten Kopfleiste | Gold heißt hier immer „hier geht es weiter“; man lernt es nach einem Screen | Relais-&-Châteaux-Wert ohne Prunk | unbewusst |
| 14 | **Buchungsknopf:** fest unten rechts, 208 × 60, Ecken 0 px, Padding 22/50, Museo 16 px in Satzschreibung, Übergang 0,27 s linear. Mobil eine Gold-Leiste über volle Breite | Immer erreichbar, aber nie im Inhalt. Eckig und satzgeschrieben wirkt er wie ein Schild am Gutstor, nicht wie ein App-Knopf | Gastfreundschaft ohne Druck | bewusst |
| 15 | **Nav oben:** 193 px hoch, drei Zonen (Relais-Logo links, Wappen-Logo mittig, EN ES PT + „GET IN TOUCH →“ rechts), darunter die Menüzeile hinter einer 1-px-Crema-Linie über fast die ganze Breite, Abstand 32 px, Gelica 16 px Light | Das Menü liegt wie eine Zeile unter einem Briefkopf. Die Linie ersetzt jeden Hintergrund | Briefpapier eines Hauses | bewusst als „elegant“ |
| 16 | **Nav-Hover:** 1-px-Strich wächst aus der Mitte (`width 0 → 100 %`, `left 50 %`, Lage −0,8 rem, also genau auf der Trennlinie), 0,5 s. Untermenü (Villas, Casitas) als zweite Zeile unter einer zweiten Linie | Der Hover „berührt“ die Linie, die schon da ist, statt etwas Neues zu erfinden | Zurückhaltung | unbewusst |
| 17 | **Nav beim Scrollen:** runter verschwindet sie ganz (`top -160`), hoch kommt sie kompakt zurück (95 px, Crema-Fläche, Logo wird Gold, Menüzeile versteckt, öffnet bei Hover mit `max-height: 6rem`) | Volle Bildfläche beim Lesen, Orientierung sofort beim Zurückscrollen | Ruhe | bewusst nur, wenn man darauf achtet |
| 18 | **Zitat zuerst:** „SEVEN GENERATIONS OF WINEMAKING“ als Label, dann ein Satz des CEO in 35 px über 1210 px Breite, genau zwei Zeilen, typografische Anführungszeichen „“ ”, Absender 18 px Light mit vollem Namen und Titel, ohne Gedankenstrich | Die erste Stimme ist ein Mensch der Familie, nicht die Marke. Zwei Zeilen auf voller Breite lesen sich wie ein Satz, den jemand ruhig ausspricht | Privates Haus | bewusst |
| 19 | **Title Case per CSS:** Überschriften mit `text-transform: capitalize` („An Ode To The Past, An Eye To The Future“), Umbruch nach dem Komma, Zeilenhöhe 1,42 (79,5 px bei 56 px) | Großzügiger Durchschuss macht aus zwei Halbsätzen ein Motto | Vergangenheit und Zukunft | unbewusst |
| 20 | **Kleingeschriebene Anmerkungslinks:** „private wine estate“, „immersed in nature“, „wellness“ in 12 px Museo 500, klein geschrieben, unterstrichen, über dem jeweiligen Bild. Hover: Pfeil schiebt sich rechts herein, Linie wird länger, 0,5 s | Liest sich wie eine Bildunterschrift mit Bleistift, nicht wie ein Knopf. Der Pfeil erscheint erst, wenn man fragt | Persönliche Notiz | unbewusst |
| 21 | **Versetzte Bildpaare:** links 587 × 772, rechts 502 × 754, rechtes Bild 193 px tiefer, verschiedene Breiten; Einblendung gestaffelt 0,3 / 0,6 / 0,9 s | Kein Raster aus gleichen Kacheln; wirkt wie zwei Abzüge, die jemand auf den Tisch gelegt hat | Handgemachtes | unbewusst |
| 22 | **Zahl als Überschrift:** „6 Villas“ / „4 Casitas“, 56 px, sonst nichts. Hover: Bild weitet sich über die ganze Fläche, Text wird Creme, Zeile rückt um 4 rem ein, „VIEW MORE“ mit 2-px-Linie erscheint | Die kleine Zahl ist das Verkaufsargument (Exklusivität), der Hover belohnt Neugier mit Weite | „just 10 rooms“ | bewusst, Hover ist der Wow-Moment der Seite |
| 23 | **Wechselbild im Villen-Abschnitt:** zwei Bilder liegen deckungsgleich (`01_image-082`, `DJI_0763`) und blenden über | Man sieht innen und außen, ohne eine Galerie öffnen zu müssen | Haus im Weinberg | unbewusst |
| 24 | **Rechtsbündiger Block:** „A WARMING STAY“ samt Überschrift (28 px) und Kleintext (16 px Gelica) rechtsbündig, der Kleintext steht links neben dem Bild an dessen Unterkante | Bricht den mittigen Rhythmus genau dort, wo es um Rückzug geht; der Blick wandert über den Weißraum zum Bild | Kontemplation | unbewusst |
| 25 | **Microcopy in Fragmenten:** „Surrounded by vines. Embraced by nature. Enjoy peace, calm & contemplation.“ / „Self-guided trekking. Explore by bike. From gym to pool & hammam.“ / „Chilean by birth, French in essence.“ Kaufmanns-& statt „and“ | Kurze Sätze wie Notizen im Gästebuch; das & spart Gewicht und wirkt wie ein Etikett | Leise Sprache | unbewusst |
| 26 | **Nur 228 Wörter (mobil 190):** jedes Kapitel ein Label plus höchstens ein Satz | Man liest alles, weil es so wenig ist. Text bestätigt, das Bild erzählt | Bild trägt | bewusst als „wenig Text“ |
| 27 | **Abstandsrhythmus:** Spacer 72 / 73 / 72 / 160 / 277 / 120 / 120 / 120 px. Zitat eng (72 oben und unten), vor den Villen der größte Abstand (277) | Drei Stufen: eng heißt „gehört zusammen“, groß heißt „neues Kapitel“. Der große Atem vor dem Wohnen markiert den Wechsel von Geschichte zu Aufenthalt | Ruhe als Luxus | unbewusst |
| 28 | **Jahreszeiten als Schluss:** Schlussbild ist ein Slider aus fünf Drohnenbildern desselben Weinbergs (90vh), Label „WATCH THE COLOURS CHANGE WITH THE SEASONS“ | Lädt zum Wiederkommen ein, ohne es zu sagen; die Seite endet in der Zeit, nicht im Formular | Ort über das Jahr | bewusst, wenn man klickt |
| 29 | **Bewegung fast nur linear und 0,5 s:** Übergänge `0.5s` bzw. `0.27s linear`, Reveals gestaffelt in 0,3-s-Schritten (Footer 0,3 bis 1,9 s), keine eigenen Keyframe-Animationen, Galerie ohne Autoplay, Hero-Film 21,5 s Loop ohne Steuerung | Nichts springt, nichts läuft von selbst davon. Der Film ist so lang, dass man den Loop nicht merkt | Ruhe | unbewusst |
| 30 | **Footer mit Bild und Schwestermarke:** Luftbild 400 × 300 mit „DOMAINE → / WINE → / VISIT →“ direkt auf dem Bild, Adresse rechtsbündig „KM 4, Apalta Colchagua…“ | Das Weingut wird als Nachbar vorgestellt, nicht als Shop. Die Kilometerangabe klingt nach Landstraße, nicht nach Stadt | Weingut und Lodge gehören zusammen | bewusst |

**Mobil (eigene Entscheidungen, nicht nur verkleinert):** Kopfleiste sofort Crema mit Gold-Logo und Hamburger; Überschriften 36 / 40 px, Zitat 28 px auf drei Zeilen Abstand; der rechtsbündige Block wird mittig; Villen und Casitas werden zwei Bildkacheln mit Text auf dem Bild und dauerhaft sichtbarem „VIEW MORE →“ (kein Hover auf Touch); Buchen als volle Gold-Leiste unten; 38 Wörter weniger als Desktop.

**Bewusst weggelassen:** Preise, Sterne, Bewertungen, Icons, Kartenraster, abgerundete Ecken, Schatten, Verlauf über dem Bild, „Mehr entdecken“-Knopf im Hero, Pop-up, Instagram-Feed, Auszeichnungswand (nur das Relais-Logo), fette Schriftschnitte, Autoplay-Slider, mehr als eine dunkle Fläche.

## 3. Was eine KI hier anders und schlechter machen würde

| KI-Reflex | Clos Apalta |
|---|---|
| Hero-H1 in 96 px plus Claim („Where Wine Meets Wilderness“) plus zwei Knöpfe | Nur Name in 45 px Light, darüber eine Ortszeile, Buchen sitzt fest am Rand |
| Schwarzer Verlauf von unten über das Video, damit Text lesbar ist | Dunstiges, gedämpftes Material und ein 2-px-Schatten; das Bild bleibt sauber |
| Drei gleiche Karten „Stay / Dine / Relax“ mit Icon und „Learn more“ | Jedes Angebot hat eine eigene Form: Zahl mit Bildübernahme, Film randlos, rechtsbündiger Block mit Stillleben |
| Hochglanz-Architekturfotos, Haus groß und zentriert, Paar mit Weinglas | Haus klein im Hang, Menschen nur als Maßstab, Gerichte als Zutat |
| Gleiche Abstände (zum Beispiel immer 120 px) zwischen allen Abschnitten | Drei Abstandsstufen, die Bedeutung tragen (72 / 120 / 277) |
| Laufweite überall Standard, Labels in Versal ohne Sperrung, Überschriften Medium 500 | −0,01em für Überschriften, +0,15em für Labels, nur Gewicht 300 |
| Testimonials von Gästen mit fünf Sternen | Ein einziges Zitat der Familie, mit vollem Namen und Amt |
| Schluss-CTA „Book Your Unforgettable Stay Today“ auf Farbfläche | Schluss mit dem Weinberg im Jahreslauf; Buchen war die ganze Zeit da |

## 4. Übertragbar auf Wasem Doppelstück (Übersetzung, keine Kopie)

1. **Zwei Laufweiten und kleingeschriebene Bildnotizen.** Bona Nova in allen Überschriften leicht enger (−0,01em) und nur in einem Gewicht, Albert Sans als Versal-Label mit +0,12 bis +0,15em; dazu klein geschriebene, unterstrichene Bildnotizen in Albert Sans 12 bis 13 px direkt über Bildern („in der Stiegelgasse“, „aus dem Keller“), bei denen der Pfeil erst beim Hover erscheint. Das bringt die Etikett-Idee (Prägung, Handschrift) in die Typografie statt in Deko.
2. **Eine Zahl als Überschrift, das Bild übernimmt beim Hover.** Wo Wasem ein knappes, wahres Mengenmerkmal hat (Zahl der Zimmer, Plätze im Saal; Werte von Marie bestätigen lassen, nicht erfinden), steht nur diese Zahl groß in Bona Nova auf Leinen; beim Hover weitet sich das daneben stehende Raumfoto über die Fläche, Text wird Leinen auf Bild, „ansehen“ erscheint. Mobil zwei Bildkacheln mit sichtbarem Link. Auf ruhiger Fläche lesbar halten (Ilonas Hinweis zum Text auf Bildern): die Schrift auf dem Bild nur kurz und groß, Fließtext nie.
3. **Der Ort im Jahreslauf als Schluss.** Statt eines Abschluss-CTA endet die Startseite mit demselben Motiv in mehreren Jahreszeiten (Weinberg über Ingelheim oder der Hof in der Stiegelgasse), mit einer Zeile wie „Kommt in jeder Jahreszeit“ (Vorschlag, durch `text-kritik`). Buchen und Anfragen bleiben dafür fest in Cognac am Rand, eckig, satzgeschrieben, mobil als volle Leiste: Cognac nur dafür. Fotobedarf: gleiche Perspektive zu mehreren Jahreszeiten, für den Shoot vormerken.

## 5. Screenshots (zugeschnitten, je 1440 px breit)

- `/private/tmp/claude-501/sektion/closapalta/key-1-hero.png` (Film-Hero: Häuser klein im Hang, Name klein unten, Nav als Briefkopf mit Linie)
- `/private/tmp/claude-501/sektion/closapalta/key-2-zitat-galerie.png` (Familienzitat auf voller Breite, darunter 16:9-Galerie)
- `/private/tmp/claude-501/sektion/closapalta/key-5-villas-hover.png` (6 Villas vorher und nachher: Bild übernimmt die Fläche, VIEW MORE)
- `/private/tmp/claude-501/sektion/closapalta/key-4-rechtsbuendig.png` (rechtsbündiger Block, Kleintext neben dem Stillleben)

Weitere: `key-3-navy-versatz.png` (einzige dunkle Fläche, versetzte Bilder), `nav-pair.png` (Nav oben mit Hover und angeheftet), `m-sheet.png` (mobil, zehn Screens), `h-pwe-pair.png` (Anmerkungslink mit Pfeil beim Hover).
