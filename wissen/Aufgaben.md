# Aufgaben

Eine Liste pro Projekt. Woran nicht freigegeben ist, daran arbeitet niemand (Session, Leitstand, Nachtschicht).

- **Status:** `eingang` (gefunden, noch nicht entschieden) → `frei` (Benjamin hat freigegeben) → `läuft` (eine Session arbeitet daran) → `prüfung` (gebaut, wartet auf grüne pruefer-Ampel oder Benjamins Merge) → `fertig`.
- Nur Benjamin setzt `eingang` → `frei`. Die Nachtschicht nimmt nur `frei` mit Modell `scout` oder `builder` und einer prüfbaren Abnahme.
- **Modell:** `scout` (suchen, Texte), `builder` (klarer Bau), `architekt` (Konzept, Fehlersuche; nie nachts).
- **Abnahme:** ein Satz, den ein Test oder Messskript prüfen kann (der Test ist vor der Arbeit rot).
- IDs fortlaufend, nie neu vergeben. Erledigtes bleibt stehen (Status `fertig` + Commit), einmal im Monat in `/wartung` nach unten unter „Erledigt“ schieben.

<!-- Format, genau so (wird von nachtschicht.py und eingang gelesen):
## A-001 · Kurztitel
Status: eingang
Quelle: <woher> · Modell: builder · Abnahme: <ein prüfbarer Satz>
-->

## A-001 · Briefing, Zielgruppen, Markenkern, Stimme
Status: läuft
Quelle: Benjamin 26.10. · Modell: architekt (Opus) · Abnahme: docs/briefing.md enthält Fakten mit Quelle, 3 Personas, Markenkern-Kandidaten, Stimmzüge mit Beleg und offene Fragen an Marie

## A-002 · Art Direction (Fable)
Status: prüfung
Quelle: Benjamin 26.10. · Modell: architekt (Fable 5.1) · Abnahme: docs/art-direction.md enthält alle Punkte aus docs/fable-auftrag-art-direction.md

## A-003 · Brand Paper / Verkaufsdeck an Marie
Status: prüfung
Quelle: Benjamin 26.10. · Modell: architekt (Opus) · Abnahme: Slides-Artefakt im Bulliton-Rahmen, erst Belege (Google, PageSpeed, Tagungs-Sichtbarkeit), dann Marke, dann Vorschau und nächster Schritt

## A-004 · Key-Screens mit echten Fotos
Status: eingang
Quelle: Benjamin 26.10. · Modell: architekt (Opus) · Abnahme: 2–3 Screens (Start, Tagung, Event) unter prototyp/, 375 und 1440 ohne Überbreite, design-kritik bestanden

## A-005 · E-Mail-Verlauf mit Marie vollständig exportieren
Status: eingang
Quelle: Benjamin 26.10. · Modell: scout · Abnahme: Mails liegen in ~/Downloads, Fakten in docs/briefing.md ergänzt
