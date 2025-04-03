import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { epilepsyEventFormDefaultValues } from "../_common/epilepsyForm";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { addEpilepsyEventAction } from "@/store/epilepsy/actions/addEpilepsyEvent/addEpilepsyEvent.action";

export const useAddEpilepsyEvent = () => {
  const navigate = useNavigate();

  const methods = useForm({ defaultValues: epilepsyEventFormDefaultValues });

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.epilepsy.addEpilepsyEvent);

  const onSubmit = async (form: TEpilepsyEventForm) => await dispatch(addEpilepsyEventAction(form));

  useStatusHandler({
    state,
    onSuccess: () => {
      dispatch(clearStateAction([{ reducerName: "epilepsy", stateName: "addEpilepsyEvent" }]));
      navigate(routes.dashboard.modals.epilepsy.href());
    },
  });

  return { methods, onSubmit };
};
