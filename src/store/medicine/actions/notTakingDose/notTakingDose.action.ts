import { StoreUtils } from "@/store/Store.utils";
import { changeDoseStatus } from "../../medicineSlice";
import { apiDrugDosageRemindersDosemanagerReminderToggleTaken } from "@/services/api";

type TNotTakingDoseAction = { id: number };

export const notTakingDoseAction = StoreUtils.createAsyncThunk(
  "medicine/notTakingDose",
  async ({ id }: TNotTakingDoseAction, thunk) => {
    const response = await apiDrugDosageRemindersDosemanagerReminderToggleTaken(id, { reminder_id: id, taken: false });

    thunk.dispatch(changeDoseStatus(id));

    return response.data;
  },
);
