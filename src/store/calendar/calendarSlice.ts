import { StoreUtils } from "../Store.utils";
import { TCalendarSlice } from "./calendarSlice.types.ts";
import { createSlice } from "@reduxjs/toolkit";
import { getCalendarEpilepsyEventsAction } from "@/store/calendar/actions/getCalendarEpilepsyEvents/getCalendarEpilepsyEvents.ts";

const initialState: TCalendarSlice = {
  epilepsyEventObject: StoreUtils.normalActionInitState,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    StoreUtils.normalAction(getCalendarEpilepsyEventsAction, builder, "epilepsyEventObject");

    StoreUtils.clearState(builder, "calendar");
  },
});

const calendarReducer = calendarSlice.reducer;

export const {} = calendarSlice.actions;

export default calendarReducer;
