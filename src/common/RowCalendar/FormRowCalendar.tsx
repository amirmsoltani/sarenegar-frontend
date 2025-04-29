import { RowCalendar } from "./RowCalendar";
import { useFormRowCalendar } from "./useRowCalendar";
import { TFormRowCalendar } from "./RowCalendar.types";
import { Controller, FieldValues } from "react-hook-form";

export const FormRowCalendar = <T extends FieldValues>({ name, rules = {}, validate }: TFormRowCalendar<T>) => {
  const { control } = useFormRowCalendar<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field }) => (
        <RowCalendar current={field.value} active={field.value} onChange={(value) => field.onChange(value)} variant="LIGHT" />
      )}
    />
  );
};
