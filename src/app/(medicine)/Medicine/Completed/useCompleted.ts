import { useAppDispatch, useAppSelector } from "@/store/store";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { getCompletedMedicinesListAction } from "@/store/medicine/actions/getCompletedMedicinesList/getCompletedMedicinesList.action";

export const useCompleted = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.completedMedicinesList);

  const getData = () => state.status !== "success" && dispatch(getCompletedMedicinesListAction(undefined));

  useStatusHandler({ state, onComponentDidMount: getData });

  return { getData, ...state };
};
