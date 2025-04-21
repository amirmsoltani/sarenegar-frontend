import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageDosemanagerDrugDosageList } from "@/services/api";

export const getCompletedMedicinesListAction = StoreUtils.createAsyncThunk("medicine/getCompletedMedicinesList", async () => {
  const response = await apiDrugDosageDosemanagerDrugDosageList({ page_size: 100, is_expired: true, is_completed: true });

  return response.data;
});
