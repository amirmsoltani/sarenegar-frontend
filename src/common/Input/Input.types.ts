import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
// react-hook-form
import type { FieldValues } from "react-hook-form";
// types
import { TFormOptions, TOnChangeReturn } from "@/common/Form/Form.types";

type THtmlInput = Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "onChange" | "type">;
type TProps = {
  label?: string;
  endContent?: ReactNode;
  endContentHandler?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => TOnChangeReturn<string>;
};

export type TInput<T extends FieldValues> = THtmlInput & TFormOptions<T> & TProps;

export type TUseInput<T extends FieldValues> = Pick<TInput<T>, "onChange">;
