# Übergabe

Stand: 2026-10-28 · **A-004 Runde 7b: Deck v14 wartet auf Benjamins drei Antworten (Richtung, Schrift, Farbe/Zeichen).**

## Zuletzt erledigt
- Fremde Prüfung von „Beides.“ (Agent `architekt`, ohne meine Begründung): Urteil verwerfen (Gattung statt Eigenes, wieder „kein Heimweg“, im ersten Screen unverständlich, Paare folgen den Firmen statt den Gästen). Abgrenzung über den Namen (wasem.de) bleibt als Argument für Marie. Belege und Zeilen: `docs/design-ideen-runde-7.md`, Abschnitt „Runde 7b“.
- Gegenrichtung 2 „Was habt ihr vor?“: Anlass zuerst, Menschen mit Namen planen Wein, Raum, Zimmer; Gäste kaufen „sich um nichts kümmern“; Ton verspielt (Einzylinder, DobbelBock); Kernmoment Freundinnen-Wochenende mit Stil. Quelle: Maries Telefonnotiz `~/Downloads/Demo-Webseite-Feedback.rtf` Z. 107, 129, 135, 302–303, 315, 326.
- Vier Schrift-Specimens in der freigegebenen Farbwelt: `prototyp/runde-7/schrift-specimen.html`, PNG in `prototyp/runde-7/specimen/` (1 Fraunces + Schibsted Grotesk, 2 Gloock + Familjen Grotesk, 3 Young Serif + Onest, 4 Gilda Display + Figtree).
- Deck https://claude.ai/artifact/TSoUh6KXERev1LkYtXpz6E (v14, 13 Folien): Zeichen und Vorschau raus; Richtung 1 (idee, paare), Richtung 2 (vorhaben, anlaesse), Kritik, Räume, Farbe, Flaschen, Schrift a/b, Freigabefragen.

## Offen
1. Benjamins Antworten: Richtung 1 oder 2, Schrift 1–4, Farbwelt/Zeichen-Raus bestätigt.
2. Danach: Texte der Richtung durch `text-kritik`, Brand-Sheet `prototyp/runde-7/brand-sheet.html` auf Beige-Tokens und neue Schrift (zeigt noch Navy und das W aus zwei V), dann One-Shot-Hero `prototyp/runde-7/index.html`, Desktop und Mobil, `design-kritik`.
3. Bei Richtung 2 mit Marie klären: wer betreut welchen Anlass (Franzi, Elena Events; Adelin Vertrieb), Antwortzeit, ob Rückruf im Betrieb klappt.

## Hinweise
- Deck-Folien zeigen Richtungs-Texte noch in EB Garamond (Platzhalter bis zur Schriftwahl). Deck-Quelldateien nur per Artifact `read` holen.
- Farbwelt fest: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866 nur als Linie auf Espresso.
- Specimens neu rendern: Playwright-Skript (Element-Screenshots `#fraunces` usw.), Wortmarke dort als `prototyp/marke/wasem-wortmarke-original.png` (Gold), das SVG ist `currentColor`.
- Ältere Runden (1–7) in der Git-Historie dieser Datei und in `docs/design-ideen-runde-*.md`. Branch nicht gemergt, kein Push.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies `wissen/Uebergabe.md` und `docs/design-ideen-runde-7.md` (Abschnitt „Runde 7b“) sowie Benjamins Antworten zu den drei Freigabefragen im Deck. Gewählte Richtung: Hero-Satz und Kernsätze durch `text-kritik`, Brand-Sheet auf Beige und gewählte Schrift umstellen, dann One-Shot-Hero `prototyp/runde-7/index.html` Desktop und Mobil, `design-kritik`. Kein Push.
