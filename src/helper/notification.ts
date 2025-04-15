export class NotificationHelper {
  static async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    } catch (error) {
      console.error("Permission request error:", error);
      return false;
    }
  }

  static async subscribeUser() {
    try {
      const registration = await navigator.serviceWorker.ready;
      return await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(import.meta.env.VITE_VAPID_PUBLIC_KEY),
      });
    } catch (error) {
      console.error("Subscription error:", error);
      return null;
    }
  }

  static urlBase64ToUint8Array(base64String: string) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}