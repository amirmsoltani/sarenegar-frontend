const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = self.__WB_MANIFEST;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache.map(entry => entry.url)))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
self.addEventListener('push', event => {
  console.log('Push event received:', event);
  const options = {
    body: event.data.text(),
    icon: '/icon-512.png',
    badge: '/favicon.ico'
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://dev.epical.ir/')
  );
});