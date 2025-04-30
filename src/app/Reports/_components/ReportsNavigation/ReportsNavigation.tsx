import { reportTypes } from "../../useReports";
import styles from "./ReportsNavigation.module.scss";
import ArrowIcon from "@/assets/svg/arrow-left.svg";
import { useReportsNavigation } from "./useReportsNavigation";
import classNames from "classnames";

export const ReportsNavigation = () => {
  const { type, start, end, forwardNavigation, backwardNavigation } = useReportsNavigation();

  return (
    <div className={styles.container}>
      <button className={classNames(styles.button, styles.nextButton)} onClick={forwardNavigation}>
        <ArrowIcon />
      </button>
      <div>
        {type === reportTypes[0].value ? (
          <>
            {start}&nbsp;&nbsp;&nbsp;تا&nbsp;&nbsp;&nbsp;{end}
          </>
        ) : (
          start
        )}
      </div>
      <button className={styles.button} onClick={backwardNavigation}>
        <ArrowIcon />
      </button>
    </div>
  );
};
