import { useFormContext } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { medicineSecondStepForwardNavigation } from "../../_common/medicineNavigation";

export const useMedicineEndDate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { watch } = useFormContext<TMedicineForm>();
  const { value } = watch("end_time_type");

  const openDateModalHandler = () => navigate(medicineSecondStepForwardNavigation(pathname, "endDate"), { replace: true });

  const openDayCountsModalHandler = () => navigate(medicineSecondStepForwardNavigation(pathname, "dayCounts"), { replace: true });

  return { value, openDateModalHandler, openDayCountsModalHandler };
};
