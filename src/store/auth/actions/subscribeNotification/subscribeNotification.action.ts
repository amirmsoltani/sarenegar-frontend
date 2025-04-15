import { StoreUtils } from "@/store/Store.utils.ts";

import { NotificationHelper } from "@/helper/notification.ts";
import { apiNotificationNotificationRegisterCreate } from "@/services/api.ts";

export const subscribeNotificationAction = StoreUtils.createAsyncThunk("auth/subscribeNotification", async () => {
  if (await NotificationHelper.requestPermission()) {
    const subscription = await NotificationHelper.subscribeUser();
    if (subscription) {
      const subscribeJson = subscription.toJSON();
      if (subscribeJson.keys) {
        await apiNotificationNotificationRegisterCreate({
          endpoint: subscribeJson.endpoint!,
          p256dh: (subscribeJson.keys as Record<string, string>).p256dh,
          auth: (subscribeJson.keys as Record<string, string>).auth,
        });
      }
    }
  }

  return true;
});
