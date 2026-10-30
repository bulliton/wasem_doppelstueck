# Detail-Sektion: was die Referenzen durchdacht macht (30.10.)

Anlass: Runde 9 war für Benjamin „okay, aber nicht special, sieht AI aus“. Das Geschmacksprofil hatte nur Oberfläche gemessen. Vier Referenzen wurden darum auf Entscheidungen und Gründe seziert: `jagerhof.md`, `lorunser.md`, `closapalta.md`, `maxwell.md` (je 25–30 Details, KI-Gegenüberstellung, Übertragung auf Wasem). Screenshots unter `/private/tmp/claude-501/sektion/<name>/` (flüchtig).

## Was alle vier gemeinsam haben (die eigentliche Lehre)

1. **Eine Idee aus einem echten Ding des Orts, sichtbar in jedem Abschnitt.** Jägerhof: Brief des Hauses (Komma im Hero, Handschrift-Unterschrift, Schluss in derselben Form). Lorünser: alter Gast im Schnee (Nebel, Skispur, Abzeichen). Clos Apalta: Haus klein, Weinberg groß. Maxwell: Kalkstein (Seitengrund, Steinzeug, Mauer, Wappen).
2. **Effekte kommen aus dem Ort, nicht aus der Bibliothek.** Lorünser blendet mit `blur(5px)→0` ein, weil der Berg aus dem Nebel kommt. Die rote Linie ist die Skispur aus einem echten Foto. Ein Standard-Reveal ist der KI-Look.
3. **Gerade = Tatsache, kursiv = Gefühl.** Maxwell und Lorünser setzen Überschriften als Zweiteiler mit Komma. Die Kursive gehört immer dem warmen Wort. Man erkennt die Marke ohne Logo.
4. **Hover verändert die Umgebung, nicht den Link.** Jägerhof tauscht das Vollbild je Zeile, blendet den Satz auf 20 % und zeigt ein Foto. Clos Apalta: Bild übernimmt die Fläche.
5. **Satz statt Angebotsliste.** Jägerhof: die Angebote stehen klickbar in Grotesk mitten im Serifensatz. Keine Karten, keine Liste.
6. **Farbe und Abstand haben je genau eine Bedeutung.** Clos Apalta: Gold nur für Buchen, eine dunkle Fläche nur für Herkunft. Abstände in drei festen Stufen (eng = gehört zusammen, weit = neues Kapitel).
7. **Der Bildsatz ist geplant, nicht gesammelt.** Jägerhof fotografiert jedes Kapitel zweimal (Sommer/Winter). Lorünser ordnet Fotos nach Tageslicht, Innenräume immer mit brennendem Licht. Maxwells Fotos bringen die Palette selbst mit. Clos Apalta dämpft die Sättigung im Hero auf etwa die Hälfte.
8. **Weglassen ist Entscheidung.** Kein Buchen-Knopf im Header (Jägerhof), keine Schluss-Aufforderung (Clos Apalta), keine Karten, keine Icons, keine Overlays.

## Was Runde 9 dagegen tut (Diagnose, gemessen 1440)
- Etikett = Karte mit Doppelrahmen auf dem Foto, ohne Beziehung zum Bild (gegen 4, 5).
- Kein Maßstabsentscheid: H1 ~20 px, Liste mittelgroß.
- Namenskapitel = Vorlage: Goldstrich als Augenbraue, Headline, leere Fläche links unten, Textspalte rechts.
- Reveals sind Standard-Zeilenmasken (gegen 2). Cognac steht für vieles (gegen 6).
- Fehler: Wortmarke in der Nav auf hellem Himmel unsichtbar; Label „Entwurf Runde 8“.

## Übertragung auf Wasem (Vorschlag, Grundlage für den Umbau)
- **Idee:** Das Doppelstück, das dem Wein Zeit lässt. Daraus abgeleitet:
  - **Klären als Bewegung:** Texte und Bilder kommen aus leichter Trübung scharf (wie Wein, der im Fass ruht und klar wird). Ersetzt die Zeilenmasken.
  - **Doppel als Typo-Regel:** jede Überschrift ein Zweiteiler, Bona Nova aufrecht für die Tatsache, kursiv in Cognac für das Gefühl. Die bestehende Doppel-Rolle wird so zur Regel statt zum Effekt.
  - **Linie aus dem Ort:** die Stiegelgasse von Nr. 50 zu Nr. 70 als feine Linie, die Weingut und Hotel verbindet (nur wenn ein echtes Foto oder der Lageplan die Form hergibt).
