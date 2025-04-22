import { StoreUtils } from "@/store/Store.utils";
import { apiCalendarCalendarEpilepsyEventsList, apiCalendarCalendarMedicationEventsList } from "@/services/api";
import { DateService } from "@/services/DateService.ts";

export const getCalendarEventsAction = StoreUtils.createAsyncThunk(
  "calendar/addEpilepsyEvent",
  async (range: { startDate: string; endDate: string; mode: "attack" | "medicine" }) => {
    const response = await (
      range.mode === "attack" ? apiCalendarCalendarEpilepsyEventsList : apiCalendarCalendarMedicationEventsList
    )({
      end_date: range.endDate,
      start_date: range.startDate,
    });
    const events: Record<string, number> = {};

    response.data.forEach((event) => {
      const date = DateService.getGregorianDate(event.date);
      if (events[date]) events[date] += event.count;
      else events[date] = event.count;
    });

    return events;
  },
);
