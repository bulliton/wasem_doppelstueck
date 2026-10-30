# Übergabe

Stand: 2026-10-30 · **A-004 Runde 8: Benjamin hat Richtung 1 „Programm“ gewählt (`prototyp/runde-8/a-programm.html`). Nächster Schritt: daraus die ganze Startseite bauen.**

## Benjamins Entscheidungen
- 30.10. (spät): Hero-Richtung **1 Programm**: die vier Angebote Wein, Hotel, Feste, Tagungen als riesige Bona-Nova-Liste (Inhaltsverzeichnis), Bildfenster rechts wechselt beim Zeigen, Signatur „doppelt“ (kursives Gegenstück rollt hoch, Cognac). B Moodboard und C Fasskeller verworfen; das Oval aus C nur nach Julias Bestätigung (Ovalfass) als spätere Bildform.
- 30.10.: Hero 7d abgelehnt („oldschool, langweilig“). Zielgruppe designverliebte Frauen; auf einen Blick alle Angebote und dass alles funktioniert.
- 30.10.: Schrift Bona Nova + Albert Sans. Farbwelt fest. Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“

## Zuletzt erledigt (Runde 8)
- Drei Hero-Richtungen unter `prototyp/runde-8/` (gemeinsame `basis.css`: Tokens, Nav auf Leinen mit Wortmarke per CSS-Maske aus Originaldatei, Buchen-Leiste mobil „Zimmer buchen · Anfragen“), Storyboard `prototyp/runde-8/storyboard-runde-8.jpg`, Konzept + Fertig-wenn `docs/runde-8-hero-richtungen.md`.
- Fakten im Hero nur aus `docs/briefing.md`: 50 Zimmer in zwei Häusern, Bio-Weine im Shop und in der Vinothek, Tagungsraum bis 50 Personen.
- Geprüft 1440×900 und 375×812: kein Querscroll, alle vier Wege im ersten Screen, eine H1, KI-Look mobil A (Desktop-Fehltreffer Nav-Unterstreichung umgebaut). Entfernt: Nummern 01–04, farbiges Wort in H1.
- navbar.gallery / footer.design gesichtet: nur SaaS, nichts übernommen.

## Offen
1. **Startseite in Richtung 1 bauen** (`prototyp/runde-8/index.html`, Hero aus `a-programm.html` übernehmen): Abschnittsfolge 7–10 nach Skill `geschmack` (ruhiges Raster + drei Ausreißer): Hero-Liste → Namenskapitel (einzige Espresso-Fläche, Text aus Runde 7d) → je Angebot ein Kapitel (Bild/Text wechselseitig, Kapitelwort aus der Liste wiederholt) → Familie/Team mit Namen → Anlass-Formular als Satz (aus 7d) → Footer (`footer-flaeche-name-einladung` oder ruhig, da Espresso schon belegt). Menü „Menü“ mobil als Vollbild (`menue-vollbild-kapitel`). Die Doppel-Rolle der Liste darf in Kapitelüberschriften wiederkehren, sonst keine neue Signatur.
2. Fertig-wenn: (a) Hero unverändert in Kraft, (b) jedes Angebot hat ein Kapitel mit einem Weg, (c) höchstens drei Ausreißer, (d) `design-kritik` Note A Desktop + Mobil, (e) `pruefer` grün vor Merge.
3. Danach Deck-Folien auf Bona Nova, Hero + Brand-Sheet ins Kunden-Deck.
4. Prüfmarken: Julia (Fass-Bild, Ovalfass, 2.400 l), Marie (Rückruf je Anlass, Plattform), Foto vom Doppelstück im Keller fehlt.

## Hinweise
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), **nicht gemergt** (erst nach `pruefer`), kein Push (main = GitHub Pages).
- Vorschau: launch.json `repo`, `http://localhost:4321/prototyp/runde-8/a-programm.html`. Browser-Pane friert Übergänge ein: per JS `*{transition:none!important}` + Klasse `geladen` setzen.
- Screenshots für Storyboards: Chrome headless, mobil über eine 375-px-iframe-Hülle (sonst ist das Fenster zu breit).
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866 nur als Linie auf Espresso.
- Deck v15 https://claude.ai/artifact/TSoUh6KXERev1LkYtXpz6E (nur per Artifact `read`).

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md`. Benjamin hat Hero-Richtung 1 „Programm“ gewählt (`prototyp/runde-8/a-programm.html`). Baue daraus die ganze Startseite `prototyp/runde-8/index.html` nach Punkt „Offen 1“ (Skill `geschmack` für Abschnittsfolge und Bausteine, Texte durch `text-kritik`), prüfe 1440 + 375, `design-kritik`, dann `pruefer` und Benjamin gerendert zeigen. Kein Push.
