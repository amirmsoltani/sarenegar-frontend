import { routes } from "@/routes/routes";
import { shallowEqual } from "react-redux";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { deleteMedicineAction } from "@/store/medicine/actions/deleteMedicine/deleteMedicine.action";

export const useDeleteMedicineModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const _ref = useModalRef();

  const dispatch = useAppDispatch();
  const { deleteState, infoState } = useAppSelector(
    (store) => ({ deleteState: store.medicine.deleteMedicine, infoState: store.medicine.medicineInfo }),
    shallowEqual,
  );

  const onSubmit = () =>
    dispatch(
      deleteMedicineAction({ id: +id!, is_expired: infoState.data!.is_expired!, is_completed: infoState.data!.is_completed }),
    );

  const onClose = (context?: { close?: boolean }) => {
    if (context?.close) navigate(routes.medicineInfo.href(id!), { replace: true });
    else {
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "deleteMedicine" }]));
      navigate(
        infoState.data!.is_expired || infoState.data!.is_completed
          ? routes.medicine.tabs.completed.href()
          : routes.medicine.tabs.current.href(),
        { replace: true },
      );
    }
  };

  const closeHandler = () => _ref.current?.close({ close: true });

  useStatusHandler({ state: deleteState, onSuccess: () => _ref.current?.close() });

  return { _ref, state: deleteState, onSubmit, onClose, closeHandler };
};
