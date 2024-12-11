// react-hook-form
import { FieldValues } from "react-hook-form";
// types
import { TFormOptions, TOnChangeReturn } from "@/common/Form/Form.types";

export type TToggleValue = string | number;

type TOption = { value: TToggleValue; label: string | number };

export type TToggle<T extends FieldValues> = TFormOptions<T> & {
  label?: string;
  options: TOption[];
  onChange?: (value: TToggleValue) => TOnChangeReturn<TToggleValue>;
};

export type TUseToggle<T extends FieldValues> = Pick<TToggle<T>, "onChange">;
