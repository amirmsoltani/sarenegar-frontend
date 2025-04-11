import { TypeOfUsageEnum } from "@/services/api";
import { DateService } from "@/services/DateService";
import { toLabelValue, withPadStart } from "@/helper/helper";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { TCheckboxOption, TWheelPickerOption } from "@/common/Form/FormUtils.types";

export const medicineUnits: TWheelPickerOption[] = [
  { label: "میلی گرم ( mg )", value: "MG" },
  { label: "قرص ( pill )", value: "PILL" },
  { label: "گرم ( g )", value: "G" },
];

export const medicineAmounts: TWheelPickerOption[] = [
  { label: "2", value: "2" },
  { label: "1/8", value: "1.8" },
  { label: "1/6", value: "1/6" },
  { label: "1/4", value: "1/4" },
  { label: "1/3", value: "1/3" },
  { label: "1/2", value: "1/2" },
  { label: "1", value: "1" },
];

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

export const endDaysCounts: TWheelPickerOption[] = new Array(60).fill("").map((_, index) => {
  const value = (index + 1).toString();
  return { value, label: value };
});

export const medicineUnitTranslator = (value: string) => medicineUnits.find((option) => option.value === value)!;
export const medicineUsageTypeTranslator = (value: string) => medicineUsageType.find((option) => option.value === value)!;

export const medicineFormDefaultValues: TMedicineForm = {
  step: 1,

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

  doses: [
    {
      value: { hour: toLabelValue(withPadStart(8)), minute: toLabelValue(withPadStart(0)) },
      placeholder: { hour: toLabelValue(withPadStart(8)), minute: toLabelValue(withPadStart(0)) },
    },
  ],
};
