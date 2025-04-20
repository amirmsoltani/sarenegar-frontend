import { Record } from "iconsax-react";
import { INormalState } from "@/store/store.types.ts";

export type TCalendarSlice = {
  epilepsyEventObject: INormalState<Record<string, number>>;
};
