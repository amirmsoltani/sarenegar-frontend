import styles from "./RowCalendar.module.scss";
import { today } from "./RowCalendar.constants";
import { useRowCalendar } from "./useRowCalendar";
import { TRowCalendar } from "./RowCalendar.types";

export const RowCalendar = ({ current, active, onChange, variant }: TRowCalendar) => {
  const { list, _active, container, debouncedScrollEndHandler, onTransitionEnd, clickHandler } = useRowCalendar({
    current,
    active,
    onChange,
  });

  return (
    <div className={styles.mainContainer} data-variant={variant}>
      <div>
        <div ref={container} className={styles.container} onScrollEnd={debouncedScrollEndHandler}>
          {list.map(({ date, day, weekday }, index) => (
            <button
              key={date}
              type="button"
              className={styles.date}
              data-active={date === _active}
              onTransitionEnd={onTransitionEnd}
              onClick={() => clickHandler(date, index)}
            >
              <div className={styles.day}>{day}</div>
              <div className={styles.weekday}>{date === today ? "امروز" : weekday}</div>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.activeBar}></div>
    </div>
  );
};
