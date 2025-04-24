import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler.ts";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { shallowEqual } from "react-redux";
import { getNotificationsAction } from "@/store/notification/actions/getNotifications/getNotifications.ts";
import { INotification } from "@/store/notification/NotificationSlice.types.ts";
import { useNavigate } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";
import { DateService } from "@/services/DateService.ts";
import { markAllAsReadAction } from "@/store/notification/actions/markAllAsRead/markAllAsRead.ts";

export function useNotification() {
  const { notificationList,markAllAsRead } = useAppSelector(
    (state) => ({ notificationList: state.notification.notificationList,markAllAsRead:state.notification.markAllAsRead }),
    shallowEqual,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function getData() {
    dispatch(getNotificationsAction(undefined));
  }

  useStatusHandler({
    state: notificationList,
    onComponentDidMount: getData,
  });

  function messageClickHandler(data: INotification) {
    return () => {
      navigate(
        routes.calendar.modals.events.modals.takeDose.href(data.reminderID, DateService.setToGlobalFormat(new Date(data.dateTime))) +
          `?notificationID=${data.notificationID}`,
      );
    };
  }

  function markAllAsReadHandler(){
    dispatch(markAllAsReadAction(undefined));
  }

  return { getData, notificationList,markAllAsRead, messageClickHandler,markAllAsReadHandler };
}
