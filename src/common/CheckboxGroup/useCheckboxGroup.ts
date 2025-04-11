import { FieldValues, useFormContext } from "react-hook-form";

export const useCheckboxGroup = <T extends FieldValues>() => {
  const { control } = useFormContext<T>();

  return { control };
};
