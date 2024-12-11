import { FC } from "react";
// react-hook-form
import { FieldValues } from "react-hook-form";
// types
import { TFormOptions } from "@/common/Form/Form.types";

export type TDefaultDropDownOption = { value: string | number; label: string | number };

export type TDropDown<T extends FieldValues, Y extends object = TDefaultDropDownOption> = TFormOptions<T> & {
  options: Y[];
  label?: string;
  valueKey?: keyof Y;
  labelKey?: keyof Y;
  disabled?: boolean;
  className?: string;
};

export type TDropDownHelper = FC<{ closeHandler: () => void }>;
