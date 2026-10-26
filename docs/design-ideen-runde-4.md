# Design-Ideen A-004 Runde 4: gedämpfte Identität, zwei Wow-Heros

Stand 2026-10-26. Grundlage: Benjamins Urteil zu Runde 3 (`wissen/Uebergabe.md`, bindend), `docs/design-ideen-runde-3.md`, Profil `geschmack`.

## Anker
- Wer: Frauen um 25 bis 30 (JGA, Freundinnen, Paare), Tagungsgäste, Weinkundschaft aus der Region. Breite Mitte, nicht Luxus (Marie).
- Fühlen: hier werde ich herzlich empfangen, das sieht schön aus, hier bleiben wir einen ganzen Tag.
- Tun: Zimmer buchen, Erlebnis anfragen, Wein kaufen.
- Besitzt nur Wasem: das Serifen-W vom Etikett, Weingut und Hotel in derselben Gasse, drei Generationen im Haus.

## Was Runde 3 falsch gemacht hat (Hypothesen-Tabelle)
| Idee aus Runde 3 | Ziel | Befund | Urteil |
|---|---|---|---|
| Etikettfarbe (Koralle, Burgunder) als große Fläche | Marke sichtbar | „knallt“, auf der Flasche ist Koralle ein Akzent | ersetzen: Farbe aus Foto und Flasche, Koralle nur als Punkt |
| Split-Hero Foto links, Fläche rechts | Lesbarkeit (Ilona) | Standardmuster, kein Wow | ersetzen: Hero mit Signatur-Bewegung, Text weiterhin auf Fläche |
| Navigation als Leiste auf Grund | Orientierung | wirkt alt | schärfen: transparent auf dem Hero, beim Scrollen fest (Baustein `nav-transparent-kehrt-zurueck`) |
| Je eine kleine Bewegung | Ruhe | zu wenig für „Wow“ | schärfen: eine große Signatur im Hero, dazu Innen-Parallax, Zeilen-Masken, Smooth Scroll |
| „Was habt ihr vor?“ mit großen Bildern | Wege | gut | behalten, versetztes Raster, Bilder atmen |
| Familienreihe mit echten Porträts | Wärme | „süß“ | behalten, als versetzte Collage, am Handy wischbar |

## Brand Identity Runde 4 (gedämpft)
- **Grund** Sand aus dem Abendlicht-Foto: `#F1EAE0`, tiefer `#E6DCCE`. **Tinte** Flaschenschwarz `#1E1917` (warm, nicht reinschwarz). **Stein** `#76685D` für Labels (4,9 : 1 auf Sand). **Gold** `#B4955E` nur als Haarlinie (Etikettrand, Trenner), nie als Fläche oder Text. **Koralle** `#D1624A` höchstens als Punkt (Hover-Markierung).
- **Eine Farbfläche** pro Seite: das Kapitel „Zwei Häuser, eine Gasse“ in Flaschenschwarz mit Sand-Text (Kontrast 15 : 1).
- **Schrift**: Cormorant Garamond 300 als dünne, große Display-Serif (Markengrund: das Serifen-W vom Etikett; Profil-Regel 2: Gewicht 100–400, Desktop 100–200 px), Hanken Grotesk für Lesen und Bedienen. Keine Didone mehr (Modemagazin-Klischee, Runde 3).
- Beide Richtungen teilen diese Identität. Verglichen wird nur das Hero-Konzept; Karten, Gasse, Familie, Schluss sind gleich.

## Zwei Richtungen
**C „Fenster“** · Varianz 6, Bewegung 7, Dichte 3
Das Foto der anstoßenden Frauen ist beim Laden nur durch das große W zu sehen (das Zeichen richtet sich aus dem Nichts auf). Beim Scrollen öffnet sich das Fenster, bis das Foto randlos steht; das Bild zoomt gegenläufig. Unten links liegt ein Sand-Etikett mit Goldrand: Satz und zwei Wege, lesbar in jedem Zustand (Ilona). Am Handy das Freundinnen-Foto im Hochformat.
Moves: `bild-als-fenster` (Form ist echt: das W vom Etikett), `satz-auf-farbflaeche`, Nav-Baustein. Nächste Referenz: Tsimbidi (Hero im Steinbogen), White Desert (Masken).

**D „Satz“** · Varianz 7, Bewegung 6, Dichte 3
Erster Bildschirm auf Sand: der Satz in zwei versetzten, riesigen Zeilen („Noch ein Glas? / Ihr schlaft ja hier.“), rechts oben das Foto als Bildfenster. Beim Scrollen wächst das Foto randlos und der Satz zieht nach oben weg; danach beginnt die Seite normal. Der Text liegt nie auf dem Foto.
Moves: `riesen-serif-versetzt`, `bild-waechst-randlos`, `zeilen-maske` beim Laden, Nav-Baustein. Nächste Referenz: Jägerhof („Dein / Zuhause,“ plus Bild wächst).

**Gemeinsam:** Lenis Smooth Scroll (Auslauf ~1 s), Karten mit Innen-Parallax und Auftritt über Zeilen-Maske, Familie als versetzte Collage mit Parallax in zwei Tempi, Schluss als Einladung, Handy-Leiste. Logo adaptiv (Handy W, Desktop Wortmarke → W ab 80 px). Reduced Motion: Hero im Endzustand, keine Scroll-Bewegung.

## Vorab-Verriss
1. C wiederholt „W als Fenster“ aus Runde 2: diesmal sind die Menschen groß im Fenster und das Fenster öffnet sich, das war Benjamins Wunsch („mehr Emotion, Menschen“).
2. Großer versetzter Satz (D) ist eine Jägerhof-Figur: eigen wird sie durch den Satz der Marke und das wachsende Foto der echten Gäste.
3. Pin im Hero kann wie Scroll-Hijack wirken: Strecke 190 svh (C) / 200 svh (D), danach normale Seite; Hauptknöpfe stehen im ersten Bildschirm.
4. Cormorant ist auf Weinseiten verbreitet: Eigenständigkeit kommt aus dem W, dem Etikett-Sand und der Bewegung, nicht aus der Schrift.
5. Bestandsfotos sind klein (800–1300 px): randlos am Desktop sichtbar weich; für die Seite Shoot nötig.

## Bewertung (0–10) und Empfehlung
| | Konzept | Typo | Komposition | Bild | Bewegung | Marke |
|---|---|---|---|---|---|---|
| C Fenster | 8 | 8 | 8 | 8 | 9 | 9 |
| D Satz | 8 | 9 | 8 | 8 | 8 | 7 |

Empfehlung: **C „Fenster“**, weil das Markenzeichen den Hero trägt (Profil-Regel 15) und sich am Handy genauso stark öffnet. D ist die modernere, typografische Lösung, falls Benjamin das W als Hero-Form nicht noch einmal sehen will. Benjamin wählt.

## Testplan
375 und 1440 ohne Überbreite, Hauptknöpfe im ersten Screen, Kontraste (oben gerechnet), Seitentext, Reduced Motion, `design-kritik` mit KI-Look-Note.
