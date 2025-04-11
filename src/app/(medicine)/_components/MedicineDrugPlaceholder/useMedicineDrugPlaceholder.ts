import { routes } from "@/routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const useMedicineDrugPlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () =>
    navigate(
      pathname.includes(routes.addMedicine.href())
        ? routes.addMedicine.modals.drugs.href()
        : routes.editMedicine.modals.drugs.href(),
    );

  return { onClick };
};
