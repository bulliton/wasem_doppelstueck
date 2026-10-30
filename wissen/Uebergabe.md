# Übergabe

Stand: 2026-10-30 (Nacht) · **A-004 Runde 10c: Hotel in zwei Anmutungsrahmen gebaut (A Schild, B Fenster). Benjamins Wahl offen, Empfehlung A.**

## Benjamins Entscheidungen
- 30.10. (Nacht, nach 10b): Components/UI/UX aus der Brand Identity, jede Section ein Anmutungsrahmen, Motion „cool und smooth“, Familie alle gleich groß, das W als Rahmen-/Formelement ohne Kitsch.
- 30.10.: Pilot Runde 10 (Lesesatz-Hero, Bild im Leinen-Passepartout) bleibt. Schrift Bona Nova + Albert Sans, Farbwelt fest, Zielgruppe designverliebte Frauen.

## Zuletzt erledigt
- `prototyp/runde-10/index.html`: Hotel dreifach im Markup, Umschalter unten links bzw. `?rahmen=a|b|alt` (alt = 10b).
  - **A Schild:** das echte Aushängeschild am Stammhaus (Schwarz, „Stammhaus“, W) hängt an einer Goldlinie, wandert beim Scrollen mit Federschwung an den Rand, dahinter öffnet sich das Zimmer (Holzmosaik); am Ende ist das Schild die Spalte mit 50, Satz, Buchen.
  - **B Fenster:** Espresso, zwei Fenstergruppen (Stammhaus, Haus Klassik) gehen nacheinander an, das letzte wird das Balkonzimmer und nimmt die Fläche.
  - Bühne 230 svh gepinnt, Fortschritt mit lerp-Auslauf; mobil ohne Pin als Folge; Reduced Motion zeigt das Endbild.
- Storyboard mit Jägerhof-Referenz: `prototyp/runde-10/storyboard-runde-10c-hotel.jpg`. Keine JS-Fehler, mobil kein Überlauf.

## Offen
1. **Benjamins Wahl A/B.** Danach Verlierer und 10b-Hotel samt Umschalter (`.rahmenwahl`, `?rahmen`-JS) entfernen.
2. Formensatz der Wahl auf die übrigen Kapitel übertragen (Motion mit Gewicht, ein Rahmen je Kapitel), Familie alle gleich groß und gleich gerahmt.
3. `design-kritik` als Persona-Schleife bis A, `text-kritik` (Überschriften, Feste-Satz, Hero, neue Bildnotizen), dann `pruefer`, Merge nur nach Freigabe.
4. Keller-Foto zeigt Edelstahl statt Doppelstück (Shoot). Prüfmarken Julia/Marie: Fass 2.400 l, 50 Zimmer, Personen 30/50, bio seit 2022, Rollen; welches Haus das Holzmosaik-Zimmer ist.

## Hinweise
- Branch `claude/warum-doppelstueck` (Worktree `.claude/worktrees/warum-doppelstueck`), nicht gemergt, nicht gepusht.
- W als CSS-Maske aus `prototyp/marke/wasem-w.svg`: braucht http (Server `repo-4322`), nicht file://.
- Stufen-Screenshots: Playwright-Skript nach Muster scratch `stufen.js` (scrollt die Bühne auf p = 0/.3/.55/.8/1, wartet 2,2 s für den Auslauf). `NODE_PATH="/Users/benjamin/GitHub Repos/anfragen-maschine/node_modules"`. Referenzen unter `/private/tmp/claude-501/sektion/<name>/` (flüchtig).
- Bona Nova: große Zahlen mit `lining-nums`. Farben: Leinen #EEE7DD, Sand #D9CBB8, Stein #9C8B7C, Cognac #94623E, Espresso #2B201A, Gold #C9A866.

## Starter-Prompt (neue Session)
> Opus 5.5. Projekt wasem-doppelstueck-website, Branch `claude/warum-doppelstueck`. Lies `wissen/Uebergabe.md`. Benjamin hat Rahmen <A/B> für das Hotel gewählt: Verlierer und Umschalter entfernen, dann Punkt 2 und 3 unter „Offen“ in `prototyp/runde-10/index.html` (Server `repo-4322`). Kein Push.
