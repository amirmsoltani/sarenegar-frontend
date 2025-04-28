import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { RouterService } from "@/services/RouterService";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { epilepsyEventFormDefaultValues, epilepsyTimeValidator } from "../_common/epilepsyForm";
import { addEpilepsyEventAction } from "@/store/epilepsy/actions/addEpilepsyEvent/addEpilepsyEvent.action";

export const useAddEpilepsyEvent = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      ...epilepsyEventFormDefaultValues,
      time_of_occurrence: { ...epilepsyEventFormDefaultValues.time_of_occurrence, date: date! },
      time_of_occurrence_placeholder: { ...epilepsyEventFormDefaultValues.time_of_occurrence_placeholder, date: date! },
    },
  });

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.epilepsy.addEpilepsyEvent);

  const onSubmit = async (form: TEpilepsyEventForm) => {
    if (epilepsyTimeValidator(form)) await dispatch(addEpilepsyEventAction(form));
  };

  const backwardHandler = () => RouterService.backward(routes.dashboard.href());

  useStatusHandler({
    state,
    onSuccess: () => {
      dispatch(clearStateAction([{ reducerName: "epilepsy", stateName: "addEpilepsyEvent" }]));
      navigate(routes.dashboard.href());
    },
  });

  return { methods, onSubmit, backwardHandler };
};
