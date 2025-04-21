import jalaali from "jalaali-js";
import { jalaliMonths } from "@/helper/helper";
import { StoreUtils } from "@/store/Store.utils";
import { reportTypes } from "@/app/Reports/useReports";
import { apiEpilepsyEpilepsyEventAnalytics, EventDistribution } from "@/services/api";

type TGetAnalyticsAction = { type: string; start: string; end: string };

export const getAnalyticsAction = StoreUtils.createAsyncThunk("report/analytics", async (props: TGetAnalyticsAction) => {
  const { data } = await apiEpilepsyEpilepsyEventAnalytics({ end_date: props.end, start_date: props.start });

  if (props.type === reportTypes[2].value) {
    const cloned: EventDistribution[] = JSON.parse(JSON.stringify(data.selected_period.events_distribution));

    const { jy } = jalaali.toJalaali(new Date(props.start));

    const result = jalaliMonths.reduce<{ passed: number; data: EventDistribution[] }>(
      (prev, current) => {
        const daysCount = jalaali.jalaaliMonthLength(jy, +current.value);
        const sum = cloned.slice(prev.passed, prev.passed + daysCount).reduce((prev, current) => prev + current.count, 0);
        prev.data.push({ period: "", count: sum });
        prev.passed += daysCount;
        return prev;
      },
      { passed: 0, data: [] },
    );

    data.selected_period.events_distribution = result.data;
  }

  return data;
});
