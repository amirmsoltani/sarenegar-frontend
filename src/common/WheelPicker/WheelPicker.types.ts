import { FieldValues } from "react-hook-form";
import { TWheelPickerOption } from "../Form/FormUtils.types";
import { TFormOptions, TOnChangeReturn } from "../Form/Form.types";

export type TWheelPicker<T extends FieldValues> = {
  label?: string;
  options: TWheelPickerOption[];
  onChange?: (value: TWheelPickerOption) => TOnChangeReturn<TWheelPickerOption>;
} & TFormOptions<T>;

export type TUseWheelPicker<T extends FieldValues> = Pick<TWheelPicker<T>, "onChange" | "options">;
