import { toast } from "react-toastify";
import { routes } from "@/routes/routes";
import { shallowEqual } from "react-redux";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { getDoseInfoAction } from "@/store/medicine/actions/getDoseInfo/getDoseInfo.action";
import { notTakingDoseAction } from "@/store/medicine/actions/notTakingDose/notTakingDose.action";

export const useNotTakeDoseModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const _ref = useModalRef();

  const dispatch = useAppDispatch();
  const { notTakingDoseState, infoState } = useAppSelector(
    (store) => ({ infoState: store.medicine.doseInfo, notTakingDoseState: store.medicine.notTakingDose }),
    shallowEqual,
  );

  const onSubmit = () => dispatch(notTakingDoseAction({ id: +id! }));

  const onClose = () => navigate(routes.dashboard.href());

  const closeHandler = () => _ref.current?.close();

  const getData = () => dispatch(getDoseInfoAction({ id: +id! }));

  useStatusHandler({ state: infoState, onComponentDidMount: getData });

  useStatusHandler({
    state: notTakingDoseState,
    onSuccess: () => {
      _ref.current?.close();
      toast.success("یادآوری اصلاح شد: این ئارو رو مصرف نکردی");
      dispatch(
        clearStateAction([
          { reducerName: "medicine", stateName: "doseInfo" },
          { reducerName: "medicine", stateName: "notTakingDose" },
        ]),
      );
    },
  });

  return { actionState: notTakingDoseState, infoState, _ref, onSubmit, onClose, closeHandler, getData };
};
