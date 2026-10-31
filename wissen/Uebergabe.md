# Übergabe

Stand: 2026-10-31 (spät) · **Akzent-Text #C33413 entschieden** (Benjamins Wahl, Variante 3). Hero Lesesatz Runde 11, Akzent Koralle #EC5F3F für Kapsel und Flächen.

## Zuletzt erledigt
- `prototyp/runde-10/index.html` Z. 49: neue Variable `--akzent-text: #C33413`; aktive Angebots-Links in Hero (Z. 82) und Feste-Satz (Z. 205) nutzen sie. Kapsel `.ausl` und Fokusrahmen bleiben `--akzent` Koralle.
- Kontrast #C33413: Leinen 4,48 : 1, Sand 3,45 : 1 (große Schrift erfüllt). Im Browser gemessen: Links rgb(195, 52, 19), Kapsel rgb(236, 95, 63).
- `DESIGN.md`: Entscheidung eingetragen, offene Frage Koralle-Textfarbe geschlossen.

## Offen
1. Key-Screens auf `prototyp/runde-10/index.html` weiter: Anlass auf A heben (Schluss-Signatur wie Jägerhof), Feste: zu viel Sand unter dem Knopf, danach `text-kritik`.
2. Prüfmarken aus Runde 10 bleiben (Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Magda, Keller-Foto Edelstahl).
3. Mit Marie klären: Weinetiketten als Zimmernummern, Fotos/Rohdaten, Instagram-Export.
4. Branches `claude/key-screens`, `claude/hero-gate-pilot-96d6b3` und Worktree `brave-meitner-8193a0` nur nach Benjamins Ja löschen. Nichts pushen.
5. Video 5,98 MB aus Runde 5/6 (pruefer gelb) bleibt vorerst.

## Hinweise
- Server: launch.json-Eintrag `runde11-4323` (Port 4323, Root = Worktree `brave-meitner-8193a0`), Änderung an launch.json nicht committet. `prototyp/_pruef/` ist gitignored.
- Aktive Links sind beim Laden leer; `.aktiv` kommt erst per Klick/Hover. Hero-Links haben 0,35 s Farbüberblendung.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866, Akzent Koralle #EC5F3F, Akzent-Text #C33413. Schrift Bona Nova + Albert Sans.

## Starter-Prompt (neue Session, Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, neuer Worktree von main (Hero Lesesatz Runde 11, Akzent Koralle, Akzent-Text #C33413). Lies `wissen/Uebergabe.md` und `DESIGN.md`. Dann „Offen“ 1: Anlass auf A heben, Feste-Sand unter dem Knopf, `design-kritik` mit Persona-Schleife, `text-kritik`. Kein Push.
