import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageDosemanagerDrugDosageRetrieve2 } from "@/services/api";

type TGetMedicineInfoAction = { id: number };

export const getMedicineInfoAction = StoreUtils.createAsyncThunk(
  "medicine/getMedicineInfo",
  async ({ id }: TGetMedicineInfoAction) => {
    const response = await apiDrugDosageDosemanagerDrugDosageRetrieve2(id);

    return response.data;
  },
);
