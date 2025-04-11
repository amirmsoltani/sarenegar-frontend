import { routes } from "@/routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const useMedicineUsageTypePlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () =>
    navigate(
      pathname.includes(routes.addMedicine.href())
        ? routes.addMedicine.modals.usageType.href()
        : routes.editMedicine.modals.usageType.href(),
    );

  return { onClick };
};
