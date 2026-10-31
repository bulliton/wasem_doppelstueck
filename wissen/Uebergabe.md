# Übergabe

Stand: 2026-10-31 (Nacht) · **A-004 Runde 11 gebaut auf Branch `claude/runde-11`** (Worktree `.claude/worktrees/brave-meitner-8193a0`, zweigt von `claude/warum-doppelstueck` 3c4797a ab). Commit 5235a77. `pruefer`: gelb, beide Befunde behoben (Wein-Endbild mobil/Reduced Motion sofort, Menübilder im Bildton). Nicht gemergt, nicht gepusht.

## Warum ein neuer Branch
- Der Worktree-Schutz verbietet Schreiben in fremde Worktrees. Darum steht Runde 11 nicht auf `claude/warum-doppelstueck`, sondern auf `claude/runde-11` im Worktree der Key-Screens-Session. `claude/runde-11` enthält den ganzen Stand von `claude/warum-doppelstueck` plus Runde 11.
- `claude/key-screens` (3b82a0c) bleibt Sackgasse. Schließen erst nach Rückfrage.

## Zuletzt erledigt (Runde 11, `prototyp/runde-10/index.html`)
- Formensatz aus dem Schild auf alle Kapitel: Goldlinie als Ausleger mit zwei Haken, die Überschrift schwingt daran ein (ohne Versal-Label). Goldrahmen 8 px auf Feste-Foto, Tagungsfoto, Familie, Tagungs-Etikett.
- Samt: Bildton `--ton` (saturate .76, sepia .08), Korn 7 %, Feste und Familie auf Sand, Linie dort Richtung Cognac.
- Wein: Bild öffnet sich beim Scrollen vom Passepartout bis randlos (lerp, kein Pin). Einziger Pin bleibt das Hotel.
- Tagungen: Loch weg, Angaben auf hellem Etikett. Familie: fünf gleich groß, mobil Wischreihe.
- Kritik neben Jägerhof: `docs/runde-11-kritik.md` (Wein A−, Hotel A, Feste A−, Tagungen A−, Familie A, Anlass B+).

## Offen
1. Erneuter `pruefer`-Durchlauf vor jedem Merge.
2. Benjamins Urteil zur Runde 11 (Pinterest-Beige getroffen?).
3. Anlass auf A heben: Schluss-Signatur wie Jägerhofs Unterschrift. Feste: zu viel Sand unter dem Knopf.
4. Danach `text-kritik` (Überschriften unverändert seit Runde 10), Merge nur nach Freigabe.
5. Prüfmarken aus Runde 10 bleiben (Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Magda, Keller-Foto Edelstahl).

## Hinweise
- Server: launch.json-Eintrag `runde11-4323` (Port 4323, Root = dieser Worktree). Änderung an launch.json ist nicht committet.
- Prüfskripte: scratchpad `kapitel.js` (Kapitel bei 1440/375), `wein.js` (Wein-Stufen). Fullpage-Screenshots zeigen das Korn nur im ersten Viewport, das ist ein Screenshot-Effekt.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866. Schrift Bona Nova + Albert Sans.

## Starter-Prompt (neue Session, Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/runde-11` (Worktree `.claude/worktrees/brave-meitner-8193a0`). Lies `wissen/Uebergabe.md` und `docs/runde-11-kritik.md`. Hol Benjamins Urteil zur Runde 11, dann „Offen“ 3 und 4. Kein Push.
