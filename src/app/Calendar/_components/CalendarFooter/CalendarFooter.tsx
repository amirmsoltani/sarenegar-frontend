import styles from "./CalendarFooter.module.scss";
import { DateService } from "@/services/DateService.ts";
import classNames from "classnames";
import { useCalendarFooter } from "@/app/Calendar/_components/CalendarFooter/useCalendarFooter.ts";

export const CalendarFooter = () => {
  const { mode, date, isEmpty, descriptionText,addImage,isDisable, addClickHandler } = useCalendarFooter();

  if (!isEmpty) return null;

  return (
    <div className={styles.footer}>
      <h4 className={styles.title}>{DateService.getDate(date)}</h4>
      <span className={styles.message}>{descriptionText}</span>
      <img
        onClick={addClickHandler}
        src={addImage}
        alt={"not found"}
        className={classNames(styles.button, { [styles.reminder]: mode === "medicine",[styles.disable]:isDisable })}
      />
    </div>
  );
};
