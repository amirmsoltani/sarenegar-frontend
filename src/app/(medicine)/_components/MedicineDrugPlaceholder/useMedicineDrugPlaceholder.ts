import { useLocation, useNavigate } from "react-router-dom";
import { medicineFirstStepForwardNavigation } from "../../_common/medicineNavigation";
import { useFormContext } from "react-hook-form";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types.ts";
import { DateService } from "@/services/DateService.ts";
export const useMedicineDrugPlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { watch } = useFormContext<TMedicineForm>();


  const onClick = () => navigate(medicineFirstStepForwardNavigation(pathname, "drugs"), { replace: true });



  const drug = watch("drug");
  const startTime = watch("start_time");
  const medicineUsageCounts =  watch("medicine_usage_counts");
  const drugCounts =  watch("drug_counts");
  const usageType =  watch("usage_type.label") ?? " - ";
  const dose = watch("dose");
  let times = " - ";
  if(startTime && startTime.value && drug && medicineUsageCounts)
  {
    const reminders =DateService.createReminders(`${startTime!.value!.hour.value}:${startTime!.value!.minute.value}`,+medicineUsageCounts!.value!)

    times = reminders.map((time)=>time.time).join("  |  ");
  }
  let useText =  " - ";
  if(drug && drug.form.name === "Syrup" && dose.amount && dose.unit)
  {
    useText = `${dose.amount.value} ${dose.unit.value}`;
  }
  else if(drug && drug.form.name === "Pill" &&drugCounts){
    useText = `${drugCounts.value} قرص`;
  }

  return { onClick,drug,times,usageType,useText };
};
