import { useFormContext } from "react-hook-form";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types.ts";


export function useMedicineFormFirstStep(){
  const { watch } = useFormContext<TMedicineForm>();

  const drug = watch("drug");


  return {drug}
}