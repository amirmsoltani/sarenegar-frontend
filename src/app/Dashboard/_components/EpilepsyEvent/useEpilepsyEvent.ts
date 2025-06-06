import { useEffect,MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getEpilepsyEventListAction } from "@/store/epilepsy/actions/getEpilepsyEventList/getEpilepsyEventList.action";
import { routes } from "@/routes/routes.tsx";
import { DateService } from "@/services/DateService.ts";

export const useEpilepsyEvent = () => {
  const { date } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.epilepsy.epilepsyEventList);

  useEffect(() => {
    if (state.status === "idle" || (state.data && state.data.date !== date)) {
      dispatch(getEpilepsyEventListAction({ date: date as string }));
    }
  }, [date, dispatch, state.data, state.status]);

  const clickAddEpilepsyEventHandler  = (e:MouseEvent) => {
    e.preventDefault();
    navigate(routes.addEpilepsyEvent.href())
  }

  const isDisable = DateService.isBiggerThanToday(date!);

  return { state,clickAddEpilepsyEventHandler,isDisable };
};
