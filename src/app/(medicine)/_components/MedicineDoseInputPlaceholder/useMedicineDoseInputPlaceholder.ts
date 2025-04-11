import { routes } from "@/routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const useMedicineDoseInputPlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () =>
    navigate(
      pathname.includes(routes.addMedicine.href())
        ? routes.addMedicine.modals.dose.href()
        : routes.editMedicine.modals.dose.href(),
    );

  return { onClick };
};
