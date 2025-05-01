import { routes } from "@/routes/routes";
import { shallowEqual } from "react-redux";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { calendarNotTakeDoseAction } from "@/store/calendar/actions/calendarNotTakeDose/calendarNotTakeDose.ts";
import { calendarTakeDoseAction } from "@/store/calendar/actions/calendarTakeDose/calendarTakeDose.ts";
import { useEffect } from "react";
import { parseSearchParams } from "@/helper/searchParams.ts";
import { markAsReadAction } from "@/store/notification/actions/markAsRead/markAsRead.ts";

export const useCalendarNotTakeDoseModal = () => {
  const { reminderID, date } = useParams();
  const navigate = useNavigate();

  const _ref = useModalRef();

  const dispatch = useAppDispatch();
  const { notTakingDoseState, infoState,takeDose } = useAppSelector(
    (store) => ({
      infoState: store.calendar.reminders.data?.find((reminder) => reminder.reminder_id === +reminderID!),
      notTakingDoseState: store.calendar.notTakeDose,
      takeDose: store.calendar.takeDose,
    }),
    shallowEqual,
  );

  useEffect(() => {
    const {notificationID} = parseSearchParams([{key:"notificationID",default:undefined}]);

    if(notificationID){
      dispatch(markAsReadAction({ id:notificationID }));
    }
  }, [dispatch]);

  const onSubmit = () => {
    if(!infoState?.taken) {
      _ref.current!.close();
      return;
    }
    dispatch(calendarNotTakeDoseAction({ id: +reminderID! }));
  }

  const onClose = () => {
    if(infoState?.taken) return;
    navigate(routes.calendar.modals.events.href(date!, "medicine"));
  };

  const closeHandler = () => {
    if (!infoState?.taken) {
      dispatch(calendarTakeDoseAction({ id: +reminderID! }));
    } else {
      _ref.current?.close();
    }
  };

  useStatusHandler({
    state: notTakingDoseState,
    onSuccess: () => {
      _ref.current?.close();
      dispatch(clearStateAction([{ reducerName: "calendar", stateName: "notTakeDose" }]));
    },
  });

  useStatusHandler({
    state: takeDose,
    onSuccess: () => {
      _ref.current?.close();
      dispatch(clearStateAction([{ reducerName: "calendar", stateName: "takeDose" }]));
    },
  });

  return { actionState: notTakingDoseState,takeDose, infoState, _ref, onSubmit, onClose, closeHandler };
};
