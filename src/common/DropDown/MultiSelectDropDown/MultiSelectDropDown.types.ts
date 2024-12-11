import { FC } from "react";
// react-hook-form
import { FieldValues } from "react-hook-form";
// types
import { TOnChangeReturn } from "@/common/Form/Form.types";
import { TDefaultDropDownOption, TDropDown, TDropDownHelper } from "../DropDown.types";

export type TMultiSelectDropDown<T extends FieldValues, Y extends object = TDefaultDropDownOption> = TDropDown<T, Y> & {
  CustomHeader?: TDropDownHelper;
  customOption?: FC<TMultiSelectDropDownOption<T, Y>>;
  customPreview?: FC<TMultiSelectDropDownPreview<T, Y>>;
  onChange?: (values: Y[], value: Y) => TOnChangeReturn<Y[]>;
};

export type TUseMultiSelectDropDown<T extends FieldValues, Y extends object = TDefaultDropDownOption> = Pick<
  TMultiSelectDropDown<T, Y>,
  "onChange" | "valueKey" | "disabled" | "name"
>;

export type TMultiSelectDropDownOption<T extends FieldValues, Y extends object = TDefaultDropDownOption> = Required<
  Pick<TMultiSelectDropDown<T, Y>, "valueKey" | "labelKey">
> & {
  option: Y;
  isSelected: boolean;
  onChange: (option: Y) => void;
};

export type TMultiSelectDropDownPreview<T extends FieldValues, Y extends object = TDefaultDropDownOption> = Required<
  Pick<TMultiSelectDropDown<T, Y>, "valueKey" | "labelKey">
> & {
  value: Y[];
};
