import { StoreUtils } from "@/store/Store.utils";
import { completeMedicine } from "../../medicineSlice";
import { apiDrugDosageDosemanagerDrugDosageComplete } from "@/services/api";

type TCompleteMedicineAction = { id: number };

export const completeMedicineAction = StoreUtils.createAsyncThunk(
  "medicine/completeMedicine",
  async ({ id }: TCompleteMedicineAction, thunk) => {
    const response = await apiDrugDosageDosemanagerDrugDosageComplete(id);

    thunk.dispatch(completeMedicine(response.data.drug_dosage));

    return response.data.drug_dosage;
  },
);
