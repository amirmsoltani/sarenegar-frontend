import { useLayoutEffect, useRef } from "react";
import { TSmallCalendar } from "./SmallCalendar.types";
import { calendarList } from "./SmallCalendar.constants";

export const useSmallCalendar = ({ active }: Pick<TSmallCalendar, "active">) => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const _container = container.current;
    if (_container) {
      const index = calendarList.findIndex(({ date }) => date === active);
      if (index >= 0) {
        const child = _container.childNodes[index] as HTMLDivElement;
        _container.scrollTo({ left: child.offsetLeft + child.clientWidth / 2 - _container.clientWidth / 2, behavior: "smooth" });
      }
    }
  }, [active]);

  return { container };
};
