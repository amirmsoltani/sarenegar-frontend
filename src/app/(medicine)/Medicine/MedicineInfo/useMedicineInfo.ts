import { useParams } from "react-router-dom";
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

  useStatusHandler({ state, onComponentDidMount: getData });

  return { ...state, id, getData, canEdit };
};
