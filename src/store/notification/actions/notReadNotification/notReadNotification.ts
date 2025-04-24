import { StoreUtils } from "@/store/Store.utils.ts";
import { apiNotificationNotificationsList } from "@/services/api.ts";

export const getNotReadNotificationAction = StoreUtils.createAsyncThunk("notification/notReadNotification", async () => {
  const response = await apiNotificationNotificationsList({is_read:false,page_size:1});

  return response.data.count;
});
