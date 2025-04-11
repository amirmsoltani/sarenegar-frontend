import { INormalState } from "../store.types";
import { TCheckboxOption, TDatePicker, TTimePicker, TWheelPickerOption } from "@/common/Form/FormUtils.types";
import { Drug, DrugDosageRetrieve, PaginatedDrugDosageRetrieve, TypeOfUsageEnum, UsageDaysEnum } from "@/services/api";

export type TMedicineSlice = {
  currentMedicinesList: INormalState<PaginatedDrugDosageRetrieve>;
  completedMedicinesList: INormalState<PaginatedDrugDosageRetrieve>;

  medicineInfo: INormalState<DrugDosageRetrieve>;

  deleteMedicine: INormalState<null>;
  completeMedicine: INormalState<null>;
  addMedicine: INormalState<DrugDosageRetrieve>;
};

export type TMedicineForm = {
  step: number;

  drug: null | Drug;

  dose: { unit: null | TWheelPickerOption; amount: null | TWheelPickerOption };
  dose_placeholder: { unit: null | TWheelPickerOption; amount: null | TWheelPickerOption };

  usage_type: null | TWheelPickerOption<TypeOfUsageEnum>;
  usage_type_placeholder: null | TWheelPickerOption<TypeOfUsageEnum>;

  drug_timing_type: TCheckboxOption;
  days: UsageDaysEnum[];

  start_date: TDatePicker | null;
  start_date_placeholder: TDatePicker;

  end_time_type: TCheckboxOption;

  end_date: TDatePicker | null;
  end_date_placeholder: TDatePicker;

  day_counts: TWheelPickerOption | null;
  day_counts_placeholder: TWheelPickerOption;

  doses: { value: TTimePicker; placeholder: TTimePicker }[];
};
