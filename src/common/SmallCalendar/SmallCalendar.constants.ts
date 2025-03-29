import { getNow } from "@/helper/helper";
import { DateService } from "@/services/DateService";

const DAY_IN_MILLISECOND = 24 * 60 * 60 * 1000;

const genList = () => {
  const now = Date.now();
  const date = getNow();

  const today = {
    date,
    day: DateService.custom(date, { day: "numeric" }),
    weekday: DateService.custom(date, { weekday: "short" }),
  };

  const before = new Array(14).fill("").map((_, index) => {
    const date = new Date(now - (index + 1) * DAY_IN_MILLISECOND).toLocaleDateString().replace(/\//g, "-");
    return { date, day: DateService.custom(date, { day: "numeric" }), weekday: DateService.custom(date, { weekday: "short" }) };
  });
  const after = new Array(14).fill("").map((_, index) => {
    const date = new Date(now + (index + 1) * DAY_IN_MILLISECOND).toLocaleDateString().replace(/\//g, "-");
    return { date, day: DateService.custom(date, { day: "numeric" }), weekday: DateService.custom(date, { weekday: "short" }) };
  });

  return [...before.reverse(), today, ...after];
};

export const calendarList = genList();
