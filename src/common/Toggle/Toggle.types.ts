import { FieldValues } from "react-hook-form";
import { TToggleOption } from "../Form/FormUtils.types";
import { TFormOptions, TOnChangeReturn } from "@/common/Form/Form.types";

export type TToggle<T extends FieldValues, Y> = TFormOptions<T> & {
  label?: string;
  options: TToggleOption<Y>[];
  onChange?: (value: TToggleOption<Y>) => TOnChangeReturn<TToggleOption<Y>>;
};

export type TUseToggle<T extends FieldValues, Y> = Pick<TToggle<T, Y>, "onChange">;
