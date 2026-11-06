# threedrazer

3D-Arcade-Racer im Browser (three.js r128): Fahr ins Ziel, sammle Münzen und rüste in der Werkstatt Motor, Getriebe, Reifen, Panzerung und Tank deiner Schrottkiste auf.

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
- Speicherstand-Format v2: `tr` (Rekord/Siege pro Strecke), `unlocked`, `track`. Alte Stände werden beim Laden migriert (Siege auf Strecke 1 ⇒ Strecke 2 frei); `best`/`wins` bleiben als Spiegel von Strecke 1 erhalten.
- Spielstände von „Schrott Racer" (localStorage-Schlüssel `schrottracer`) werden automatisch nach `threedrazer` übernommen.
- Lokal testen (Service Worker brauchen http/https): `python3 -m http.server` und `http://localhost:8000/` öffnen.
