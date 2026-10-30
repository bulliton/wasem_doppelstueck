# Runde 9: Personas, Markengefühl, Kriterien (Hero + Nav)

Stand 2026-10-30. Anlass: Runde 8 war für Benjamin „nur informativ, gar nicht auf Wirkung, Wohlfühlen, Dasein, Vibe“. Diese Datei ist der Maßstab, gegen den `design-kritik` die Varianten unter `prototyp/runde-9/` prüft.

## Drei Personas

| | Lena, 29, organisiert den JGA | Paar, Mitte 30, Wochenende | Katrin, 41, plant eine Teamtagung |
|---|---|---|---|
| Woher | Instagram/TikTok-Post einer Freundin, dann Google „JGA Weingut Rheinhessen“; Handy | Google „Weinhotel Rheinhessen“, Booking-Vergleich; Handy abends, Laptop zum Buchen | Google „Tagung Weingut Ingelheim“, Laptop im Büro |
| Wunsch | Ein Tag, an den sich die Gruppe erinnert, Fotos, die schön aussehen, und niemand muss fahren | Raus, gut trinken, gut schlafen, zu Fuß vom Glas ins Bett | Ein Ort, der anders ist als ein Konferenzhotel, und bei dem alles klappt (Raum, Technik, Zimmer, Abendprogramm) |
| Gefühl, das sie sucht | „Da sieht es aus wie bei Freundinnen, die Geschmack haben.“ Leichtigkeit, Sommerabend, Lichterkette | Ankommen, Ruhe, Wärme, ein bisschen Luxus ohne Steifheit | Sicherheit, plus ein Ort, mit dem sie bei ihrem Team punktet |
| Was sie in 5 Sekunden sehen muss | Stimmung (Menschen, Gläser, Abendlicht), dass Feste hier gehen, wo man anfragt | Dass es ein Hotel ist, wie es aussieht, wo man bucht | Dass es Tagungen gibt und einen klaren Weg zur Anfrage |
| Was sie verliert | Text, Katalog-Look, Faktzeilen | Fehlender Buchen-Knopf | Kein Hinweis auf Tagungen im ersten Screen |

Schluss: Alle drei kommen über ein **Gefühl** an und gehen über **einen Weg** (anfragen oder buchen). Die Angebote müssen mit einem Blick da sein, aber als Wegweiser, nicht als Inhalt.

## Markengefühl

- **Der Abend im Hof.** Lichterkette über der Tafel, Sekt wird eingeschenkt, Abendlicht im Weinberg, danach das Zimmer im selben Hof. Das ist der eine Moment, der Wein und Hotel verbindet (vgl. `docs/instagram-ton.md`).
- **Edel, aber nicht krass edel.** Beige, Leinen, helles Holz, Steinwand; dunkle Akzente wie ihre Flaschen. Locker im Ton („ihr“), stolz aufs Handwerk.
- **Doppelstück.** Das große Fass, das dem Wein Zeit lässt. Als Gedanke: hier hat man Zeit, alles ist doppelt da (Weingut und Hotel, Stiegelgasse 50 und 70). Formal: die Doppel-Rolle (Wort, kursives Gegenstück in Cognac).
- Die Wortmarke und das W vom Etikett tragen die Marke; das W auf dem Stammhaus-Schild ist ein echtes Motiv.

## Kriterien Wirkung (5)
1. **Gefühl vor Information:** der erste Screen ist zu ≥ 85 % Bild oder Film eines echten Moments bei Wasem (Menschen, Licht, Tafel), kein Text-Layout.
2. **Wenig Text:** im ersten Screen ≤ 20 Wörter sichtbar (ohne Nav), keine Faktzeilen.
3. **Marke spürbar:** Wortmarke oder W prominent, die Doppel-Rolle als einzige Signatur, Farbwelt Leinen/Cognac/Espresso.
4. **Identifikation:** eine designverliebte Frau Ende 20 sieht sich dort sitzen (Bildwahl: Gäste, Gläser, Abend), nicht leere Räume.
5. **Award-Ruhe:** ein tragendes Merkmal, Rest ruhig; kein Split-Hero, keine Pille, kein Verlauf als Gestaltung.

## Kriterien Bedienung (3)
1. **Alle vier Angebote (Wein, Hotel, Feste, Tagungen) mit einem Blick erreichbar,** auf Desktop und mobil ohne Scrollen.
2. **Ein Hauptweg sichtbar:** „Zimmer buchen“ und „Anfragen“ auf jedem Screen, mobil als Leiste unten.
3. **Nav mit Charakter, aber klar:** transparent über dem Bild, kehrt beim Hochscrollen auf Leinen zurück, Menü als eigener Raum (Vollbild mit Bildern), Tippflächen ≥ 44 px, Esc und Fokusfalle.

## Kritik-Schleife (30.10., 1440 und 375 gemessen)

| | A Etikett | B Abendfolge | C Name |
|---|---|---|---|
| Idee | Abend im Weinberg randlos, Angebote auf einem Leinen-Etikett mit W (wie ein Flaschenetikett) | Vier Momente wechseln langsam, Leinen-Band mit den vier Wörtern zeigt, welcher | Gedeckte Tafel im Weingarten, darunter die Wortmarke randlos über die ganze Breite |
| W1 Bild ≥ 85 % | ja (Etikett 12 % der Fläche) | nein, Band 23 % | nein, Band ~25 % |
| W2 ≤ 20 Wörter | ja (19) | ja (~18) | ja (10) |
| W3 Marke | W + Etikett + Wortmarke in Nav + Doppel-Rolle | Wortmarke in Nav + Doppel-Rolle | Wortmarke als Hauptbild, stärkste Marke |
| W4 Identifikation | zwei Frauen stoßen an (mobil: Freundinnen mit Blumenkranz) | dieselbe Szene, dann Zimmer, Tafel, Raum | Desktop ohne Menschen, Bild dunkel und weich |
| W5 Ruhe | ein Merkmal (Etikett) | wechselnde Bilder wirken wie ein Karussell (Profil: keine Karussells als Hauptinhalt) | ein Merkmal (Wortmarke) |
| Bedienung 1–3 | erfüllt | erfüllt | erfüllt |
| KI-Look | B (zentriert) → behoben, jetzt A | A | A |

Behoben in der Schleife: Nav auf hellem Abendhimmel unsichtbar (A, B: Nav in Espresso, mobil bei A in Leinen), Etikett zentriert (jetzt linksbündig), Bildausschnitt A so verschoben, dass das Etikett keine Person verdeckt. Nav-Logik geprüft: runter weg, hoch zurück auf Leinen mit W; mobile Leiste „Zimmer buchen | Anfragen“ ab dem ersten Scroll. Kein Querscroll, Tippflächen ≥ 44 px, eine H1.

**Empfehlung: A Etikett.** Einzige Variante, die alle acht Kriterien hält; das Etikett überträgt die Flasche in die Seite, ohne Text aufs Foto zu setzen. C ist der stärkste Markenmoment und kann als Footer-Schluss weiterleben. Offen: Bildauflösung (Weinberg-Foto 1300 px, mobil Freundinnen 800 px) reicht für den Pitch, für live braucht es die Originale; „ein paar Häuser vom Weingut“ in B von Marie bestätigen lassen.
