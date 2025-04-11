import { StoreUtils } from "@/store/Store.utils";

type TCompleteMedicineAction = { id: number };

export const completeMedicineAction = StoreUtils.createAsyncThunk(
  "medicine/completeMedicine",
  async ({ id }: TCompleteMedicineAction) => {
    console.log(id);
    // const response = await apiDrugDosageDosemanagerDrugDosageDestroy(id);

    // thunk.dispatch(deleteMedicine(id));

    // return response.data;

    return null;
  },
);
