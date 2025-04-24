import styles from "./Notification.module.scss";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import DoubleTick from "@/assets/svg/double-tick-svgrepo-com 1.svg";
import { Link } from "react-router-dom";
import { NotificationMessageCard } from "@/app/Notification/_components/NotificationMessageCard/NotificationMessageCard.tsx";
import { useNotification } from "@/app/Notification/useNotification.ts";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler.tsx";
import { routes } from "@/routes/routes.tsx";
import { Spinner } from "@/common/Spinner/Spinner.tsx";

export const Notification = () => {
  const notification = useNotification();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.sectionRight}>
          <Link className={styles.btnBack} to={routes.dashboard.href()}>
            <ArrowRight className={styles.icon} />
          </Link>
          <div className={styles.title}>اعلانات</div>
        </div>
        {notification.markAllAsRead.status === "loading" ? (
          <Spinner variant={"black"} size={"md"} />
        ) : (
          <div className={styles.sectionLeft} onClick={notification.markAllAsReadHandler}>
            <div className={styles.title}>خواندن همه</div>
            <DoubleTick className={styles.icon} />
          </div>
        )}
      </div>
      <StatusHandler onClick={notification.getData} status={notification.notificationList.status}>
        <div className={styles.main}>
          {notification.notificationList.data?.map((item, index) => (
            <NotificationMessageCard
              key={item.notificationID.toString() + index}
              message={item.message}
              title={item.title}
              date={item.date}
              time={item.time}
              status={item.isRead!}
              onClick={notification.messageClickHandler(item)}
            />
          ))}
        </div>
      </StatusHandler>
    </div>
  );
};
