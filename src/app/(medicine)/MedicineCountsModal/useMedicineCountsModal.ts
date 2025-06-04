import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { medicineFirstStepBackwardNavigation } from "../_common/medicineNavigation";

export const useMedicineCountsModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setValue, getValues, formState } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const dayCounts = getValues("drug_counts_placeholder");
    setValue("drug_counts", dayCounts, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  const onClose = () => navigate(medicineFirstStepBackwardNavigation(pathname, params), { replace: true });

  return { _ref, onSubmit, onClose };
};
