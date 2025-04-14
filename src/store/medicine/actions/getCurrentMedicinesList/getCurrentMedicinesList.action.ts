import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageDosemanagerDrugDosageList } from "@/services/api";

export const getCurrentMedicinesListAction = StoreUtils.createAsyncThunk("medicine/getCurrentMedicinesList", async () => {
  const response = await apiDrugDosageDosemanagerDrugDosageList({ page_size: 100, is_expired: false });

  return response.data;
});
