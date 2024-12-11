import { ComponentProps, InputHTMLAttributes } from "react";
// react-multi-date-picker
import ReactMultiDatePicker from "react-multi-date-picker";
// react-hook-form
import { ControllerFieldState, FieldValues } from "react-hook-form";
// types
import { TFormOptions, TOnChangeReturn } from "@/common/Form/Form.types";
import { TDefaultDropDownOption } from "@/common/DropDown/DropDown.types";

type TReactMultiDatePicker = Omit<ComponentProps<typeof ReactMultiDatePicker>, "onChange">;

export type TDatePicker<T extends FieldValues> = TFormOptions<T> &
  TReactMultiDatePicker & {
    label?: string;
    timeList: TDefaultDropDownOption[];
    onDateChange?: (date: Date) => TOnChangeReturn<Date>;
    onTimeChange?: (date: TDefaultDropDownOption) => TOnChangeReturn<TDefaultDropDownOption>;
  };

export type TCustomDatePicker<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  Pick<TDatePicker<T>, "label" | "name" | "timeList"> & {
    fieldState: ControllerFieldState;
    onTimeChangeHandler: (fieldValue: TDefaultDropDownOption) => void;
  };

export type TUseDatePicker<T extends FieldValues> = Pick<TDatePicker<T>, "name" | "onDateChange" | "onTimeChange">;

export type TInputPreview<T extends FieldValues> = Pick<TDatePicker<T>, "name"> & { id: string };
