import type { FieldValues } from "react-hook-form";
import { TFormOptions, TOnChangeReturn } from "@/common/Form/Form.types";
import type { ChangeEvent, Dispatch, InputHTMLAttributes, ReactNode, SetStateAction } from "react";

type THtmlInput = InputHTMLAttributes<HTMLInputElement>;
type TExtraProps = {
  label?: string;
  helperText?: ReactNode;
  endContent?: ReactNode;
  startContent?: ReactNode;
  type?: "text" | "password";
  variant?: "DEFAULT" | "DARK";
  endContentHandler?: () => void;
  startContentHandler?: () => void;
};

// ? form based
export type TFormInput<T extends FieldValues = FieldValues> = Omit<THtmlInput, "name" | "onChange" | "type" | "value"> &
  TExtraProps &
  TFormOptions<T> & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => TOnChangeReturn<string>;
    mode?: "FORM";
    multiline?: boolean;
  };
export type TUseFormInput<T extends FieldValues> = Pick<TFormInput<T>, "onChange">;

// ? state based
export type TStateInput = Omit<THtmlInput, "type"> &
  TExtraProps & {
    value?: any;
    name?: string;
    mode: "STATE";
    setValue?: Dispatch<SetStateAction<any>>;
  };
export type TUseStateInput = Pick<TStateInput, "onChange" | "setValue" | "name">;

export type TInput = TFormInput | TStateInput;
export type TInputUi = THtmlInput & TExtraProps & { error?: string,multiline?: boolean };
