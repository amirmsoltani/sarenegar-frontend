import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

export const useBirthdateInput = () => {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.profileInfo.modals.birthdateModal.href());

  return { onClick };
};
