import { useFormContext } from "react-hook-form";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";

export const useMedicineTiming = () => {
  const { watch } = useFormContext<TMedicineForm>();

  const { value } = watch("drug_timing_type");

  return { value };
};
