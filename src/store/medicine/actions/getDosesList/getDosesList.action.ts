import { StoreUtils } from "@/store/Store.utils";
import { DateService } from "@/services/DateService";
import {
  apiDrugDosageRemindersDosemanagerRemindersList,
  ApiDrugDosageRemindersDosemanagerRemindersListParams,
} from "@/services/api";

export const getDosesList = StoreUtils.createAsyncThunk(
  "medicine/dosesList",
  async (params: ApiDrugDosageRemindersDosemanagerRemindersListParams) => {
    const _date = DateService.setToGlobalFormat(new Date(params.date!));

    const response = await apiDrugDosageRemindersDosemanagerRemindersList({ ...params, date: _date, page_size: 100 });

    return { ...response.data, date: params.date };
  },
);
