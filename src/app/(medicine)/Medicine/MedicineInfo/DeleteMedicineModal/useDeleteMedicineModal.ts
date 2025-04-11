import { routes } from "@/routes/routes";
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
  const state = useAppSelector((store) => store.medicine.deleteMedicine);

  const onSubmit = () => dispatch(deleteMedicineAction({ id: +id! }));

  const onClose = (context?: { close?: boolean }) => {
    if (context?.close) navigate(routes.medicineInfo.href(id!));
    else {
      dispatch(clearStateAction([{ reducerName: "medicine", stateName: "deleteMedicine" }]));
      navigate(routes.medicine.tabs.current.href());
    }
  };

  const closeHandler = () => _ref.current?.close({ close: true });

  useStatusHandler({ state, onSuccess: () => _ref.current?.close() });

  return { _ref, state, onSubmit, onClose, closeHandler };
};
