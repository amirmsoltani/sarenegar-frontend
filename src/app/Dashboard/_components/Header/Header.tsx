import { Link } from "react-router-dom";
import { useHeader } from "./useHeader";
import { routes } from "@/routes/routes";
import styles from "./Header.module.scss";
import { Avatar } from "@/common/Avatar/Avatar";
import { DateService } from "@/services/DateService";
import { RouterService } from "@/services/RouterService";
import { RowCalendar } from "@/common/RowCalendar/RowCalendar";
import NotificationBing from "@/assets/svg/notification-bing.svg";

export const Header = () => {
  const { date } = useHeader();

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
            <div className={styles.date}>{DateService.getDate()}</div>
          </div>
        </Link>
        <Link to={routes.notification.href()} className={styles.notification}>
          <NotificationBing />
          <div className={styles.count}>5</div>
        </Link>
      </div>
      <div className={styles.calendarContainer}>
        <RowCalendar active={date!} onChange={RouterService.updateDate} />
      </div>
    </header>
  );
};
