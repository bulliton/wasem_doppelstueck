# Übergabe

Stand: 2026-10-31 (Nacht) · Branch `claude/anlass-feste` (Worktree `brave-meitner-8193a0`, von main 3cea8e6), **nicht gemergt, pruefer offen**. Runde 13: Anlass „Brief und Antwort“, Feste ohne Sandloch.

## Zuletzt erledigt
- `prototyp/runde-10/index.html`, Feste: Sand unter „Fest anfragen“ 180 → 72 px (`.feste.sand`), Foto unten bündig mit dem Knopf, auf Desktop 3 : 5 hoch bis an den Satz (JS `festHin` setzt `bottom: auto`).
- Anlass: links Brief des Hauses mit Unterschrift „Bis bald, Franzi und Elena / Wasem Doppelstück, Stiegelgasse 50“ (W, Bona-Nova-Kursive in Cognac, zieht sich wie Tinte auf), rechts der Satz zum Ausfüllen; mobil Unterschrift am Ende. Goldlinie läuft hier über die ganze Breite; nach dem Absenden läuft die Koralle-Kapsel über die ganze Linie (`.anlass.geschickt`).
- Datumsfeld als Textlücke „Juni 2027“ statt nativem Datum (zeigte mm/dd/yyyy). Weniger Leerraum oben/unten.
- text-kritik: „Eine von uns beiden meldet sich dann bei euch.“, Danke „Danke, euer Anlass ist angekommen. Wir fragen nach, was ihr euch vorstellt.“, Signatur „Wasem Doppelstück“ statt „Weingut Wasem“ (Namensvetter wasem.de).
- Frischer Kritiker: Runde 1 Feste C / Anlass D, Runde 2 Feste B / Anlass C. Danach umgesetzt: Unterschrift groß links unten als Briefschluss, Datum kräftiger, Feste-Foto höher. Runde 3 Kritiker nicht gelaufen.
- Bewusst nicht übernommen (wäre erfunden): Script-Handschrift, Rundporträt, Telefonnummer.

## Offen
1. Kritiker Runde 3 auf Feste und Anlass (Ziel A−), dann `pruefer` (Ampel) und Fast-Forward nach main.
2. Prüfmarke neu: „Franzi oder Elena antworten auf Anfragen“ mit Marie bestätigen; alte Prüfmarken bleiben (Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Magda, Keller-Foto Edelstahl).
3. Kritiker-Hinweise ungelöst: Feste-H2 konkurriert mit dem großen Satz; Tagung kommt im Feste-Satz nicht vor (eigenes Kapitel, vermutlich okay).
4. Mit Marie klären: Weinetiketten als Zimmernummern, Fotos/Rohdaten, Instagram-Export, evtl. echte Unterschrift oder Foto von Franzi und Elena.
5. Branches `claude/key-screens`, `claude/hero-gate-pilot-96d6b3`, `claude/runde-11` nur nach Benjamins Ja löschen. Nichts pushen.

## Hinweise
- Server: launch.json `runde11-4323` (Port 4323, Root = Worktree `brave-meitner-8193a0`), launch.json-Änderung nicht committet.
- Screenshot-Skript für Abschnitte (Playwright, 1440/375, inkl. Absenden): im Scratchpad dieser Session, leicht nachzubauen; Element-Screenshots über 900 px haben eine Helligkeitsnaht (Korn-Ebene), kein echter Fehler.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866, Koralle #EC5F3F, Akzent-Text #C33413. Schrift Bona Nova + Albert Sans.

## Starter-Prompt (neue Session, Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Worktree `brave-meitner-8193a0`, Branch `claude/anlass-feste`. Lies `wissen/Uebergabe.md`. Dann „Offen“ 1: Kritiker Runde 3 auf Feste und Anlass (`prototyp/runde-10/index.html`, Port 4323), Fixes, `pruefer`, bei Grün Fast-Forward nach main. Kein Push.
