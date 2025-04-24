import { INormalState } from "../store.types";
import { PaginatedReminderDetailList, TypeOfUsageEnum, UsageDaysEnum } from "@/services/api";
import { Drug, DrugDosageRetrieve, PaginatedDrugDosageRetrieve, ReminderDetail } from "@/services/api";
import { TCheckboxOption, TDatePicker, TTimePicker, TWheelPickerOption } from "@/common/Form/FormUtils.types";

export type TMedicineInfo = TMedicineForm & Pick<DrugDosageRetrieve, "total_doses" | "taken_doses" | "is_expired">;

export type TMedicineSlice = {
  dosesList: INormalState<PaginatedReminderDetailList & { date: string }>;
  notTakingDose: INormalState<null>;
  doseInfo: INormalState<ReminderDetail>;
  completeDose: INormalState<null, { id: number }>;

  currentMedicinesList: INormalState<PaginatedDrugDosageRetrieve>;
  completedMedicinesList: INormalState<PaginatedDrugDosageRetrieve>;

  medicineInfo: INormalState<TMedicineInfo>;

  deleteMedicine: INormalState<null>;
  completeMedicine: INormalState<null>;
  addMedicine: INormalState<DrugDosageRetrieve>;
  editMedicine: INormalState<DrugDosageRetrieve>;
};

export type TMedicineForm = {
  is_first_step_submitted: boolean;

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
