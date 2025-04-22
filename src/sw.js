import { DateService } from "./services/DateService.js";
import { api } from "./services/api.instance.js";
import { apiNotificationNotificationsMarkRead } from "./services/api.js";

const CACHE_NAME = "my-app-cache-v1";
const urlsToCache = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache.map((entry) => entry.url))));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
self.addEventListener("push", (event) => {
  const data = event.data.json().data;
  console.log(data, "*****************");
  const options = {
    body: ` یادآوری برای مصرف دارو${data.drug_title} در تاریخ ${DateService.getDate(data.reminder_date)} و ساعت ${DateService.getTime(data.reminder_date)}`,
    icon: "/icon-512.png",
    badge: "/favicon.ico",
    silent: false,
    requireInteraction: true,
    dir: "rtl",
    data,
  };
  event.waitUntil(self.registration.showNotification(`یادآور مصرف دارو ${data.drug_title}`, options));
});

self.addEventListener("notificationclick", (event) => {
  const data = event.notification.data;
  console.log(data, "*****************");
  const date = new Date(data.reminder_date);
  event.notification.close();
  apiNotificationNotificationsMarkRead(data.notification_id)
    .then(() => {
      console.log("okkkkkkkkkkkkk");
    })
    .catch(() => {
      console.log("error");
    });
  event.waitUntil(
    clients.openWindow(
      `https://dev.epical.ir/${DateService.setToGlobalFormat(date)}/calendar/medicine/events/${data.reminder_id}`,
    ),
  );
});
