import styles from "./Reports.module.scss";
import { Helmet } from "react-helmet-async";
import { ReportsInfo } from "./_components/ReportsInfo/ReportsInfo";
import { ReportsHeader } from "./_components/ReportsHeader/ReportsHeader";
import { ReportsNavigation } from "./_components/ReportsNavigation/ReportsNavigation";

export const Reports = () => {
  return (
    <main className={styles.container}>
      <Helmet>
        <meta name="theme-color" content="#1d2742" />
      </Helmet>
      <ReportsHeader />
      <div className={styles.wrapper}>
        <ReportsNavigation />
        <ReportsInfo />
      </div>
    </main>
  );
};
