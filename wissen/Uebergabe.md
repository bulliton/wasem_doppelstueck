# Übergabe

Stand: 2026-10-31 (Nacht) · **Hero entschieden: Lesesatz Runde 11** (Benjamin über Session „Design-Prozess“). Hero-Gate Variante 1 (Lese-Film) verworfen. Akzent Koralle #EC5F3F fest. `claude/runde-11` enthält jetzt auch main (Hero-Gate-Pilot, Fotos, Video, DESIGN.md) und ist die Basis der Key-Screens.

## Zuletzt erledigt
- Akzent: Benjamin wählte **Koralle #EC5F3F** vor Rot #E33C16 (`prototyp/runde-10/index.html` Z. 49, Variable `--akzent`). Umschalter entfernt. Sitzt auf Kapsel (`.ausl`), aktivem Angebot in Hero und Feste-Satz; Cognac bleibt Anfragen/Buchen.
- `DESIGN.md`: Entscheidungen Akzent Koralle und Hero Lesesatz Runde 11 (Bona Nova bleibt, Bodoni Moda verworfen) nachgetragen, alte offene Fragen geschlossen.
- `~/.claude/skills/geschmack/wahlen.csv`: Zeile 31.10. Hero-Gate mit Vermerk „von Benjamin durch Lesesatz Runde 11 ersetzt“.
- main in `claude/runde-11` gemergt: Konflikte inhaltlich gelöst (A-006 fertig; Lessons beide; zwei Instagram-Dokumente: `docs/instagram-ton.md` = Sichtung 31.10., `docs/instagram-ton-2026-10-26.md` = Konzeptrunde 2).
- Kontrastprüfung Koralle: auf Leinen 2,73 : 1, auf Sand 2,1 : 1 (Rot 3,47, Cognac 4,2). Unter WCAG für Text.

## Offen
0. **Fast-Forward nach main wartet:** `pruefer` gelb zu 8e93812, einziger Befund `prototyp/video/wasem-lese-hero-desktop.mp4` 5,98 MB (> 5 MB Prüfgrenze, < 6 MB laut `design-regeln.md`), geladen von `prototyp/runde-5/` und `runde-6/`. Nach Benjamins Ja: im Hauptcheckout `git merge --ff-only claude/runde-11`, dann Sichtprüfung. Kein Push.
1. **Koralle als Textfarbe** (offene Frage in `DESIGN.md`): Vorschlag Koralle für Kapsel und Flächen, dunklerer Koralle-Ton für die aktiven Links. Wahl bei Benjamin.
2. Key-Screens auf `prototyp/runde-10/index.html` weiter: Anlass auf A heben (Schluss-Signatur wie Jägerhof), Feste: zu viel Sand unter dem Knopf, danach `text-kritik`.
3. Prüfmarken aus Runde 10 bleiben (Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Magda, Keller-Foto Edelstahl).
4. Mit Marie klären: Weinetiketten als Zimmernummern, Fotos/Rohdaten, Instagram-Export.
5. Branches `claude/key-screens`, `claude/hero-gate-pilot-96d6b3` und Worktree `brave-meitner-8193a0` nur nach Benjamins Ja löschen. Nichts pushen.

## Hinweise
- Server: launch.json-Eintrag `runde11-4323` (Port 4323, Root = Worktree), Änderung an launch.json nicht committet. `prototyp/_pruef/` ist gitignored.
- Hero-Links haben 0,35 s Farbüberblendung: berechnete Farbe direkt nach Klassenwechsel zeigt noch Espresso.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866, Akzent Koralle #EC5F3F. Schrift Bona Nova + Albert Sans.

## Starter-Prompt (neue Session, Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, neuer Worktree von main (Hero Lesesatz Runde 11, Akzent Koralle). Lies `wissen/Uebergabe.md` und `DESIGN.md`. Falls main noch nicht auf `claude/runde-11` steht: Offen 0. Dann Benjamins Wahl zur Koralle-Textfarbe holen (offene Frage), dann „Offen“ 2. Kein Push.
