import { toLabelValue } from "@/helper/helper";
import { StoreUtils } from "@/store/Store.utils";
import { DateService } from "@/services/DateService";
import { TMedicineInfo } from "../../medicineSlice.types";
import { apiDrugDosageDosemanagerDrugDosageRetrieve } from "@/services/api";
import { medicineUsageTypeTranslator } from "@/app/(medicine)/_common/medicineForm";
import { medicineAmountTranslator, medicineUnitTranslator } from "@/app/(medicine)/_common/medicineForm";
import { drugTimingTypes, endDaysCounts, endDaysCountTranslator, endTimeTypes } from "@/app/(medicine)/_common/medicineForm";

type TGetMedicineInfoAction = { id: number };

export const getMedicineInfoAction = StoreUtils.createAsyncThunk(
  "medicine/getMedicineInfo",
  async ({ id }: TGetMedicineInfoAction) => {
    const { data } = await apiDrugDosageDosemanagerDrugDosageRetrieve(id);

    const unit = medicineUnitTranslator((data.dose as any).unit);
    const amount = medicineAmountTranslator((data.dose as any).amount);
    const usageType = medicineUsageTypeTranslator(data.type_of_usage!);
    const startDate = DateService.gregorianToJalali(data.start_date);
    const endDate = DateService.gregorianToJalali(data.end_date!);
    const dayCounts = data.end_by_day ? endDaysCountTranslator(data.end_by_day) : null;

    const _data: TMedicineInfo = {
      is_first_step_submitted: false,

      drug: data.drug,

      dose: { unit, amount },
      dose_placeholder: { unit, amount },

      usage_type: usageType,
      usage_type_placeholder: usageType,

      drug_timing_type: data.is_daily ? drugTimingTypes[0] : drugTimingTypes[1],
      days: data.usage_days! ?? [],

      start_date: startDate,
      start_date_placeholder: startDate,

      end_time_type: data.end_by_day ? endTimeTypes[1] : endTimeTypes[0],

      end_date: endDate,
      end_date_placeholder: endDate,

      day_counts: dayCounts,
      day_counts_placeholder: dayCounts ?? endDaysCounts[0],

      doses: data.reminder_times.map(({ time }) => {
        const [hour, minute] = time.split(":");
        const value = { hour: toLabelValue(hour), minute: toLabelValue(minute) };
        return { value, placeholder: value };
      }),

      is_expired: data.is_expired,
      taken_doses: data.taken_doses,
      total_doses: data.total_doses,
      is_completed: data.is_completed,
      completion_date: data.completion_date,
    };

    return _data;
  },
);
