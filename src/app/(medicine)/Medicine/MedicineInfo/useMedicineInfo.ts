import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { getMedicineInfoAction } from "@/store/medicine/actions/getMedicineInfo/getMedicineInfo.action";

export const useMedicineInfo = () => {
  const params = useParams();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.medicineInfo);

  const getData = () => dispatch(getMedicineInfoAction({ id: +params.id! }));

  useStatusHandler({ state, onComponentDidMount: getData });

  return { ...state, getData };
};

export default useMedicineInfo;
