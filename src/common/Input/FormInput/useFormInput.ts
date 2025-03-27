import { ChangeEvent } from "react";
import { TUseFormInput } from "../Input.types";
import { FieldValues, useFormContext } from "react-hook-form";

export const useFormInput = <T extends FieldValues>({ onChange }: TUseFormInput<T>) => {
  const { control } = useFormContext<T>();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, fieldOnChange: Function) => {
    if (onChange) {
      const { isValid, value } = onChange(e);
      if (isValid === false) return;
      else {
        e.target.value = value as string;
        fieldOnChange(e);
      }
    } else fieldOnChange(e);
  };

  return { control, onChangeHandler };
};
