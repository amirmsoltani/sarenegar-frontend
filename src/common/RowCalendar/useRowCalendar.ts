import { useLayoutEffect, useRef } from "react";
import { TRowCalendar } from "./RowCalendar.types";
import { calendarList } from "./RowCalendar.constants";
import { FieldValues, useFormContext } from "react-hook-form";

export const useRowCalendar = ({ active }: Pick<TRowCalendar, "active">) => {
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

export const useFormRowCalendar = <T extends FieldValues>() => {
  const { control } = useFormContext<T>();

  return { control };
};
