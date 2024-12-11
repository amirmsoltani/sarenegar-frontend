// types
import { TUseDatePicker } from "./DatePicker.types";
import { TDefaultDropDownOption } from "@/common/DropDown/DropDown.types";
// react-hook-form
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

export const useDatePicker = <T extends FieldValues>({ name, onDateChange, onTimeChange }: TUseDatePicker<T>) => {
  const { control, setValue } = useFormContext<T>();

  const onDateChangeHandler = (fieldValue: any) => {
    const date = new Date(fieldValue);
    if (onDateChange) {
      const { isValid, value } = onDateChange(date);
      if (isValid === false) return;
      else setValue(`${name}.date` as Path<T>, value as PathValue<T, Path<T>>);
    } else setValue(`${name}.date` as Path<T>, date as PathValue<T, Path<T>>);
  };

  const onTimeChangeHandler = (fieldValue: TDefaultDropDownOption) => {
    if (onTimeChange) {
      const { isValid, value } = onTimeChange(fieldValue);
      if (isValid === false) return;
      else setValue(`${name}.time` as Path<T>, value as PathValue<T, Path<T>>);
    } else setValue(`${name}.time` as Path<T>, fieldValue as PathValue<T, Path<T>>);
  };

  return { control, onDateChangeHandler, onTimeChangeHandler };
};
