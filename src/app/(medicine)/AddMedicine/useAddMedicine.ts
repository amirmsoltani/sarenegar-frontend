import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { DateService } from "@/services/DateService";
import { RouterService } from "@/services/RouterService";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { medicineFormDefaultValues } from "../_common/medicineForm";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { addMedicineAction } from "@/store/medicine/actions/addMedicine/addMedicine.action";

export const useAddMedicine = () => {
  const { date } = useParams();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.addMedicine);

  const activeDate = DateService.gregorianToJalali(date);

  const methods = useForm({
    defaultValues: {
      ...medicineFormDefaultValues,
      start_date: activeDate,
      end_date_placeholder: activeDate,
      start_date_placeholder: activeDate,
    },
  });

  const step = pathname.includes(routes.addMedicine.tabs.firstStep.href())
    ? 1
    : pathname.includes(routes.addMedicine.tabs.secondStep.href())
      ? 2
      : null;

  const backwardHandler = () => RouterService.backward(routes.medicine.href());

  const submitHandler = async (form: TMedicineForm) => {
    if (step === 1) {
      methods.setValue("is_first_step_submitted", true);
      navigate(routes.addMedicine.tabs.secondStep.href());
    } else await dispatch(addMedicineAction(form));
  };

  useStatusHandler({
    state,
    onSuccess: () => {
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "addMedicine" }]));
      navigate(state.data?.is_expired ? routes.medicine.tabs.completed.href() : routes.medicine.tabs.current.href());
    },
  });

  return { methods, step, submitHandler, backwardHandler };
};
