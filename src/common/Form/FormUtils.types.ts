import { UsageDaysEnum } from "@/services/api";

// ? checkbox
export type TCheckboxOption<T = string> = { label: string; value: T };

// ? toggle
export type TToggleOption<T = string> = { label: string; value: T };

// ? range
export type TRangeOption = { label: string; value: string | number };

// ? wheel picker
export type TWheelPickerOption<T = string> = { label: string; value: T };

// ? time & data
export type TDatePicker = { year: TWheelPickerOption; month: TWheelPickerOption; day: TWheelPickerOption };

export type TTimePicker = { hour: TWheelPickerOption; minute: TWheelPickerOption };

export type TFullTimePicker = { hour: TWheelPickerOption; minute: TWheelPickerOption; second: TWheelPickerOption };

export type TDayPickerDay = { label: string; value: UsageDaysEnum };
