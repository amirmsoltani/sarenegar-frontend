import { useLocation, useNavigate } from "react-router-dom";
import { medicineFirstStepForwardNavigation } from "../../_common/medicineNavigation.ts";

export const useMedicineCounts = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();



  const openDayCountsModalHandler = () => navigate(medicineFirstStepForwardNavigation(pathname, "medicineCounts"), { replace: true });


  return {openDayCountsModalHandler}
};
