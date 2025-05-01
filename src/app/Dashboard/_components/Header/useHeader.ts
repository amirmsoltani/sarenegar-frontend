import { useParams } from "react-router-dom";
import { DateService } from "@/services/DateService";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler.ts";
import { getNotReadNotificationAction } from "@/store/notification/actions/notReadNotification/notReadNotification.ts";

export const useHeader = () => {
  const { date } = useParams();

  const dispatch = useAppDispatch();
  const notificationCount = useAppSelector((store) => store.notification.notReadNotification);

  const _date = DateService.customTranslate(date, { year: "numeric", month: "long" }).split(" ").reverse().join(" ");

  useStatusHandler({
    state: notificationCount,
    onComponentDidMount() {
      dispatch(getNotReadNotificationAction(undefined));
    },
  });

  return { date: _date, notificationCount: notificationCount.data };
};
