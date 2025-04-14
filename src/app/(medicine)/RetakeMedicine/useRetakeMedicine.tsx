import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { shallowEqual } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { medicineFormDefaultValues } from "../_common/medicineForm";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { addMedicineAction } from "@/store/medicine/actions/addMedicine/addMedicine.action";
import { getMedicineInfoAction } from "@/store/medicine/actions/getMedicineInfo/getMedicineInfo.action";

export const useRetakeMedicine = () => {
  const params = useParams();
  const navigate = useNavigate();

  const id = +params.id!;

  const dispatch = useAppDispatch();
  const { addState, infoState } = useAppSelector(
    (store) => ({ addState: store.medicine.addMedicine, infoState: store.medicine.medicineInfo }),
    shallowEqual,
  );

  const methods = useForm({ defaultValues: medicineFormDefaultValues });

  const step = methods.watch("step");

  const changeStep = () => methods.setValue("step", 1);

  const submitHandler = async (form: TMedicineForm) => {
    if (step === 1) methods.setValue("step", 2);
    else await dispatch(addMedicineAction(form));
  };

  const getInfo = () => dispatch(getMedicineInfoAction({ id }));

  useStatusHandler({
    state: infoState,
    onComponentDidMount: getInfo,
    onSuccess: () => methods.reset({ ...medicineFormDefaultValues, drug: infoState.data?.drug }),
  });

  useStatusHandler({
    state: addState,
    onSuccess: () => {
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "addMedicine" }]));
      navigate(addState.data?.is_expired ? routes.medicine.tabs.completed.href() : routes.medicine.tabs.current.href());
    },
  });

  return { id, methods, step, submitHandler, changeStep, getInfo, status: infoState.status };
};
