import { useLocation, useNavigate } from "react-router-dom";
import { medicineForwardNavigation } from "../../_common/medicineNavigation";

export const useMedicineUsageTypePlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () => navigate(medicineForwardNavigation(pathname, "usageType"));

  return { onClick };
};
