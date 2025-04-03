// ? toggle
export type TToggleOption<T = string> = { label: string; value: T };

// ? range
export type TRangeOption = { label: string; value: string | number };

// ? time & data
export type TTimePicker = { hour: string; minute: string };

export type TFullTimePicker = { hour: string; minute: string; second: string };
