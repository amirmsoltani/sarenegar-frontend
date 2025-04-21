import { StoreUtils } from "../Store.utils";
import { createReducer } from "@reduxjs/toolkit";
import { TReportReducer } from "./reportReducer.types";
import { getAnalyticsAction } from "./actions/getAnalytics/getAnalytics.action";
import { getAnalyticsSummaryAction } from "./actions/getAnalyticsSummary/getAnalyticsSummary.action";

const init: TReportReducer = { analytics: StoreUtils.normalActionInitState, analyticsSummary: StoreUtils.normalActionInitState };

const reportReducer = createReducer(init, (builder) => {
  StoreUtils.normalAction(getAnalyticsAction, builder, "analytics");
  StoreUtils.normalAction(getAnalyticsSummaryAction, builder, "analyticsSummary");
});

export default reportReducer;
