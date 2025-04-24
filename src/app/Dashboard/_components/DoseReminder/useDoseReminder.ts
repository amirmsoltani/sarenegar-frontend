import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getDosesList } from "@/store/medicine/actions/getDosesList/getDosesList.action";

export const useDoseReminder = () => {
  const { date } = useParams();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.dosesList);

  useEffect(() => {
    if (state.status === "idle" || (state.data && state.data.date !== date)) {
      dispatch(getDosesList({ date: date as string }));
    }
  }, [date, dispatch, state.data, state.status]);

  return { ...state };
};
