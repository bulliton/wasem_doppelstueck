# Übergabe

Stand: 2026-10-26 · **A-004 Runde 7: Brand-Sheet „Beides.“ gebaut, wartet auf Benjamins Ja.**

## Runde 7 (Branch `claude/brave-meitner-8193a0`)
- Konzept, drei Gedanken, Verriss: `docs/design-ideen-runde-7.md`. Sheet: `prototyp/runde-7/brand-sheet.html` (Bestandsfotos in `prototyp/runde-7/bestand/`).
- Gedanke: „Beides.“ Weingut am Tag, Weinhotel am Abend, in einer Gasse; Gäste kaufen den Abend ohne Heimfahrt. Angebote als Paare. Zeichen: W der Wortmarke als zwei ineinandergreifende V (Gold | Kalk). Farbe: Kalk, Eiche, Mokka (Vinothek) und Nacht #1F2552, Gold #C9A866 (Stammhaus zur blauen Stunde, Wortmarke). Schrift: EB Garamond + Instrument Sans. Signatur: Seite wird beim Scrollen von Tag zu Nacht.
- Bei Ja: `text-kritik` für Hero-Satz und Paketnamen, dann One-Shot-Hero `prototyp/runde-7/index.html`, Desktop und Mobil, `design-kritik`. Bei Nein: Befund als Lesson, Gedanke C (Altes Holz, helles Licht) prüfen. Kein Push.

## Davor (Runde 6)

Stand: 2026-10-26 · **A-004 Runde 6 „Das Maß“ abgelehnt („so wack“, ein Maß hat keine Aussagekraft). Runde 7: Markengedanke aus „Warum Doppelstück?“ mit Philosophie, neuer Farbwelt, Schrift zum Logo, Icon.**

## Benjamins Urteil zu Runde 6 (bindend)
- Das Maß ist nicht das Entscheidende, verkauft nichts, erzeugt kein „wow“. Wasem gibt es im Ort schon (wasem.de), also: Warum *Doppelstück*, was zeichnet sie aus? Daraus eine tiefgründige, verkaufbare Philosophie mit Charakter.
- Passen muss: zwei Frauen, hochwertig, aber lokal erreichbar; ihre Farben und ihre Einrichtung (Räume ansehen!). Neue Ansätze für Farbwelt, Charakter, Brand Identity, eine Schrift, die zum Logo passt, Icon, eine einzigartige Kombination und das Wechselspiel insgesamt.

## Beleg: so erklären sie den Namen selbst
doppelstueck.com/4-langer-horn-spaetburgunder-raetsel/ (Rätsel der Weinwanderung): „Doppelstück steht für: uns als zwei Schwestern (Julia und Marie), zwei Generationen, zwei Unternehmen (Weingut und Weinhotel), aber auch für eine Holzfassart, mit der wir gerne arbeiten.“ Lösung dort: Doppelstück 2.400 l, Stück 1.200 l, Halbstück 600 l; im Keller auch Barrique 225 l und Tonneau 500 l. Damit sind Herkunft und Fassmaße belegt (Frage 1 an Marie erledigt).
- Spannung zu klären: Lesson „nicht mit zwei Schwestern als Botschaft werben“. Das Doppel muss eine Haltung sein (zwei Dinge, die zusammengehören und sich ergänzen: Wein und Bett, Tag und Nacht, Tradition und jung, Region und Anspruch), nicht „Frauenunternehmen“.
- Weitere Charakterstoffe von der alten Seite: Einzylinder-Cuvées (Traktor-Geschichte: Chardonnay = Motorblock, Grauburgunder = Antriebsrad; `/einzylinder-weine/`), „Post vom Doppelstück“ (Newsletter), Doppelstück-Geburtstag (8. Hoffest 2027, Gründung also etwa 2019), Doppelstück-Weingläser im Shop, „DobbelBock“ Fassenacht-Paket, Weinwanderungsrouten mit Rätseln.

