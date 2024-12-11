// types
import { ChangeEvent } from "react";
import { TUseInput } from "./Input.types";
// react-hook-form
import { FieldValues, useFormContext } from "react-hook-form";

export const useInput = <T extends FieldValues>({ onChange }: TUseInput<T>) => {
  const { control } = useFormContext<T>();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, fieldOnChange: Function) => {
    if (onChange) {
      const { isValid, value } = onChange(e);
      if (isValid === false) return;
      else {
        e.target.value = value;
        fieldOnChange(e);
      }
    } else fieldOnChange(e);
  };

  return { control, onChangeHandler };
};
