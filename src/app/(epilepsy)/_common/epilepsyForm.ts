import { SeverityEnum } from "@/services/api";
import { getNowDate, getNowTime } from "@/helper/helper";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";
import { TRangeOption, TToggleOption } from "@/common/Form/FormUtils.types";

export const consciousnessOptions: TToggleOption<boolean>[] = [
  { label: "بله", value: true },
  { label: "خیر", value: false },
];

export const shakingOptions: TToggleOption<boolean>[] = [
  { label: "بله", value: true },
  { label: "خیر", value: false },
];

export const severityOptions: TRangeOption[] = [
  { label: "خفیف", value: "1" },
  { label: "متوسط", value: "2" },
  { label: "شدید", value: "3" },
];

export const consciousnessTranslator = (value: boolean) => consciousnessOptions.find((option) => option.value === value)!;

export const shakingTranslator = (value: boolean) => shakingOptions.find((option) => option.value === value)!;

export const severityTranslator = (severity: SeverityEnum) => (severity === "Mild" ? "1" : severity === "Moderate" ? "2" : "3");
export const severityOptionTranslator = (severity: SeverityEnum) =>
  severity === "Mild" ? severityOptions[0] : severity === "Moderate" ? severityOptions[1] : severityOptions[2];

export const epilepsyEventFormDefaultValues: TEpilepsyEventForm = {
  severity: severityOptions[1],
  tremor_and_shaking: shakingOptions[1],
  state_of_consciousness: consciousnessOptions[0],
  duration: { hour: "00", minute: "00", second: "00" },
  time_of_occurrence: { date: getNowDate(), time: getNowTime() },
};
