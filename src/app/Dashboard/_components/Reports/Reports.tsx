import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { useReports } from "./useReports";
import styles from "./Reports.module.scss";
import { Spinner } from "@/common/Spinner/Spinner";
import { DateService } from "@/services/DateService";
import { ReportChart } from "./_components/ReportChart/ReportChart";

export const Reports = () => {
  const { state, date } = useReports();

  return (
    <Link to={routes.reportsInfo.href("monthly")} className={styles.container}>
      {state.status === "loading" ? (
        <div className={styles.status}>
          <Spinner />
        </div>
      ) : state.status === "success" ? (
        state.data?.total_events ? (
          <div className={styles.wrapper}>
            <div>
              <span className={styles.countTitle}>{DateService.customTranslate(date, { month: "long" })}: </span>
              <span className={styles.countValue}>{state.data?.total_events} مورد</span>
            </div>
            <div className={styles.chartContainer}>
              <ReportChart />
            </div>
          </div>
        ) : (
          <div className={styles.info}>
            <NoData />
          </div>
        )
      ) : (
        <div className={styles.info}>
          <NoData />
        </div>
      )}
    </Link>
  );
};

const NoData = () => {
  return (
    <>
      <div className={styles.title}>گزارشی وجود ندارد</div>
      <div className={styles.description}>با ثبت اولین رخداد تشنج قابل نمایش خواهد بود</div>
    </>
  );
};
