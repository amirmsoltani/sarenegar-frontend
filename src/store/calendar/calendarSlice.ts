import { StoreUtils } from "../Store.utils";
import { TCalendarSlice } from "./calendarSlice.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCalendarEventsAction } from "@/store/calendar/actions/getCalendarEvents/getCalendarEvents.ts";
import { getReminders } from "@/store/calendar/actions/getReminders/getReminders.ts";
import { calendarTakeDoseAction } from "@/store/calendar/actions/calendarTakeDose/calendarTakeDose.ts";
import { calendarNotTakeDoseAction } from "@/store/calendar/actions/calendarNotTakeDose/calendarNotTakeDose.ts";

const initialState: TCalendarSlice = {
  calendarEventObject: StoreUtils.normalActionInitState,
  reminders: StoreUtils.normalActionInitState,
  takeDose: StoreUtils.normalActionInitState,
  notTakeDose:StoreUtils.normalActionInitState,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    calendarChangeDoseStatus: (state, action: PayloadAction<number>) => {
      const reminder = state.reminders.data?.find((reminder) => reminder.reminder_id === action.payload);
      if (reminder) reminder.taken = !reminder.taken;
    },
  },
  extraReducers: (builder) => {
    StoreUtils.normalAction(getCalendarEventsAction, builder, "calendarEventObject");
    StoreUtils.normalAction(calendarTakeDoseAction, builder, "takeDose");
    StoreUtils.normalAction(calendarNotTakeDoseAction, builder, "notTakeDose");
    StoreUtils.normalAction(getReminders, builder, "reminders");

    StoreUtils.clearState(builder, "calendar");
  },
});

export const { calendarChangeDoseStatus } = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;
