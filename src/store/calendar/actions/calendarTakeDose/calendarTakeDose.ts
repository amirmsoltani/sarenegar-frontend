import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageRemindersDosemanagerReminderToggleTaken } from "@/services/api";
import { calendarChangeDoseStatus } from "@/store/calendar/calendarSlice.ts";

type TCalendarTakeDoseAction = { id: number };

export const calendarTakeDoseAction = StoreUtils.createAsyncThunk(
  "calendar/takeDose",
  async ({ id }: TCalendarTakeDoseAction, thunk) => {
    const response = await apiDrugDosageRemindersDosemanagerReminderToggleTaken(id, { reminder_id: id, taken: true });

    thunk.dispatch(calendarChangeDoseStatus(id));

    return response.data;
  },
);
