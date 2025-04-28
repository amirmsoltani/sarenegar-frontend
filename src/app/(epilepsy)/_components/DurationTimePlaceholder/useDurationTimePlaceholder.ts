import { routes } from "@/routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const useDurationTimePlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () =>
    navigate(
      pathname.includes(routes.addEpilepsyEvent.href())
        ? routes.addEpilepsyEvent.modals.durationTimeModal.href()
        : routes.editEpilepsyEvent.modals.durationTimeModal.href(),
      { replace: true },
    );

  return { onClick };
};
