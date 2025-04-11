import { StoreUtils } from "@/store/Store.utils";
import { addMedicine } from "../../medicineSlice";
import { DateService } from "@/services/DateService";
import { TMedicineForm } from "../../medicineSlice.types";
import { apiDrugDosageDosemanagerDrugDosageCreate, DrugDosageCreateUpdateRequest } from "@/services/api";

export const addMedicineAction = StoreUtils.createAsyncThunk("medicine/addMedicine", async (form: TMedicineForm, thunk) => {
  const data: DrugDosageCreateUpdateRequest = {
    drug: form.drug!.id!,
    dose: { unit: form.dose.unit!.value, amount: form.dose.amount!.value },
    type_of_usage: form.usage_type!.value,
    start_date: DateService.setToGlobalFormat(DateService.jalaliToGregorian(form.start_date!)),
    reminder_times: form.doses.map((dose) => {
      const value = `${dose.value.hour.value}:${dose.value.minute.value}`;
      return { name: value, time: value };
    }),
    ...(form.drug_timing_type.value === "ALL_DAY"
      ? { is_daily: true, usage_days: [] }
      : { is_daily: false, usage_days: form.days }),
    ...(form.end_time_type.value === "DATE"
      ? { end_date: DateService.setToGlobalFormat(DateService.jalaliToGregorian(form.end_date!)), end_by_day: null }
      : { end_date: null, end_by_day: +form.day_counts!.value }),
  };

  const response = await apiDrugDosageDosemanagerDrugDosageCreate(data);

  thunk.dispatch(addMedicine(response.data));

  return response.data;
});
