---
# An den Stack anpassen (nur UI-Dateien):
paths:
  - "**/*.tsx"
  - "**/*.astro"
  - "**/*.php"
  - "**/*.css"
  - "**/*.html"
  - "DESIGN.md"
---

# Design-Regeln Wasem Doppelstück

Destilliert aus Bringhurst (*Elements of Typographic Style*), Butterick (*Practical Typography*), Müller-Brockmann (Rastersysteme), Rams (*Weniger, aber besser*), Refactoring UI, WCAG 2.2. Marke und Tokens: `DESIGN.md` (bzw. `wissen/Marke.md`). Vorgehen: Skill `frontend-design` (Plan → gegen Brief prüfen → bauen → Screenshot → Kritik), vor dem Commit `/design-kritik`.

## Haltung
- **Eine Idee pro Abschnitt, ein mutiges Element pro Seite.** Alles drumherum ruhig. Vor dem Abschluss ein Accessoire entfernen (Chanel).
- **Typografie ist das Hauptwerkzeug**, Fotos das zweite. Dekoration nur, wenn sie Information trägt.
- Wo das Briefing ein KI-Klischee festlegt (z. B. Creme + Serif), müssen **alle freien Achsen** eigenständig sein: Layout, Fotografie, Markenzeichen, Sprache, Bewegung.
- Marken-Devices folgen aus `docs/art-direction.md` (noch offen).

## Typografie
- Skala (Quarte 1,333, fluid): Klasse `text-display` 3–6 rem (nur Hero, max. 1× pro Seite) · `text-titel` 2.4–4 rem (H1) · `text-ueberschrift` 1.9–2.6 rem (H2) · `text-zwischen` 1.35–1.6 rem (H3) · `text-lead` 1.2–1.35 rem · Basis 17 px · `text-klein` 0.875 rem. Keine Größen dazwischen.
- <Display-Schrift> nur für Überschriften und große Momente, große Größen enger (−1,5 % bis −3 %). <Text-Schrift> für Lesen und Bedienen.
- Zeilenlänge 45–65 Zeichen (`max-w-[var(--measure)]`). Zeilenhöhe Text 1,6, Überschriften 1,05–1,15.
- Linksbündig, Flattersatz. Zentriert nur für einzelne kurze Momente (Zitat, Signatur).
- **Keine** Versal-Labels über Überschriften, keine Mittelpunkt-Metazeilen in der UI, kein → an Links/Buttons, kein farbiges/kursives Einzelwort in Überschriften.
- Echte Typografie: „deutsche Anführungszeichen“, ’ statt ', … statt ..., geschützte Leerzeichen vor Einheiten (`40 Personen` → `40&nbsp;Personen`), Ziffern im Fließtext ohne Tabellenziffern.

## Raster und Raum
- 12 Spalten, Gutter 16 px mobil / 24 px Tablet / 40 px Desktop, max. Breite 80 rem.
- **Asymmetrie als Standard**: Text beginnt in Spalte 1–2 und endet bei 7–8, Bild bricht aus oder sitzt versetzt. Kein Abschnitt, der nur aus „Text links, Bild rechts, beide gleich breit“ besteht.
- Abstand-Skala (rem): 0.25 · 0.5 · 0.75 · 1 · 1.5 · 2 · 3 · 4 · 6 · 8 · 12. Abschnittsabstand 6–8 rem Desktop, 4 rem mobil. Nähe = Zugehörigkeit (Gestalt): innerhalb einer Gruppe kleiner Abstand, zwischen Gruppen mindestens doppelt.
- Keine gleich großen Karten-Raster. Listen von Angeboten als Liste/Tabelle mit Haltung, nicht als 3er-Kacheln mit Icon.

## Farbe
- 60 % Grund, 30 % Sekundär, ≤ 10 % Akzent, Signalfarbe als einzelner Punkt. Tokens folgen aus `docs/art-direction.md`.
- Keine Verläufe, keine weichen grauen Schatten, kein Glas-Effekt. Tiefe durch Fläche und Foto.

## Bilder und Video
- Nur echte Fotos. Bis dahin benannte Platzhalter mit konkretem Motiv und festem Seitenverhältnis.
- Seitenverhältnisse: 4:5 (Porträt), 3:2 (Szene), 16:9 (Panorama), 9:16 (Loop-Video). Dekorative Rahmen höchstens einmal pro Bildschirmhöhe.
- `next/image` mit `sizes`, Hero mit `priority`, Rest lazy. Video: `muted playsinline loop`, Poster, `preload="none"` außer Hero, keine Autoplay-Loops über 6 MB.

## Bewegung
- Eine orchestrierte Bewegung pro Seite (z. B. ein Hero-Einstieg), nicht Fade-up auf jedem Abschnitt.
- Reaktion auf Handlung erlaubt (Menü, Akkordeon, Formular-Bestätigung). UI 150–250 ms, Auftritte 600–900 ms, Easing `cubic-bezier(.2,.7,.2,1)`. Nur `transform`/`opacity`.
- `prefers-reduced-motion`: alles aus.

## Bedienung und Formulare
- Tippflächen ≥ 44 × 44 px, Abstand dazwischen ≥ 8 px. Fokus immer sichtbar.
- Label über dem Feld, nie nur Platzhalter. Fehlertext unter dem Feld, sagt was und wie beheben, ohne Entschuldigung. Pflichtfelder minimal.
- Primäraktion einmal pro Ansicht. Links im Text unterstrichen, Buttons nur für Aktionen.

## Leistung (Lighthouse mobil ≥ 90)
- So wenig JS wie möglich (Next: Server Components als Standard, `"use client"` tief im Baum; WordPress: keine Page-Builder-Skripte).
- Keine Bibliothek für das, was CSS kann. Schriften selbst gehostet (DSGVO). Kein Layout-Shift: Bilder/Slots mit festem Seitenverhältnis.

## Kopie
- Projekt-Skill `markentext` (falls vorhanden). Keine Gedankenstriche, nichts Unbestätigtes, Anrede laut Marke.
