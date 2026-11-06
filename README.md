# threedrazer

3D-Arcade-Racer im Browser (three.js r128): Fahr die 2000-m-Strecke ins Ziel, sammle Münzen und rüste in der Werkstatt Motor, Getriebe, Reifen, Panzerung und Tank deiner Schrottkiste auf.

**Steuerung:** Pfeiltasten / WASD · P oder Esc = Pause · M = Ton an/aus. Auf Touch-Geräten gibt es Bildschirm-Tasten.

## Als App installieren (PWA)

threedrazer ist eine installierbare Web-App und läuft nach dem ersten Öffnen auch offline.

- **iPhone / iPad (Safari):** Seite öffnen → Teilen-Symbol → **„Zum Home-Bildschirm"** → Hinzufügen.
- **Android (Chrome):** Seite öffnen → Menü **⋮** → **„App installieren"** (bzw. „Zum Startbildschirm hinzufügen").
- **Desktop (Chrome / Edge):** Installations-Symbol rechts in der Adressleiste anklicken oder Menü → **„threedrazer installieren"**.

Die App startet dann im Vollbild und im Querformat. Updates werden beim nächsten Start automatisch geladen.

## Für Entwickler

- Alle Pfade sind relativ – das Spiel läuft im Unterordner `/threedrazer/`.
- three.js liegt lokal unter `vendor/three.min.js` (r128, MIT-Lizenz, siehe `vendor/three.LICENSE`).
- **Bei jeder Änderung** an einer Datei in `sw.js` die `CACHE_VERSION` hochzählen, sonst bekommen installierte Apps die neue Version nicht. Neue Dateien zusätzlich in die `FILES`-Liste in `sw.js` eintragen.
- Spielstände von „Schrott Racer" (localStorage-Schlüssel `schrottracer`) werden automatisch nach `threedrazer` übernommen.
- Lokal testen (Service Worker brauchen http/https): `python3 -m http.server` und `http://localhost:8000/` öffnen.
