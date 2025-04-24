import { useLocation, useNavigate } from "react-router-dom";
import { medicineSecondStepForwardNavigation } from "../../_common/medicineNavigation";

export const useMedicineStartDatePlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () => navigate(medicineSecondStepForwardNavigation(pathname, "startDate"));

  return { onClick };
};
