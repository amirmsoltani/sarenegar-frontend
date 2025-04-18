import { useParams } from "react-router-dom";
import { DateService } from "@/services/DateService";
import { reportTypes } from "@/app/Reports/useReports";

export const useReportsLayout = () => {
  const { type, start: _start, end: _end } = useParams();

  let isValid = false;

  if (type === reportTypes[0].value) {
    const { start, end } = DateService.getWeekRange(_start);
    if (start === _start && end === _end) isValid = true;
  } else if (type === reportTypes[1].value) {
    const { start, end } = DateService.getMonthRange(_start);
    if (start === _start && end === _end) isValid = true;
  } else if (type === reportTypes[2].value) {
    const { start, end } = DateService.getYearRange(_start);
    if (start === _start && end === _end) isValid = true;
  }

  return { isValid };
};