## Starter-Prompt Runde 7 (neue Session, Modell Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies „Urteil zu Runde 6“ und „Beleg“ in `wissen/Uebergabe.md`, `wissen/Lessons.md` (Design, Inhalt), Vault-Playbooks `farbwelt-aus-bestand.md` und `logo-als-code.md`. Dann: Räume, Einrichtung und Farben von Weingut und Hotel auf doppelstueck.com ansehen (Zimmer, Vinothek, Eventraum, Etiketten), die Wortmarke und das W genau anschauen. Daraus mit `design-brainstorm` drei Markengedanken rund um das Doppel (Philosophie, was Gäste kaufen, Gegenrichtung) und einen wählen; dazu Farbwelt aus dem Bestand, Schriftpaar passend zur Wortmarke, ein Icon/Zeichen aus dem Doppel. Zuerst als Brand-Sheet (Markengedanke in einem Satz, Farbe, Schrift, Zeichen, Wechselspiel) zeigen und Benjamins Ja holen, erst dann einen One-Shot-Hero unter `prototyp/runde-7/`. Haartraum (`~/GitHub Repos/haartraum-website/docs/art-direction.md`) bleibt die Messlatte. Kein Push.

## Runde 6 (Commit fc7b848, Branch `claude/brave-meitner-8193a0`)
- Konzept, Gegenrichtungen, Storyboard, Kritik: `docs/design-ideen-runde-6.md`.
- Bau: `prototyp/runde-6/index.html` (+ `runde6.css`, `runde6.js`). Lokal `http://localhost:4321/prototyp/runde-6/index.html` (Server „repo“).
- Hero: Lesefilm randlos, Spätburgunder steigt wie Wein im Glas bis zum goldenen Eichstrich („Glas 0,2 l“), schwappt nach; Kategorie, H1, zwei Wege erst auf der Füllung (Ilona). Scroll füllt bis oben, Eichstrich zählt Viertelstück, Halbstück, Stück, Doppelstück; am Ende der Satz zum Namen. Danach Maß-Reihe „Wie viel darf’s sein?“ (Glas, Abend, Nacht, Wochenende) mit Pegelstrich je Zeile.
- Schrift neu: Libre Caslon Display + Bricolage Grotesque. Farben aus Runde 5.
- Offen: Benjamins Urteil, Handy-Menü, Safari, Reduced Motion live, `text-kritik`, ganzer `design-kritik`-Lauf, Fassmaße gegen Fachquelle, Namensherkunft (Frage an Marie). Kein Push, nicht gemergt.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies `docs/design-ideen-runde-6.md` und Benjamins Urteil zu Runde 6. Bei Ja: `design-kritik` und `text-kritik` ehrlich, Fassmaße belegen, Handy-Menü, Familie und Schluss im System „Das Maß“ (W einmal riesig in der Schlussfläche), Passwort-Vorschau. Bei Nein: Befund als Lesson, Gegenrichtung B oder C aus dem Dokument prüfen. Kein Push, kein Merge ohne `pruefer`.

## Davor

Stand: 2026-10-26 · **A-004 Runde 5 abgelehnt („nicht cool, nicht modern, nicht durchdacht“). Runde 6: zuerst ein tiefer Branding-Gedanke, dann ein One-Shot-Hero.**

## Benjamins Urteil zu Runde 5 (bindend)
- Bleibt als Version liegen (`prototyp/runde-5/`, Commit e9df86c), aber: wirkt nicht modern, nicht durchdacht, nutzt Geschmack und Möglichkeiten nicht. Zu sehr an seinen Vorgaben orientiert.
- Gewünscht: ein tiefergründiges Branding mit eigenen Elementen, intelligent und kreativ weiterentwickelt (siehe, wie doppelstueck.com das W einsetzt), getragen von dem Branding-Gedanken, der auch in anderen Projekten funktioniert hat, und eine schöne One-Shot-Geschichte im ersten Screen.
- Maßstab: der erste Shot von Haartraum (Repo `~/GitHub Repos/haartraum-website`, `docs/` Art Direction mit Farbnummer-System, Commit d34df92 und Key-Screens 4d93149). Dort kam alles aus einem System, das nur dem Kunden gehört.

