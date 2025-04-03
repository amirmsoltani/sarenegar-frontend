import { routes } from "@/routes/routes";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const useOccurrenceTimeModal = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const _ref = useModalRef();

  const onClose = () =>
    navigate(
      pathname.includes(routes.addEpilepsyEvent.href())
        ? routes.addEpilepsyEvent.href()
        : routes.editEpilepsyEvent.href(params.id!),
    );

  const closeHandler = () => _ref.current?.close();

  return { _ref, onClose, closeHandler };
};
