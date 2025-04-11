import { routes } from "@/routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const useMedicineStartDatePlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () =>
    navigate(
      pathname.includes(routes.addMedicine.href())
        ? routes.addMedicine.modals.startDate.href()
        : routes.editMedicine.modals.startDate.href(),
    );

  return { onClick };
};
