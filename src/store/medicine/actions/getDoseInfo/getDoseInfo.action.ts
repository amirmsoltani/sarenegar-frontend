import { StoreUtils } from "@/store/Store.utils";
import { apiDrugDosageRemindersDosemanagerReminderDetail } from "@/services/api";

type TGetDoseInfoAction = { id: number };

export const getDoseInfoAction = StoreUtils.createAsyncThunk("medicine/getDoseInfo", async ({ id }: TGetDoseInfoAction) => {
  const { data } = await apiDrugDosageRemindersDosemanagerReminderDetail(id);

  return data;
});
