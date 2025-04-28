import { getNowDate } from "@/helper/helper";
import { DateService } from "@/services/DateService";
import { CALENDAR_RANGE } from "@/constants/constants";

export const today = getNowDate();

export const genRowCalenderList = (currentDate?: string) => {
  const date = currentDate ? new Date(currentDate) : new Date();

  const current = {
    date: DateService.setToGlobalFormat(date),
    day: DateService.customTranslate(date, { day: "numeric" }),
    weekday: DateService.customTranslate(date, { weekday: "short" }),
  };

  const before = new Array(CALENDAR_RANGE).fill("").map(() => {
    date.setDate(date.getDate() - 1);

    return {
      date: DateService.setToGlobalFormat(date),
      day: DateService.customTranslate(date, { day: "numeric" }),
      weekday: DateService.customTranslate(date, { weekday: "short" }),
    };
  });

  date.setDate(date.getDate() + CALENDAR_RANGE);

  const after = new Array(CALENDAR_RANGE).fill("").map(() => {
    date.setDate(date.getDate() + 1);

    return {
      date: DateService.setToGlobalFormat(date),
      day: DateService.customTranslate(date, { day: "numeric" }),
      weekday: DateService.customTranslate(date, { weekday: "short" }),
    };
  });

  return [...before.reverse(), current, ...after];
};
