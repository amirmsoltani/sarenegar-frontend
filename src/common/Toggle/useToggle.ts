// types
import { TToggleValue, TUseToggle } from "./Toggle.types";
// react-hook-form
import { FieldValues, useFormContext } from "react-hook-form";

export const useToggle = <T extends FieldValues>({ onChange }: TUseToggle<T>) => {
  const { control } = useFormContext<T>();

  const onChangeHandler = (fieldValue: TToggleValue, fieldOnChange: Function) => {
    if (onChange) {
      const { isValid, value } = onChange(fieldValue);
      if (isValid === false) return;
      else fieldOnChange(value);
    } else fieldOnChange(fieldValue);
  };

  return { control, onChangeHandler };
};
