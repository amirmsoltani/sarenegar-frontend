import { TypeOfUsageEnum } from "@/services/api";
import { DateService } from "@/services/DateService";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { formOptionTranslator, toLabelValue, withPadStart } from "@/helper/helper";
import { TCheckboxOption, TWheelPickerOption } from "@/common/Form/FormUtils.types";

export const medicineUnits: TWheelPickerOption[] = [
  { label: "قاشق چایی خوری (۲.۵ml)", value: "قاشق چایی خوری" },
  { label: "قاشق غذا خوری (۱۰cc)", value: "قاشق غذا خوری" },
];

export const medicineAmounts: TWheelPickerOption[] = new Array(25).fill("").map((_, index) => {
  const value = (index + 1).toString();
  return { value, label: value };
});

export const medicineUsageType: TWheelPickerOption<TypeOfUsageEnum>[] = [
  { label: "قبل غذا", value: "BEFORE_MEAL" },
  { label: "با غذا", value: "ANYTIME" },
  { label: "بعد غذا", value: "AFTER_MEAL" },
];

export const drugTimingTypes: TCheckboxOption[] = [
  { label: "هر روز", value: "ALL_DAY" },
  { label: "انتخاب روز", value: "CUSTOM" },
];

export const endTimeTypes: TCheckboxOption[] = [
  { label: "به تاریخ", value: "DATE" },
  { label: "به روز", value: "DAYS" },
];

export const endDaysCounts: TWheelPickerOption[] = new Array(365).fill("").map((_, index) => {
  const value = (index + 1).toString();
  return { value, label: value };
});

export const drugCounts: TWheelPickerOption[] = new Array(5).fill("").map((_, index) => {
  const value = (index + 1).toString();
  return { value, label: value };
});

export const medicineUsageCounts: TWheelPickerOption[] = new Array(8).fill("").map((_, index) => {
  const value = (index + 1).toString();
  return { value, label: value };
});

export const medicineUnitTranslator = (value: string) => formOptionTranslator(medicineUnits, value)!;
export const medicineAmountTranslator = (value: string) => formOptionTranslator(medicineAmounts, value)!;
export const medicineUsageTypeTranslator = (value: string) => formOptionTranslator(medicineUsageType, value)!;
export const endDaysCountTranslator = (value: number) => formOptionTranslator(endDaysCounts, value)!;

export const medicineFormDefaultValues: TMedicineForm = {
  is_first_step_submitted: false,

  drug: null,

  dose: { unit: null, amount: null },
  dose_placeholder: { unit: medicineUnits[1], amount: medicineAmounts[2] },

  usage_type: null,
  usage_type_placeholder: medicineUsageType[1],

  drug_timing_type: drugTimingTypes[0],
  days: [],

  start_date: null,
  start_date_placeholder: DateService.gregorianToJalali(),

  end_time_type: endTimeTypes[0],

  end_date: null,
  end_date_placeholder: DateService.gregorianToJalali(),

  day_counts: null,
  day_counts_placeholder: endDaysCounts[0],

  drug_counts: null,
  drug_counts_placeholder: drugCounts[0],

  medicine_usage_counts: null,
  medicine_usage_counts_placeholder: medicineUsageCounts[0],

  start_time: {
    value: null,
    placeholder: { hour: toLabelValue(withPadStart(8)), minute: toLabelValue(withPadStart(0)) },
  },

  doses: [
    {
      value: { hour: toLabelValue(withPadStart(8)), minute: toLabelValue(withPadStart(0)) },
      placeholder: { hour: toLabelValue(withPadStart(8)), minute: toLabelValue(withPadStart(0)) },
    },
  ],

  description:null,
};

const formMap = {
  Pill:"قرص",
  Drops:"قطره",
  Tablet:"قرص",
  Syrup:"شربت",
  Injection:"آمپول",
  Capsule:"کپسول",
}

export function mapForm2Name(form:string){
  if(form in formMap) return formMap[form as keyof typeof formMap];
  return  "";
}