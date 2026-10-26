# Übergabe

Stand: 2026-10-26 · Brand Paper fertig (A-003 in prüfung), nächster Schritt Key-Screens (A-004)

## Zuletzt erledigt
- **Brand Paper / Verkaufsdeck** als Slides-Artefakt, 14 Folien, Bulliton-Rahmen: https://claude.ai/artifact/GA1cT9E2qYKLArKe6CeRXk (privat, Teilen über das Share-Menü). Quellen der Folien in `docs/brand-paper/project/`.
- **Messungen** in `docs/belege/messungen-2026-10-26.md` mit Screenshots: Startseite mobil Leistung 61–68, LCP 13,7–14,3 s, 43 MB (41,5 MB Herbstvideo 2023). „Tagung Ingelheim“: doppelstueck.com nicht in Top 20, Platz 3 ist wasem.de (anderes Weingut, Kloster Engelthal). „Weinhotel Ingelheim“: Platz 1. Google-Profil 4,8 aus 235, Kategorie „Weinkellerei“.
- **Korrektur:** Tagungsseite `/seminare-und-tagungen/` hat 14 Fotos; die Aussage „kein Foto“ in der Art Direction war falsch und ist korrigiert. Folie 3 zeigt stattdessen: keine Personenzahl, Pauschalen ohne Preis, kein Name, kein Ablauf.
- Deck-Aufbau: 4 Befunde, „Was das heißt“, Idee, System Tageslauf, Specimen (2 Farbrichtungen gleichrangig), 3 Vorschau-Folien (Start, Tagung, JGA, im Wasem-Look mit Bestandsfotos), nächste Schritte, 4 Freigabefragen.

## Offen / nächste Schritte
- **A-003 prüfen** (Benjamin): Deck durchsehen. Platzhalter vor dem Versand füllen: Vorschau-Link, Passwort, Telefon, Mail (Folie 13); Pauschalenpreise und Uhrzeiten bleiben Platzhalter, bis Marie liefert.
- Texte des Decks sind nicht durch `text-kritik` gelaufen; vor dem Versand nachholen.
- **A-004 Key-Screens** Start, Tagung, JGA unter `prototyp/` (Opus, `frontend-design`, dann `design-kritik`), Vorlage sind die Vorschau-Folien 10 bis 12; danach Vorschau mit Passwortsperre und Link ins Deck.
- Fragen an Marie: 1, 3, 4, 7 aus dem Briefing plus 9 (echte Uhrzeiten Tagungs- und JGA-Tag).
- A-005 Mailverlauf, SWR/NDR-Link, Zielplattform: unverändert offen.

## Hinweise
- PageSpeed-API war über Tageskontingent; Lighthouse lokal per `npx lighthouse@12.6.0 --form-factor=mobile` funktioniert.
- Alter Prototyp im Root bleibt liegen (Link an Marie). Kein Push ohne Rückfrage.

## Starter-Prompt (neue Session, Modell Opus 5.5)
> Projekt wasem-doppelstueck-website. Lies `wissen/Uebergabe.md`, `docs/art-direction.md` Punkt 9 und 10 und die Vorschau-Folien in `docs/brand-paper/project/slides/vorschau-*.html`. A-004: Key-Screens Start, Tagung, JGA unter `prototyp/` bauen (Skill `frontend-design`, Bestandsfotos von doppelstueck.com gekennzeichnet), 375 und 1440 prüfen, `design-kritik`, Passwortsperre nach Vault `Playbooks/vorschau-passwortschutz.md`. Worktree, kein Push.
