import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

export const useStateInput = () => {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.profileInfo.modals.stateModal.href());

  return { onClick };
};
