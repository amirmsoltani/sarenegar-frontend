import { StoreUtils } from "@/store/Store.utils";
import {
  apiDrugDosageRemindersDosemanagerRemindersList,
  ApiDrugDosageRemindersDosemanagerRemindersListParams,
} from "@/services/api";
import { DateService } from "@/services/DateService";

export const getDosesList = StoreUtils.createAsyncThunk(
  "medicine/dosesList",
  async (params: ApiDrugDosageRemindersDosemanagerRemindersListParams) => {
    const _date = DateService.setToGlobalFormat(new Date(params.date!));

    const response = await apiDrugDosageRemindersDosemanagerRemindersList({
      ...params,
      date: _date,
      page_size: 100,
      is_taken: false,
    });

    return { ...response.data, date: params.date };
  },
);
