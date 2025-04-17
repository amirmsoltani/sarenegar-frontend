import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { logoutAction } from "@/store/auth/actions/logout/logout.action";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";

export const useLogoutModal = () => {
  const navigate = useNavigate();

  const _ref = useModalRef();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.auth.logout);

  const onSubmit = () => dispatch(logoutAction(undefined));

  const onClose = () => navigate(routes.profile.href());

  const closeHandler = () => _ref.current?.close({ close: true });

  useStatusHandler({ state, onSuccess: () => _ref.current?.close() });

  return { _ref, state, onSubmit, onClose, closeHandler };
};
