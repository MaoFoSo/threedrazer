# Projektregeln für threedrazer

- Das Spiel heißt **"threedrazer"** und ist eine PWA, die im Unterordner `/threedrazer/` läuft. Alle Pfade bleiben relativ.
- Bei **JEDER** Änderung an Spieldateien (`index.html`, Icons, `vendor/`, `manifest.json`) muss `CACHE_VERSION` in `sw.js` um 1 hochgezählt werden.
- Jede neue Datei, die das Spiel braucht, muss in die Liste `FILES` in `sw.js`.
- Keine externen CDNs oder Online-Ressourcen. Alles muss offline funktionieren.
- Der Speicherstand im `localStorage` (Schlüssel `"threedrazer"`) darf nie verloren gehen. Bei Änderungen am Format immer eine Migration für alte Spielstände einbauen.
- Vor dem Commit im Browser unter `/threedrazer/` testen, auch offline (Server stoppen und neu laden).
- Am Ende: pushen, Pull Request nach `main` erstellen und mergen.
