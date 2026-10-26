# Runde 6: Das Maß

Stand 2026-10-26, nach Benjamins Urteil zu Runde 5 („nicht cool, nicht modern, nicht durchdacht“). Maßstab: der erste Shot von Haartraum. Alles hier ist Vorschlag, keine Kundenfakten.

## Was Haartraum stark gemacht hat
Ein System aus dem Handwerk des Kunden (die Farbnummer 7.1), das zugleich Versprechen, Typo, Zeichen (der Kupferpunkt) und Hero trägt. Ein Zeichen, überall gleich eingesetzt, einmal riesig. Der Hero ist der Kernsatz plus das Zeichen, sonst nichts.

## Das Eigene bei Wasem
- **Der Name ist ein Maß.** Im Weinbau an Rhein und in Rheinhessen ist das Stück ein Fass mit 1200 Litern, das Halbstück 600, das Doppelstück 2400 Liter. *Woher der Firmenname kommt, ist offen (Frage 1 an Marie); wir behaupten keine Herkunft, nur den Begriff.*
- **Der Eichstrich.** Jedes Glas in Vinothek und Straußwirtschaft trägt den Strich bei 0,2 l. Das ist der kleinste Maßstab, das Doppelstück der größte.
- **Das W.** doppelstueck.com setzt das Etikett-W als blasses Wasserzeichen groß auf dunklen Grund (`Logo-W-blass.png`). Das bleibt: W klein in Nav und Fuß, einmal riesig in der Schlussfläche.

## Gegenrichtungen (design-brainstorm)
| Richtung | Was trägt | Urteil |
|---|---|---|
| **A Das Maß** | Glas bis Fass als Skala: 0,2 l, Halbstück, Stück, Doppelstück. Der Eichstrich ist das Zeichen. | **Gewählt.** Erzählt den USP (Erlebnis endet nicht nach dem Glas) ohne Wortspiel, gehört nur Wasem, trägt Angebote, Navigation, Fortschritt. |
| B Die Gasse 50/70 | Hausnummern, Weg zwischen den Häusern als Linie | Verworfen: Nummern ohne Gefühl, Runde-2-Spalten waren „basic“. Bleibt als Fakt in der Adresse. |
| C W als Brandzeichen | Das W wie ein Fassbrand eingebrannt | Verworfen als Träger (Runde 4: W soll den Hero nicht tragen). Lebt als Detail weiter. |

Risiko A: Liter als Gimmick. Gegenmittel wie bei Haartraum: jede Maßzahl hat einen Klartext-Zwilling („Halbstück · ein Abend im Weingarten“), Maße nur in Hero, Angebotsreihe und Fortschritt, nirgends sonst.

## System
1. **Der Eichstrich**: Haarlinie in Abendgold mit Maßzahl rechts. Oberkante jeder Füllung, Linkunterstrich, Listenzeichen, Scroll-Fortschritt.
2. **Die Füllung**: Spätburgunder `#3A1820` steigt von unten wie Wein im Glas, Oberfläche mit kurzem Nachschwappen, dann ruhig. Text steht immer auf der Füllung, nie auf dem Film.
3. **Die Maßzahl**: Bricolage Grotesque mit Tabellenziffern, immer mit Namen (Glas, Halbstück, Stück, Doppelstück).
4. Schrift: Libre Caslon Display für Sätze (nah am Serifen-W des Etiketts), Bricolage Grotesque für Bedienung und Maß. Farbe: Kalk `#F4F0E8`, Spätburgunder, Abendgold `#E7B76A` nur als Strich.

## One-Shot-Hero (Storyboard)
1. 0 bis 0,6 s: Lesefilm randlos, Nav hell darauf.
2. 0,6 bis 2,2 s: Spätburgunder steigt bis knapp unter die Bildmitte, schwappt nach, der Eichstrich setzt sich: „Glas · 0,2 l“.
3. ab 1,4 s: Kategorie, H1, zwei Wege erscheinen auf der Füllung.
4. Scroll: Die Füllung steigt bis zum oberen Rand, die Maßzahl zählt mit (Halbstück 600 l, Stück 1200 l, Doppelstück 2400 l), am Ende steht der Satz zum Namen. Danach ordnet dieselbe Skala die Angebote.

Texte (Vorschläge, vor dem Zeigen an Marie durch `text-kritik` und Instagram-Ton):
- Kategorie: „Weingut und Weinhotel · Stiegelgasse · Ingelheim“
- H1: „Feiert im Weingut. Schlaft ein paar Häuser weiter im Weinhotel.“
- Am vollen Fass: „Ein Doppelstück ist das große Fass: 2400 Liter. Bei uns ist es ein ganzes Wochenende.“

## Bau und ehrliche Kritik (gegen Haartraum)
Gebaut: `prototyp/runde-6/index.html` (+ `runde6.css`, `runde6.js`), Hero und Maß-Reihe. Geprüft 1440 und 375: keine Überbreite, eine H1, beide Wege im ersten Screen, Tippflächen 44 bis 48 px, Text nie auf dem Film (Kategorie, H1 und Wege erscheinen erst, wenn der Wein sie trägt), mobiles Video lädt, Bewegung zeitbasiert.

- Stark: Ein System trägt alles (Hero, Fortschritt, Angebote, Pegel je Zeile). Der USP wird als Bild erzählt, nicht als Pointe. Die Maßzahl hat immer einen Klartext-Zwilling.
- Schwächer als Haartraum: Die Weinfläche ist im Ruhezustand eine flache Farbfläche; das Schwappen ist dezent und lebt nur in der Bewegung. Im Hero rechnet der Eichstrich bis 2400 l, das braucht 1,6 Bildschirme Scrollweg, bis der Schlusssatz kommt.
- Offen: Handy-Menü, Safari, Reduced Motion live, `text-kritik` der Sätze, Herkunft des Namens (Frage an Marie), Fassmaße vor Kundengebrauch gegen eine Fachquelle prüfen, leichter Verlauf hinter der Nav auf dem Film (Lesbarkeit, Regel „keine Verläufe“ bewusst gebrochen).
- `design-kritik` wurde nicht als ganzer Skill-Lauf gemacht (Tagesbudget), sondern als diese Selbstkritik.
