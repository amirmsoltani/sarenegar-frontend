import { INormalState } from "../store.types";
import { EpilepsyAnalytics, EpilepsySummary } from "@/services/api";

export type TReportSlice = {
  analytics: INormalState<EpilepsyAnalytics>;
  analyticsSummary: INormalState<EpilepsySummary & { date: string }>;
};
