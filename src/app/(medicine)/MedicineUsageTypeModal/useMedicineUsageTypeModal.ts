import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { medicineFirstStepBackwardNavigation } from "../_common/medicineNavigation";

export const useMedicineUsageTypeModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setValue, getValues, formState } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const usageType = getValues("usage_type_placeholder");
    setValue("usage_type", usageType, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  const onClose = () => navigate(medicineFirstStepBackwardNavigation(pathname, params));

  return { _ref, onSubmit, onClose };
};
