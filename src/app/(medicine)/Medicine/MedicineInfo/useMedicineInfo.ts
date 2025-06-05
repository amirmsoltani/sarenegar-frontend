import { routes } from "@/routes/routes";
import { useParams } from "react-router-dom";
import { RouterService } from "@/services/RouterService";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { getMedicineInfoAction } from "@/store/medicine/actions/getMedicineInfo/getMedicineInfo.action";

export const useMedicineInfo = () => {
  const params = useParams();

  const id = +params.id!;

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.medicineInfo);

  const getData = () => dispatch(getMedicineInfoAction({ id }));

  const canEdit = state.data && !state.data.is_expired && !state.data.is_completed;

  const backwardHandler = () =>
    RouterService.backward(
      state.data && (state.data.is_expired || state.data.is_completed)
        ? routes.medicine.tabs.completed.href()
        : routes.medicine.tabs.current.href(),
    );

  useStatusHandler({ state, onComponentDidMount: getData });

  let useText = " - ";

  const drug = state.data?.drug;
  const dose = state.data?.dose;
  if (drug && drug.form.name === "Syrup" && dose && dose.amount && dose.unit) {
    useText = `${dose.amount.value} ${dose.unit.value}`;
  } else if (drug && drug.form.name === "Pill" && dose &&  dose.amount) {
    useText = `${dose.amount.value} قرص`;
  }

  return { ...state, id, getData, canEdit, backwardHandler, useText };
};
