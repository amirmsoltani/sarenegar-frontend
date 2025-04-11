import { TDayPickerDay } from "../Form/FormUtils.types";
import { ControllerRenderProps, FieldValues, Path, useFormContext } from "react-hook-form";

export const useWeekdayPicker = <T extends FieldValues>() => {
  const { control } = useFormContext<T>();

  const onChangeHandler = (weekday: TDayPickerDay, isActive: boolean, field: ControllerRenderProps<T, Path<T>>) => {
    field.onChange(
      isActive ? (field.value as string[]).filter((_weekday) => _weekday !== weekday.value) : [...field.value, weekday.value],
    );
  };

  return { control, onChangeHandler };
};
