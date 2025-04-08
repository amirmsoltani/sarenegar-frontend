import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getEpilepsyEventListAction } from "@/store/epilepsy/actions/getEpilepsyEventList/getEpilepsyEventList.action";

export const useEpilepsyEvent = () => {
  const { date } = useParams();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.epilepsy.epilepsyEventList);

  useEffect(() => {
    if (state.status === "idle" || (state.data && state.data.date !== date)) {
      dispatch(getEpilepsyEventListAction({ date: date as string }));
    }
  }, [date, dispatch, state.data, state.status]);

  return { state };
};
