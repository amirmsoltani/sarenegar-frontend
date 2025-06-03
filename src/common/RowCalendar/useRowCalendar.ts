import { useParams } from "react-router-dom";
import { TRowCalendar } from "./RowCalendar.types";
import { useDebouncedCallback } from "use-debounce";
import { DateService } from "@/services/DateService";
import { genRowCalenderList } from "./RowCalendar.constants";
import { FieldValues, useFormContext } from "react-hook-form";
import { UIEvent, useLayoutEffect, useRef, useState } from "react";

export const useRowCalendar = ({ current, active, onChange,disableFuture }: Pick<TRowCalendar, "current" | "active" | "onChange" |"disableFuture">) => {
  const mounted = useRef(false);
  const selected = useRef<null | number>(null);
  const container = useRef<HTMLDivElement>(null);

  const { date } = useParams();

  const [list] = useState(genRowCalenderList(current!));

  const _active = DateService.setToGlobalFormat(new Date(active ?? date!));

  const onTransitionEnd = () => (selected.current = null);

  const clickHandler = (date: string, index: number) => {
    onChange && onChange(date);
    selected.current = index;
  };

  const debouncedScrollEndHandler = useDebouncedCallback((e: UIEvent<HTMLDivElement>) => {
    if (mounted.current) {
      const _container = container.current;
      if (!selected.current) {
        const container = e.target as HTMLDivElement;
        const children = [...container.childNodes] as HTMLButtonElement[];

        const containerCenter = container.scrollLeft + container.clientWidth / 2;

        let { index } = children.reduce<{ index: number | null; lowest: number }>(
          (prev, current, index) => {
            const diff = Math.abs(containerCenter - (current.offsetLeft + current.clientWidth / 2));
            return diff < prev.lowest ? { index, lowest: diff } : prev;
          },
          { index: null, lowest: Infinity },
        );

        if(disableFuture && typeof index === "number" && DateService.isBiggerThanToday(list[index].date) && _container){
          const today = DateService.setToGlobalFormat(new Date());
          index = list.findIndex((item)=>item.date === today);
          const child = _container.childNodes[index] as HTMLDivElement;
          _container.scrollTo({ left: child.offsetLeft + child.clientWidth / 2 - _container.clientWidth / 2, behavior: "smooth" });
        }

        typeof index === "number" && onChange && onChange(list[index].date);
      }
    } else setTimeout(() => (mounted.current = true), 300);
  }, 220);

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

  function isDisabled(date:string){
    return DateService.isBiggerThanToday(date);
  }

  return { list, container, _active, debouncedScrollEndHandler, onTransitionEnd, clickHandler,isDisabled };
};

export const useFormRowCalendar = <T extends FieldValues>() => {
  const { control } = useFormContext<T>();

  return { control };
};
