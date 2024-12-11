import { InputHTMLAttributes } from "react";
// react-hook-form
import { FieldValues } from "react-hook-form";
//types
import { TFormOptions, TOnChangeReturn } from "@/common/Form/Form.types";

type THtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "onChange" | "type" | "defaultChecked">;

export type TCheckbox<T extends FieldValues> = TFormOptions<T> &
  THtmlInputProps & { label?: string; onChange?: (value: boolean) => TOnChangeReturn<boolean> };

export type TUseCheckbox<T extends FieldValues> = Pick<TCheckbox<T>, "onChange">;
