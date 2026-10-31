# Hero-Gate: erster Pilot (Wasem-Startseite, 2026-10-31)

Ablauf nach `~/.claude/skills/design-brainstorm/SKILL.md`, Abschnitt „Hero-Gate“. Ergebnis: Benjamin wählt **Variante 1** (`hero-film-name-randlos` + `versetzte-collage`, Varianz 3), Zeile in `geschmack/wahlen.csv`. Dateien: `prototyp/hero-gate.html?v=1|2|3`, `prototyp/hero-gate-bogen.html`, `docs/design-ideen-startseite.md`, `docs/instagram-ton.md`.

## Was gut lief
- **Los passte auf Anhieb.** Alle drei Paare ließen sich mit Marke und Material bauen, kein Neu-Los. Die Sperre greift: das nächste Los schließt `hero-film-name-randlos` und `versetzte-collage` aus.
- **Gleicher Inhalt hielt.** Ein Textsatz, ein Fotopool, eine Palette, eine Navigation in einer Datei mit `?v=`; die Varianten unterscheiden sich nur in Komposition und Signatur. Benjamin wählte in einem Schritt, ohne Rückfrage.
- **Zeit.** Bau aller drei inklusive Signatur und Mobil: etwa 40 Minuten, innerhalb der Stunde. Teuer waren Material-Gate und Brainstorm (zusammen mehr als der Bau).

## Was hakte, mit Änderungsvorschlag am Skill-Abschnitt

1. **Signatur liegt unter dem ersten Bildschirm.** „Bauen: nur der erste Bildschirm“ widerspricht dem Los, das eine Signatur mitlost: Collage, Kapitelstrom und Wörter-Färben sieht man erst beim Scrollen. Gebaut wurde Hero **plus** ein Signatur-Abschnitt.
   → Vorschlag: „Bauen: erster Bildschirm und der Signatur-Abschnitt direkt darunter (gleicher Inhalt: eine H2, ein Absatz ≤ 45 Wörter, derselbe Fotopool).“

2. **„H1 gleich“ geht nicht bei Namens-Moves.** Bei `hero-film-name-randlos` und `name-zwei-groessen` ist der Name das große Element, bei `hero-satz-unten-links` der Claim. Gleich blieb deshalb der Textsatz, nicht die Rangfolge.
   → Vorschlag: „Gleich bleibt der Textsatz (Name, Claim, Unterzeile, Aktion, Signatur-Absatz). Welches Element groß ist, entscheidet der Hero-Move.“

3. **Vergleichbarkeit: Bild und Bewegung schlagen Komposition.** Jeder Hero-Move zieht ein anderes Leitbild (Film, Weinberg-Foto, Stammhaus nachts), und Variante 1 bewegt sich im Bogen als einzige von selbst (Film). Die Wahl kann damit eher das Material als die Idee messen.
   → Vorschlag: Im Bogen alle Varianten mit Bewegung zeigen oder alle als Standbild; im Optionstext das Leitbild nennen („Film“, „Foto“, „Typo + Foto“). Wenn zwei Moves dasselbe Leitbild erlauben, dasselbe nehmen.

4. **Grund fehlt in `wahlen.csv`.** `AskUserQuestion` liefert nur die Option; Benjamin gab keinen Halbsatz, die Spalte `grund` ist darum „ohne Begründung“. Ohne Grund lernt `geschmack` nichts über das Warum.
   → Vorschlag: In der Frage selbst um einen Halbsatz bitten („Notiz: was gibt den Ausschlag?“) oder nach der Wahl genau eine Folgefrage mit drei Gründen als Optionen (Bild, Typo, Ruhe/Mut) plus „Other“.

5. **KI-Look-Check sieht Kompositionsfehler nicht.** Alle drei bekamen sofort Note A, obwohl Variante 3 im ersten Bau das Hero-Bild hinter dem Grund versteckt hatte (`z-index:-1`) und danach dunkle Schrift über dunklem Himmel lag. Gefunden hat beides nur der Screenshot.
   → Vorschlag: Der Erste-Eindruck-Test bekommt ein Messskript: Hero-Bild per `elementFromPoint` sichtbar, Kontrast der H1 über ihrem Hintergrundpixel, Aktion im ersten Viewport (375 und 1440), keine Überbreite. Note B allein reicht nicht als Freigabe.

6. **`ki-look-check.js` läuft nur über einen Umweg.** Das Skript liegt in `~/.claude`, der Browser kann es nicht laden. Kopiert nach `prototyp/_pruef/` (gitignored) und per `fetch` + `eval` ausgeführt.
   → Vorschlag: Im Abschnitt einen festen Weg nennen (Kopie nach `<projekt>/.pruef/`, gitignored) oder das Skript als Inhalt von `javascript_tool` übergeben lassen.

7. **Projektregeln und Move-Karten widersprechen sich.** `.claude/rules/design-regeln.md` verbietet Versal-Labels über Überschriften; die Kapitelwort-Muster der Moves bringen sie mit. Erst nach dem ersten Bau entfernt.
   → Vorschlag: „Vorher“ ergänzen: Projekt-Designregeln lesen; sie schlagen die Move-Karten.

8. **Material-Gate: Instagram ist für Weingüter oft gesperrt.** Das Konto steht als Alkohol-Konto auf 18+; ohne Login zeigt Instagram weder Profil noch Posts. Captions kamen nur über Suchmaschinen-Snippets (`site:instagram.com <konto>`), Bildwelt und Reels sind nicht gesehen.
   → Vorschlag: In „Vorher“ (und in `insta-sichten`) als Ersatzweg festhalten: Captions über Snippets, für Bilder Benjamin um Claude in Chrome (eingeloggt) oder einen Export bitten; die Lücke im Ton-Dokument nennen.

9. **Fotos: Bestand statt Shoot, Auflösung prüfen.** Es gibt keine Shoot-Exports, aber rund 47 entwickelte Profi-Fotos auf doppelstueck.com, davon gut 12 Raumfotos. Das Weinberg-Foto für Variante 2 hat nur 1300 px Breite und wird auf 1440 leicht weich.
   → Vorschlag: „Echte Fotos“ präzisieren: Bestandsfotos der Website zählen, gekennzeichnet; randlose Heroes nur ab 1600 px Breite (sonst gerahmt).

10. **Das Los kennt das Material nicht.** `hero-film-name-randlos` setzt einen Film voraus; hier lag zufällig das Rohvideo der Lese im Repo.
    → Vorschlag: `hero-los.py --material fotos|film` (ohne Film fällt der Film-Hero aus dem Topf), im Abschnitt beim Auslosen erwähnen.

## Offen für die Key-Screens (nicht in dieser Session)
- Variante 1 trägt die Kategorie nur in der Unterzeile (17 px). Für den Erste-Eindruck-Test die Kategoriezeile prüfen.
- Claim „Noch ein Glas? Ihr schlaft ja hier.“, Hofblau und Bodoni Moda sind Vorschläge der eigenen Richtung und noch nicht von Benjamin einzeln freigegeben; im Gate wurden sie mitgezeigt, gewählt wurde die Komposition.
- Film: Lese-Rohvideo (Bestand) auf 9 s gekürzt, 4 MB Desktop, 2 MB mobil. Für die Seite einen eigenen ruhigen Schnitt.
