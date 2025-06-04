import { useLocation, useNavigate } from "react-router-dom";
import { medicineFirstStepForwardNavigation } from "../../_common/medicineNavigation";

export const useMedicineEndDate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();



  const openDayCountsModalHandler = () => navigate(medicineFirstStepForwardNavigation(pathname, "dayCounts"), { replace: true });


  return {openDayCountsModalHandler}
};
