import { routes } from "@/routes/routes";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { deleteEpilepsyEventAction } from "@/store/epilepsy/actions/deleteEpilepsyEvent/deleteEpilepsyEvent.action";

export const useDeleteEpilepsyEventModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const _ref = useModalRef();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.epilepsy.deleteEpilepsyEvent);

  const onSubmit = () => dispatch(deleteEpilepsyEventAction({ id: +id! }));

  const onClose = (context?: { close?: boolean }) => {
    if (context?.close) navigate(routes.epilepsyEventInfo.href(id!), { replace: true });
    else {
      dispatch(clearStateAction([{ reducerName: "epilepsy", stateName: "deleteEpilepsyEvent" }]));
      navigate(routes.dashboard.href(), { replace: true });
    }
  };

  const closeHandler = () => _ref.current?.close({ close: true });

  useStatusHandler({ state, onSuccess: () => _ref.current?.close() });

  return { _ref, state, onSubmit, onClose, closeHandler };
};
