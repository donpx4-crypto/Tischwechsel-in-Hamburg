# Prüfbericht Tischwechsel – Version 03

Stand: 18. November 2026. Dieser Bericht betrifft die Dateien dieser ZIP, nicht den danach veröffentlichten Stand. Kein vollständiges Browser-, W3C- oder Lighthouse-Prüfsiegel.

## Durchgeführte Prüfungen

| Bereich | Ergebnis und Prüfgrenze |
|---|---|
| Dateien und Links | Alle sechs HTML-Dateien, lokale Linkziele, Anker und eingebundenen Assets vorhanden. logbuch.pdf liegt bei. |
| Struktur | Eine H1 je Seite, keine doppelten IDs, Sprunglink vor dem Header. Navigation und aktive Markierung der fünf Inhaltsseiten vorhanden. |
| Textmenge | Hauptbereiche: Start 402, Programm 366, Story 403, Tickets 309, Infos 728 Wörter; zusammen 2.208. Zählung anhand von Textabschnitten im main, ohne Navigation/Footer. |
| Metadaten | Eigene Titel mit 30–60 und Beschreibungen mit 70–160 Zeichen. Open Graph und Event-Bild auf die GitHub-Pages-Adresse umgestellt. |
| Bilder | 20 Rasterdateien; alle unter 300.000 Bytes und höchstens 2.000 px breit. Größte Rasterdatei: 205.086 Bytes. Alle img mit alt, width und height. Standgrafiken: 850 × 567 px. |
| Ressourcen | Lokale CSS-, JS-, Bild- und Schriftdateien; CSS-Dateipfade geprüft. Exakte vier Farbvariablen erhalten. |
| JavaScript | node --check bestanden. Isolierter Verhaltenstest bestanden: Paketwechsel auf 39 €, Summe 156 € bei vier bzw. 390 € bei zehn Personen; Grenze 80 Personen; Demo-Reset; Scrollfortschritt; Nullstellung bei reduzierter Bewegung. Kein echter DOM-/Browsertest. |
| Rezensionen | Im CSS hellgrauer Hintergrund, grauer Rand, 16 px Rundung und dunkler Text. Fiktive Stimmen bleiben als solche gekennzeichnet. |
| Parallax | Unschärfefilter entfernt. Hinten stärkere Verschiebung als vorne; kleinere Werte auf schmalen Bildschirmen; reduzierte Bewegung berücksichtigt. Visueller Eindruck und Randabdeckung noch im Browser prüfen. |
| Formular | Beschriftungen, Pflichtfelder, E-Mail-Typ und lokale Demo-Verarbeitung erhalten. Keine echte Buchung oder Zahlung. |

## Offene Prüfungen und Angaben

- Der verfügbare Browser konnte den lokalen Vorschau-Server nicht erreichen (ERR_CONNECTION_REFUSED). Es gibt für diese Version keine bestätigte visuelle Desktop-/375-px-Prüfung, keine vollständige Konsolen-/Netzwerkprüfung und keinen aktuellen Lighthouse-Lauf.
- W3C-Validierung, alle Kontrastzustände, Druckansicht, Tastaturbedienung und Verhalten ohne JavaScript im Browser stehen aus. Implementierte Regeln ersetzen diese Tests nicht.
- Projektverantwortliche Person und Kontakt im Impressum fehlen; keine Angaben erfunden.
- Graue Rezensionen sind eine ausdrücklich gewünschte Abweichung von der strengen Vierfarbenvorgabe. Natürliche Foodfarben ebenfalls mit dem Dozenten abgleichen.
- Nach dem Veröffentlichen Website und PDF öffentlich überprüfen. Diese Bearbeitung veröffentlicht nichts automatisch.

## Redaktionelle Entscheidungen

Die Anfahrt nennt den Oberhafen als Konzeptort, verspricht aber keinen real existierenden Eingang. Wetter- und Barrierefreiheitsangaben bleiben transparent, statt ungeprüfte Zusicherungen zu erfinden. Die Story beschreibt Aufgabenbereiche eines erfundenen Teams. Preise, Gruppengröße, freie Platzwahl und fehlende Rechnungsstellung sind konsistent erklärt. Die Bildunterschriften beschreiben vorhandene Standbilder; Filmdateien werden nicht mehr angekündigt und sind keine Pflichtanforderung.
