import { Record } from "iconsax-react";
import { INormalState } from "@/store/store.types.ts";
import { ReminderDetail } from "@/services/api.ts";

export type TCalendarSlice = {
  calendarEventObject: INormalState<Record<string, number>>;
  reminders:INormalState<ReminderDetail[]>;
  takeDose:INormalState<null>;
  notTakeDose:INormalState<null>;
};
