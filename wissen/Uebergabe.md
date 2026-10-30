# Übergabe

Stand: 2026-10-30 (spät) · **A-004: Pilot Runde 10 (Hero + Namenskapitel) von Benjamin freigegeben („Ja, weiterbauen“). Nächster Schritt: Kapitel darunter mit derselben Methode.**

## Benjamins Entscheidungen
- 30.10. (spät): Pilot Runde 10 trägt: ruhiger Lesesatz (H1 50 px) und Bild im Leinen-Passepartout bleiben, Kapitel darunter weiterbauen.
- 30.10. (Nacht): Pilot freigegeben: erst Referenzen sezieren, dann Hero + Namenskapitel auf dieses Niveau, Vergleich neben der Referenz.
- 30.10. (spät): Runde 9 **A Etikett** gewählt (Weinberg-Abendfoto, Angebote auf Leinen-Etikett). C (Wortmarke randlos) als möglicher Footer-Schluss.
- 30.10.: Schrift Bona Nova + Albert Sans, Farbwelt fest, Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“ Zielgruppe designverliebte Frauen.

## Zuletzt erledigt
- `prototyp/runde-10/index.html` (Kopie Runde 9, nutzt `../runde-9/basis.css` und `nav.js`): Hero = Bild im Leinen-Passepartout, darunter H1-Satz mit vier klickbaren Angeboten (Albert Sans, Versal); Hover/Fokus dimmt Satz auf 22 % und tauscht Bild; Reveal „Klären“ (blur → scharf); Sättigung 80 %. Nav-Wortmarke lesbar, Entwurfslabel weg.
- Namenskapitel: Zweiteiler, zweite Hälfte drei Spalten versetzt und langsamer klärend, Text darunter, Foto Julia im Keller; kein Goldstrich, keine Maske.
- „weil“-Tabelle in `docs/sektion/README.md` (Abschnitt Pilot Runde 10). Storyboard `prototyp/runde-10/storyboard-runde-10.jpg`. KI-Look-Skript A (1440/375), kein Überlauf, Tippflächen 47 px. Commit 6fd12f6.

## Offen
1. Kapitel Wein/Hotel/Feste/Tagungen, Familie, Anlass in `prototyp/runde-10/index.html` mit derselben Methode umbauen (Pilot freigegeben).
2. Keller-Foto zeigt Edelstahltanks, Text sagt Eichenfass: Foto Doppelstück fehlt (Shoot).
3. Hero-Satz durch `text-kritik` (Wortlaut ist Vorschlag). Mobil: feste Collage statt Hover erwägen.
4. Danach `pruefer`, Merge erst nach Benjamins Freigabe.
5. Prüfmarken Julia/Marie (Fass, 2.400 l, Rückruf, Rollen). Setup-Vorschlag in `wissen/Vorschlaege.md`.

## Hinweise
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt.
- Screenshots headless per Playwright (`NODE_PATH="/Users/benjamin/GitHub Repos/anfragen-maschine/node_modules"`), mit `hasTouch` greift `(hover: none)`. Referenz-Screens flüchtig unter `/private/tmp/claude-501/sektion/<name>/`.
- Browser-Pane friert Übergänge ein: per JS `*{transition:none!important}`, Klasse `geladen` auf html, `sichtbar` auf `.fass,.kapitel,.auf`.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md` und im README `docs/sektion/README.md` den Abschnitt „Pilot Runde 10“. Der Pilot (`prototyp/runde-10/`) ist freigegeben; baue die Kapitel darunter (Wein, Hotel, Feste, Tagungen, Familie, Anlass) mit derselben Methode (Idee Klären, Zweiteiler gerade/kursiv, Cognac nur Anfragen/Buchen, jede Entscheidung mit „weil“), Vergleich neben Referenz, `design-kritik`, Storyboard. Kein Push.
