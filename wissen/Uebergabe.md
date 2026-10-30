# Übergabe

Stand: 2026-10-30 · **A-004 Runde 8: ganze Startseite in Richtung 1 „Programm“ gebaut (`prototyp/runde-8/index.html`, Commit a22d5bc). `pruefer` läuft/ausstehend, Benjamin hat sie noch nicht gesehen.**

## Benjamins Entscheidungen
- 30.10. (spät): Hero-Richtung **1 Programm** (`a-programm.html`): vier Angebote als riesige Bona-Nova-Liste, Bildfenster rechts, Signatur „doppelt“ (kursives Gegenstück rollt hoch, Cognac). B Moodboard und C Fasskeller verworfen; Oval nur nach Julias Bestätigung.
- 30.10.: Hero 7d abgelehnt („oldschool, langweilig“). Zielgruppe designverliebte Frauen; auf einen Blick alle Angebote und dass alles funktioniert.
- 30.10.: Schrift Bona Nova + Albert Sans. Farbwelt fest. Namensgedanke „Ein Doppelstück lässt dem Wein Zeit. So planen wir auch mit euch.“

## Zuletzt erledigt (Startseite)
- Abschnittsfolge: Hero (unverändert) → Namenskapitel auf Espresso (einzige Farbfläche, Zeilen-Maske) → Wein (Bild links) → Hotel (bricht das Raster: Bild 21:9 volle Breite, Text zweispaltig darunter) → Feste (hoch, links) → Tagungen (hoch, rechts) → Familie (Marie, Julia, Ilona, Burkhard, Magda, versetzte Reihe; Franzi und Elena für Feste/Tagungen) → Anlass als Satz (aus 7d) → Footer ruhig auf Sand mit Wortmarke.
- Kapitelwörter wiederholen die Doppel-Rolle der Hero-Liste beim Hereinscrollen; sonst keine neue Signatur. Menü mobil als Vollbild (vier Kapitel + „Anfragen“ in Cognac, Esc, Fokusfalle).
- Geprüft 1440 + 375: kein Querscroll, Tippflächen ≥ 44 px, eine H1, 433 Wörter, KI-Look-Check ohne Treffer (Abschnitte 13 % Abweichung). Texte durch `text-kritik` (Dreier-Kette, „nicht X sondern Y“ entfernt). Pfeile an Knöpfen und Versal-Labels nach Projektregeln entfernt.

## Offen
1. `pruefer`-Ampel abwarten; bei Grün Fast-Forward nach `main` (kein Push, main = GitHub Pages).
2. Benjamin die Startseite gerendert zeigen (`http://localhost:4321/prototyp/runde-8/index.html`) und Urteil einholen.
3. Danach Deck-Folien auf Bona Nova, Hero + Brand-Sheet + Startseite ins Kunden-Deck.
4. Prüfmarken: Julia (Fass-Bild, Ovalfass, 2.400 l, „in dem wir gern ausbauen“), Marie (Rückruf je Anlass, Plattform, Rollen-Zeilen der Familie), Foto vom Doppelstück im Keller fehlt. Links „Weine ansehen“/„Zimmer buchen“ sind Platzhalter (`#`).

## Hinweise
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt.
- Browser-Pane friert Übergänge ein: per JS `*{transition:none!important}`, Klasse `geladen` auf html, `sichtbar` auf `.fass,.kapitel,.auf`. Pane-Screenshots hängen einen Schritt nach (vor dem Screenshot `wait` 1 s).
- Headless-Chrome mit hohem Fenster taugt nicht für Ganzseiten-Shots (Hero hat `100svh`); abschnittsweise im Pane scrollen.
- Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866 nur als Linie auf Espresso.
- Deck v15 https://claude.ai/artifact/TSoUh6KXERev1LkYtXpz6E (nur per Artifact `read`).

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md`. Startseite Runde 8 ist gebaut (`prototyp/runde-8/index.html`). Arbeite Benjamins Feedback dazu ein, `design-kritik`, `pruefer`, dann Fast-Forward nach main. Danach Deck-Folien auf Bona Nova. Kein Push.
