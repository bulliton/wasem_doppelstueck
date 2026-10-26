# Übergabe

Stand: 2026-10-26 · Brand Paper v8 steht, Benjamin verwirft Idee, Kernsatz, Tageslauf und Farben → Konzeptrunde 2

## Zuletzt erledigt
- **Brand Paper** als Slides-Artefakt (14 Folien, Version 8): https://claude.ai/artifact/GA1cT9E2qYKLArKe6CeRXk, Quellen in `docs/brand-paper/project/`. Befund-Folien 2 bis 6 sind gut (Benjamin: „gefällt mir auch so“).
- **Messungen** in `docs/belege/messungen-2026-10-26.md`: Startseite mobil 61–68 Punkte, LCP ~14 s, 43 MB (Herbstvideo 41,5 MB); „Tagung Ingelheim“ nicht in Top 20, Platz 3 ist wasem.de (anderes Weingut); „Weinhotel Ingelheim“ Platz 1; Google-Profil 4,8/235, Kategorie „Weinkellerei“.
- Tagungsseite hat 14 Fotos (alte Aussage „kein Foto“ korrigiert). Straußwirtschaft gibt es (2026 erstmals, 02.05.–11.06.; Belege T, rheinhessen.de, ingelheim-erleben.de).

## Benjamins Feedback 26.10. (bindend)
- Idee „aus einem Glas Wein wird ein ganzer Tag“ und Kernsatz „Kommt auf ein Glas. Bleibt den ganzen Tag.“: zu trocken, keine Emotion, „wie Wikipedia“. Neu: Ton, bei dem junge Frauen sagen „genau so ist es“.
- Nicht mit „Frauenunternehmen / zwei Schwestern“ werben. Stärken: coole Räume, Design, lockerer Text, Erlebnis.
- Folie 8 „Tageslauf“ unverständlich. Wasem hat zwei große Bereiche: Wein-Erlebnisse und Hotellerie/Hospitality, die sich mischen.
- Farben wirken übernommen. Eigenes Design-Brainstorming machen, mit Fable-Art-Direction vergleichen, begründet entscheiden.
- Reihenfolge jetzt: erst Design richtig aufziehen (Layout, Key-Screens), danach Deck/PDF für den Kunden anpassen.

## Offen / nächste Schritte
- **A-006 Konzeptrunde 2** (Opus, neue Session): Instagram von Wasem Doppelstück sichten (Captions, Inhalte, Ton; Skill `insta-sichten` bzw. Profil im Browser), Markenstimme daraus festhalten. Dann Skill `design-brainstorm` + `geschmack`: 2–3 eigene Richtungen (Idee, Claim mit Gefühl, Farbe, Layout) gegen `docs/art-direction.md` stellen, Benjamin als Inline-Storyboard mit Freigabeknopf vorlegen.
- Danach A-004 Key-Screens nach freigegebener Richtung, dann Deck-Folien 7 bis 12 neu.
- Deck-Platzhalter Folie 13 (Link, Passwort, Telefon, Mail) bleiben offen.

## Hinweise
- Lighthouse lokal: `npx lighthouse@12.6.0 --form-factor=mobile` (PageSpeed-API oft über Kontingent).
- Alter Prototyp im Root bleibt liegen. Kein Push ohne Rückfrage.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Projekt wasem-doppelstueck-website. Lies `wissen/Uebergabe.md` (Abschnitt „Benjamins Feedback“ ist bindend) und `docs/briefing.md`. A-006: Erst den Instagram-Account von Wasem Doppelstück sichten und Ton, Themen, Bildwelt festhalten (`docs/instagram-ton.md`). Dann mit `design-brainstorm` und `geschmack` 2–3 eigene Richtungen entwickeln (Idee, Claim mit Gefühl für junge Frauen, Farbe, Aufbau nach den zwei Bereichen Wein-Erlebnis und Hospitality), gegen `docs/art-direction.md` vergleichen und mir als Inline-Storyboard mit Freigabeknopf zeigen. Worktree, kein Push.
