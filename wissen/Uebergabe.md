# Übergabe

Stand: 2026-10-26 · **A-004 Key-Screens gebaut** (Prüfung), wartet auf Benjamins Urteil

## Zuletzt erledigt
- **A-004 Key-Screens** unter `prototyp/` (`index.html`, `jga.html`, `tagung.html`, `stil.css`, `gasse.js`, 15 Fotos in `prototyp/bilder/` als WebP, alle von doppelstueck.com). Lokal: `http://localhost:4321/prototyp/` (launch.json „repo“).
  - Signatur: Die Fuge zwischen „Wein erleben“ (Stiegelgasse 50) und „Bleiben“ (Stiegelgasse 70) ist die Stiegelgasse; beim Scrollen schließt sie sich, die Fotos werden ein Diptychon, aus der Mitte öffnet sich die Abendlicht-Fläche mit den gemischten Angeboten. Ohne Bibliothek, zwei CSS-Variablen. Reduced Motion zeigt den Endzustand.
  - Texte durch `text-kritik`: `docs/key-screens-texte.md` (unbelegtes „Gewölbe“, „Terrasse“, „Bestuhlung“ gestrichen; Tagung-H1 „Euer Team tagt im Weingut und schläft im Hof.“).
  - `design-kritik`: Messskript Note A (Tagung Desktop B vor Umbau), 375/1440 ohne Überbreite. Behoben: Split-Hero der Unterseiten, weiße Nav auf hellem Himmel, Textschatten.
  - Offen aus der Kritik: Display-Größe bleibt bei 6 rem (Projektregel) statt der 140–225 px aus dem Profil; Stiegelgassen-Linie nur auf der Startseite, auf Unterseiten noch nicht weitergeführt. Schriften laufen über Google Fonts (für live selbst hosten). Formulare schicken nichts ab.
- **A-006 Konzeptrunde 2** (Branch `claude/brave-meitner-8193a0`): `docs/instagram-ton.md` und `docs/design-ideen-konzeptrunde-2.md`. Drei eigene Richtungen gegen die Fable-Art-Direction, Benjamin wählte A.
- Instagram @wasemdoppelstueck ist ohne Login gesperrt (Altersgrenze). Ausgewertet wurde TikTok @wasem.doppelstueck (gleicher Absender „Marie & Julia Wasem“, 21.200 Follower): Versal-Titel, gesprochener Ton, fast nur Weinberg und Keller, keine Hotel- oder JGA-Inhalte.
- Davor: Brand Paper v8 (https://claude.ai/artifact/GA1cT9E2qYKLArKe6CeRXk, Quellen `docs/brand-paper/project/`), Messungen in `docs/belege/messungen-2026-10-26.md`.

## Freigegebene Richtung A (bindend für A-004)
- **Idee:** Bei Wasem endet der Weinabend nicht an der Autotür; Weingut (Stiegelgasse 50) und Weinhotel (Stiegelgasse 70, Stammhaus im Hof des Weinguts) liegen in derselben Gasse.
- **Claim (Vorschlag, vor dem Deck durch `text-kritik`):** „Noch ein Glas? Ihr schlaft ja hier.“ Beweiszeile: „Bio-Weingut und Weinhotel in derselben Gasse in Ingelheim. Weinprobe, Planwagen, Tagung, 50 Zimmer.“ Ersatz ohne Frage: „Bleibt doch einfach. Das Zimmer ist im Hof.“
- **Aufbau:** Hero mit Claim. Darunter zwei Bereiche nebeneinander: links **Wein erleben** (Proben, Planwagen, Workshops, Straußwirtschaft, Shop), rechts **Bleiben** (Zimmer, Frühstück, Eventraum). Darunter die gemischten Angebote (JGA mit Übernachtung, Wochenende, Tagung mit Weinprobe).
- **Signatur (genau eine):** Die zwei Spalten laufen beim Scrollen zu einer zusammen, die gemischten Angebote erscheinen in der Fuge. Reduced Motion zeigt den Endzustand.
- **Farbe aus dem Bestand:** Kalk `#F7F2E4`, Text Etikett-Anthrazit `#2B2622`, leise `#8C857E`, **Abendlicht `#F2BA66`** als einzige Fläche (Website-Akzent, Hero-Himmel, Etikett-Gold flach). Kein Spätburgunder-Rot mehr.
- **Schrift:** Instrument Serif (Display) + Hanken Grotesk; Kapitelzeilen in Versalien (Wortmarke, Etikett, Captions).
- **Moves:** `hero-satz-unten-links`, `kapitel-wechselseitig`, `einladung-mit-unterschrift`; Navigation/CTA/Footer aus `geschmack/bausteine/`.
- **JGA-Headline (aus C):** „Endlich mal wieder alle an einem Tisch.“ **Tagung:** Team bleibt über Nacht, Anfrage an Marie.
- **Fotos bis zum Shoot (alle „Foto: doppelstueck.com“):** Hero `wp-content/uploads/2024/02/06890_Wasem_web-…jpg` (zwei Frauen im Weinberg, Abendlicht; keine Namen nennen), Zimmer `2024/03/Stammhaus-…jpg` und `Klassik-…jpg`, Tagungsseite `/seminare-und-tagungen/` (14 Fotos), JGA-Serie 2025/04 mit Vorbehalt. Fehlende Motive als beschrifteter grauer Slot mit Shotlist-Zeile.

## Benjamins Feedback 26.10. (bleibt bindend)
- Gefühl statt Wikipedia; Ton, bei dem junge Frauen sagen „genau so ist es“.
- Nicht mit „Frauenunternehmen / zwei Schwestern“ werben; Stärken: coole Räume, Design, lockerer Text, Erlebnis.
- Zwei große Bereiche (Wein-Erlebnisse und Hospitality), die sich mischen; kein Tageslauf.
- Reihenfolge: erst Design (Key-Screens), danach Deck/PDF anpassen.

## Offen / nächste Schritte
- **A-004 abnehmen:** Benjamin schaut `prototyp/` an (Desktop und Handy). Danach Deck-Folien 6 bis 12 mit Screenshots neu, Passwort-Vorschau für Marie.
- Frage an Marie ergänzen: Liegen Stammhaus und Haus Klassik direkt gegenüber? Bestuhlung und m² des Eventraums.
- Instagram-Captions nachlesen, sobald Benjamin im Browser-Fenster eingeloggt ist (optional).
- Deck-Platzhalter Folie 13 (Link, Passwort, Telefon, Mail). Vorschau für Marie nur mit Passwortsperre (Vault `Playbooks/vorschau-passwortschutz.md`).
- Branch `claude/brave-meitner-8193a0` noch nicht nach `main` gemergt (nur Doku; vor dem Merge `pruefer`). Kein Push ohne Rückfrage.

## Hinweise
- Lighthouse lokal: `npx lighthouse@12.6.0 --form-factor=mobile`.
- Alter Prototyp im Root bleibt liegen.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Projekt wasem-doppelstueck-website. Lies `wissen/Uebergabe.md`. A-004 liegt unter `prototyp/` in Prüfung: Benjamins Urteil einarbeiten, dann Deck-Folien 6 bis 12 mit Screenshots der Key-Screens neu (Brand Paper v8). Worktree, kein Push.
