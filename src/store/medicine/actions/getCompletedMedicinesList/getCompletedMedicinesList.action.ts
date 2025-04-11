import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageDosemanagerDrugDosageRetrieve } from "@/services/api";

export const getCompletedMedicinesListAction = StoreUtils.createAsyncThunk("medicine/getCompletedMedicinesList", async () => {
  const response = await apiDrugDosageDosemanagerDrugDosageRetrieve({ page_size: 100, is_expired: true });

  return response.data;
});
