import styles from "./Calendar.module.scss";
import classNames from "classnames";
import { Navbar } from "@/app/_components/Navbar/Navbar.tsx";
import ArrowIcon from "@/assets/svg/arrow-square.svg";
import { useCalendar, weekDays } from "@/app/Calendar/useCalendar.ts";
import { e2p } from "@/helper/helper.ts";
import { Flash } from "@wandersonalwes/iconsax-react";
import { Spinner } from "@/common/Spinner/Spinner.tsx";
import { Outlet } from "react-router-dom";

export const Calendar = () => {
  const { days, nextMonthHandler, previousMonthHandler, title, events, isLoading, mode, changeModeHandler, dayClickHandler } = useCalendar();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>تقویم رویداد ها</h2>
      </div>

      <div className={styles.tabs}>
        <div className={classNames(styles.tabItem, { [styles.active]: mode === "attack" })} onClick={changeModeHandler("attack")}>
          حمله
        </div>
        <div className={classNames(styles.tabItem, { [styles.active]: mode === "medicine" })} onClick={changeModeHandler("medicine")}>
          دارو
        </div>
      </div>

      <div className={styles.calendar}>
        <div className={styles.header}>
          <button className={styles.nextButton} onClick={nextMonthHandler}>
            <ArrowIcon />
          </button>
          <h5 className={styles.monthTitle}>{title}</h5>
          <button className={styles.prevButton} onClick={previousMonthHandler}>
            <ArrowIcon />
          </button>
        </div>

        <div className={styles.month}>
          {weekDays.map((name) => (
            <div className={styles.weekDayTitle} key={name}>
              {name}
            </div>
          ))}
          {isLoading ? (
            <div className={styles.loading}>
              <Spinner variant={"black"} size={"xl"} />
            </div>
          ) : (
            days.map((day, index) => (
              <div
                onClick={dayClickHandler(day)}
                className={styles.weekDay}
                key={day.type === "empty" ? day.type + index : day.date + index}
              >
                {e2p(day.type === "empty" ? "" : day.text)}
                {day.type === "regular" && events[day.date] ? (
                  <div className={styles.event}>
                    <span>{e2p(events[day.date])}</span>
                    <Flash variant={"Bold"} size={14} />
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>

      <Navbar />
      <Outlet />
    </div>
  );
};
