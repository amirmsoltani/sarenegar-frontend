import { useLocation, useNavigate } from "react-router-dom";
import { medicineFirstStepForwardNavigation } from "../../_common/medicineNavigation";

export const useMedicineFirstUsageTimePlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () => navigate(medicineFirstStepForwardNavigation(pathname, "firstUsageTime"), { replace: true });

  return { onClick };
};
