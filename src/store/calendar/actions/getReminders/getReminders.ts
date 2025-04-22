import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageRemindersDosemanagerRemindersList } from "@/services/api.ts";

export const getReminders = StoreUtils.createAsyncThunk("calendar/reminders", async (options: { date: string }) => {
  const response = await apiDrugDosageRemindersDosemanagerRemindersList({
    date: options.date,
    page_size: 100,
    page: 1,
  });


  return response.data.results;
});
