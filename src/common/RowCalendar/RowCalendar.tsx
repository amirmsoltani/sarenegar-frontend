import styles from "./RowCalendar.module.scss";
import { today } from "./RowCalendar.constants";
import { useRowCalendar } from "./useRowCalendar";
import { TRowCalendar } from "./RowCalendar.types";

export const RowCalendar = ({ active, onChange }: TRowCalendar) => {
  const { list, _active, container } = useRowCalendar({ active });

  return (
    <div ref={container} className={styles.container}>
      {list.map(({ date, day, weekday }) => (
        <button
          key={date}
          type="button"
          className={styles.date}
          data-active={date === _active}
          onClick={() => onChange && onChange(date)}
        >
          <div className={styles.day}>{day}</div>
          <div className={styles.weekday}>{date === today ? "امروز" : weekday}</div>
        </button>
      ))}
    </div>
  );
};