## Starter-Prompt Runde 6 (neue Session, Modell Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies „Urteil zu Runde 5“ in `wissen/Uebergabe.md`, `wissen/Lessons.md` (Design), `docs/runde-5-strategie-und-auftrag.md` nur als Rahmen. Dann zuerst verstehen, was bei Haartraum den ersten Shot stark gemacht hat (`~/GitHub Repos/haartraum-website/docs/`, Art Direction und Key-Screens ansehen). Danach auf doppelstueck.com und Instagram sammeln, wie Wasem das W, die Etiketten und den Namen nutzt (Doppelstück ist ein Fassmaß, 2400 l, prüfen). Daraus EIN Markensystem, das nur Wasem gehört (Elemente, Formen, Bewegung), per `design-brainstorm` mit Gegenrichtung schärfen, und einen One-Shot-Hero mit dem geschnittenen Lese-Film (`prototyp/video/`) oder Fotos unter `prototyp/runde-6/` bauen, Desktop und Mobil. `design-kritik` ehrlich gegen Haartraum als Messlatte. Kein Push.

## Stand
- Konzept, Identität, Texte und Kritik: `docs/design-ideen-runde-5.md` (drei Konzepte Ort, Ritual, Mensch; gewählt Ritual).
- Bau: `prototyp/runde-5/index.html` (+ `runde5.css`, `runde5.js`). Herbstvideo geschnitten: `prototyp/video/wasem-lese-hero-desktop.mp4` (1080p, 7,3 s, 6,0 MB) und `-mobil.mp4` (720×1280, 3,0 MB), Poster je JPG. Rohdatei in `prototyp/video/roh/` per `.gitignore` ausgeschlossen. Schnittzeiten stehen im Konzeptdokument.
- Hero: Film randlos, die Seite hält an (420svh), im Spätburgunder-Feld wechselt das Verb probieren / feiern / schlafen, dabei öffnet sich je ein Foto (Vinothek, Weingarten Lichterkette, Doppelzimmer). Nav transparent, Marke und Links auf kleinen Tafeln (sonst unlesbar im Gegenlicht). Danach horizontale Reihe „Was habt ihr vor?“ (Desktop gepinnt, Handy wischbar), Shop-Zeile, Familie versetzt, Schluss, Handy-Leiste.
- Identität neu: Newsreader + Bricolage Grotesque, Kalk `#F4F0E8`, Tinte, Spätburgunder-Nacht `#3A1820`, Abendgold `#E7B76A`.
- Geprüft: 1440/375 ohne Überbreite, KI-Look A beide, eine H1, Knöpfe im ersten Screen, Tippflächen ≥ 44 px. Offen: Handy ohne Menü, Leerraum über der H1 am Handy, Safari, Reduced Motion live, Instagram-Ton.
- Lokal: Server „repo“ (4321) liefert diesen Worktree, `http://localhost:4321/prototyp/runde-5/index.html`. Branch `claude/brave-meitner-8193a0`, nicht gemergt, kein Push.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies `docs/design-ideen-runde-5.md` und Benjamins Urteil zu Runde 5 (aus seiner Nachricht). Bei Ja: Feinschliff `prototyp/runde-5/` (Handy-Menü, Tafel-Höhe am Handy, Instagram-Ton der Texte prüfen, Google-Bewertung als Beleg), dann JGA, Tagung, Passwort-Vorschau. Bei Nein: Befund als Lesson, Konzept „Mensch“ oder „Ort“ aus dem Dokument neu prüfen. `design-kritik` vor dem Commit. Kein Push, kein Merge ohne `pruefer`.

