import { StoreUtils } from "@/store/Store.utils";
import { editMedicine } from "../../medicineSlice";
import { DateService } from "@/services/DateService";
import { TMedicineForm } from "../../medicineSlice.types";
import { apiDrugDosageDosemanagerDrugDosageUpdate, DrugDosageCreateUpdateRequest } from "@/services/api";

type TDditMedicineAction = { id: number; form: TMedicineForm };
export const editMedicineAction = StoreUtils.createAsyncThunk(
  "medicine/editMedicine",
  async ({ id, form }: TDditMedicineAction, thunk) => {
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

    const response = await apiDrugDosageDosemanagerDrugDosageUpdate(id, data);

    thunk.dispatch(editMedicine(response.data));

    return response.data;
  },
);
