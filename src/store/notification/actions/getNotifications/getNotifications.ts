import { StoreUtils } from "@/store/Store.utils.ts";
import { apiNotificationNotificationsList } from "@/services/api.ts";
import { INotification } from "@/store/notification/NotificationSlice.types.ts";
import { DateService } from "@/services/DateService.ts";

export const getNotificationsAction = StoreUtils.createAsyncThunk("notification/getNotifications", async () => {
  const response = await apiNotificationNotificationsList({ page_size: 100 });

  const notificationList: INotification[] = response.data.results.map((notification) => {
    const data: any = notification.data;
    return {
      notificationID: notification.id!,
      reminderID: data.reminder_id,
      title: "یادآوری زمان مصرف",
      message: `اکنون زمان مصرف داروی ${data.drug_title} است لطفا نسبت به مصرف آن اقدام فرمایید.  `,
      date: DateService.getDate(data.reminder_time),
      time: DateService.getTime(data.reminder_time),
      dateTime: data.reminder_time!,
      isRead: notification.is_read!,
    };
  });


  return notificationList;
});