## Runde 4 (Branch `claude/brave-meitner-8193a0`, Fable-Session)
- Identität gedämpft (`docs/design-ideen-runde-4.md`): Sand `#F1EAE0`, Flaschenschwarz `#1E1917`, Stein für Labels, Gold nur als Haarlinie, Koralle nur als Hover-Punkt; Cormorant Garamond 300 als dünne Display-Serif, Hanken Grotesk für UI. Eine Farbfläche: Kapitel „Zwei Häuser, eine Gasse“.
- **C „Fenster“** `prototyp/runde-4/c.html`: Foto zuerst nur durch das große W, beim Scrollen öffnet sich das Fenster randlos (Maske `wasem-w.svg`, `--p` per JS), Sand-Etikett mit Goldrand trägt Satz und Wege. Handy: Freundinnen-Foto hochkant.
- **D „Satz“** `prototyp/runde-4/d.html`: Riesensatz in zwei versetzten Zeilen, rechts das Foto im Fenster, beim Scrollen wächst es randlos und der Satz zieht weg.
- Gemeinsam (`basis.css`, `runde4.js`): Lenis (CDN), Nav transparent auf dem Hero, beim Scrollen fest auf Sand, versteckt sich runter, kommt hoch zurück; Karten versetzt mit Innen-Parallax und Zeilen-Maske; Familie als versetzte Collage, am Handy wischbar; Schluss als Einladung; Handy-Leiste. Reduced Motion: Endzustand ohne Scroll-Bewegung.
- Geprüft: 1440 und 375 ohne Überbreite, Hauptknöpfe im ersten Screen, KI-Look-Check A (0 Treffer), 231–243 Wörter, eine H1. Belege `docs/belege/runde-4/`. Nicht geprüft: Safari, Reduced Motion im Browser, `text-kritik` (Texte wie Runde 3).
- Lokal: launch.json „repo-4322“ (zweiter Server für parallele Sessions), `http://localhost:4322/prototyp/runde-4/c.html` und `d.html`.
- Nächster Schritt: Benjamins Wahl C oder D, dann Feinschliff der gewählten Richtung, JGA, Tagung, Deck-Folien, Passwort-Vorschau. Kein Merge, kein Push.

## Ergebnis Runde 3 (Branch `claude/brave-meitner-8193a0`)
- **Ilonas Einwand gefunden:** Telefonnotiz `~/Downloads/Demo-Webseite-Feedback.rtf` Z. 318–320: Bei Maxwell kann man „den Text auf den Bildern“ nicht lesen; dazu Lesbarkeit, Barrierefreiheit, Kundschaft „Durchschnitt, nicht Luxus“. Folge: in beiden Richtungen liegt Text nie auf Fotos, sondern auf Farbflächen, Kontraste gerechnet.
- **Konzept:** `docs/design-ideen-runde-3.md` (Anker, Hypothesen, zwei Richtungen, Verriss, Empfehlung A).
- **A „Etikett“** `prototyp/runde-3/a.html`: Farbwelt vom Gutswein-Etikett (Etikettweiß, Flaschenrot-Schwarz, Koralle), Bodoni Moda. Hero: anstoßende Frauen randlos links, Koralle-Etikett rechts mit großem W, Satz, zwei Wegen; das Etikett legt sich beim Laden auf.
- **B „Abendlicht“** `prototyp/runde-3/b.html`: Pfirsichsand, Spätburgunder, Abendgold, Instrument Serif. Hero: echte Wortmarke randlos, Abendlicht-Foto, Spätburgunder-Band; beim Scrollen fliegt die Wortmarke in die Navigation und wird zum W.
- Gemeinsam (`basis.css`, `runde3.js`): Logo adaptiv (Handy W, Desktop Wortmarke → W ab 80 px), vier Bereichskarten im versetzten Raster mit Auftritt (A: Bild deckt sich auf, Titel aus Zeilen-Maske; B: Bild kommt aus der Nähe), Familienreihe mit fünf echten Porträts von doppelstueck.com/team (Ilona, Julia, Marie, Burkhard, Oma Magda mit Rollen von dort), Schluss als Einladung, Handy-Leiste.
- Geprüft: 375 und 1440 ohne Überbreite, Hauptknöpfe im ersten Screen, Tippflächen ≥ 44 px, KI-Look-Check Note A (A und B, Desktop und Mobil), Reduced Motion schaltet Bewegung ab. Hinweis: Im versteckten Browser-Pane hängen CSS-Übergänge, Screenshots dort können halbfertige Zustände zeigen.
- Nicht gelaufen: `text-kritik` (Texte großteils aus Runde 2, H1 unverändert), Safari-Test des Wortmarken-Flugs.

