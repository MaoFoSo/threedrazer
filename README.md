# threedrazer

3D-Arcade-Racer im Browser (three.js r128): Fahr ins Ziel, sammle Münzen und rüste in der Werkstatt Motor, Getriebe, Reifen, Panzerung und Tank deiner Schrottkiste auf.

Alle Strecken haben **Berg und Tal** sowie **Links- und Rechtskurven**: In Kurven drückt die Fliehkraft nach außen, bergauf kostet Tempo und Sprit, bergab rollt es schneller. Start und Ziel sind gerade und flach.

**Fahrzeuge** (jedes wird in der Werkstatt einzeln aufgebaut, neu gekaufte starten als Schrotthaufen):

- 🚙 **SUV-Coupé** – Allrounder, von Anfang an da.
- 🚚 **Gelber LKW** – 900 🪙, langsam, aber sehr robust.
- 🏎️ **Roter Formel 1** – 2 500 🪙, blitzschnell, aber empfindlich.
- 🚌 **Grüner Bus** – 1 600 🪙, robust, viel Sprit, Fahrgäste zahlen mit: +25 % Münzen.
- ✈️ **Weißer Airbus** – 30 000 🪙, hebt ab ca. 50 km/h ab und überfliegt jedes Hindernis (Münzen und Kanister sammelt er trotzdem). Upgrades kosten das Dreifache.

**Strecken** (Auswahl in der Werkstatt, Upgrades gelten überall):

1. **Landstraße** – 2000 m, Felder, Dörfer, Öl, Baustellen.
2. **Wüste** – 2600 m, Dünen, Kakteen, Felsen. Sandverwehungen bremsen, ab und zu nimmt ein Sandsturm die Sicht. Münzen ×1,5. Frei nach einem Sieg auf Strecke 1.
3. **Eislandschaft** – 3000 m, zugefrorener See, Tannen, Eisberge, Schneefall. Glatteis (Auto rutscht), Schneewehen, Eiszapfen-Barrieren. Münzen ×2. Frei nach einem Sieg auf Strecke 2.

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
- Speicherstand-Format v4: `lvc` (Upgrades pro Fahrzeug), `tr` (Rekord/Siege pro Strecke), `unlocked`, `track`, `car`, `cars`, `hs`, `name`. Alte Stände werden beim Laden migriert: Bei v3 → v4 behalten alle schon gekauften Fahrzeuge den bisherigen Ausbau. `lv` bleibt als Spiegel des SUV erhalten, `best`/`wins` als Spiegel von Strecke 1 (für ältere, noch gecachte Versionen).
- Berg und Tal / Kurven: Die Spiellogik rechnet auf einer geraden Strecke, ein Vertex-Shader (`bendify`, `BEND_PROJ`) biegt die Welt beim Zeichnen. Parameter pro Strecke: `bendX`/`bendE` in `TRACKS` (Amplitude, Wellenlänge, Amplitude, Wellenlänge).
- Menüs werden mit `fitSheet` so skaliert, dass nie gescrollt werden muss (Querformat: Panel rechts, Hochformat: Blatt unten).
- Spielstände von „Schrott Racer" (localStorage-Schlüssel `schrottracer`) werden automatisch nach `threedrazer` übernommen.
- Lokal testen (Service Worker brauchen http/https): `python3 -m http.server` und `http://localhost:8000/` öffnen.
- Updates: Ist eine neue Version im Hintergrund geladen, lädt die App sich automatisch neu (aber nie mitten in einer Fahrt). Damit nginx keine alte Version ausliefert, `sw.js` und `index.html` nicht cachen lassen:

  ```nginx
  location ~ ^/threedrazer/(sw\.js|index\.html|manifest\.json)?$ {
      add_header Cache-Control "no-cache";
  }
  ```
