import { StoreUtils } from "@/store/Store.utils";
import { apiEpilepsyEpilepsyRetrieve } from "@/services/api";

type TGetEpilepsyEventListAction = { date: string };

export const getEpilepsyEventListAction = StoreUtils.createAsyncThunk(
  "epilepsy/getEpilepsyEventList",
  async ({ date }: TGetEpilepsyEventListAction) => {
    const [month, day, year] = date.split("-");
    const _date = `${year}/${month}/${day}`;

    const response = await apiEpilepsyEpilepsyRetrieve({ time_of_occurrence: _date });

    return { ...response.data, date };
  },
);
