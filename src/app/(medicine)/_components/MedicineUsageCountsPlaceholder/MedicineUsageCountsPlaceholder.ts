import { useLocation, useNavigate } from "react-router-dom";
import { medicineFirstStepForwardNavigation } from "../../_common/medicineNavigation.ts";

export const medicineUsageCountsPlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();



  const openDayCountsModalHandler = () => navigate(medicineFirstStepForwardNavigation(pathname, "medicineUsageCounts"), { replace: true });


  return {openDayCountsModalHandler}
};
