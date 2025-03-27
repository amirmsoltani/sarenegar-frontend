import { TOnChangeReturn } from "./Form.types";

// ? dropdown
export type TDropDownOption<T = string> = { label: string; value: T };
export type TCustomDropDownOption<T extends object = object> = {
  option: T;
  valueKey: keyof T;
  labelKey: keyof T;
  isSelected: boolean;
  onChange: (value: T) => TOnChangeReturn<T>;
};
export type TCustomSingleDropDownPreview<T extends object = object> = { value: T; valueKey: keyof T; labelKey: keyof T };
export type TCustomMultipleDropDownPreview<T extends object = object> = { value: T[]; valueKey: keyof T; labelKey: keyof T };

// ? date
export type TDate = { date: Date | string | null; time: TDropDownOption | null };

// ? toggle
export type TToggleOption<T = string> = { label: string; value: T };

// ? validation group
export type TValidationGroups<T extends object = object> = { [key in keyof T]?: any }[];
