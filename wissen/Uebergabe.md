# Übergabe

Stand: 2026-10-30 · **A-004 Runde 7d: Schrift Bona Nova + Albert Sans gewählt. Brand-Sheet umgestellt, One-Shot-Hero mit Namenskapitel gebaut (`prototyp/runde-7/index.html`). Wartet auf Benjamins Urteil.**

## Benjamins Entscheidungen
- 30.10.: Schrift 1 **Bona Nova** (Display) + **Albert Sans** (Text, UI).
- 30.10.: Deck v15 „find ich gut“: Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“, Hero „Was habt ihr vor?“ oben, Namenskapitel direkt darunter.
- 29.10.: Richtung 2 bleibt, Und-Paare raus, Fraunces raus.

## Zuletzt erledigt (Runde 7d)
- **Brand-Sheet** `prototyp/runde-7/brand-sheet.html` neu: Namensgedanke statt „Beides.“, Wortmarke und W einfarbig aus den Originaldateien (V-Teilung und Navy gestrichen), Beige-Tokens mit Rollen und Kontrasten (Cognac auf Leinen 4,2 : 1 nur groß, Stein nur Linie), Schrift Bona Nova + Albert Sans mit Skala, vier Regeln (Text nie auf Foto, eine dunkle Fläche, Bewegung mit Zeit, ein Mensch mit Namen).
- **Startseite** `prototyp/runde-7/index.html`:
  - Hero: Foto randlos oben (`wasem-weinberg-abendlicht-glaeser`), Navigation transparent darauf (Wortmarke Desktop, W mobil und gescrollt; verschwindet beim Runterscrollen, kommt auf Leinen zurück), Leinen-Band mit Zeile „Weingut · Weinhotel · Ingelheim“, H1 „Was habt ihr vor?“ (Desktop eine Zeile ~160 px, mobil zwei Zeilen versetzt), Unterzeile, Knopf „Anlass erzählen“. Einstieg: Zeilen-Maske + Bild-Zoom 1,08 → 1.
  - Namenskapitel: einzige Espresso-Fläche, Goldlinie zieht sich auf, H2 Satz 1 kommt, Satz 2 erst nach 1,9 s (Signatur „Zeit“), Bodytext aus Runde 7c, Bild bricht rechts randlos aus. Bild ist Platzhalter (Steinwand-Raum), echtes Doppelstück-Foto fehlt (Shoot), so beschriftet.
  - „Anlass als Satz“: „Wir sind [12] Leute, wir planen [Anlass] und denken an den [Datum].“, Kontaktfeld, Knopf „Anlass schicken“ (Prototyp sendet nichts), Fuß auf Sand mit Wortmarke.
- Geprüft: 1440 und 375 ohne Querscroll, Schriften geladen, eine H1, alle Tippflächen ≥ 44 px, KI-Look-Check Note A (Desktop und Mobil), Kontraste AA.

## Offen
1. Benjamins Urteil zu Hero und Namenskapitel (Desktop und Mobil).
2. Danach: Deck-Folien von EB Garamond auf Bona Nova umstellen, Brand-Sheet und Hero ins Kunden-Deck (Bulliton-Rahmen).
3. Prüfmarken vor dem Kunden-Deck: Julia bestätigt das Fass-Bild; Marie klärt, wer bei welchem Anlass zurückruft (Franzi, Elena Events; Adelin Vertrieb) und wie schnell. Foto vom Doppelstück im Keller fehlt.
4. Plattform (WordPress oder neu) vor der ganzen Seite mit Marie klären.

## Hinweise
- Browser-Pane läuft oft versteckt: CSS-Übergänge und Scroll-Events frieren dort ein. Zum Prüfen per JS `*{transition:none!important}` einsetzen und `scroll` selbst auslösen.
- Farbwelt fest: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866 nur als Linie auf Espresso.
- Deck v15 https://claude.ai/artifact/TSoUh6KXERev1LkYtXpz6E; Quelldateien nur per Artifact `read`.
- Telefonnotiz `~/Downloads/Demo-Webseite-Feedback.rtf` mit `textutil -convert txt -stdout` lesen; Belege Z. 100, 122, 128, 304, 308, 319.
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt, kein Push. Vorschau: launch.json `repo`, `http://localhost:4321/prototyp/runde-7/index.html`.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md`. Schrift ist Bona Nova + Albert Sans. Hol Benjamins Urteil zu `prototyp/runde-7/index.html` (Hero + Namenskapitel) ein und setze es um; danach Deck v15 auf Bona Nova umstellen und Hero und Brand-Sheet als Folien ergänzen. `design-kritik` vor dem Commit, kein Push.
