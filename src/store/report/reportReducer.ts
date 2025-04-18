import { StoreUtils } from "../Store.utils";
import { createReducer } from "@reduxjs/toolkit";
import { TReportReducer } from "./reportReducer.types";
import { getAnalyticsAction } from "./actions/getAnalytics/getAnalytics.action";

const init: TReportReducer = { analytics: StoreUtils.normalActionInitState };

const reportReducer = createReducer(init, (builder) => {
  StoreUtils.normalAction(getAnalyticsAction, builder, "analytics");
});

export default reportReducer;
