import { useAppDispatch, useAppSelector } from "@/store/store";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { getCurrentMedicinesListAction } from "@/store/medicine/actions/getCurrentMedicinesList/getCurrentMedicinesList.action";

export const useCurrent = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.currentMedicinesList);

  const getData = () => state.status !== "success" && dispatch(getCurrentMedicinesListAction(undefined));

  useStatusHandler({ state, onComponentDidMount: getData });

  return { getData, ...state };
};