## Benjamins Urteil zu Runde 3 (26.10., bindend für Runde 4)
- Farben „knallen sehr stark“, Gesamteindruck „basic“, es fehlen Raffinesse, das Besondere, der Wow-Effekt, gerade auch mobil.
- Gut und beizubehalten: „Was habt ihr vor?“ mit großen Bildern, die Team-/Familienreihe („süß“).
- Wunsch: Navigation liegt transparent **auf** dem Hero (wirkt moderner), mehr Effekte, modern, on brand. Brand Identity darf noch einmal angepasst werden.
- Meine Selbstkritik: Koralle/Burgunder wörtlich vom Etikett als große Fläche genommen (auf der Flasche nur Akzent); Split-Hero ist ein Standardmuster; je eine Bewegung war zu wenig für „Wow“.

## Offen / nächste Schritte
1. Runde 4 in frischer Session (Starter-Prompt unten): zuerst Brand Identity schärfen (Farbe gedämpft aus Fotos und Flasche: Abendlicht-Neutrale, Flaschenschwarz, Gold nur als Haarlinie; Koralle höchstens Punkt), dann zwei neue Richtungen C und D als ganze Start-Screens mit Wow-Hero.
2. Ideen für den Wow-Hero, je zu prüfen: Move `ebenen-vor-schrift` (Menschen freigestellt vor der riesigen Wortmarke im Abendlicht), `bild-als-fenster` mit Menschen statt Landschaft, Film aus `Herbstvideo.mp4` (41,5 MB auf doppelstueck.com, Download nur nach Benjamins Ja), Nav-Baustein `nav-transparent-kehrt-zurueck`. Lesbarkeit (Ilona) trotz Overlay sichern: Hero-Text in ruhiger Bildzone mit Abdunklung oder eigener Fläche.
3. Karten und Familie aus Runde 3 übernehmen und mit mehr Bewegung verfeinern.
4. Danach JGA, Tagung, Deck-Folien 6–12, Passwort-Vorschau für Marie.
- Branch nicht nach `main` gemergt (vor dem Merge `pruefer`). Kein Push.

## Hinweise
- Lokal: launch.json „repo“, `http://localhost:4321/prototyp/runde-3/a.html` und `b.html`.
- Alter Prototyp im Root bleibt liegen (Link bei Marie). Runde 2 bleibt zum Vergleich unter `prototyp/runde-2/`.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies `wissen/Uebergabe.md` („Urteil zu Runde 3“ ist bindend), `wissen/Lessons.md`, `docs/design-ideen-runde-3.md` und Skill `geschmack` (Profil, Moves `ebenen-vor-schrift`, `bild-als-fenster`, `hero-film-name-randlos`, Baustein `nav-transparent-kehrt-zurueck`). A-004 Runde 4: Brand Identity gedämpft schärfen (kein Knallen), dann mit `design-brainstorm` zwei neue Richtungen C und D als Start-Screens unter `prototyp/runde-4/` mit Wow-Hero, Navigation transparent auf dem Hero, Text lesbar (Ilona), Karten und Familie aus Runde 3 verfeinert, Desktop und Mobil gleich stark. `design-kritik` mit ehrlicher Note vor dem Zeigen, A/B bleiben zum Vergleich. Benjamin wählt. Kein Push.
