import { InputUi } from "../Input";
import { TFormInput } from "../Input.types";
import { useFormInput } from "./useFormInput";
import { Controller, FieldValues } from "react-hook-form";

export const FormInput = <T extends FieldValues>({ name, validate, rules = {}, onChange, ...props }: TFormInput<T>) => {
  const { control, onChangeHandler } = useFormInput<T>({ onChange });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => (
        <InputUi {...props} {...field} error={fieldState.error?.message} onChange={(e) => onChangeHandler(e, field.onChange)} />
      )}
    />
  );
};
