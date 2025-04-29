import { toast } from "react-toastify";
import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { shallowEqual } from "react-redux";
import { RouterService } from "@/services/RouterService";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { medicineFormDefaultValues } from "../_common/medicineForm";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { editMedicineAction } from "@/store/medicine/actions/editMedicine/editMedicine.action";
import { getMedicineInfoAction } from "@/store/medicine/actions/getMedicineInfo/getMedicineInfo.action";

export const useEditMedicine = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const { editState, infoState } = useAppSelector(
    (store) => ({ editState: store.medicine.editMedicine, infoState: store.medicine.medicineInfo }),
    shallowEqual,
  );

  const methods = useForm({ defaultValues: medicineFormDefaultValues });

  const step = pathname.includes(routes.editMedicine.tabs.firstStep.href())
    ? 1
    : pathname.includes(routes.editMedicine.tabs.secondStep.href())
      ? 2
      : null;

  const backwardHandler = () => RouterService.backward(routes.medicine.href());

  const submitHandler = async (form: TMedicineForm) => {
    if (step === 1) {
      methods.setValue("is_first_step_submitted", true);
      navigate(routes.editMedicine.tabs.secondStep.href());
    } else await dispatch(editMedicineAction({ id: +params.id!, form }));
  };

  const getInfo = () => dispatch(getMedicineInfoAction({ id: +params.id! }));

  useStatusHandler({ state: infoState, onComponentDidMount: getInfo, onSuccess: () => methods.reset(infoState.data) });

  useStatusHandler({
    state: editState,
    onSuccess: () => {
      toast.success("دارو با موفقیت ویرایش شد");
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "editMedicine" }]));
      navigate(editState.data?.is_expired ? routes.medicine.tabs.completed.href() : routes.medicine.tabs.current.href());
    },
  });

  return { methods, step, submitHandler, backwardHandler, getInfo, status: infoState.status };
};
