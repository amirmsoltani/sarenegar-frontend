import { DateService } from "./services/DateService.js";

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
  console.log('Push event received:', event.data.text(),event.data.json());
  const data = event.data.json();
  const options = {
    title:`یادآور مصرف دارو ${data.drug_title}`,
    body: `پادآوری برای مصرف دارو در تاریخ ${DateService.getDate(data.drug_dosage_reminder_date)} و ساعت ${"ساعت ارسال نمی شود"} برای جزئیات بیشتر کلیک کنید`,
    icon: '/icon-512.png',
    badge: '/favicon.ico',
    sound: '/notification-sound.ogg',
    vibrate: [200, 100, 200],
    data
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  console.log(event.notification.data,"****************");
  const [year,month,day] = event.notification.data.drug_dosage_reminder_date.split("-");
  event.waitUntil(
    clients.openWindow(`https://dev.epical.ir/${month}-${day}-${year}/medicine-info/${event.notification.data.drug_dosage_id}`)
  );
});