import { StoreUtils } from "@/store/Store.utils";
import { changeDoseStatus } from "@/store/medicine/medicineSlice";
import { calendarChangeDoseStatus } from "@/store/calendar/calendarSlice.ts";
import { apiDrugDosageRemindersDosemanagerReminderToggleTaken } from "@/services/api";

type TCalendarTakeDoseAction = { id: number };

export const calendarTakeDoseAction = StoreUtils.createAsyncThunk(
  "calendar/takeDose",
  async ({ id }: TCalendarTakeDoseAction, thunk) => {
    const response = await apiDrugDosageRemindersDosemanagerReminderToggleTaken(id, { reminder_id: id, taken: true });

    thunk.dispatch(calendarChangeDoseStatus(id));

    thunk.dispatch(changeDoseStatus(id));

    return response.data;
  },
);
