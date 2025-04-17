import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

export const useGenderInput = () => {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.profileInfo.modals.genderModal.href());

  return { onClick };
};
