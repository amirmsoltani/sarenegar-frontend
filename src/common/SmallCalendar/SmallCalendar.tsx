import styles from "./SmallCalendar.module.scss";
import { useSmallCalendar } from "./useSmallCalendar";
import { TSmallCalendar } from "./SmallCalendar.types";
import { calendarList } from "./SmallCalendar.constants";

export const SmallCalendar = ({ active, onChange }: TSmallCalendar) => {
  const { container } = useSmallCalendar({ active });

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
          <div className={styles.weekday}>{weekday}</div>
        </button>
      ))}
    </div>
  );
};
