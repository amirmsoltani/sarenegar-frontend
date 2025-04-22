import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageRemindersDosemanagerReminderToggleTaken } from "@/services/api";
import { calendarChangeDoseStatus } from "@/store/calendar/calendarSlice.ts";

type TCalendarNotTakeDoseAction = { id: number };

export const calendarNotTakeDoseAction = StoreUtils.createAsyncThunk(
  "calendar/notTakeDose",
  async ({ id }: TCalendarNotTakeDoseAction, thunk) => {
    const response = await apiDrugDosageRemindersDosemanagerReminderToggleTaken(id, { reminder_id: id, taken: false });

    thunk.dispatch(calendarChangeDoseStatus(id));

    return response.data;
  },
);
