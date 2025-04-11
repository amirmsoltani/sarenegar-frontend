import { useEffect } from "react";
import { VERSION_ID } from "@/constants/constants";
import { RouterService } from "@/services/RouterService.ts";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

export const RouterStateManager = () => {
  RouterService.navigate = useNavigate();
  RouterService.location = useLocation();
  RouterService.params = useParams<Record<string, string>>();

  useEffect(() => {
    if (import.meta.env.MODE === "production") console.log(`%cAPP VERSION => ${VERSION_ID}`, "color: #df6a6a;");
  }, []);

  return <Outlet />;
};
