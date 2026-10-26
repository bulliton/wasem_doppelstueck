# Design-Ideen A-004 Runde 3: Marke und Start-Screen

Stand 2026-10-26. Grundlage: Benjamins Urteil zu Runde 2 (`wissen/Uebergabe.md`), Profil `geschmack`, Maxwell-Messung (`docs/belege/maxwell-messung.md`).

## Anker
- **Wer kommt:** zur Hälfte Frauen um 25 bis 30 (JGA, Freundinnen, Paare; laut Marie 50 % der Zimmerbuchungen), dazu Tagungsgäste und Weinkundschaft aus der Region. „Durchschnittsbürger mit durchschnittlichem Einkommen, nicht der hochgestochene Luxuseinkäufer“ (Marie im Telefonat, Notiz Benjamin, `~/Downloads/Demo-Webseite-Feedback.rtf` Z. 318–320).
- **Fühlen:** Hier werde ich herzlich empfangen, das sieht schön aus, hier kann ich mit meinen Leuten einen ganzen Tag verbringen.
- **Tun:** Zimmer buchen, Erlebnis anfragen (JGA, Weinprobe, Tagung), Wein kaufen.
- **Besitzt nur Wasem:** das große Serifen-W vom Etikett (schwarz-gold, weiß, Koralle beim Gutswein), Weingut und Hotel in derselben Gasse, eine Familie über drei Generationen, die man auf der Teamseite lachen sieht.

## Ilonas Einwand (gefunden)
Marie mochte Maxwell, „ihre Mutter sagt aber dann, dass man das darauf nicht sehen kann. Anscheinend den Text auf den Bildern“. Danach: „Lesbarkeit, Barrierefreiheit“ (Notiz Z. 318–319).
**Folge für beide Richtungen:** Text liegt nie direkt auf einem Foto. Überschriften und Knöpfe stehen auf ruhigen Farbflächen (Etikett, Band); jede Paarung ist gerechnet (≥ 4,5 : 1).

## Hypothesen
| Idee | Ziel | Risiko | Urteil |
|---|---|---|---|
| W als Bildfenster (Runde 2 A) | Marke im ersten Screen | zu wenig Emotion, Menschen klein im Ausschnitt | schärfen: W bleibt Zeichen, Menschen bekommen das ganze Bild |
| Farben vom alten Web (Kalk, Aprikose) | Wiedererkennung | blass, wirkt wie die alte Seite | ersetzen: Farbe aus den Flaschen |
| Text auf Fotos wie Maxwell | Ruhe, großes Bild | Ilona: nicht lesbar | ersetzen: Text auf Farbfläche |
| Wähler „Was habt ihr vor?“ (Runde 2 B) | schnelle Wege | Tabs verstecken Inhalt | ersetzen durch vier animierte Bereichskarten |
| Familie zeigen | Wärme | „zwei Schwestern“ als Botschaft | behalten: Familie als Gastgeber, nicht als Werbebotschaft |

## Zwei Richtungen (gleicher Inhalt, gleiche Abschnitte)
**A „Etikett“** · Varianz 6, Bewegung 4, Dichte 4
Farbe vom Gutswein-Etikett: Etikettweiß #FBF6F0, Flaschenrot-Schwarz #261619, eine Fläche Koralle #E5674C (Tinte darauf 5,3 : 1). Bodoni Moda als Display (Markengrund: das W auf der Flasche ist eine Didone), Hanken Grotesk für Bedienung.
Hero: Foto der anstoßenden Frauen randlos links, rechts das Etikett als Koralle-Fläche mit großem weißem W, Satz und zwei Wegen. Signatur: das Etikett legt sich beim Laden auf (W richtet sich auf). Karten: Bild deckt sich von unten auf, Titel steigt aus der Zeilen-Maske.
Moves: `hero-satz-unten-links` (abgewandelt, Text auf Fläche), `kapitel-wechselseitig`, Signatur `satz-auf-farbflaeche`, dazu `zeilen-maske`.

**B „Abendlicht“** · Varianz 5, Bewegung 5, Dichte 3
Farbe aus der Stunde, in der die Gäste bleiben: Pfirsichsand #F5E9DD, Tinte #33201C, Spätburgunder #5E1F2E als Fläche (Sand darauf 10,3 : 1), Abendgold #E9A55B klein. Instrument Serif (Kontinuität zu Brand Paper v8).
Hero: echte Wortmarke randlos über die ganze Breite, darunter das Abendlicht-Foto, ein Spätburgunder-Band mit Satz und Wegen überlappt die Bildkante. Signatur: beim Scrollen schrumpft die Wortmarke in die Navigation und wird dort zum W. Karten: große Kacheln wie Maxwell, Bild zoomt beim Eintreten von 1,12 auf 1, Satz schiebt sich beim Zeigen hoch.
Moves: `hero-film-name-randlos` (Wortmarke statt Name), `innen-parallax`, Signatur `logo-zeichnet-sich` (als Logo-Übergang), dazu `versetzte-collage` für die Familie.

**Gemeinsam:** Logo adaptiv (Handy nur W; Desktop Wortmarke, ab 80 px Scroll W, zurück beim Hochscrollen an den Anfang), Buchen immer erreichbar (Nav rechts, Handy-Leiste unten), Familie mit echten Porträts und Rollen von doppelstueck.com/team, Reduced Motion schaltet Bewegung ab.

## Vorab-Verriss
1. Koralle kann billig wirken: nur eine Fläche, Rest Etikettweiß, keine Verläufe.
2. Didone ist Modemagazin-Klischee: nur für W und H1, nie für Fließtext.
3. Familienreihe als Porträtgitter wirkt wie „Unser Team“-Seite: auf der Startseite nur fünf Menschen mit Rolle, kein Lebenslauf.
4. Wortmarke-zu-W ist ein Effekt: begrenzt auf die ersten 300 px Scroll, danach normale Seite.
5. Fotos aus dem Bestand sind klein (800–1300 px): im Prototyp gekennzeichnet, für die Seite Shoot nötig.

## Empfehlung
**A „Etikett“**: Sie leitet die Farbwelt direkt aus dem schönsten Markenstück ab (der Flasche), ist mit Koralle jung und freundlich statt protzig, und die Etikett-Fläche löst Ilonas Lesbarkeitsproblem von selbst. B ist ruhiger und klassischer, falls Marie Koralle zu laut findet.

## Testplan
375 und 1440 ohne Überbreite, Kontrast je Paarung (oben gerechnet), Seitentext, Reduced Motion, `design-kritik` mit KI-Look-Note.
