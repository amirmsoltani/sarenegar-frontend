import { FieldValues } from "react-hook-form";
import { TFormOptions } from "../Form/Form.types";
import { TWheelPickerOption } from "../Form/FormUtils.types";

export type TWheelPicker<T extends FieldValues> = { label?: string; options: TWheelPickerOption[],optionClassname?:string } & TFormOptions<T>;

export type TUseWheelPicker<T extends FieldValues> = Pick<TWheelPicker<T>, "name" | "options">;
