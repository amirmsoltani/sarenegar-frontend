import { RouterService } from "@/services/RouterService.ts";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

export const RouterStateManager = () => {
  RouterService.navigate = useNavigate();
  RouterService.location = useLocation();
  RouterService.params = useParams<Record<string, string>>();
  return <Outlet />;
};
