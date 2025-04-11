import { TUseWheelPicker } from "./WheelPicker.types";
import { FieldValues, useFormContext } from "react-hook-form";

export const useWheelPicker = <T extends FieldValues>({ onChange, options }: TUseWheelPicker<T>) => {
  const { control } = useFormContext<T>();

  const onChangeHandler = (e: string, fieldOnChange: Function) => {
    const selected = options.find((option) => option.value === e);
    if (selected) {
      if (onChange) {
        const { isValid, value } = onChange(selected);
        if (isValid === false) return;
        else fieldOnChange(value);
      } else fieldOnChange(selected);
    }
  };

  return { control, onChangeHandler };
};
