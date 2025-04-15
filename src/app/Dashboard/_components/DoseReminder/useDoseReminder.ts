import Swiper from "swiper";
import { routes } from "@/routes/routes";
import { shallowEqual } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { getDosesList } from "@/store/medicine/actions/getDosesList/getDosesList.action";
import { completeDoseAction } from "@/store/medicine/actions/completeDose/completeDose.action";

export const useDoseReminder = () => {
  const swiperRef = useRef<Swiper>(null);

  const { date } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { listState, completeState } = useAppSelector(
    (store) => ({ listState: store.medicine.dosesList, completeState: store.medicine.completeDose }),
    shallowEqual,
  );

  const completeHandler = (id: number) => dispatch(completeDoseAction({ id }));
  const navigateHandler = (id: number) => navigate(routes.dashboard.modals.notTakeDoseModal.href(id));

  const getData = useCallback(() => {
    if (listState.status === "idle" || (listState.data && listState.data.date !== date)) {
      dispatch(getDosesList({ date: date as string }));
    }
  }, [date, dispatch, listState.data, listState.status]);

  useStatusHandler({
    state: completeState,
    onSuccess: () => {
      swiperRef.current?.slideNext();
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "completeDose" }]));
    },
  });

  useEffect(() => {
    getData();
  }, [getData]);

  return { swiperRef, listState, completeState, getData, completeHandler, navigateHandler };
};
