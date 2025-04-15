import { StoreUtils } from "@/store/Store.utils";
import { changeDoseStatus } from "../../medicineSlice";
import { apiDrugDosageRemindersDosemanagerReminderToggleTaken } from "@/services/api";

type TCompleteDoseAction = { id: number };

export const completeDoseAction = StoreUtils.createAsyncThunk(
  "medicine/completeDose",
  async ({ id }: TCompleteDoseAction, thunk) => {
    const response = await apiDrugDosageRemindersDosemanagerReminderToggleTaken(id);

    thunk.dispatch(changeDoseStatus(id));

    return response.data;
  },
);
