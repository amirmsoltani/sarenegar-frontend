import { routes } from "@/routes/routes";
import { useFormContext } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";

export const useMedicineEndDate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { watch } = useFormContext<TMedicineForm>();
  const { value } = watch("end_time_type");

  const openDateModalHandler = () =>
    navigate(
      pathname.includes(routes.addMedicine.href())
        ? routes.addMedicine.modals.endDate.href()
        : routes.editMedicine.modals.endDate.href(),
    );

  const openDayCountsModalHandler = () =>
    navigate(
      pathname.includes(routes.addMedicine.href())
        ? routes.addMedicine.modals.dayCounts.href()
        : routes.editMedicine.modals.dayCounts.href(),
    );

  return { value, openDateModalHandler, openDayCountsModalHandler };
};
