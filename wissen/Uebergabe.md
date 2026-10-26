# Übergabe

Stand: 2026-10-26 · **A-004 Runde 3 gebaut: zwei Richtungen für Marke und Start-Screen, Benjamin wählt**

## Ergebnis Runde 3 (Branch `claude/brave-meitner-8193a0`)
- **Ilonas Einwand gefunden:** Telefonnotiz `~/Downloads/Demo-Webseite-Feedback.rtf` Z. 318–320: Bei Maxwell kann man „den Text auf den Bildern“ nicht lesen; dazu Lesbarkeit, Barrierefreiheit, Kundschaft „Durchschnitt, nicht Luxus“. Folge: in beiden Richtungen liegt Text nie auf Fotos, sondern auf Farbflächen, Kontraste gerechnet.
- **Konzept:** `docs/design-ideen-runde-3.md` (Anker, Hypothesen, zwei Richtungen, Verriss, Empfehlung A).
- **A „Etikett“** `prototyp/runde-3/a.html`: Farbwelt vom Gutswein-Etikett (Etikettweiß, Flaschenrot-Schwarz, Koralle), Bodoni Moda. Hero: anstoßende Frauen randlos links, Koralle-Etikett rechts mit großem W, Satz, zwei Wegen; das Etikett legt sich beim Laden auf.
- **B „Abendlicht“** `prototyp/runde-3/b.html`: Pfirsichsand, Spätburgunder, Abendgold, Instrument Serif. Hero: echte Wortmarke randlos, Abendlicht-Foto, Spätburgunder-Band; beim Scrollen fliegt die Wortmarke in die Navigation und wird zum W.
- Gemeinsam (`basis.css`, `runde3.js`): Logo adaptiv (Handy W, Desktop Wortmarke → W ab 80 px), vier Bereichskarten im versetzten Raster mit Auftritt (A: Bild deckt sich auf, Titel aus Zeilen-Maske; B: Bild kommt aus der Nähe), Familienreihe mit fünf echten Porträts von doppelstueck.com/team (Ilona, Julia, Marie, Burkhard, Oma Magda mit Rollen von dort), Schluss als Einladung, Handy-Leiste.
- Geprüft: 375 und 1440 ohne Überbreite, Hauptknöpfe im ersten Screen, Tippflächen ≥ 44 px, KI-Look-Check Note A (A und B, Desktop und Mobil), Reduced Motion schaltet Bewegung ab. Hinweis: Im versteckten Browser-Pane hängen CSS-Übergänge, Screenshots dort können halbfertige Zustände zeigen.
- Nicht gelaufen: `text-kritik` (Texte großteils aus Runde 2, H1 unverändert), Safari-Test des Wortmarken-Flugs.

## Offen / nächste Schritte
1. Benjamin wählt A oder B (oder Mischung). Danach die gewählte Richtung schärfen: `text-kritik`, Nav-Menü am Handy, Fotos in höherer Auflösung (Hero 1300 px, Porträts 800 px).
2. Dann JGA, Tagung, Deck-Folien 6–12, Passwort-Vorschau für Marie.
- Branch nicht nach `main` gemergt (vor dem Merge `pruefer`). Kein Push.

## Hinweise
- Lokal: launch.json „repo“, `http://localhost:4321/prototyp/runde-3/a.html` und `b.html`.
- Alter Prototyp im Root bleibt liegen (Link bei Marie). Runde 2 bleibt zum Vergleich unter `prototyp/runde-2/`.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies `wissen/Uebergabe.md` und `wissen/Lessons.md`. Benjamin hat in Runde 3 Richtung <A/B> gewählt (sein Urteil steht in der Nachricht). Schärfe diese Richtung unter `prototyp/runde-3/` (Texte durch `text-kritik`, Handy-Menü, Kommentare umsetzen), `design-kritik` vor dem Zeigen, dann JGA- und Tagungs-Screen in derselben Richtung. Kein Push.
