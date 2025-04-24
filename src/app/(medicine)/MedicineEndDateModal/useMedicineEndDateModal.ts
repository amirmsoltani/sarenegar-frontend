import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { medicineSecondStepBackwardNavigation } from "../_common/medicineNavigation";

export const useMedicineEndDateModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setValue, getValues, formState } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const endDate = getValues("end_date_placeholder");
    setValue("end_date", endDate, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  const onClose = () => navigate(medicineSecondStepBackwardNavigation(pathname, params));

  return { _ref, onSubmit, onClose };
};
