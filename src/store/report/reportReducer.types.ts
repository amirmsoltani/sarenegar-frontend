import { INormalState } from "../store.types";
import { EpilepsyAnalytics } from "@/services/api";

export type TReportReducer = {
  analytics: INormalState<EpilepsyAnalytics>;
};
