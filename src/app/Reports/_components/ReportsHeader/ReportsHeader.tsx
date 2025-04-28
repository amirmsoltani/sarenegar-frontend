import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { reportTypes } from "../../useReports";
import styles from "./ReportsHeader.module.scss";
import { useReportsHeader } from "./useReportsHeader";

export const ReportsHeader = () => {
  const { type } = useReportsHeader();

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>گزارشات رخداد تشنج</h1>
      <div className={styles.links}>
        {reportTypes.map((link) => (
          <Link
            key={link.value}
            className={styles.link}
            data-active={link.value === type}
            to={routes.reportsInfo.href(link.value, link.start, link.end)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};
