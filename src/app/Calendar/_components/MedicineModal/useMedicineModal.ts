import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler.ts";
import { getReminders } from "@/store/calendar/actions/getReminders/getReminders.ts";
import { shallowEqual } from "react-redux";
import { calendarTakeDoseAction } from "@/store/calendar/actions/calendarTakeDose/calendarTakeDose.ts";
import { routes } from "@/routes/routes.tsx";

export function useMedicineModal() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { date } = useParams<{ date: string }>();

  function getRemindersHandler() {
    dispatch(getReminders({ date: date! }));
  }

  function completeDoseHandler(id: number) {
    return () => {
      dispatch(calendarTakeDoseAction({ id }));
    };
  }

  function openModalHandler(id: number) {
    return () => {
      navigate(routes.calendar.modals.events.modals.takeDose.href(id));
    };
  }

  const { reminders, completed } = useAppSelector(
    (store) => ({ reminders: store.calendar.reminders, completed: store.calendar.takeDose }),
    shallowEqual,
  );

  useStatusHandler({
    state: reminders,
    onComponentDidMount: getRemindersHandler,
  });

  return { date, reminders, getRemindersHandler, completeDoseHandler, openModalHandler, completed };
}
