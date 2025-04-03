import { routes } from "@/routes/routes";
import { useForm } from "react-hook-form";
import { shallowEqual } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { epilepsyEventFormDefaultValues } from "../_common/epilepsyForm";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { editEpilepsyEventAction } from "@/store/epilepsy/actions/editEpilepsyEvent/editEpilepsyEvent.action";
import { getEpilepsyEventInfo } from "@/store/epilepsy/actions/getEpilepsyEventInfo/getEpilepsyEventInfo.action";

export const useEditEpilepsyEvent = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const methods = useForm({ defaultValues: epilepsyEventFormDefaultValues });

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => {
    return { editState: store.epilepsy.editEpilepsyEvent, infoState: store.epilepsy.epilepsyEventInfo };
  }, shallowEqual);

  const onSubmit = async (form: TEpilepsyEventForm) => await dispatch(editEpilepsyEventAction({ id: +id!, form }));

  const getData = () => dispatch(getEpilepsyEventInfo({ id: +id! }));

  useStatusHandler({
    state: state.infoState,
    onComponentDidMount: getData,
    onSuccess: () => methods.reset(state.infoState.data),
  });
  useStatusHandler({
    state: state.editState,
    onSuccess: () => {
      dispatch(clearStateAction([{ reducerName: "epilepsy", stateName: "editEpilepsyEvent" }]));
      navigate(routes.dashboard.modals.epilepsy.href());
    },
  });

  return { id: id!, methods, onSubmit, getData, status: state.infoState.status };
};
