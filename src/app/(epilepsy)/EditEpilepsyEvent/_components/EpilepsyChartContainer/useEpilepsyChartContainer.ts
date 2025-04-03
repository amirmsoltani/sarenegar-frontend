import { useFormContext } from "react-hook-form";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";

export const useEpilepsyChartContainer = () => {
  const { watch } = useFormContext<TEpilepsyEventForm>();
  const { value } = watch("severity");

  return { value };
};
