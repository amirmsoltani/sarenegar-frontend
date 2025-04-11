import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageDosemanagerDrugDosageRetrieve } from "@/services/api";

export const getCurrentMedicinesListAction = StoreUtils.createAsyncThunk("medicine/getCurrentMedicinesList", async () => {
  const response = await apiDrugDosageDosemanagerDrugDosageRetrieve({ page_size: 100, is_expired: false });

  return response.data;
});
