import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

export const useDurationTimePlaceholder = () => {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.addEpilepsyEvent.modals.durationTimeModal.href());

  return { onClick };
};
