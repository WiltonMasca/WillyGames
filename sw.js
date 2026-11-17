/* WilyGames v14: conserva el juego para abrirlo sin conexión después de una primera visita online. */
const CACHE_NAME = 'wilygames-v14-2026-11-17';
const HOME = new URL('./index.html', self.registration.scope).toString();

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.add(HOME);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('wilygames-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return;
  event.respondWith((async () => {
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(HOME, response.clone());
      }
      return response;
    } catch (_error) {
      const cached = await caches.match(HOME);
      return cached || Response.error();
    }
  })());
});