- **Hero ohne Karte:** ein Satz in Bona Nova, in dem Wein, Hotel, Feste und Tagungen in Albert Sans klickbar sind; Hover tauscht das Vollbild (mobil: feste kleine Collage). Text nicht direkt aufs Foto (Ilona): Bild im Passepartout auf Leinen oder Satz auf ruhiger Fläche.
- **Cognac nur für Anfragen und Buchen.** Espresso-Fläche genau einmal, für den Namensgedanken.
- **Bildsatz nach Tageslauf ordnen** (Nachmittag Weinberg → Abend Hof mit Lichterkette → Zimmer mit Licht an → Frühstück), Sättigung im Hero dämpfen. Achtung: kein Uhrzeit-System als Navigation (Lesson 26.10.), nur Bildreihenfolge.
- Shoot-Wunsch für später: gleiche Perspektive in mehreren Jahreszeiten, Doppelstück im Keller.

## Fertig, wenn (Pilot Hero + Namenskapitel)
1. Neben Jägerhof- und Lorünser-Screenshot im selben Viewport hält der Hero Maßstab und Ruhe; jede Gestaltungsentscheidung hat einen „weil“-Satz aus der Idee (Tabelle in dieser Datei ergänzen).
2. Keine Karte, kein Goldstrich, keine Standard-Zeilenmaske mehr; Reveal = Klären.
3. Angebote als klickbarer Satz, Hover tauscht Bild; mobil ohne Hover voll bedienbar, Tippflächen ≥ 44 px.
4. Wortmarke in der Nav auf jedem Bild lesbar, Label „Entwurf Runde 8“ weg.
5. Benjamin sieht Vorher/Nachher als Storyboard neben der Referenz.

## Pilot Runde 10: Entscheidungen mit Grund (`prototyp/runde-10/index.html`, 30.10.)
| Entscheidung | weil |
|---|---|
| Bild im Leinen-Passepartout statt randlos, Satz darunter | Text gehört nicht aufs Foto (Ilona); die Wortmarke steht auf Leinen immer lesbar; die Leinenfläche ist dieselbe wie die Seite darunter, man steht schon im Haus. |
| H1 als Satz mit den vier Angeboten in Albert Sans, Versal, klickbar | Die Angaben stehen wie auf einem Etikett im Satz: man liest einen Gedanken und klickt einen Weg (Jägerhof-Lehre 5), statt Karte oder Liste. |
| Zweiteiler: aufrecht „Weingut und Weinhotel in Ingelheim,“ kursiv „mit Zeit für …“ | Tatsache zuerst (Kategorie in H1), das Gefühl kursiv; „Zeit“ führt zum Namensgedanken. 17 Wörter, Wortlaut ist Vorschlag. |
| Hover/Fokus: Satz geht auf 22 %, Wort bleibt, Bild wechselt in seine Welt | Hover verändert die Umgebung, nicht den Link (Lehre 4); vier Welten in einem Screen ohne Karussell. Mobil ohne Hover: Links springen ins Kapitel, Tippfläche 47 px. |
| Reveal „Klären“ (Unschärfe → scharf) für Bild, H1 und Namenskapitel | Wein ruht im Doppelstück, bis er klar ist; ersetzt die Standard-Zeilenmaske. |
| Kursive bleibt Espresso (Hero) bzw. Sand (Espresso-Fläche), nie Cognac | Cognac bedeutet nur Anfragen und Buchen (Lehre 6). |
| Sättigung der Hero-Bilder auf 80 % | Leinen und Bild sollen eine Familie sein (Clos-Apalta-Lehre). |
| Namenskapitel: zweite Hälfte drei Spalten versetzt, Text unter ihr, Foto unter der ersten | Doppel als Satzbau, das zweite Stück steht neben dem ersten; keine leere Ecke, kein Goldstrich. |
| Zweite Hälfte klärt langsamer (3 s statt 1,8 s) | Der Satz handelt von Zeit. |
| Espresso-Fläche genau einmal | Sie ist der Keller, in dem das Doppelstück liegt. |

Offen: Das Keller-Foto zeigt Julia an Edelstahltanks, der Text spricht vom Eichenfass (Foto Doppelstück fehlt, Shoot). Maßstab: H1 50 px ist ruhiger als Jägerhofs 200-px-Wort; bewusst Lesesatz statt Plakat, von Benjamin zu entscheiden.
