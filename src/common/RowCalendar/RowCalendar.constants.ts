import { getNowDate } from "@/helper/helper";
import { DateService } from "@/services/DateService";

const DAY_IN_MILLISECOND = 24 * 60 * 60 * 1000;

export const today = getNowDate();

const genList = () => {
  const now = Date.now();

  const _today = {
    date: today,
    day: DateService.customTranslate(today, { day: "numeric" }),
    weekday: DateService.customTranslate(today, { weekday: "short" }),
  };

  const before = new Array(14).fill("").map((_, index) => {
    const date = DateService.replaceSlashWithDash(
      DateService.setToGlobalFormat(new Date(now - (index + 1) * DAY_IN_MILLISECOND)),
    );
    return {
      date,
      day: DateService.customTranslate(date, { day: "numeric" }),
      weekday: DateService.customTranslate(date, { weekday: "short" }),
    };
  });

  const after = new Array(14).fill("").map((_, index) => {
    const date = DateService.replaceSlashWithDash(
      DateService.setToGlobalFormat(new Date(now + (index + 1) * DAY_IN_MILLISECOND)),
    );
    return {
      date,
      day: DateService.customTranslate(date, { day: "numeric" }),
      weekday: DateService.customTranslate(date, { weekday: "short" }),
    };
  });

  return [...before.reverse(), _today, ...after];
};

export const calendarList = genList();
