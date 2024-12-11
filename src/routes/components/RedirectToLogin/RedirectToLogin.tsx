import { Navigate } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";

export const RedirectToLogin = () => <Navigate to={routes.login.href} replace />;
