import { DateService } from "@/services/DateService";

export const reportTypes = [
  { label: "هفتگی", value: "weekly", ...DateService.getWeekRange() },
  { label: "ماهیانه", value: "monthly", ...DateService.getMonthRange() },
  { label: "سالیانه", value: "yearly", ...DateService.getYearRange() },
];
