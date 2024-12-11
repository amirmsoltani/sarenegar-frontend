import type { FormHTMLAttributes } from "react";
// react-hook-form
import type { FieldValues, Path, PathValue, RegisterOptions, SubmitHandler, UseFormReturn, Validate } from "react-hook-form";

type TMethods<T extends FieldValues> = UseFormReturn<T, any, undefined>;
type THtmlFormElement = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit">;
type TFormProps<T extends FieldValues> = { onSubmit?: SubmitHandler<T> };

export type TForm<T extends FieldValues> = TMethods<T> & TFormProps<T> & THtmlFormElement;

export type TUseForm<T extends FieldValues> = Pick<TForm<T>, "onSubmit" | "handleSubmit">;

export type TFormOptions<T extends FieldValues> = {
  name: Path<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, "validate">;
  validate?: { validate: Validate<PathValue<T, Path<T>>, T> };
};

export type TOnChangeReturn<T> = { value: T; isValid?: never } | { value?: never; isValid: false };
