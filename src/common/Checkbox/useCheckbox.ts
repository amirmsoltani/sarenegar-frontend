// types
import { TUseCheckbox } from "./Checkbox.types";
// react-hook-form
import { FieldValues, useFormContext } from "react-hook-form";

export const useCheckbox = <T extends FieldValues>({ onChange }: TUseCheckbox<T>) => {
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
