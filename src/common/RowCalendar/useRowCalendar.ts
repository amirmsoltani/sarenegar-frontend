import { useParams } from "react-router-dom";
import { TRowCalendar } from "./RowCalendar.types";
import { DateService } from "@/services/DateService";
import { useLayoutEffect, useRef, useState } from "react";
import { genRowCalenderList } from "./RowCalendar.constants";
import { FieldValues, useFormContext } from "react-hook-form";

export const useRowCalendar = ({ active }: Pick<TRowCalendar, "active">) => {
  const { date } = useParams();

  const [list] = useState(genRowCalenderList(date!));

  const container = useRef<HTMLDivElement>(null);

  const _active = DateService.setToGlobalFormat(new Date(active));

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

  return { list, container, _active };
};

export const useFormRowCalendar = <T extends FieldValues>() => {
  const { control } = useFormContext<T>();

  return { control };
};
