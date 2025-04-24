import { routes } from "@/routes/routes";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { completeDoseAction } from "@/store/medicine/actions/completeDose/completeDose.action";

export const useSlider = () => {
  const [sliderRef, sliderApi] = useEmblaCarousel({ loop: false, startIndex: 1000 });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { listState, completeState } = useAppSelector(
    (store) => ({ listState: store.medicine.dosesList, completeState: store.medicine.completeDose }),
    shallowEqual,
  );

  const completeHandler = (id: number) => dispatch(completeDoseAction({ id }));
  const navigateHandler = (id: number) => navigate(routes.dashboard.modals.notTakeDoseModal.href(id));

  useStatusHandler({
    state: completeState,
    onSuccess: () => {
      sliderApi?.scrollPrev();
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "completeDose" }]));
    },
  });

  return { sliderRef, listState, completeState, completeHandler, navigateHandler };
};
