import styles from "./CalendarFooter.module.scss";
import { DateService } from "@/services/DateService.ts";
import classNames from "classnames";
import { useCalendarFooter } from "@/app/Calendar/_components/CalendarFooter/useCalendarFooter.ts";

export const CalendarFooter = () => {
  const { mode, date, isEmpty, addClickHandler } = useCalendarFooter();

  if (!isEmpty) return null;

  return (
    <div className={styles.footer}>
      <h4 className={styles.title}>{DateService.getDate(date)}</h4>
      <span className={styles.message}>
        {mode === "attack" ? "هیچ رویدادی در این تاریخ ثبت نگردیده است" : "هیچ دارویی در این تاریخ ثبت نگردیده است"}
      </span>
      <img
        onClick={addClickHandler}
        src={mode === "attack" ? "/add-attack.png" : "/add-pill3.png"}
        alt={"not found"}
        className={classNames(styles.button, { [styles.reminder]: mode === "medicine" })}
      />
    </div>
  );
};
