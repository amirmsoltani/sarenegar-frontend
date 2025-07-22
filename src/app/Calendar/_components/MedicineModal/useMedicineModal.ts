import { toast } from "react-toastify";
import { shallowEqual } from "react-redux";
import { routes } from "@/routes/routes.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler.ts";
import { getReminders } from "@/store/calendar/actions/getReminders/getReminders.ts";
import { calendarTakeDoseAction } from "@/store/calendar/actions/calendarTakeDose/calendarTakeDose.ts";

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

  const { reminders, completed, notCompleted } = useAppSelector(
    (store) => ({
      reminders: store.calendar.reminders,
      completed: store.calendar.takeDose,
      notCompleted: store.calendar.notTakeDose,
    }),
    shallowEqual,
  );

  useStatusHandler({
    state: reminders,
    onComponentDidMount: getRemindersHandler,
  });

  function closeHandler() {
    navigate(routes.calendar.href(date, "medicine"));
  }

  useStatusHandler({
    state: completed,
    onSuccess: () => toast.success("یادآوری ثبت شد: دارو رو مصرف کردی"),
  });

  useStatusHandler({
    state: notCompleted,
    onSuccess: () => toast.success("یادآوری اصلاح شد: این دارو رو مصرف نکردی"),
  });

  return { date, reminders, getRemindersHandler, completeDoseHandler, openModalHandler, closeHandler, completed };
}
