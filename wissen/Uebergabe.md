# Übergabe

Stand: 2026-10-31 (spät) · `main` = `claude/anlass-feste` (Fast-Forward, pruefer grün nach 2 Fixes), **nicht gepusht**. Runde 14: Feste und Anlass nach Kritiker Runde 3.

## Zuletzt erledigt
- Kritiker Runde 3 (letzte erlaubte): Feste B, Anlass C. Alle sechs Fixes umgesetzt in `prototyp/runde-10/index.html`.
- Feste: H2 als Vorzeile (~29 px), großer Satz führt; Desktop-Foto randlos rechts von der Vorzeile bis zum Knopf, ohne Goldrahmen (JS `festOben` setzt `--oben`, `festHin` hält beim Hover die Höhe); mobil Foto volle Breite zwischen Satz und Begleitzeile; „ihren&nbsp;Junggesellinnenabschied“ gegen das Waisenwort.
- Anlass: Kontakt als vierte Lücke im Satz („Schreibt uns an …“), Beispiele in Stein, Eingaben in Cognac, Auswahl mit Platzhalter „ein Fest“ (Option-Index +1 im JS), Lücken per `field-sizing: content`. Nach dem Absenden bleibt der Satz ohne Linien als Brief stehen, Danke darunter, Linie oben ganz in Koralle.
- pruefer gelb → reduced-motion fürs Feste-Foto und Zahl-Lücke 44 px nachgezogen → grün.

## Offen
1. Push von `main` (GitHub Pages) mit Benjamin klären: `cd "/Users/benjamin/GitHub Repos/wasem-doppelstueck-website" && git push origin main`.
2. Textvorschlag „ein Fest“ (Platzhalter der Anlass-Auswahl) von Benjamin bestätigen lassen.
3. Vor Livegang: Validierung beim Absenden (Auswahl, Kontakt); heute bleiben leere Lücken als Stein-Beispiel im Brief.
4. Prüfmarken mit Marie: „Franzi oder Elena antworten auf Anfragen“, Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Magda, Keller-Foto Edelstahl; Weinetiketten als Zimmernummern, Fotos/Rohdaten, Instagram-Export, evtl. echte Unterschrift.
5. Kritiker-Rest: Tagung kommt im Feste-Satz nicht vor (eigenes Kapitel, vermutlich okay).
6. Branches `claude/key-screens`, `claude/hero-gate-pilot-96d6b3`, `claude/runde-11` nur nach Benjamins Ja löschen.

## Hinweise
- Server: launch.json `runde11-4323` (Port 4323, Root = Worktree `brave-meitner-8193a0`), launch.json-Änderung nicht committet.
- Screenshot-Skript Feste/Anlass (Playwright 1440/375, inkl. Ausfüllen und Absenden) liegt im Scratchpad der Session, leicht nachzubauen; Element-Screenshots über 900 px haben eine Korn-Helligkeitsnaht, kein Fehler.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866, Koralle #EC5F3F, Akzent-Text #C33413. Schrift Bona Nova + Albert Sans.

## Starter-Prompt (neue Session, Sonnet 5.5)
> Sonnet 5.5. Projekt wasem-doppelstueck-website. Lies `wissen/Uebergabe.md`. Benjamin nach Push von main und nach „ein Fest“ fragen; dann die Prüfmarken (Offen 4) als versandfertige, nummerierte Nachricht an Marie unter `docs/` vorbereiten. Kein Push ohne Ja.
