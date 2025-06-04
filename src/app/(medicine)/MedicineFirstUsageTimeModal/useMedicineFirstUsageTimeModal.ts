import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { medicineFirstStepBackwardNavigation } from "../_common/medicineNavigation";

export const useMedicineFirstUsageTimeModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();


  const { setValue, getValues } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const startTime = getValues("start_time");
    setValue("start_time.value",startTime.placeholder );
    _ref.current?.close();
  };

  const onClose = () => navigate(medicineFirstStepBackwardNavigation(pathname, params), { replace: true });

  return { _ref, onSubmit, onClose };
};
