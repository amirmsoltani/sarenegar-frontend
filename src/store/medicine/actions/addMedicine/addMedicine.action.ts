import { StoreUtils } from "@/store/Store.utils";
import { addMedicine } from "../../medicineSlice";
import { DateService } from "@/services/DateService";
import { TMedicineForm } from "../../medicineSlice.types";
import { apiDrugDosageDosemanagerDrugDosageCreate, DrugDosageCreateUpdateRequest } from "@/services/api";

export const addMedicineAction = StoreUtils.createAsyncThunk("medicine/addMedicine", async (form: TMedicineForm, thunk) => {
  const data: DrugDosageCreateUpdateRequest = {
    drug: form.drug!.id!,
    end_by_day: +form.day_counts!.value!,
    start_date: DateService.setToGlobalFormat(DateService.jalaliToGregorian(form.start_date!)),
    description: form.description,
    dose_type: form.drug!.form!.id!,
    type_of_usage: form.usage_type!.value,
    dose_value: form.medicine_usage_counts!.value.toString(),
    reminder_times: DateService.createReminders(
      `${form.start_time.value!.hour!.value}:${form.start_time.value!.minute!.value}`,
      +form.medicine_usage_counts!.value,
    ),
    first_dose_start_time:`${form.start_time.value!.hour!.value}:${form.start_time.value!.minute!.value}`,
    dose:
      form.drug?.form.name === "Syrup"
        ? { unit: form.dose.unit!.value, amount: form.dose.amount!.value }
        : ({ unit: "قرص", amount: form.drug_counts?.value } as unknown),
    ...(form.drug_timing_type.value === "ALL_DAY"
      ? { is_daily: true, usage_days: [] }
      : { is_daily: false, usage_days: form.days }),
  };

  const response = await apiDrugDosageDosemanagerDrugDosageCreate(data);

  thunk.dispatch(addMedicine(response.data));

  return response.data;
});
