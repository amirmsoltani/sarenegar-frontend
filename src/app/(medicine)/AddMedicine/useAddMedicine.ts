import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { medicineFormDefaultValues } from "../_common/medicineForm";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { addMedicineAction } from "@/store/medicine/actions/addMedicine/addMedicine.action";

export const useAddMedicine = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.addMedicine);

  const methods = useForm({ defaultValues: medicineFormDefaultValues });

  const step = methods.watch("step");

  const changeStep = () => methods.setValue("step", 1);

  const submitHandler = async (form: TMedicineForm) => {
    if (step === 1) methods.setValue("step", 2);
    else await dispatch(addMedicineAction(form));
  };

  useStatusHandler({
    state,
    onSuccess: () => {
      navigate(routes.medicine.href());
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "addMedicine" }]));
    },
  });

  return { methods, step, submitHandler, changeStep };
};
