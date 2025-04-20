import { useCustomState } from "@/common/UseCustomState/UseCustomState.ts";
import { DateService } from "@/services/DateService.ts";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { getCalendarEpilepsyEventsAction } from "@/store/calendar/actions/getCalendarEpilepsyEvents/getCalendarEpilepsyEvents.ts";
import { getEpilepsyEventListAction } from "@/store/epilepsy/actions/getEpilepsyEventList/getEpilepsyEventList.action.ts";
import { useNavigate } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";

export const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

type Day = { type: "empty" } | { type: "regular"; date: string; text: string };

interface IState {
  mode: "attack" | "medicine";
  monthStart: string;
  monthEnd: string;
  title: string;
  days: Array<Day>;
}

export function useCalendar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const events = useAppSelector((store) => store.calendar.epilepsyEventObject);

  const { setState, state } = useCustomState<IState>(() => {
    const data = DateService.createMonth() as unknown as IState;
    data["mode"] = "attack";
    dispatch(getCalendarEpilepsyEventsAction({ startDate: data.monthStart, endDate: data.monthEnd }));
    return data;
  });

  function nextMonthHandler() {
    const endDate = new Date(state.monthEnd);
    endDate.setMonth(endDate.getMonth() + 1);
    const data = DateService.createMonth(endDate) as unknown as IState;
    dispatch(getCalendarEpilepsyEventsAction({ startDate: data.monthStart, endDate: data.monthEnd }));
    setState(data);
  }

  function previousMonthHandler() {
    const startDate = new Date(state.monthStart);
    startDate.setMonth(startDate.getMonth() - 1);
    const data = DateService.createMonth(startDate) as unknown as IState;
    dispatch(getCalendarEpilepsyEventsAction({ startDate: data.monthStart, endDate: data.monthEnd }));
    setState(data);
  }

  function changeModeHandler(mode: "attack" | "medicine") {
    return () => {
      setState({ mode });
      dispatch(getCalendarEpilepsyEventsAction({ startDate: state.monthStart, endDate: state.monthEnd }));
    };
  }

  function dayClickHandler(day: Day) {
    return () => {
      if (day.type === "empty") return;
      if (state.mode === "attack") {
        const [year,month,_day] = day.date.split("-");
        dispatch(getEpilepsyEventListAction({ date: `${month}-${_day}-${year}` }));
        if(events.data![day.date])
        navigate(routes.calendar.modals.epilepsy.href(day.date));
        else navigate(routes.addEpilepsyEvent.href(`${month}-${_day}-${year}`));
      }
    };
  }

  return {
    days: state.days,
    mode: state.mode,
    changeModeHandler,
    nextMonthHandler,
    previousMonthHandler,
    dayClickHandler,
    title: state.title,
    events: events.status === "success" ? events.data! : {},
    isLoading: events.status === "loading",
  };
}
