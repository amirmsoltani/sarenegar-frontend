import styles from "./RowCalendar.module.scss";
import { useRowCalendar } from "./useRowCalendar";
import { TRowCalendar } from "./RowCalendar.types";
import { calendarList, today } from "./RowCalendar.constants";

export const RowCalendar = ({ active, onChange }: TRowCalendar) => {
  const { container } = useRowCalendar({ active });

  return (
    <div ref={container} className={styles.container}>
      {calendarList.map(({ date, day, weekday }) => (
        <button
          key={date}
          type="button"
          className={styles.date}
          data-active={date === active}
          onClick={() => onChange && onChange(date)}
        >
          <div className={styles.day}>{day}</div>
          <div className={styles.weekday}>{date === today ? "امروز" : weekday}</div>
        </button>
      ))}
    </div>
  );
};
