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
import { addMedicineAction } from "@/store/medicine/actions/addMedicine/addMedicine.action";
import { getMedicineInfoAction } from "@/store/medicine/actions/getMedicineInfo/getMedicineInfo.action";

export const useRetakeMedicine = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const id = +params.id!;

  const dispatch = useAppDispatch();
  const { addState, infoState } = useAppSelector(
    (store) => ({ addState: store.medicine.addMedicine, infoState: store.medicine.medicineInfo }),
    shallowEqual,
  );

  const methods = useForm({ defaultValues: medicineFormDefaultValues });

  const step = pathname.includes(routes.retakeMedicine.tabs.firstStep.href())
    ? 1
    : pathname.includes(routes.retakeMedicine.tabs.firstStep.href())
      ? 2
      : null;

  const backwardHandler = () => RouterService.backward(routes.medicine.href());

  const submitHandler = async (form: TMedicineForm) => {
    dispatch(addMedicineAction(form));
  };

  const getInfo = () => dispatch(getMedicineInfoAction({ id }));

  useStatusHandler({
    state: infoState,
    onComponentDidMount: getInfo,
    onSuccess: () => {
      if (infoState.data) {
        const { drug_counts, usage_type, drug, description, medicine_usage_counts, start_time, drug_timing_type, days } =
          infoState.data;
        methods.reset({
          ...medicineFormDefaultValues,
          drug,
          usage_type,
          days,
          drug_counts,
          drug_timing_type,
          description,
          medicine_usage_counts,
          start_time,
        });
      }
    },
  });

  useStatusHandler({
    state: addState,
    onSuccess: () => {
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "addMedicine" }]));
      navigate(addState.data?.is_expired ? routes.medicine.tabs.completed.href() : routes.medicine.tabs.current.href());
    },
  });

  return { methods, step, submitHandler, backwardHandler, getInfo, status: infoState.status };
};
