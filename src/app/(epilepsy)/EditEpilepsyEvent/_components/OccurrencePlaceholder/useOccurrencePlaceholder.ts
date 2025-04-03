import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

export const useOccurrencePlaceholder = () => {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.editEpilepsyEvent.modals.occurrenceTimeModal.href());

  return { onClick };
};
