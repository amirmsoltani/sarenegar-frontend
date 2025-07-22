import classNames from "classnames";
import { e2p } from "@/helper/helper.ts";
import { Outlet } from "react-router-dom";
import styles from "./Calendar.module.scss";
import PillIcon from "@/assets/svg/pill-icon.svg";
import ArrowIcon from "@/assets/svg/arrow-left.svg";
import { Flash } from "@wandersonalwes/iconsax-react";
import { Spinner } from "@/common/Spinner/Spinner.tsx";
import { Navbar } from "@/app/_components/Navbar/Navbar.tsx";
import { useCalendar, weekDays } from "@/app/Calendar/useCalendar.ts";
import { CalendarFooter } from "@/app/Calendar/_components/CalendarFooter/CalendarFooter.tsx";

export const Calendar = () => {
  const {
    days,
    nextMonthHandler,
    previousMonthHandler,
    title,
    events,
    isLoading,
    mode,
    date,
    changeModeHandler,
    dayClickHandler,
  } = useCalendar();

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>تقویم رویداد ها</h2>
        </div>

        <div className={styles.tabs}>
          <div
            className={classNames(styles.tabItem, { [styles.active]: mode === "attack" })}
            onClick={changeModeHandler("attack")}
          >
            حمله
          </div>
          <div
            className={classNames(styles.tabItem, { [styles.active]: mode === "medicine" })}
            onClick={changeModeHandler("medicine")}
          >
            دارو
          </div>
        </div>
      </div>

      <div className={styles.calendar}>
        <div className={styles.header}>
          <button className={classNames(styles.button, styles.nextButton)} onClick={previousMonthHandler}>
            <ArrowIcon />
          </button>
          <h5 className={styles.monthTitle}>{title}</h5>
          <button className={styles.button} onClick={nextMonthHandler}>
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
                className={classNames(styles.weekDay, {
                  [styles.selected]: day.type === "regular" && day.date === date,
                  [styles.empty]: day.type === "empty",
                })}
                key={day.type === "empty" ? day.type + index : day.date + index}
              >
                {e2p(day.type === "empty" ? "" : day.text)}
                {day.type === "regular" && events[day.date] ? (
                  <div className={classNames(styles.event, { [styles.medicine]: mode === "medicine" })}>
                    <span>{e2p(events[day.date])}</span>
                    {mode === "attack" ? <Flash variant={"Bold"} size={14} /> : <PillIcon />}
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
        <CalendarFooter />
        <div className={styles.fakeWidth}></div>
      </div>
      <Navbar />
      <Outlet />
    </div>
  );
};
