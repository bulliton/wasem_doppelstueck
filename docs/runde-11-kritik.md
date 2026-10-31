# Runde 11: Formensatz aus dem Schild auf alle Kapitel (Kritik)

Stand 2026-10-31. Branch `claude/runde-11` (zweigt von `claude/warum-doppelstueck` 3c4797a ab). Datei `prototyp/runde-10/index.html`. Maßstab: Personas und Kriterien aus `docs/runde-9-personas-kriterien.md`, Referenz Jägerhof (Skill `geschmack`: gleiches ruhiges Raster, Spannung aus drei Ausreißern).

## Was sich geändert hat
- **Ausleger:** Jedes Kapitel ab Wein hängt an der Goldlinie des Schilds. Die Linie läuft vom Seitenrand herein, zwei Haken fallen bis an die erste Zeile, die Überschrift schwingt mit derselben Feder wie das Schild ein. Ohne Versal-Label (Design-Regel).
- **Samt:** Bildton `saturate(.76) sepia(.08)` auf allen Fotos, Korn-Überlagerung 7 %, Feste und Familie auf Sand (die warmen Kapitel, weil dort Menschen sind).
- **Rahmen:** die 8-px-Goldhaarlinie vom Schild auf Feste-Foto, Tagungsfoto, Familienporträts und dem Tagungs-Etikett.
- **Wein:** Bild übernimmt die Fläche, ohne Pin, mit lerp-Auslauf (Passepartout wie im Hero, öffnet sich bis an die Ränder). Der einzige Pin bleibt das Hotel.
- **Tagungen:** Loch zwischen Überschrift und Angaben weg; Angaben auf einem hellen Etikett mit Goldeinfassung. Mobil zuerst die Überschrift.
- **Familie:** alle fünf gleich groß, gleich gerahmt, nacheinander klärend; mobil eine Wischreihe.

## Kapitel neben Jägerhof (1440 / 375)

| Kapitel | Jägerhof-Maßstab | Urteil | Rest |
|---|---|---|---|
| Wein | Bild wächst zu randlos (Jägerhof „scale → randlos“) | A− | Text unter dem Bild ist ruhig, aber klein gegen das Bild |
| Hotel | Ausreißer 2 (Bühne) | A (unverändert, gewählt) | Ausleger jetzt doppelt (Kopf + Bühne), lesbar als „Linie läuft weiter“ |
| Feste | Ausreißer 3 (großer Satz) auf Sand | A− | unter „Fest anfragen“ viel Sand; Foto wechselt nur auf Hover |
| Tagungen | ruhiges Raster, Bild links, Text rechts | A− | Etikett ist das einzige Objekt, Haken stehen über der rechten Spalte |
| Familie | „Wir“-Kapitel, Porträts gleichwertig | A | Magda als Name noch nicht bestätigt |
| Anlass | Schluss mit Satz | B+ | unverändert außer Ausleger; Schluss-Signatur (wie Jägerhofs Unterschrift) fehlt noch |

KI-Look-Liste: keine Karten mit Icons, keine Pillen, kein Verlauf, keine Versal-Labels über Überschriften, nichts zentriert. Persona Lena (Feste auf Sand, Gesichter gleich groß), Paar (Hotel-Buchen unverändert sichtbar), Katrin (Etikett mit vier Angaben und Cognac-Weg) halten.

## Geprüft
- Playwright 1440×900 und 375×812: keine JS-Fehler, kein Querscroll; Wein-Stufen bei drei Scrollständen; Haken enden an der Oberlänge (Messung).
- Nicht geprüft: echtes Gerät, Safari; Reduced Motion vom pruefer emuliert, Endbild sofort (Fix nach gelber Ampel).
