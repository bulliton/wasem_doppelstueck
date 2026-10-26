# wasem-doppelstueck-website

Proaktiver Relaunch-Pitch für Weingut & Weinhotel Wasem Doppelstück, Stiegelgasse 50 (Weingut, Events) und 70 (Hotel), 55218 Ingelheim. Geschäftsführung: Schwestern Marie Wasem (Zahlen, Organisation) und Julia Wasem (Winzerin, Wein, Vermarktung). Eltern Ilona und Burkhard Wasem. Team: Franziska „Franzi“ Wilbrand und Elena Colombini (Events), Vertrieb Adelin. Alte Seite: doppelstueck.com (WordPress, Impreza, Woo-Shop, Hotelbuchung).
Funzeln-Kunde (Weinwanderungen über funzeln.com). Angebot Website Relaunch Basic 990 € netto liegt bei Marie seit 31.08., Antwort offen.

Stack: noch offen. Plattform (WordPress wie heute oder neu) vor dem ersten Layout der ganzen Seite mit Marie klären und in `wissen/Uebergabe.md` festhalten. Im Repo-Root liegt der alte Claude-Design-Prototyp (GitHub Pages, Link an Marie: `ui_kits/website/Homepage.html`); **nicht verschieben oder löschen**, solange der Link draußen ist. Neue Arbeit liegt unter `docs/` (Konzept) und später `prototyp/`.

Besonderheiten:
- Ablauf Marke: Briefing (`docs/briefing.md`) → Markenkern und Stimme → Fable-Auftrag (`docs/fable-auftrag-art-direction.md`) → `docs/art-direction.md` → Brand Paper (Bulliton-Rahmen, Vault `Playbooks/kunden-decks.md`) → Key-Screens mit echten Fotos → erst auf Auftrag die ganze Seite.
- Der alte Prototyp ist überholt (dunkel, Luxus-Monogramm, „Handgemacht aus Österreich“ ist falsch). Nichts daraus ungeprüft übernehmen.
- Nie Fakten, Preise, Zitate, Auszeichnungen erfinden; Claims sind Vorschläge. Fotos nur von doppelstueck.com, Instagram oder späterem Shoot, gekennzeichnet.
- Vorschau für den Kunden nur mit Passwortsperre, `noindex`.
- Gegen KI-Look: Skill `frontend-design` vor dem Bauen, `.claude/rules/design-regeln.md`, Skill `design-kritik` vor dem Commit, Texte durch `text-kritik`.

## Worktrees (parallele Sessions)
- Änderungen nie direkt im Haupt-Checkout auf `main`: zu Beginn jeder ändernden Aufgabe `EnterWorktree` (Branch `claude/<kurz-thema>`, unter `.claude/worktrees/`). Reine Fragen ohne Worktree.
- In Worktree-Sessions Dateien mit Write/Edit schreiben (keine Heredocs). Lesende Prüfschritte in EINEM Bash-Aufruf bündeln.
- Abschluss: `/design-kritik` bei UI → committen → Agent `pruefer` (Ampel) → `/uebergabe` → Fast-Forward nach `main` nur bei grüner Ampel. Push nur nach Rückfrage (main wird von GitHub Pages ausgeliefert).
- Eine Session = ein Thema = ein Worktree.

## Wissen und Effizienz
@wissen/Uebergabe.md
@wissen/Lessons.md

- Aufgaben: `wissen/Aufgaben.md` (IDs `A-nnn`, Status `eingang | frei | läuft | prüfung | fertig`). Gearbeitet wird nur an `frei` oder an dem, was Benjamin gerade aufträgt. Nicht importieren, bei Bedarf per grep lesen.
- Sparsam: grep und Ausschnitte statt ganzer Dateien. `demo.html` (3 MB) und `_ds_bundle.js` nie lesen. Screenshots mit Skalierung 0,4.
- Nach Nutzer-Korrektur: Lesson sofort in `wissen/Lessons.md`. Systemänderungen aufs Vorschläge-Board.

## Compact instructions
Behalten: aktuelle Aufgabe, Worktree/Branch, geänderte Dateien, offene Punkte, Nutzer-Korrekturen. Tool-Ausgaben weglassen.
