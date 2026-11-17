# Tischwechsel – Website 03

Stand: 18. November 2026. Statische Website mit fünf Inhaltsseiten und eigener 404.html. Zum Veröffentlichen den **Inhalt** dieses Ordners vollständig in das GitHub-Pages-Verzeichnis kopieren, einschließlich logbuch.pdf, css, js, fonts und images. Diese ZIP allein aktualisiert die Live-Website nicht.

## Änderungen

- Rezensionen: hellgraue Karten (#f1f3f4), grauer Rand (#b7bdc3), 16 px Rundung, dunkler Text. Die Stimmen bleiben ausdrücklich als fiktive Beispiele gekennzeichnet; es sind keine Google-Rezensionen.
- Parallax: echte vertikale Verschiebung der vier transparenten Ebenen, keine Unschärfe. Die hinterste Ebene bewegt sich am stärksten, der Vordergrund bleibt relativ zum Hero stehen. Desktop: maximal -120/-75/-32/0 px; bis 650 px: -70/-44/-18/0 px. Reduzierte Bewegung schaltet die Verschiebung aus.
- Paketauswahl übernimmt den Preis ins Formular und aktualisiert die Summe. Ohne JavaScript führen die Links zum Formular; die Auswahl erfolgt dort von Hand.
- Pfeile als Inline-SVG statt möglicherweise fehlender Schriftzeichen.
- Veranstaltungsname zusätzlich neben dem Logo.
- Texte zu Story, Gruppenplanung, Sitzplätzen und FAQ überarbeitet. Hinweise auf geplante Filme entfernt; KI-Foodbilder bleiben korrekt gekennzeichnet.
- Open Graph und Event-Bild verweisen auf https://donpx4-crypto.github.io/Tischwechsel-Hamburg-/.
- Bildmaße der vier Standgrafiken im HTML korrigiert.

## Bilder und Dateien

Alle Ressourcen sind lokal. Dateinamen beim Ersetzen beibehalten. Die vier Hero-Ebenen müssen identische Maße und transparente Ränder behalten, damit ihre Positionen zusammenpassen. Nicht jede transparente Fläche ist ein Fehler.

## Vor der Abgabe

1. Projektverantwortliche Person und Kontakt im Impressum ergänzen; hierfür liegen keine Angaben vor.
2. 375-px-Ansicht, Parallax ohne sichtbare Bildkanten, Tastaturfokus, Druckansicht und reduzierte Bewegung im Browser kontrollieren. Die lokale Vorschau war aus dem verfügbaren Browser nicht erreichbar.
3. W3C-Validator und Lighthouse selbst ausführen; es werden keine bestandenen Ergebnisse behauptet.
4. Bewusste Abweichung vom Briefing: Auf Nutzerwunsch verwenden die Rezensionen zusätzliche Grautöne. Die natürlichen Bildfarben bleiben ebenfalls außerhalb einer strikt auf vier Farben beschränkten Palette.
5. Nach dem Upload index.html und logbuch.pdf in einem privaten Browserfenster öffnen. Bei einem späteren Umzug die absoluten Metadaten-URLs in index.html ändern.

Details zu den ausgeführten Prüfungen stehen in PRUEFBERICHT.md. Das Logbuch wurde auf diesen Stand aktualisiert.
