import { useLocation, useNavigate } from "react-router-dom";
import { medicineFirstStepForwardNavigation } from "../../_common/medicineNavigation";

export const useMedicineDoseInputPlaceholder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () => navigate(medicineFirstStepForwardNavigation(pathname, "dose"));

  return { onClick };
};
