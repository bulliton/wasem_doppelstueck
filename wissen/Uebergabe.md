# Übergabe

Stand: 2026-10-26 · **A-004 Runde 3 abgelehnt („knallt“, „basic“, kein Wow). Runde 4: neue Richtungen C/D, A/B bleiben zum Vergleich**

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
