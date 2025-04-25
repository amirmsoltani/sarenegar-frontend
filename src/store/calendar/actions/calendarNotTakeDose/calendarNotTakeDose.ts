import { StoreUtils } from "@/store/Store.utils";
import { changeDoseStatus } from "@/store/medicine/medicineSlice";
import { calendarChangeDoseStatus } from "@/store/calendar/calendarSlice.ts";
import { apiDrugDosageRemindersDosemanagerReminderToggleTaken } from "@/services/api";

type TCalendarNotTakeDoseAction = { id: number };

export const calendarNotTakeDoseAction = StoreUtils.createAsyncThunk(
  "calendar/notTakeDose",
  async ({ id }: TCalendarNotTakeDoseAction, thunk) => {
    const response = await apiDrugDosageRemindersDosemanagerReminderToggleTaken(id, { reminder_id: id, taken: false });

    thunk.dispatch(calendarChangeDoseStatus(id));
    thunk.dispatch(changeDoseStatus(id));

    return response.data;
  },
);
