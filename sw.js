// threedrazer – Service Worker für den Offline-Betrieb.
// WICHTIG: Bei jeder Änderung an einer Datei des Spiels CACHE_VERSION hochzählen,
// damit die neue Version beim nächsten Start auf den Geräten ankommt.
const CACHE_VERSION = 4;
const CACHE = 'threedrazer-v' + CACHE_VERSION;

// Alle Pfade relativ zum Ort von sw.js (Spiel läuft unter /threedrazer/)
const FILES = [
  './',
  'index.html',
  'manifest.json',
  'vendor/three.min.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-192.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('threedrazer-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(c =>
      c.match(req, { ignoreSearch: true }).then(hit => {
        if (hit) return hit;
        return fetch(req).then(res => {
          if (res.ok && res.type === 'basic') c.put(req, res.clone());
          return res;
        }).catch(() => req.mode === 'navigate' ? c.match('index.html') : Response.error());
      })
    )
  );
});
