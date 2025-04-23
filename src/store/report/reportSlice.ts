import { StoreUtils } from "../Store.utils";
import { createSlice } from "@reduxjs/toolkit";
import { TReportSlice } from "./reportSlice.types";
import { getAnalyticsAction } from "./actions/getAnalytics/getAnalytics.action";
import { getAnalyticsSummaryAction } from "./actions/getAnalyticsSummary/getAnalyticsSummary.action";

const init: TReportSlice = { analytics: StoreUtils.normalActionInitState, analyticsSummary: StoreUtils.normalActionInitState };

const reportSlice = createSlice({
  name: "reports",
  initialState: init,
  reducers: {
    resetSummaryReport(state) {
      state.analyticsSummary = StoreUtils.normalActionInitState;
    },
  },
  extraReducers: (builder) => {
    StoreUtils.normalAction(getAnalyticsAction, builder, "analytics");
    StoreUtils.normalAction(getAnalyticsSummaryAction, builder, "analyticsSummary");
  },
});

const reportReducer = reportSlice.reducer;

export const { resetSummaryReport } = reportSlice.actions;

export default reportReducer;
