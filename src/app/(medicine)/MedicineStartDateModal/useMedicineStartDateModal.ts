import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { medicineSecondStepBackwardNavigation } from "../_common/medicineNavigation";

export const useMedicineStartDateModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setValue, getValues, formState } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const startDate = getValues("start_date_placeholder");
    setValue("start_date", startDate, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  const onClose = () => navigate(medicineSecondStepBackwardNavigation(pathname, params));

  return { _ref, onSubmit, onClose };
};
