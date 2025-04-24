import { StoreUtils } from "@/store/Store.utils.ts";
import { apiNotificationNotificationsMarkRead } from "@/services/api.ts";
import { getNotReadNotificationAction } from "@/store/notification/actions/notReadNotification/notReadNotification.ts";

export const markAsReadAction = StoreUtils.createAsyncThunk(
  "notification/markAsRead",
  async (
    payload: {
      id: number;
    },
    thunkAPI,
  ) => {
    const response = await apiNotificationNotificationsMarkRead(payload.id);

    thunkAPI.dispatch(getNotReadNotificationAction(undefined));

    return response.data;
  },
);
