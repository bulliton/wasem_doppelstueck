# Übergabe

Stand: 2026-10-30 · **A-004 Runde 7c: Benjamin findet Deck v15 gut (Namensgedanke und Reihenfolge Hero → Namenskapitel freigegeben). Offen nur die Schriftwahl 1–4, dann Brand-Sheet und Hero.**

## Benjamins Urteil zu Deck v15 (30.10.)
- „Find ich gut, weiter wie empfohlen“: Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“ trägt; Hero „Was habt ihr vor?“ oben, Namenskapitel direkt darunter.
- Schrift (Bona Nova, Imbue, Hedvig Letters, Bellefair) noch nicht gewählt: als erste Frage der nächsten Session stellen, bevor gebaut wird.

## Benjamins Urteil zu Deck v14 (29.10.)
- Richtung 2 „Was habt ihr vor?“ bleibt.
- Und-Paare raus (Folien `idee`, `paare`).
- Fraunces verworfen (zu wenig Charakter); vier neue Schriften mit mehr Charakter, passend zur Garamond-Wortmarke.
- „Warum Doppelstück, was bedeutet es, warum ist das gut für Gäste?“ war unbeantwortet: kommt vor Schrift und Hero.

## Zuletzt erledigt (Runde 7c, Details `docs/design-ideen-runde-7c.md`)
- **Namensgedanke:** Ein Doppelstück (großes Eichenfass, 2.400 l, „mit der wir gerne arbeiten“) lässt dem Wein Platz und Zeit, bis er nach seinen Trauben schmeckt; so planen sie mit Gästen: ein Mensch mit Namen fragt nach und plant Wein, Raum, Zimmer in einer Gasse, Gäste müssen vorher nichts wissen. H2 „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“ Durch `text-kritik` (Fassung 2) und USP-Test. Verworfen: „Platz für euren Plan“ (Maß aus Runde 6), „Macht ein Fass auf“ (Zweitsinn Trinken, Ballermann-Nähe), „Alles zu zweit“.
- **Hero (Vorschlag):** Zeile „Weingut · Weinhotel · Ingelheim“, H1 „Was habt ihr vor?“, Unterzeile „Erzählt uns euren Anlass, wir planen ihn mit euch, bis nichts mehr offen ist.“, Knopf „Anlass erzählen“; Namenskapitel direkt darunter.
- **Schriften:** `prototyp/runde-7/schrift-specimen-2.html`, PNG `prototyp/runde-7/specimen/wasem-schrift-specimen-{bona-nova,imbue,hedvig-letters,bellefair}.png`: 1 Bona Nova + Albert Sans, 2 Imbue + Hanken Grotesk, 3 Hedvig Letters Serif + Sans, 4 Bellefair + Geist.
- **Deck v15** https://claude.ai/artifact/TSoUh6KXERev1LkYtXpz6E (12 Folien, Artifact-Zähler „Version 16“): `idee`, `paare` raus; `name` neu (Warum Doppelstück), `vorhaben` (Hero), `fass` neu (Namenskapitel), `kritik` neu (verworfen und offen), Schrift a/b mit neuen Specimens, Freigabefragen neu.

## Offen
1. Schriftwahl 1–4 (Fragen 1 und 3 am 30.10. freigegeben).
2. Danach: Brand-Sheet `prototyp/runde-7/brand-sheet.html` auf Beige-Tokens und gewählte Schrift (zeigt noch Navy und das W aus zwei V), dann One-Shot-Hero mit Namenskapitel `prototyp/runde-7/index.html`, Desktop und Mobil, `design-kritik`.
3. Prüfmarken vor dem Kunden-Deck: Julia bestätigt das Fass-Bild; Marie klärt, wer bei welchem Anlass zurückruft (Franzi, Elena Events; Adelin Vertrieb) und wie schnell.

## Hinweise
- Deck-Folien zeigen Richtungs-Texte in EB Garamond (Platzhalter bis zur Schriftwahl). Deck-Quelldateien nur per Artifact `read` holen.
- Farbwelt fest: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866 nur als Linie auf Espresso.
- Telefonnotiz `~/Downloads/Demo-Webseite-Feedback.rtf` mit `textutil -convert txt -stdout` lesen; Belege dann Z. 100, 122, 128, 304, 308, 319.
- Specimens neu rendern: Python-Playwright, Element-Screenshots je `section.karte` (`#bona`, `#imbue`, `#hedvig`, `#bellefair`), mit `document.fonts.check` prüfen; Wortmarke `prototyp/marke/wasem-wortmarke-original.png`.
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt, kein Push. Ältere Runden in der Git-Historie dieser Datei und in `docs/design-ideen-runde-*.md`.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md` und `docs/design-ideen-runde-7c.md`. Namensgedanke und Reihenfolge sind freigegeben; falls Benjamin die Schrift (1 Bona Nova, 2 Imbue, 3 Hedvig Letters, 4 Bellefair) noch nicht genannt hat, zuerst danach fragen. Dann Brand-Sheet auf Beige und gewählte Schrift umstellen, One-Shot-Hero mit Namenskapitel `prototyp/runde-7/index.html` Desktop und Mobil bauen (`frontend-design`, Moves aus `geschmack`), `design-kritik`. Kein Push.
