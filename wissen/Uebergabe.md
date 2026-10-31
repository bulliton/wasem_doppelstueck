# Übergabe

Stand: 2026-10-31 (spät) · Runde 12 Akzent-Vergleich gebaut (51869c9), Wahl offen. Davor: **A-004 Runde 11 gebaut auf Branch `claude/runde-11`** (Worktree `.claude/worktrees/brave-meitner-8193a0`, zweigt von `claude/warum-doppelstueck` 3c4797a ab). Commit 5235a77. `pruefer`: gelb, beide Befunde behoben (Wein-Endbild mobil/Reduced Motion sofort, Menübilder im Bildton). Nicht gemergt, nicht gepusht.

## Runde 12 (31.10., spät): Akzent aus der Flasche gebaut, Wahl offen
- Shop durchgesehen (19 Produktfotos): Gutswein-Etiketten sind rotorange. Gemessen (Median der Etikettfläche): **Rot #E33C16** (neue Weißwein-Etiketten Chardonnay, Grauburgunder, Cabernet Blanc, Riesling), **Koralle #EC5F3F** (Spätburgunder, Portugieser, Liebesstück, Rosé). Ortsweine sind Türkis, Literweine Creme.
- Eingebaut in `prototyp/runde-10/index.html` (Commit 51869c9), Umschalter `?akzent=rot|koralle` (unten rechts, mobil oben): Kapsel (3 px Farbstreifen zwischen den Haken auf der Ausleger-Linie) und aktives Angebot im Hero und Feste-Satz. Bestand unverändert, Cognac bleibt Anfragen/Buchen.
- Empfehlung an Benjamin: Rot. Nach der Wahl Umschalter entfernen, Akzent fest setzen, `pruefer`.
- DESIGN.md mit Entscheidungs-Anker (Auftrag aus Session „Design-Prozess“) liegt fertig im Scratchpad dieser Session; der Worktree-Hook verbietet Schreiben im Hauptcheckout, Commit auf main macht Benjamin oder die Design-Prozess-Session. Offene Frage dort: Hero-Gate Variante 1 (main) gegen Lesesatz-Hero (Runde 10/11).

## Benjamins Urteil Runde 11 (31.10., Nacht)
- „Geht schon in die Richtung.“ Weiter feminin, sanft, Pinterest.
- Neu: **eine Akzentfarbe für „Pep“** aus einer echten Wasem-Flasche, die sie verkaufen: ein Rot oder Orange (Etikett/Kapsel; welche Flasche, weiß er nicht genau). Erst die Flasche finden (doppelstueck.com Shop, Instagram-Captions), Farbe aus dem Original messen, dann setzen.

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
1. **Akzentfarbe aus der Flasche:** Shop auf doppelstueck.com nach Flaschen mit rotem/orangem Etikett oder Kapsel durchsehen, Farbwert aus dem Produktfoto messen, 2 Varianten (Rot, Orange) als Vergleich zum Bestand zeigen (Lesson: Palette nicht still ersetzen). Akzent sparsam: z. B. Ausleger-Haken, Hover im Hero/Feste-Satz, ein Fleck pro Screen; Cognac bleibt Anfragen/Buchen, außer der Akzent ersetzt ihn begründet.
2. Erneuter `pruefer`-Durchlauf vor jedem Merge.
3. Anlass auf A heben: Schluss-Signatur wie Jägerhofs Unterschrift. Feste: zu viel Sand unter dem Knopf.
4. Danach `text-kritik` (Überschriften unverändert seit Runde 10), Merge nur nach Freigabe.
5. Prüfmarken aus Runde 10 bleiben (Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Magda, Keller-Foto Edelstahl).

## Hinweise
- Server: launch.json-Eintrag `runde11-4323` (Port 4323, Root = dieser Worktree). Änderung an launch.json ist nicht committet.
- Prüfskripte: scratchpad `kapitel.js` (Kapitel bei 1440/375), `wein.js` (Wein-Stufen). Fullpage-Screenshots zeigen das Korn nur im ersten Viewport, das ist ein Screenshot-Effekt.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866. Schrift Bona Nova + Albert Sans.

## Starter-Prompt (neue Session, Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/runde-11` (Worktree `.claude/worktrees/brave-meitner-8193a0`). Lies `wissen/Uebergabe.md` (Runde 12). Hol Benjamins Akzent-Wahl (Rot #E33C16 oder Koralle #EC5F3F, Vergleich über `?akzent=`), setz sie fest, Umschalter raus, dann „Offen“ 2 bis 4. Kein Push.
