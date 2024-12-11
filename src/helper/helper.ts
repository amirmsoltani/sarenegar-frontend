// types
import { TDefaultDropDownOption } from "@/common/DropDown/DropDown.types";

export const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));

export const timeListGenerator = (min: number, max: number, step: number) => {
  const _step = step / 100;
  const result: TDefaultDropDownOption[] = [];

  while (min <= max) {
    const hour = Math.floor(min);
    const minute = Math.floor((min % hour) * 100);
    const clock = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;

    result.push({ value: clock, label: clock });

    min = minute + step >= 60 ? Math.floor(min + 1) : min + _step;
  }

  return result;
};
