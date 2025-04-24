import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler.ts";
import { getNotReadNotificationAction } from "@/store/notification/actions/notReadNotification/notReadNotification.ts";

export const useHeader = () => {
  const dispatch = useAppDispatch();
  const notificationCount = useAppSelector(store=>store.notification.notReadNotification);
  const { date } = useParams();

  useStatusHandler({
    state:notificationCount,
    onComponentDidMount(){
      dispatch(getNotReadNotificationAction(undefined));
    }
  })

  return { date,notificationCount:notificationCount.data };
};
