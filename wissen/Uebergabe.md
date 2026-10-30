# Übergabe

Stand: 2026-10-30 (Abend) · **A-004 Runde 9: drei Hero/Nav-Varianten gebaut (`prototyp/runde-9/`, Commit 64ae0ca), Kritik gegen Personas und Kriterien (`docs/runde-9-personas-kriterien.md`). Empfehlung A „Etikett“ (hält alle 8 Kriterien, KI-Look A). Storyboard `prototyp/runde-9/storyboard-runde-9.jpg` liegt bei Benjamin; sein Urteil ist offen.**

## Runde 9 (Stand)
- A Etikett: Weinberg-Abendfoto randlos, Angebote auf Leinen-Etikett mit W unten links (12 % der Fläche), Doppel-Rolle bei Hover. B Abendfolge: vier Momente im Wechsel über einem Leinen-Band (Band 23 %, wirkt wie Karussell). C Name: Weingarten-Tafel, Wortmarke randlos darunter (stärkste Marke, aber ohne Menschen, Bild dunkel).
- Gemeinsame Nav (`basis.css`, `nav.js`): Menü links als Wort, Wortmarke Mitte, Anfragen + Zimmer buchen (1 px Rahmen) rechts; durchsichtig über dem Bild, nach dem Hero auf Leinen mit W, runter weg, hoch zurück. Menü als Vollbild-Raum mit Kapitelbild beim Hover, Esc, Fokusfalle. Mobil: Leiste Zimmer buchen | Anfragen.
- Nächster Schritt nach Benjamins Wahl: gewählte Richtung in `prototyp/runde-8/index.html` (bzw. Kopie runde-9/index.html) als Hero + Nav einsetzen, dann Kapitel darunter mit derselben Schleife kürzen (Offen 2).

## Benjamins Entscheidungen
- 30.10. (spät): Hero-Richtung **1 Programm** (`a-programm.html`): vier Angebote als riesige Bona-Nova-Liste, Bildfenster rechts, Signatur „doppelt“ (kursives Gegenstück rollt hoch, Cognac). B Moodboard und C Fasskeller verworfen; Oval nur nach Julias Bestätigung.
- 30.10.: Hero 7d abgelehnt („oldschool, langweilig“). Zielgruppe designverliebte Frauen; auf einen Blick alle Angebote und dass alles funktioniert.
- 30.10.: Schrift Bona Nova + Albert Sans. Farbwelt fest. Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“

## Zuletzt erledigt (Startseite)
- Abschnittsfolge: Hero (unverändert) → Namenskapitel auf Espresso (einzige Farbfläche, Zeilen-Maske) → Wein (Bild links) → Hotel (bricht das Raster: Bild 21:9 volle Breite, Text zweispaltig darunter) → Feste (hoch, links) → Tagungen (hoch, rechts) → Familie (Marie, Julia, Ilona, Burkhard, Magda, versetzte Reihe; Franzi und Elena für Feste/Tagungen) → Anlass als Satz (aus 7d) → Footer ruhig auf Sand mit Wortmarke.
- Kapitelwörter wiederholen die Doppel-Rolle der Hero-Liste beim Hereinscrollen; sonst keine neue Signatur. Menü mobil als Vollbild (vier Kapitel + „Anfragen“ in Cognac, Esc, Fokusfalle).
- Geprüft 1440 + 375: kein Querscroll, Tippflächen ≥ 44 px, eine H1, 433 Wörter, KI-Look-Check ohne Treffer (Abschnitte 13 % Abweichung). Texte durch `text-kritik` (Dreier-Kette, „nicht X sondern Y“ entfernt). Pfeile an Knöpfen und Versal-Labels nach Projektregeln entfernt.

## Offen
1. ~~Runde 9 Hero + Nav~~ gebaut, Benjamins Wahl offen. Alter Ablauf: Ablauf: (a) 3 Personas (JGA-Organisatorin designverliebt, Paar fürs Wochenende, Tagungsplanerin) je: woher kommt sie (Instagram, Google, Empfehlung), was wünscht sie, welches Gefühl sucht sie, was muss sie in 5 s sehen; (b) Markengefühl festhalten (Instagram-Captions lesen, Räume, Doppelstück-Gedanke); (c) daraus 5 Kriterien Wirkung + 3 Kriterien Bedienung; (d) 2–3 Hero/Nav-Varianten bauen, die zuerst Atmosphäre zeigen (großes echtes Bild/Film, wenig Text, Angebote weiter mit einem Blick erreichbar, aber leiser), Faktzeilen aus dem Hero raus; (e) `design-kritik` gegen genau diese Kriterien, Schleife bis A; (f) Benjamin als Storyboard zeigen. Die vier Angebote und Doppel-Rolle dürfen bleiben, aber nicht als Hauptbild.
2. Danach Kapitel darunter mit derselben Schleife prüfen (Textmenge kürzen).
3. Merge erst nach Benjamins Freigabe und grünem `pruefer` (Befunde Runde 8 sind behoben, 5be5c5d).
4. Prüfmarken: Julia (Fass-Bild, Ovalfass, 2.400 l, „in dem wir gern ausbauen“), Marie (Rückruf je Anlass, Plattform, Rollen-Zeilen der Familie), Foto vom Doppelstück im Keller fehlt. Shop/Buchung zeigen vorerst auf doppelstueck.com.

## Hinweise
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt.
- Browser-Pane friert Übergänge ein: per JS `*{transition:none!important}`, Klasse `geladen` auf html, `sichtbar` auf `.fass,.kapitel,.auf`. Pane-Screenshots hängen einen Schritt nach (vor dem Screenshot `wait` 1 s).
- Headless-Chrome mit hohem Fenster taugt nicht für Ganzseiten-Shots (Hero hat `100svh`); abschnittsweise im Pane scrollen.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866 nur als Linie auf Espresso.
- Deck v15 https://claude.ai/artifact/TSoUh6KXERev1LkYtXpz6E (nur per Artifact `read`).

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md` und `docs/runde-9-personas-kriterien.md`. Benjamin hat eine Runde-9-Variante gewählt (in seiner Nachricht nennen). Setze sie als Hero + Nav in die ganze Startseite ein (`prototyp/runde-9/index.html` aus runde-8 ableiten), dann Kapitel darunter mit Persona-Kriterien kürzen, `design-kritik` bis A, `pruefer`. Kein Push.
