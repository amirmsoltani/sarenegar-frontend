import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { medicineBackwardNavigation } from "../_common/medicineNavigation";

export const useMedicineDrugDoseModal = () => {
  const _ref = useModalRef();

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const doseId = params.dose as string;

  const { setValue, getValues } = useFormContext<TMedicineForm>();

  const onSubmit = () => {
    const doses = getValues("doses");

    const _doses = doses
      .map((dose, index) => (index === +doseId ? { ...dose, value: dose.placeholder } : dose))
      .sort((a, b) => {
        const hour1 = a.value.hour.value === "00" ? 24 : +a.value.hour.value;
        const hour2 = b.value.hour.value === "00" ? 24 : +b.value.hour.value;
        if (hour1 === hour2) {
          const minute1 = a.value.minute.value === "00" ? 0 : +a.value.minute.value;
          const minute2 = b.value.minute.value === "00" ? 0 : +b.value.minute.value;
          return minute1 - minute2;
        } else return hour1 - hour2;
      });

    setValue("doses", _doses);

    _ref.current?.close();
  };

  const onClose = () => navigate(medicineBackwardNavigation(pathname, params));

  return { _ref, onSubmit, onClose, doseId };
};
