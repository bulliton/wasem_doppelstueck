# Messungen doppelstueck.com, 26.10.2026

Grundlage für die Befund-Folien 2 bis 5 im Brand Paper (Slides-Artefakt https://claude.ai/artifact/GA1cT9E2qYKLArKe6CeRXk).

## Ladeleistung mobil (Lighthouse 12.6, lokal, Profil mobil)

Die PageSpeed-API war am 26.10. über dem Tageskontingent, pagespeed.web.dev lud nicht durch. Darum Lighthouse lokal mit Chrome headless, gleiche Engine.

| Seite | Lauf | Leistung | FCP | LCP | Gewicht |
|---|---|---|---|---|---|
| Startseite | 1 | 61 | 5,5 s | 14,3 s | 42,8 MB |
| Startseite | 2 | 68 | 3,1 s | 13,7 s | 43,2 MB |
| /seminare-und-tagungen/ | 1 | 61 | 3,7 s | 12,6 s | 5,4 MB |

- Barrierefreiheit 88, SEO-Technik 100 auf allen Läufen.
- Größter Brocken Startseite: `wp-content/uploads/2023/10/Herbstvideo.mp4`, 41,5 MB.
- Cookie-Hinweis deckt auf dem Handy etwa die halbe erste Ansicht.
- Screenshots: `wasem-startseite-mobil-2026-10-26.png`, `wasem-tagungsseite-mobil-2026-10-26.png` (390 px, iPhone-UA).

## Google-Suche (ohne Anmeldung, optionale Cookies abgelehnt, Anzeigen ausgeblendet)

| Suchwort | doppelstueck.com | Bemerkung |
|---|---|---|
| Tagung Ingelheim | nicht in Platz 1 bis 20 | Platz 3 ist **wasem.de** (Weingut Wasem, Kloster Engelthal, anderer Betrieb). Platz 1 bis 5: ingelheim-erleben.de, kING (Snippet: Tagungspauschale 129 € p. P. ganztags), wasem.de, Das Karl, IKUM |
| Tagungshotel Rheinhessen | nicht auf Seite 1 | Seite 1 nur Portale (rheinhessen.de, HRS, tagungshotel.com) und Schillerhain |
| Weinhotel Ingelheim | Platz 1 | danach wasem.de/hotels, Booking, HolidayCheck, Tripadvisor |

Ergebnisse schwanken je nach Ort und Gerät. Screenshot: `wasem-google-suche-tagung-ingelheim-2026-10-26.jpg`.

## Google-Profil

- Name „Weingut Wasem Doppelstück“, 4,8 Sterne aus 235 Google-Rezensionen (Infobel 4,7 aus 286).
- Kategorie „Weinkellerei“; Hotel und Tagung nicht im Profil.
- Produkte: 2016er Pares Spätburgunder, 2018er Sonnenhang Grauburgunder.
- Buchungsoptionen über konfetti: Weinprobe mit Tapas 45 €, Sensorik-Weinprobe 45 €, GPS-Krimiwanderung 99 €.
- Die drei neuesten sichtbaren Bewertungen: zweimal JGA, einmal Weinwanderung, alle 5 Sterne.
- Screenshot: `wasem-google-profil-2026-10-26.jpg`.

## Korrektur zur Art Direction

Die Tagungsseite heißt `/seminare-und-tagungen/` und hat 14 Fotos (Eventraum neu 10/2025, Weingarten, Uploads 10/2026). Die Aussage „Tagungsseite hat kein einziges Foto“ in `docs/art-direction.md` stimmte nicht; vermutlich wurde eine 404-URL geprüft (`/tagung/`, `/weingut/`, `/events/` liefern 404). Belegbare Lücke stattdessen: keine Personenzahl, Pauschalen ohne Inhalt und Preis, kein Ansprechpartner, kein Ablauf, Sie und du gemischt.
