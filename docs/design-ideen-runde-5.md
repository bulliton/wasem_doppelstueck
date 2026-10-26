# Runde 5: Konzept „Drei Verben, eine Gasse“

Stand 2026-10-26. Grundlage `docs/runde-5-strategie-und-auftrag.md`. Alles Vorschläge.

## Material
- Herbstvideo (doppelstueck.com, 4K, 32 s) zeigt die Lese: Gegenlicht über den Zeilen, eine junge Frau mit Eimer läuft Richtung Ort, Trauben, Kippen in die Kiste. Echt, warm, jung. Es zeigt die Wein-Seite, nicht Feier oder Hotel.
- Schnitt: `prototyp/video/wasem-lese-hero-desktop.mp4` (1920×1080, 7,3 s Loop, 6,0 MB) und `-mobil.mp4` (720×1280 Hochformat, 3,0 MB), Poster je JPG. Rohdatei liegt ungetrackt in `prototyp/video/roh/`. Skript: Szenen 0,55–1,60 / 3,00–3,88 / 21,40–22,90 / 27,00–28,02 / 28,10–29,15 / 29,30–31,00 s, crf 21, maxrate 6M.

## Drei Konzepte (Anker Ort, Ritual, Mensch)
1. **Ort: „Die Gasse“.** Die Stiegelgasse als horizontaler Weg von Nr. 50 nach Nr. 70. Verworfen: die Gassen-Spalten der Key-Screens waren schon „basic“, und die Hausnummern erklären sich Fremden nicht.
2. **Ritual: „Drei Verben, eine Gasse“.** Der Film läuft vollflächig, die Seite hält an, und im Tafel-Feld wechselt das Verb: probieren, feiern, schlafen. Mit jedem Verb öffnet sich ein neues Bild über dem Film (Vinothek, Weingarten, Zimmer). Der USP wird nicht behauptet, man scrollt ihn durch. **Gewählt.**
3. **Mensch: „Gastgeberinnen“.** Film, dann das Team als Cursor-Vorschau an den Wegen. Verworfen: Botschaft sind Räume und Erlebnis, nicht Personen (Lesson „nicht mit zwei Schwestern werben“); die Familie bleibt als eigener Abschnitt.

## Identität, neu geschärft
- **Schrift:** Newsreader (Display, optische Größe 72, Kursiv für die Verben) plus Bricolage Grotesque für UI und Fließtext. Neu gegenüber Bodoni, Instrument, Cormorant; Bricolage gibt den lockeren Instagram-Ton.
- **Farbe:** Kalk `#F4F0E8` als Grund, Tinte `#1B1A17`, Spätburgunder-Nacht `#3A1820` als einzige große Fläche (Tafel-Feld, Schluss), Abendgold `#E7B76A` nur für das Verb und Fortschrittslinie. Der Film ist gelbgrün, das tiefe Rot steht komplementär dazu, ohne zu knallen.
- **Marke:** echte Wortmarke in der Nav (Desktop), das W am Handy, beide klein. Das W trägt nichts mehr.
- **Signatur:** der gepinnte Verbwechsel. Rest ruhig: horizontale Erlebnis-Reihe, Familie, Schluss.
- **Lesbarkeit (Ilona):** kein Satz liegt auf dem Film, alles steht auf dem Tafel-Feld. Kontrast Kalk auf Spätburgunder 14:1, Gold 8,9:1.

## Texte nach text-kritik
- Befunde: „nebenan“ übertrieb (50 und 70 liegen ein paar Häuser auseinander). Drei Kapitel-Headlines hatten denselben Bau (Imperativ plus Ortsliste); „Probiert, was wir gelesen haben“ besteht den Swap-Test nicht und behauptet Handlese ohne Beleg.
- H1: „Hier feiert ihr im Weingut und schlaft ein paar Häuser weiter im Weinhotel.“ Label davor: Weingut & Weinhotel · Ingelheim, Rheinhessen.
- probieren: „Unsere Bio-Weine trinkt ihr in der Vinothek oder abends im Weingarten.“
- feiern: „Franzi und Elena planen eure Feier mit.“
- schlafen: „Nach dem letzten Glas geht ihr nur die Gasse runter.“
- Offen: Instagram-Captions für den Tonabgleich nicht gelesen (Budget), Google-Bewertung als Beleg fehlt noch.

## design-kritik (26.10.)
- Erster Eindruck: Die Seite sagt „Weingut und Weinhotel in Ingelheim, hier feiert und schlaft ihr“. Das Auge geht zu 1 Film (junge Frau im Weinberg, Ort im Hintergrund), 2 H1 auf der Tafel, 3 Zimmer buchen. In einem Wort: lebendig.
- Trunk-Test 5/6: Am Handy fehlt ein Menü zu den Bereichen (nur Scrollen und Leiste).
- KI-Look-Skript: Note A auf 1440 und 375, keine Überbreite, eine H1. Behoben: Nav war auf dem hellen Gegenlicht unlesbar (jetzt kleine Spätburgunder-Tafeln), Nav-Links überlagerten am Handy den Knopf, Textlinks hatten nur 21 px Tippfläche (jetzt 45 px).
- Offen, mittel: Am Handy entsteht über der H1 Leerraum, weil die Tafel so hoch ist wie der längste Zustand. Der Film zeigt die Lese, nicht Feier oder Hotel; der Verbwechsel bringt die anderen beiden ins Bild.
- Nicht geprüft: Safari, Reduced Motion im Browser, Instagram-Ton der Texte. Screenshots im versteckten Pane zeigen Übergänge teils halb fertig.
