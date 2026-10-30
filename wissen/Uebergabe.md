# Übergabe

Stand: 2026-10-30 (Nacht) · **A-004: Runde 9 ist für Benjamin „okay, aber nicht special, sieht AI aus“. Vier Referenzen auf Detailebene seziert (`docs/sektion/`). Nächster Schritt: Pilot-Umbau Hero + Namenskapitel nach `docs/sektion/README.md`. Wartet auf Wochenlimit-Reset (Fr 21:59).**

## Benjamins Entscheidungen
- 30.10. (Nacht): Pilot freigegeben: erst Referenzen sezieren (Was, Warum, Markenidee), dann Hero + Namenskapitel auf dieses Niveau, Vergleich neben der Referenz.
- 30.10. (spät): Runde 9 **A Etikett** gewählt (Weinberg-Abendfoto randlos, Angebote auf Leinen-Etikett mit W). C (Wortmarke randlos) als möglicher Footer-Schluss.
- 30.10.: Schrift Bona Nova + Albert Sans, Farbwelt fest, Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“ Zielgruppe designverliebte Frauen.

## Zuletzt erledigt
- `docs/sektion/jagerhof.md`, `lorunser.md`, `closapalta.md`, `maxwell.md`: je 25–30 Details mit Grund und Markenidee, KI-Gegenüberstellung, Übertragung auf Wasem (Commit 7a106b9).
- `docs/sektion/README.md`: acht gemeinsame Lehren, Diagnose Runde 9, Übertragung (Klären als Bewegung, Zweiteiler gerade/kursiv, Angebote als klickbarer Satz mit Bildtausch, Cognac nur für Anfragen/Buchen) und Fertig-wenn-Liste für den Pilot.
- Startseite Runde 9 mit Hero A in `prototyp/runde-9/index.html` (geprüft 1440/375).

## Offen
1. Pilot: Hero + Namenskapitel in `prototyp/runde-9/` (oder Kopie `runde-10/`) nach README umbauen, Vorher/Nachher neben Jägerhof/Lorünser als Storyboard zeigen.
2. Fehler: Wortmarke in der Nav auf hellem Himmel unsichtbar; Label „Entwurf Runde 8“ unten rechts.
3. Danach Kapitel darunter mit derselben Methode, dann `pruefer`, Merge erst nach Benjamins Freigabe.
4. Prüfmarken Julia/Marie (Fass, 2.400 l, Rückruf, Rollen), Foto Doppelstück im Keller fehlt.
5. Setup-Vorschlag in `wissen/Vorschlaege.md` (Geschmacks-Skill um Detail-Sektion erweitern).

## Hinweise
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt.
- Referenz-Screenshots liegen flüchtig unter `/private/tmp/claude-501/sektion/<name>/`; bei Bedarf neu aufnehmen (Playwright: `NODE_PATH="/Users/benjamin/GitHub Repos/anfragen-maschine/node_modules"`).
- Browser-Pane friert Übergänge ein: per JS `*{transition:none!important}`, Klasse `geladen` auf html, `sichtbar` auf `.fass,.kapitel,.auf`.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md` und `docs/sektion/README.md` (bei Bedarf einzelne Sektionen per grep). Baue den Pilot: Hero + Namenskapitel von `prototyp/runde-9/index.html` nach der Übertragung und der Fertig-wenn-Liste im README um (keine Karte, kein Goldstrich, Reveal „Klären“, Angebote als klickbarer Satz mit Bildtausch, Zweiteiler gerade/kursiv, Cognac nur für Anfragen/Buchen; Nav-Wortmarke und Label fixen). Jede Entscheidung mit „weil“-Satz. Vergleich neben Jägerhof/Lorünser im selben Viewport, `design-kritik`, Benjamin als Storyboard zeigen. Kein Push.
