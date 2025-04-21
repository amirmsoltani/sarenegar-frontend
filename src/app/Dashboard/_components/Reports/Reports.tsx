import { useReports } from "./useReports";
import styles from "./Reports.module.scss";
import { Spinner } from "@/common/Spinner/Spinner";
import { ReportChart } from "./_components/ReportChart/ReportChart";

export const Reports = () => {
  const { state } = useReports();

  return (
    <section className={styles.container}>
      {state.status === "loading" ? (
        <div className={styles.status}>
          <Spinner />
        </div>
      ) : state.status === "success" ? (
        state.data?.total_events ? (
          <div className={styles.wrapper}>
            <div>
              <span className={styles.countTitle}>ماهانه: </span>
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
    </section>
  );
};

const NoData = () => {
  return (
    <>
      <div className={styles.title}>گزارشی وجود ندارد</div>
      <div className={styles.description}>با ثبت اولین رخداد صرع قابل نمایش خواهد بود</div>
    </>
  );
};
