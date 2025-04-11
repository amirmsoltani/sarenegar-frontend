import { StoreUtils } from "@/store/Store.utils";
import { deleteMedicine } from "../../medicineSlice";
import { apiDrugDosageDosemanagerDrugDosageDestroy } from "@/services/api";

type TDeleteMedicineAction = { id: number };

export const deleteMedicineAction = StoreUtils.createAsyncThunk(
  "medicine/deleteMedicine",
  async ({ id }: TDeleteMedicineAction, thunk) => {
    const response = await apiDrugDosageDosemanagerDrugDosageDestroy(id);

    thunk.dispatch(deleteMedicine(id));

    return response.data;
  },
);
