import { StoreUtils } from "@/store/Store.utils";
import { DateService } from "@/services/DateService";
import { apiEpilepsyEpilepsyEventList } from "@/services/api";

type TGetEpilepsyEventListAction = { date: string };

export const getEpilepsyEventListAction = StoreUtils.createAsyncThunk(
  "epilepsy/getEpilepsyEventList",
  async ({ date }: TGetEpilepsyEventListAction) => {
    const _date = DateService.setToGlobalFormat(new Date(DateService.GD(date)));

    const response = await apiEpilepsyEpilepsyEventList({ time_of_occurrence: _date });

    return { ...response.data, date };
  },
);
