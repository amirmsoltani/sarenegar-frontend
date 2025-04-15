import { StoreUtils } from "@/store/Store.utils.ts";

import { NotificationHelper } from "@/helper/notification.ts";
// import { apiNotificationNotificationRegisterCreate } from "@/services/api.ts";

export const subscribeNotificationAction = StoreUtils.createAsyncThunk("auth/subscribeNotification", async () => {
  if (await NotificationHelper.requestPermission()) {
    const subscription = await NotificationHelper.subscribeUser();
    if (subscription) {
      const p256dh = subscription.getKey("p256dh");
      const auth = subscription.getKey("auth");
      if (p256dh && auth) {
        // const decoder = new TextDecoder("utf-8");
        console.log(subscription.endpoint, subscription.toJSON(), "******************");

        // await apiNotificationNotificationRegisterCreate({
        //   endpoint: subscription.endpoint,
        //   p256dh: p256dh,
        //   auth: decoder.decode(auth),
        // });
      }
    }
  }

  return true;
});
