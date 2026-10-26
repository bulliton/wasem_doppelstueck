# Übergabe

Stand: 2026-10-26 · **A-004 Runde 2 gesichtet: Richtung „W als Fenster“ (Variante A) stimmt grob, Runde 3 soll deutlich mehr herausholen**

## Benjamins Urteil zu Runde 2 (26.10., bindend für Runde 3)
- A (`prototyp/runde-2/a.html`, Screenshot: W-Maske halb geöffnet über dem Weinbergfoto) „geht in die richtige Richtung, da kannst du noch mehr rausholen“. Nur ein W zu sehen ist **zu wenig Emotion**: Menschen, Wärme, Freundlichkeit, Familie müssen im ersten Screen spürbar sein.
- **Marke neu denken erlaubt:** Farben müssen nicht von der alten Seite kommen (Aprikose, Kalk sind nicht gesetzt). Ziel ist eine Brand Identity, die in Erinnerung bleibt und zu den Personen passt: zwei junge Frauen, schönes Flaschen-Design, cool gemacht, **edel, aber nicht „super krass edel“**, spürbare Qualität, klassischer Stil, der viele Frauen anspricht.
- **Logo adaptiv:** Am Handy nur das W (die Wortmarke wird oben zu klein), Desktop die Wortmarke; beim Scrollen am Desktop wird die Wortmarke zum W (und zurück beim Hochscrollen).
- **Karten ordentlich und mit Animationen**, damit es cool aussieht (Bereichskacheln wie Maxwell, aber lebendig).
- Hero: eine Alternative wählen oder variieren; nicht nur ein W.
- Laut Benjamin fand Maries **Mutter (Ilona)** etwas daran nicht gut; vermutlich in einem Transkript. Vor Runde 3 in den Transkripten (Vault `Projects/wasem-doppelstueck-website/` oder funzeln-Transkripte, per Namens-Grep „Ilona“, „Mutter“, „Mama“) nachsehen, was genau, und berücksichtigen.
- Gilt weiter: Übersicht und schnelle Wege (Zimmer buchen, JGA, Tagung, Shop), wenig Text, starke Bilder; nicht mit „zwei Schwestern“ werben; Ton locker wie Social.

## Zuletzt erledigt (Runde 2, Commit `4ccb403`)
- Maries Favorit **Maxwell Wines** gemessen: `docs/belege/maxwell-messung.md` (Bereich = großes Bild, Titel, ein Satz, eine Aktion; zwei Wege im Hero; Buchen immer erreichbar; kaum Bewegung).
- **Echte Wortmarke und W als Vektor** in `prototyp/marke/` (`wasem-wortmarke.svg` aus `2019/06/Wasem-Doppelstück.png`, `wasem-w.svg` aus dem Favicon, Original-PNG daneben). Einbau per CSS-Maske (`.marke`), Farbe über `currentColor`.
- Zwei Start-Screens `prototyp/runde-2/a.html` (W-Fenster öffnet sich beim Scrollen, versetztes Angebotsraster) und `b.html` (riesige Wortmarke auf Foto, Wähler „Was habt ihr vor?“ wechselt Bild/Satz/Knopf, zwei Häuser, Abendlicht-Band). Gemeinsam `runde2.css`, `runde2.js`, Handy-Leiste unten. 375/1440 ohne Überbreite geprüft. `design-kritik` und `text-kritik` noch nicht gelaufen.

## Offen / nächste Schritte
1. Transkripte nach Ilonas Einwand durchsuchen (siehe oben).
2. Runde 3 mit `design-brainstorm` + Skill `geschmack`: 2 Richtungen für Marke + Hero (Farbe neu, Menschen im ersten Screen, W/Wortmarke adaptiv, animierte Bereichskarten), gebaut als Key-Screens Desktop und Mobil unter `prototyp/runde-3/`, gegen Brand Paper v8 und Maxwell gemessen; `design-kritik` vor dem Zeigen.
3. Danach JGA, Tagung, Deck-Folien 6–12, Passwort-Vorschau für Marie.
- Branch `claude/brave-meitner-8193a0` nicht nach `main` gemergt (Prototyp ungeprüft, vor dem Merge `pruefer`). Kein Push.

## Hinweise
- Lokal: launch.json „repo“, `http://localhost:4321/prototyp/runde-2/a.html`. Nach SVG-Änderungen Cache umgehen (`?v=`).
- Alter Prototyp im Root bleibt liegen (Link bei Marie).

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/brave-meitner-8193a0`. Lies `wissen/Uebergabe.md` (Abschnitt „Urteil zu Runde 2“ ist bindend) und `wissen/Lessons.md`. Such zuerst in den Transkripten, was Ilona (Mutter) nicht gut fand. Dann A-004 Runde 3: mit `design-brainstorm` und `geschmack` zwei Richtungen für Marke und Start-Screen (neue Farbwelt erlaubt, Menschen und Wärme im ersten Screen, edel aber nicht protzig, W/Wortmarke adaptiv nach Gerät und Scroll, animierte Bereichskarten nach Maxwell), gebaut unter `prototyp/runde-3/`, Desktop und Mobil, `design-kritik` vor dem Zeigen. Benjamin wählt. Kein Push.
