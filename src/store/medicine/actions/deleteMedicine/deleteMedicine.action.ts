import { StoreUtils } from "@/store/Store.utils";
import { deleteMedicine } from "../../medicineSlice";
import { apiDrugDosageDosemanagerDrugDosageDelete } from "@/services/api";

type TDeleteMedicineAction = { id: number; is_expired: boolean };

export const deleteMedicineAction = StoreUtils.createAsyncThunk(
  "medicine/deleteMedicine",
  async ({ id, is_expired }: TDeleteMedicineAction, thunk) => {
    const response = await apiDrugDosageDosemanagerDrugDosageDelete(id);

    thunk.dispatch(deleteMedicine({ id, is_expired }));

    return response.data;
  },
);
