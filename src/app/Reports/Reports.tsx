import styles from "./Reports.module.scss";
import { ReportsInfo } from "./_components/ReportsInfo/ReportsInfo";
import { ReportsHeader } from "./_components/ReportsHeader/ReportsHeader";
import { ReportsNavigation } from "./_components/ReportsNavigation/ReportsNavigation";

export const Reports = () => {
  return (
    <main className={styles.container}>
      <ReportsHeader />
      <div className={styles.wrapper}>
        <ReportsNavigation />
        <ReportsInfo />
      </div>
    </main>
  );
};
