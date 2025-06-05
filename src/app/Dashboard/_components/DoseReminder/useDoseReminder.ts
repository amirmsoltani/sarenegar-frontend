import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getDosesList } from "@/store/medicine/actions/getDosesList/getDosesList.action";
import { routes } from "@/routes/routes.tsx";

export const useDoseReminder = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.medicine.dosesList);

  useEffect(() => {
    if (state.status === "idle" || (state.data && state.data.date !== date)) {
      dispatch(getDosesList({ date: date as string }));
    }
  }, [date, dispatch, state.data, state.status]);

  const addButtonClickHandler = ()=>{
        navigate(routes.addMedicine.href())
  }

  return { ...state,addButtonClickHandler };
};
