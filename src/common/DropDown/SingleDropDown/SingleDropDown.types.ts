import { FC } from "react";
// react-hook-form
import { FieldValues } from "react-hook-form";
// types
import { TOnChangeReturn } from "@/common/Form/Form.types";
import { TDefaultDropDownOption, TDropDown, TDropDownHelper } from "../DropDown.types";

export type TSingleDropDown<T extends FieldValues, Y extends object = TDefaultDropDownOption> = TDropDown<T, Y> & {
  CustomHeader?: TDropDownHelper;
  onChange?: (value: Y) => TOnChangeReturn<Y>;
  customOption?: FC<TSingleDropDownOption<T, Y>>;
  customPreview?: FC<TSingleDropDownPreview<T, Y>>;
};

export type TUseSingleDropDown<T extends FieldValues, Y extends object = TDefaultDropDownOption> = Pick<
  TSingleDropDown<T, Y>,
  "onChange" | "disabled"
>;

export type TSingleDropDownOption<T extends FieldValues, Y extends object = TDefaultDropDownOption> = Required<
  Pick<TSingleDropDown<T, Y>, "valueKey" | "labelKey">
> & {
  option: Y;
  isSelected: boolean;
  onChange: (option: Y) => void;
};

export type TSingleDropDownPreview<T extends FieldValues, Y extends object = TDefaultDropDownOption> = Required<
  Pick<TSingleDropDown<T, Y>, "valueKey" | "labelKey">
> & {
  value: Y | null;
};
