import { StoreUtils } from "@/store/Store.utils";
import { apiEpilepsyEpilepsyEventAnalytics } from "@/services/api";

export const getCalendarEpilepsyEventsAction = StoreUtils.createAsyncThunk(
  "epilepsy/addEpilepsyEvent",
  async (range: { startDate: string; endDate: string }) => {
    const response = await apiEpilepsyEpilepsyEventAnalytics({
      end_date: range.endDate,
      start_date: range.startDate,
      period_type: "month",
    });
    const events: Record<string, number> = {};

    response.data.selected_period.events_distribution.forEach((event) => {
      events[event.period] = event.count;
    });

    return events;
  },
);
