// react-hook-form
import { FieldValues } from "react-hook-form";
// types
import { TFormOptions, TOnChangeReturn } from "@/common/Form/Form.types";

export type TSwitch<T extends FieldValues> = TFormOptions<T> & {
  label?: string;
  onChange?: (value: boolean) => TOnChangeReturn<boolean>;
};

export type TUseSwitch<T extends FieldValues> = Pick<TSwitch<T>, "onChange">;
