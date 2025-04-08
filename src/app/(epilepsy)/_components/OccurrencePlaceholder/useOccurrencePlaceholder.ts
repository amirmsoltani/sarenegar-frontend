import { routes } from "@/routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const useOccurrencePlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () =>
    navigate(
      pathname.includes(routes.addEpilepsyEvent.href())
        ? routes.addEpilepsyEvent.modals.occurrenceTimeModal.href()
        : routes.editEpilepsyEvent.modals.occurrenceTimeModal.href(),
    );

  return { onClick };
};
