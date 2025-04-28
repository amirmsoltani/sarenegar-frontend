import styles from "./style.module.scss";
import { getNowDate } from "@/helper/helper";
import { DateService } from "@/services/DateService";
import { useNavigate, useParams } from "react-router-dom";
import { UIEvent, useLayoutEffect, useRef, useState } from "react";
import { genRowCalenderList } from "@/common/RowCalendar/RowCalendar.constants";

export const today = getNowDate();

export const Page = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ marginBlock: "50px" }}>
      <RowCalendar active={date!} onChange={(date) => navigate(`/${date}/test`)} />
    </div>
  );
};

type TRowCalendar = { active: string; onChange: (date: string) => void };
const RowCalendar = ({ active, onChange }: TRowCalendar) => {
  const { date } = useParams();

  const [list] = useState(genRowCalenderList(date!));

  const container = useRef<HTMLDivElement>(null);

  const _active = DateService.setToGlobalFormat(new Date(active));

  const scrollEndHandler = (e: UIEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const children = [...element.childNodes] as HTMLButtonElement[];

    console.log(children);

    // const result =  children.reduce((prev, current) => {
    //   return prev;
    // });
  };

  useLayoutEffect(() => {
    const _container = container.current;

    if (_container) {
      const index = list.findIndex(({ date }) => date === _active);
      if (index >= 0) {
        const child = _container.childNodes[index] as HTMLDivElement;
        _container.scrollTo({ left: child.offsetLeft + child.clientWidth / 2 - _container.clientWidth / 2, behavior: "smooth" });
      }
    }
  }, [list, _active]);

  return (
    <div className={styles.mainContainer}>
      <div ref={container} className={styles.container} onScrollEnd={scrollEndHandler}>
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
      <div className={styles.activeBar}></div>
    </div>
  );
};
