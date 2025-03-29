import { Link } from "react-router-dom";
import { useHeader } from "./useHeader";
import styles from "./Header.module.scss";
import { Avatar } from "@/common/Avatar/Avatar";
import { DateService } from "@/services/DateService";
import { RouterService } from "@/services/RouterService";
import NotificationBing from "@/assets/svg/notification-bing.svg";
import { SmallCalendar } from "@/common/SmallCalendar/SmallCalendar";

export const Header = () => {
  const { date } = useHeader();

  return (
    <header className={styles.container}>
      <div className={styles.topWrapper}>
        <div className={styles.user}>
          <Avatar />
          <div className={styles.textContainer}>
            <div>
              <span className={styles.message1}>کاربر عزیز</span>
              <span className={styles.message2}>خوش آمدید!</span>
            </div>
            <div className={styles.date}>{DateService.getDate()}</div>
          </div>
        </div>
        <Link to="" className={styles.notification}>
          <NotificationBing />
          <div className={styles.count}>5</div>
        </Link>
      </div>
      <SmallCalendar active={date!} onChange={RouterService.updateDate} />
    </header>
  );
};
