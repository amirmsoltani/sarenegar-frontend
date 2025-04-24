import { StoreUtils } from "@/store/Store.utils.ts";
import { apiNotificationNotificationsMarkAllRead } from "@/services/api.ts";
import { getNotificationsAction } from "@/store/notification/actions/getNotifications/getNotifications.ts";
import { getNotReadNotificationAction } from "@/store/notification/actions/notReadNotification/notReadNotification.ts";

export const markAllAsReadAction = StoreUtils.createAsyncThunk("notification/markAllAsRead", async (_, thunkAPI) => {
  const response = await apiNotificationNotificationsMarkAllRead();
  thunkAPI.dispatch(getNotificationsAction(undefined));
  thunkAPI.dispatch(getNotReadNotificationAction(undefined));


  return response.data;
});
