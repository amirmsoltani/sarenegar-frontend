import { routes } from "@/routes/routes";
import { reportTypes } from "../../useReports";
import { DateService } from "@/services/DateService";
import { useNavigate, useParams } from "react-router-dom";

const weekOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
const monthOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
const yearOptions: Intl.DateTimeFormatOptions = { year: "numeric" };

export const useReportsNavigation = () => {
  const navigate = useNavigate();
  const { type, start, end } = useParams();

  let { _start, _end } = { _start: "", _end: "" };

  if (type === reportTypes[0].value) {
    _start = DateService.customTranslate(start!, weekOptions);
    _end = DateService.customTranslate(end!, weekOptions);
  } else if (type === reportTypes[1].value) {
    _start = DateService.customTranslate(start!, monthOptions).split(" ").reverse().join(" ");
    _end = DateService.customTranslate(end!, monthOptions).split(" ").reverse().join(" ");
  } else {
    _start = `سال ${DateService.customTranslate(start!, yearOptions)}`;
    _end = `سال ${DateService.customTranslate(end!, yearOptions)}`;
  }

  const backwardNavigation = () => {
    let props = { start: "", end: "" };

    if (type === reportTypes[0].value) props = DateService.backwardWeek(start!);
    else if (type === reportTypes[1].value) props = DateService.backwardMonth(start!);
    else if (type === reportTypes[2].value) props = DateService.backwardYear(start!);

    navigate(routes.reportsInfo.href(type!, props.start, props.end));
  };

  const forwardNavigation = () => {
    let props = { start: "", end: "" };

    if (type === reportTypes[0].value) props = DateService.forwardWeek(end!);
    else if (type === reportTypes[1].value) props = DateService.forwardMonth(end!);
    else if (type === reportTypes[2].value) props = DateService.forwardYear(end!);

    navigate(routes.reportsInfo.href(type!, props.start, props.end));
  };

  return { type, start: _start, end: _end, forwardNavigation, backwardNavigation };
};
