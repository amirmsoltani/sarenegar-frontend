import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { shallowEqual } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { medicineFormDefaultValues } from "../_common/medicineForm";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { editMedicineAction } from "@/store/medicine/actions/editMedicine/editMedicine.action";
import { getMedicineInfoAction } from "@/store/medicine/actions/getMedicineInfo/getMedicineInfo.action";

export const useEditMedicine = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { editState, infoState } = useAppSelector(
    (store) => ({ editState: store.medicine.editMedicine, infoState: store.medicine.medicineInfo }),
    shallowEqual,
  );

  const methods = useForm({ defaultValues: medicineFormDefaultValues });

  const step = methods.watch("step");

  const changeStep = () => methods.setValue("step", 1);

  const submitHandler = async (form: TMedicineForm) => {
    if (step === 1) methods.setValue("step", 2);
    else await dispatch(editMedicineAction({ id: +params.id!, form }));
  };

  const getInfo = () => dispatch(getMedicineInfoAction({ id: +params.id! }));

  useStatusHandler({ state: infoState, onComponentDidMount: getInfo, onSuccess: () => methods.reset(infoState.data) });

  useStatusHandler({
    state: editState,
    onSuccess: () => {
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "editMedicine" }]));
      navigate(editState.data?.is_expired ? routes.medicine.tabs.completed.href() : routes.medicine.tabs.current.href());
    },
  });

  return { methods, step, submitHandler, changeStep, getInfo, status: infoState.status };
};
