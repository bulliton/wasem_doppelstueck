# Übergabe

Stand: 2026-10-31 · A-006 Konzeptrunde 2: eigene Richtung steht, Hero-Gate gewählt (Variante 1), Key-Screens noch nicht gebaut

## Zuletzt erledigt
- **Instagram-Ton** in `docs/instagram-ton.md` (5 Tonzüge, Themen, 10 Captions). Profil ist 18+ gesperrt, Captions nur über Suchmaschinen-Snippets, Bilder/Reels ungesehen.
- **Eigene Richtung** gegen die Fable-Art-Direction in `docs/design-ideen-startseite.md`: Idee „Wein und Bett, ein paar Schritte auseinander“, Claim-Vorschlag „Noch ein Glas? Ihr schlaft ja hier.“, Grund Kalk `#F5F0E8`, Text Mosaikbraun `#2B1E17`, Akzent Hofblau `#1F2D48`, Bodoni Moda + Instrument Sans. Personas und Kriterien stehen dort.
- **Hero-Gate** (erster Pilot des neuen Skill-Abschnitts): `prototyp/hero-gate.html?v=1|2|3`, Bogen `prototyp/hero-gate-bogen.html`. Benjamin wählte **Variante 1**: Lese-Film randlos, Name „Wasem Doppelstück“ riesig unten links, Signatur versetzte Raum-Collage, Varianz 3. Zeile in `~/.claude/skills/geschmack/wahlen.csv`.
- **Pilot-Bericht** `docs/hero-gate-pilot.md` (10 Befunde). Befunde 1, 4, 5 als Pitch `design-prozess-8-hero-gate-nachschaerfen` aufs Board, approved, vor Pitch 2 bauen.
- Bestandsfotos (doppelstueck.com) als `prototyp/fotos/wasem-*.webp`, Film gekürzt in `prototyp/video/`. Rohvideo `prototyp/video/roh/` ist gitignored.

## Offen / nächste Schritte
- **A-004 Key-Screens** (läuft auf A-006 auf): mit Variante 1 als Hero, dann Grundraster-Kapitel und Schluss nach Skill `design-brainstorm` Abschnitt „Key-Screens“. Claim, Hofblau und Bodoni wurden im Gate nur mitgezeigt, einzeln noch nicht freigegeben: im Key-Screen-Storyboard mit Freigabeknopf bestätigen lassen.
- Kategorie steht in Variante 1 nur in der Unterzeile (17 px): Erste-Eindruck-Test prüfen.
- Mit Marie klären: Weinetiketten als Zimmernummern (laut rheinhessen.de), Fotos/Rohdaten, Instagram-Export.
- Branch `claude/hero-gate-pilot-96d6b3` ist **nicht** nach main gemergt: vorher Agent `pruefer` (Ampel), dann Fast-Forward.
- A-006 bleibt `läuft`, bis Benjamin die Richtung im Key-Screen-Storyboard freigibt.

## Hinweise
- `ki-look-check.js` im Browser: Kopie nach `prototyp/_pruef/` (gitignored), per `fetch` + `eval` ausführen. Note A sah das versteckte Hero-Bild in Variante 3 nicht, Screenshot nötig.
- Dev-Server: `.claude/launch.json` „repo“ (Port 4321), Seiten unter `/prototyp/`.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Modell Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/hero-gate-pilot-96d6b3` (erst `pruefer`, dann Fast-Forward nach main, dann neuer Worktree). Lies `wissen/Uebergabe.md`, `docs/design-ideen-startseite.md` und `docs/instagram-ton.md`. A-004: Key-Screens der Startseite mit dem gewählten Hero (Variante 1 aus `prototyp/hero-gate.html?v=1`) nach Skill `design-brainstorm` Abschnitt „Key-Screens“: Hero, ein Grundraster-Kapitel (zwei Bereiche Wein-Erlebnis und Hospitality, die sich mischen), Schluss mit Einladung; 375 und 1440, `design-kritik` bis A. Claim, Hofblau und Schrift als Inline-Storyboard mit Freigabeknopf bestätigen lassen. Worktree, kein Push.
