import { useFormContext } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { medicineForwardNavigation } from "../../_common/medicineNavigation";

export const useMedicineEndDate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { watch } = useFormContext<TMedicineForm>();
  const { value } = watch("end_time_type");

  const openDateModalHandler = () => navigate(medicineForwardNavigation(pathname, "endDate"));

  const openDayCountsModalHandler = () => navigate(medicineForwardNavigation(pathname, "dayCounts"));

  return { value, openDateModalHandler, openDayCountsModalHandler };
};
