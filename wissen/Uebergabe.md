# Übergabe

Stand: 2026-10-30 (Nacht) · **A-004: Runde 10b gesichtet, Benjamins Urteil: Texte okay, aber Sections „hingeklatscht“, Design/UI/Motion „basic“. Nächster Schritt ist ein Design-Pass aus der Brand heraus (Opus), noch nicht begonnen.**

## Benjamins Entscheidungen
- 30.10. (Nacht, nach Sichtung 10b): Components/UI/UX müssen aus der Brand Identity wachsen und sie pushen; jede Section ein Anmutungsrahmen mit sofortigem Markengefühl, Wow-Reaktion der Zielgruppe; Motion „cool und smooth“ statt leichtem Fade; Familie alle gleich groß; das W als Rahmen-/Formelement prüfen, ohne Kitsch; Design-Kritik soll den Geschmack aktiv vorantreiben (Lesson eingetragen).
- 30.10. (spät): Pilot Runde 10 trägt: ruhiger Lesesatz (H1 50 px) und Bild im Leinen-Passepartout bleiben, Kapitel darunter weiterbauen.
- 30.10. (Nacht): Pilot freigegeben: erst Referenzen sezieren, dann Hero + Namenskapitel auf dieses Niveau, Vergleich neben der Referenz.
- 30.10. (spät): Runde 9 **A Etikett** gewählt. C (Wortmarke randlos) als möglicher Footer-Schluss.
- 30.10.: Schrift Bona Nova + Albert Sans, Farbwelt fest, Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“ Zielgruppe designverliebte Frauen.

## Zuletzt erledigt
- `prototyp/runde-10/index.html`: Kapitel Wein bis Anlass neu. Jede Überschrift Zweiteiler (aufrecht/kursiv), Reveal Klären überall, Doppel-Rolle und Zeilenmaske raus, drei Abstandsstufen, Bildnotizen über Bildern. Hotel: zwei Zimmer versetzt + „50“. Feste: Anlässe klickbar im Satz mit Bildtausch, Klick wählt Anlass im Formular vor. Tagungen: Angaben-Liste. Familie: Größe nach Zuständigkeit. Cognac nur Anfragen/Buchen (gemessen).
- „weil“-Tabelle in `docs/sektion/README.md` (Abschnitt „Kapitel darunter“). Storyboard Referenz neben Wasem: `prototyp/runde-10/storyboard-runde-10-kapitel.jpg`. KI-Look A (1440/375), kein Überlauf, Tippflächen ≥ 44 px.
- Runde 10b „mutiger“: Feste-Satz über die Breite (4,6 rem), Foto springt beim Hover neben das Wort (JS `festHin`), Hotel-„50“ bis 15 rem. Magenta-Lichterkette gegen Sekt-Foto getauscht.
- design-kritik: Fassaden-Nachtfoto (Nachtblau) im Hotel durch Balkonzimmer ersetzt.

## Offen
1. **Design-Pass Runde 10c (Opus):** (a) Markenelemente sichten (W vom Etikett, Wortmarke, Brand Paper) und ein kleines Set an Rahmen- und Motion-Elementen festlegen; (b) Hotel als Key-Screen in zwei Anmutungsrahmen bauen, neben Referenzen vergleichen, Benjamin wählt; (c) dann übrige Kapitel umbauen, Motion mit Gewicht (z. B. Bild übernimmt die Fläche); (d) Familie: alle Personen gleich groß und gleich gerahmt; (e) `design-kritik` als Persona-Schleife („designverliebte Frau, würde sie es weiterschicken?“) bis A.
2. Neue Überschriften und Feste-Satz durch `text-kritik` (alles Vorschläge). Hero-Satz ebenso.
3. Keller-Foto zeigt Edelstahltanks, Text sagt Eichenfass: Foto Doppelstück fehlt (Shoot).
4. Prüfmarken Julia/Marie: Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Rollen.
5. Danach `pruefer`, Merge erst nach Benjamins Freigabe. Setup-Vorschlag in `wissen/Vorschlaege.md`.

## Hinweise
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt.
- Screenshots headless per Playwright (`NODE_PATH="/Users/benjamin/GitHub Repos/anfragen-maschine/node_modules"`), file://-URL reicht; mit `hasTouch` greift `(hover: none)`. Referenz-Screens flüchtig unter `/private/tmp/claude-501/sektion/<name>/`.
- Für Screenshots: per JS `*{transition:none!important}`, Klasse `geladen` auf html, `sichtbar` auf `.fass,.kapitel`.
- Bona Nova hat Mediävalziffern: große Zahlen mit `font-variant-numeric: lining-nums`.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md` und die oberste Design-Lesson. Starte Design-Pass Runde 10c in `prototyp/runde-10/index.html` nach Punkt 1 unter „Offen“ (Skills `geschmack`, `design-brainstorm`, `frontend-design`; Server `repo-4322`, URL `/prototyp/runde-10/index.html`). Erst Hotel in zwei Rahmen zeigen, dann Benjamins Wahl. Danach `text-kritik` und `pruefer`. Kein Push.
