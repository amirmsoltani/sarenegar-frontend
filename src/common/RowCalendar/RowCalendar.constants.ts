import { getNowDate } from "@/helper/helper";
import { DateService } from "@/services/DateService";

const DAY_IN_MILLISECOND = 24 * 60 * 60 * 1000;

export const today = getNowDate();

const genList = () => {
  const now = Date.now();

  const _today = {
    date: today,
    day: DateService.custom(today, { day: "numeric" }),
    weekday: DateService.custom(today, { weekday: "short" }),
  };

  const before = new Array(14).fill("").map((_, index) => {
    const date = DateService.replaceSlashWithDash(new Date(now - (index + 1) * DAY_IN_MILLISECOND).toLocaleDateString());
    return { date, day: DateService.custom(date, { day: "numeric" }), weekday: DateService.custom(date, { weekday: "short" }) };
  });
  const after = new Array(14).fill("").map((_, index) => {
    const date = DateService.replaceSlashWithDash(new Date(now + (index + 1) * DAY_IN_MILLISECOND).toLocaleDateString());
    return { date, day: DateService.custom(date, { day: "numeric" }), weekday: DateService.custom(date, { weekday: "short" }) };
  });

  return [...before.reverse(), _today, ...after];
};

export const calendarList = genList();
