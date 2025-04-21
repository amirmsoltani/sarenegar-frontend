import { INormalState } from "../store.types";
import { EpilepsyAnalytics, EpilepsySummary } from "@/services/api";

export type TReportReducer = {
  analytics: INormalState<EpilepsyAnalytics>;
  analyticsSummary: INormalState<EpilepsySummary & { date: string }>;
};
