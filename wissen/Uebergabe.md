# Übergabe

Stand: 2026-10-31 (Nacht) · **Runde 12: Akzent Rot #E33C16 fest gesetzt** (Commit cc08df0) auf Branch `claude/runde-11` (Worktree `.claude/worktrees/brave-meitner-8193a0`, zweigt von `claude/warum-doppelstueck` 3c4797a ab). `pruefer`: **grün**, 0 Befunde (Kriterien gemessen; Reduced Motion nur im Code belegt). Nicht gemergt, nicht gepusht.

## Zuletzt erledigt
- Akzent aus der Gutswein-Flasche: Rot #E33C16 (neue Weißwein-Etiketten, gemessen am Shopfoto) gewählt nach Übergabe-Empfehlung; Koralle #EC5F3F nur noch als Kommentar in `prototyp/runde-10/index.html` Z. 46–49. Rückwechsel = eine Variable `--akzent` auf `:root`.
- Umschalter `?akzent=` (CSS `.akzentwahl` und Skript) entfernt.
- Akzent sitzt auf: Kapsel (3 px Streifen zwischen den Haken auf `.ausl`), aktives Angebot in Hero (`.hero h1 a.aktiv`, Z. 82) und Feste-Satz (`.feste .satz a.aktiv`, Z. 205). Cognac bleibt Anfragen/Buchen.
- Geprüft bei 1440 und 375: keine Konsolenfehler, Hero-Wort „Wein“ in Rot, Rest tritt zurück.

## Offen
1. Benjamin die Wahl Rot zeigen und bestätigen lassen (er hat noch nicht selbst gewählt); danach ist der Branch merge-bereit (launch.json und `prototyp/_pruef/` nicht mitnehmen).
2. (pruefer zu cc08df0 erledigt: grün.)
3. Anlass auf A heben: Schluss-Signatur wie Jägerhofs Unterschrift. Feste: zu viel Sand unter dem Knopf.
4. Danach `text-kritik` (Überschriften unverändert seit Runde 10), Merge nur nach Freigabe.
5. Prüfmarken aus Runde 10 bleiben (Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Magda, Keller-Foto Edelstahl).
6. DESIGN.md mit Entscheidungs-Anker liegt im Scratchpad der Session „Design-Prozess“; Commit auf main macht Benjamin oder jene Session. Offene Frage dort: Hero-Gate Variante 1 (main) gegen Lesesatz-Hero (Runde 10/11).
7. `claude/key-screens` (3b82a0c) ist Sackgasse; schließen erst nach Rückfrage.

## Hinweise
- Server: launch.json-Eintrag `runde11-4323` (Port 4323, Root = dieser Worktree), launch.json-Änderung nicht committet. `prototyp/_pruef/` ist ungetrackt, nicht von dieser Session.
- Hero-Links haben 0,35 s Farbüberblendung: berechnete Farbe direkt nach Klassenwechsel zeigt noch Espresso.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866, Akzent Rot #E33C16. Schrift Bona Nova + Albert Sans.

## Starter-Prompt (neue Session, Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/runde-11` (Worktree `.claude/worktrees/brave-meitner-8193a0`). Lies `wissen/Uebergabe.md`. Benjamins Bestätigung für Akzent Rot holen, dann „Offen“ 3 und 4 (Anlass-Signatur, Feste-Sand, text-kritik). Kein Push.
