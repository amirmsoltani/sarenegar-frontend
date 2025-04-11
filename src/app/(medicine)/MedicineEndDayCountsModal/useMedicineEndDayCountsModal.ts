import { routes } from "@/routes/routes";
import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const useMedicineEndDayCountsModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setValue, getValues, formState } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const dayCounts = getValues("day_counts_placeholder");
    setValue("day_counts", dayCounts, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  const onClose = () =>
    navigate(pathname.includes(routes.addMedicine.href()) ? routes.addMedicine.href() : routes.editMedicine.href(params.id!));

  return { _ref, onSubmit, onClose };
};
