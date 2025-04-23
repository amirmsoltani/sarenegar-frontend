import { getNowDate } from "@/helper/helper";
import { DateService } from "@/services/DateService";

const RANGE_LENGTH = 14;

export const today = getNowDate();

export const genRowCalenderList = (currentDate: string) => {
  const date = new Date(currentDate);

  const current = {
    date: DateService.setToGlobalFormat(date),
    day: DateService.customTranslate(date, { day: "numeric" }),
    weekday: DateService.customTranslate(date, { weekday: "short" }),
  };

  const before = new Array(RANGE_LENGTH).fill("").map(() => {
    date.setDate(date.getDate() - 1);

    return {
      date: DateService.setToGlobalFormat(date),
      day: DateService.customTranslate(date, { day: "numeric" }),
      weekday: DateService.customTranslate(date, { weekday: "short" }),
    };
  });

  date.setDate(date.getDate() + RANGE_LENGTH);

  const after = new Array(RANGE_LENGTH).fill("").map(() => {
    date.setDate(date.getDate() + 1);

    return {
      date: DateService.setToGlobalFormat(date),
      day: DateService.customTranslate(date, { day: "numeric" }),
      weekday: DateService.customTranslate(date, { weekday: "short" }),
    };
  });

  return [...before.reverse(), current, ...after];
};
