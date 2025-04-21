import { StoreUtils } from "@/store/Store.utils";
import { DateService } from "@/services/DateService";
import { apiEpilepsyEpilepsyEventSummary } from "@/services/api";

type TGetAnalyticsSummaryAction = { date: string };

export const getAnalyticsSummaryAction = StoreUtils.createAsyncThunk(
  "report/summaryAnalytics",
  async ({ date }: TGetAnalyticsSummaryAction) => {
    const { start, end } = DateService.getMonthRange(date);

    const response = await apiEpilepsyEpilepsyEventSummary({ start_date: start, end_date: end });

    return { ...response.data, date };
  },
);
