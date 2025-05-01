import { Link } from "react-router-dom";
import { useHeader } from "./useHeader";
import { routes } from "@/routes/routes";
import styles from "./Header.module.scss";
import { getNowDate } from "@/helper/helper";
import { Avatar } from "@/common/Avatar/Avatar";
import { RouterService } from "@/services/RouterService";
import { RowCalendar } from "@/common/RowCalendar/RowCalendar";
import NotificationBing from "@/assets/svg/notification-bing.svg";

const today = getNowDate();

export const Header = () => {
  const { date, notificationCount } = useHeader();

  return (
    <header className={styles.container}>
      <div className={styles.topWrapper}>
        <Link to={routes.profile.href()} className={styles.user}>
          <Avatar />
          <div className={styles.textContainer}>
            <div>
              <span className={styles.message1}>کاربر عزیز</span>
              <span className={styles.message2}>خوش آمدید!</span>
            </div>
            <div className={styles.date}>{date}</div>
          </div>
        </Link>
        <Link to={routes.notification.href()} className={styles.notification}>
          <NotificationBing />
          {notificationCount ? <div className={styles.count}>{notificationCount}</div> : null}
        </Link>
      </div>
      <div className={styles.calendarContainer}>
        <RowCalendar current={today} onChange={RouterService.updateDate} variant="DEFAULT" />
      </div>
    </header>
  );
};
