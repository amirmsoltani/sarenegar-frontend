import { ChangeEvent } from "react";
import { TUseRange } from "./Range.types";
import { FieldValues, useFormContext } from "react-hook-form";

export const useRange = <T extends FieldValues>({ options }: TUseRange<T>) => {
  const { control } = useFormContext<T>();

  const onChange = (e: ChangeEvent<HTMLInputElement>, fieldOnChange: Function) => {
    const option = options.find((option) => option.value === e.target.value);
    option && fieldOnChange(option);
  };

  return { control, onChange };
};
