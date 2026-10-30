# Übergabe

Stand: 2026-10-30 · **A-004 Runde 8: drei Hero-Richtungen gebaut (`prototyp/runde-8/`: A Programm, B Moodboard, C Fasskeller), Storyboard `prototyp/runde-8/storyboard-runde-8.jpg`, Konzept `docs/runde-8-hero-richtungen.md`. Wartet auf Benjamins Wahl.**

## Benjamins Entscheidungen
- 30.10. (abends): Hero 7d abgelehnt („oldschool, langweilig“). Wünsche: Referenzseiten und navbar.gallery/footer.design als Inspiration; Doppelstück-Identität weiter ausbauen, attraktiv, zum Identifizieren für designverliebte Frauen (Hauptzielgruppe), passend zu Marie und Julia; auf einen Blick sehen, was angeboten wird (Ebenen Wein, Hotel, Feste, Tagungen) und dass alles funktioniert; „Anlass erzählen“ allein ist nicht der richtige Schritt; UI/UX intuitiv, klar aufgeteilt, Design außergewöhnlich. Bona Nova, Farbwelt und Namensgedanke bleiben.
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
1. **Runde 8 gebaut, Wahl offen.** Danach: gewählte Richtung zur ganzen Startseite ausbauen (Namenskapitel, Anlass-Formular), `pruefer`, Merge. Prüfmarke C: sind die Doppelstücke Ovalfässer (Julia)? Ursprünglicher Auftrag: Vorgehen: Skill `geschmack` (profil, 2–3 nächste Referenzen ★★★ aus Hotel/Hospitality, Moves), Nav- und Footer-Karten aus `geschmack/bausteine` plus gezielt navbar.gallery und footer.design für Nav/Footer; `design-brainstorm` mit 2–3 gebauten Key-Screen-Richtungen (nicht Text). Jede Richtung muss im ersten Screen die Angebots-Ebenen zeigen (Wein, Hotel, Feste, Tagungen) mit klarem Weg je Ebene, die Doppelstück-Identität sichtbar tragen und mobil zuerst funktionieren.
2. Fertig-wenn Runde 8 (Vorschlag): (a) Besucherin versteht in 5 s Kategorie und alle Angebote, (b) jede Ebene ist mit einem Tipp erreichbar, (c) ein Markenmerkmal aus Doppelstück trägt den Hero, das kein anderer Betrieb hat, (d) Abgleich mit 2 benannten Referenzen dokumentiert, (e) `design-kritik` Note A, Desktop + Mobil.
3. Danach: Deck-Folien auf Bona Nova, Hero und Brand-Sheet ins Kunden-Deck.
4. Prüfmarken: Julia bestätigt das Fass-Bild; Marie klärt Rückruf je Anlass; Foto vom Doppelstück im Keller fehlt. Plattform mit Marie klären.

## Hinweise
- Browser-Pane läuft oft versteckt: CSS-Übergänge und Scroll-Events frieren dort ein. Zum Prüfen per JS `*{transition:none!important}` einsetzen und `scroll` selbst auslösen.
- Farbwelt fest: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866 nur als Linie auf Espresso.
- Deck v15 https://claude.ai/artifact/TSoUh6KXERev1LkYtXpz6E; Quelldateien nur per Artifact `read`.
- Telefonnotiz `~/Downloads/Demo-Webseite-Feedback.rtf` mit `textutil -convert txt -stdout` lesen; Belege Z. 100, 122, 128, 304, 308, 319.
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt, kein Push. Vorschau: launch.json `repo`, `http://localhost:4321/prototyp/runde-7/index.html`.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md` und die oberste Design-Lesson. Hero 7d (`prototyp/runde-7/index.html`) ist abgelehnt. Baue Runde 8: erst Skill `geschmack` (Referenzen, Moves, Bausteine Nav/Footer, gezielt navbar.gallery und footer.design), dann 2–3 Hero-Richtungen als gebaute Key-Screens Desktop + Mobil unter `prototyp/runde-8/`, die die Angebots-Ebenen auf einen Blick zeigen und die Doppelstück-Identität für designverliebte Frauen tragen. Bona Nova, Farbwelt, Namensgedanke bleiben. Fertig-wenn aus der Übergabe nennen, `design-kritik`, dann Benjamin als Storyboard zur Wahl zeigen. Kein Push.
