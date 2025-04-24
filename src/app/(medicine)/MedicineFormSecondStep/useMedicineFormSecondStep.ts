import { routes } from "@/routes/routes";
import { useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";

type TType = "ADD" | "EDIT" | "RETAKE";

export const useMedicineFormSecondStep = () => {
  const { pathname } = useLocation();
  const { watch } = useFormContext<TMedicineForm>();

  const isFirstStepSubmitted = watch("is_first_step_submitted");

  const type: TType = pathname.includes(routes.addMedicine.href())
    ? "ADD"
    : pathname.includes(routes.editMedicine.href())
      ? "EDIT"
      : "RETAKE";

  return { isFirstStepSubmitted, type };
};
