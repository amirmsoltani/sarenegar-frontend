// types
import { TUseSwitch } from "./Switch.types";
// react-hook-form
import { FieldValues, useFormContext } from "react-hook-form";

export const useSwitch = <T extends FieldValues>({ onChange }: TUseSwitch<T>) => {
  const { control } = useFormContext<T>();

  const onChangeHandler = (fieldValue: boolean, fieldOnChange: Function) => {
    if (onChange) {
      const { isValid, value } = onChange(fieldValue);
      if (isValid === false) return;
      else fieldOnChange(value);
    } else fieldOnChange(fieldValue);
  };

  return { control, onChangeHandler };
};
