import { StoreUtils } from "@/store/Store.utils";
import {
  apiDrugDosageRemindersDosemanagerRemindersList,
  ApiDrugDosageRemindersDosemanagerRemindersListParams,
} from "@/services/api";

export const getDosesList = StoreUtils.createAsyncThunk(
  "medicine/dosesList",
  async (params: ApiDrugDosageRemindersDosemanagerRemindersListParams) => {
    const [month, day, year] = params.date!.split("-");
    const _date = `${year}-${month}-${day}`;

    const response = await apiDrugDosageRemindersDosemanagerRemindersList({ ...params, date: _date, page_size: 100 });

    return { ...response.data, date: params.date };
  },
);
