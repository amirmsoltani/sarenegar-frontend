import { reportTypes } from "../../useReports";
import styles from "./ReportsNavigation.module.scss";
import ArrowIcon from "@/assets/svg/arrow-square.svg";
import { useReportsNavigation } from "./useReportsNavigation";

export const ReportsNavigation = () => {
  const { type, start, end, forwardNavigation, backwardNavigation } = useReportsNavigation();

  return (
    <div className={styles.container}>
      <button className={styles.nextButton} onClick={forwardNavigation}>
        <ArrowIcon />
      </button>
      <div>{type === reportTypes[0].value ? `${start} تا ${end}` : start}</div>
      <button className={styles.prevButton} onClick={backwardNavigation}>
        <ArrowIcon />
      </button>
    </div>
  );
};
