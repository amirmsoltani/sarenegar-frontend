import { useCustomState } from "@/common/UseCustomState/UseCustomState.ts";
import { DateService } from "@/services/DateService.ts";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { getCalendarEventsAction } from "@/store/calendar/actions/getCalendarEvents/getCalendarEvents.ts";
import { getEpilepsyEventListAction } from "@/store/epilepsy/actions/getEpilepsyEventList/getEpilepsyEventList.action.ts";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";
import { useEffect } from "react";

export const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

type Day = { type: "empty" } | { type: "regular"; date: string; text: string };

interface IState {
  monthStart: string;
  monthEnd: string;
  title: string;
  days: Array<Day>;
}

export function useCalendar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { date, mode } = useParams<{ date: string; mode: "attack" | "medicine" }>();
  const events = useAppSelector((store) => store.calendar.calendarEventObject);

  useEffect(() => {
    dispatch(getCalendarEventsAction({ startDate: state.monthStart, endDate: state.monthEnd, mode: mode! }));
    // eslint-disable-next-line
  }, [mode, dispatch]);

  const { setState, state } = useCustomState<IState>(() => {
    const data = DateService.createMonth(new Date(date!)) as unknown as IState;
    dispatch(getCalendarEventsAction({ startDate: data.monthStart, endDate: data.monthEnd, mode: mode! }));
    return data;
  });

  function nextMonthHandler() {
    const endDate = new Date(state.monthEnd);
    endDate.setMonth(endDate.getMonth() + 1);
    const data = DateService.createMonth(endDate) as unknown as IState;
    dispatch(getCalendarEventsAction({ startDate: data.monthStart, endDate: data.monthEnd, mode: mode! }));
    setState(data);
  }

  function previousMonthHandler() {
    const startDate = new Date(state.monthStart);
    startDate.setMonth(startDate.getMonth() - 1);
    const data = DateService.createMonth(startDate) as unknown as IState;
    dispatch(getCalendarEventsAction({ startDate: data.monthStart, endDate: data.monthEnd, mode: mode! }));
    setState(data);
  }

  function changeModeHandler(mode: "attack" | "medicine") {
    return () => {
      navigate(routes.calendar.href(undefined,mode));
    };
  }

  function dayClickHandler(day: Day) {
    return () => {
      if (day.type === "empty") return;
      const globalFormat = DateService.setToGlobalFormat(new Date(day.date));
      if (mode === "attack") {
        if (events.data![day.date]) {
          dispatch(getEpilepsyEventListAction({ date: globalFormat }));
          navigate(routes.calendar.modals.events.href(globalFormat,"attack"));
        } else navigate(routes.calendar.href(day.date,"attack"));
      }

      if (mode === "medicine") {
        if (events.data![day.date]) {
          navigate(routes.calendar.modals.events.href(globalFormat,"medicine"));
        } else navigate(routes.calendar.href(day.date,"medicine"));
      }
    };
  }

  return {
    days: state.days,
    date: DateService.getGregorianDate(date),
    mode,
    changeModeHandler,
    nextMonthHandler,
    previousMonthHandler,
    dayClickHandler,
    title: state.title,
    events: events.status === "success" ? events.data! : {},
    isLoading: events.status === "loading",
  };
}
