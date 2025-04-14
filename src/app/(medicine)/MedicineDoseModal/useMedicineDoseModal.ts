import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { medicineBackwardNavigation } from "../_common/medicineNavigation";

export const useMedicineDoseModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setValue, getValues, formState } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const dose = getValues("dose_placeholder");
    setValue("dose", dose, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  const onClose = () => navigate(medicineBackwardNavigation(pathname, params));

  return { _ref, onSubmit, onClose };
};
