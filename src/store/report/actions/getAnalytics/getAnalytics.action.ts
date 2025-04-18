import { StoreUtils } from "@/store/Store.utils";
import { apiEpilepsyEpilepsyEventAnalytics, ApiEpilepsyEpilepsyEventAnalyticsPeriodType } from "@/services/api";

type TGetAnalyticsAction = { type: string; start: string; end: string };

export const getAnalyticsAction = StoreUtils.createAsyncThunk("report/analytics", async (props: TGetAnalyticsAction) => {
  const response = await apiEpilepsyEpilepsyEventAnalytics({
    end_date: props.end,
    start_date: props.start,
    period_type: props.type.replaceAll("ly", "") as ApiEpilepsyEpilepsyEventAnalyticsPeriodType,
  });

  return response.data;
});
