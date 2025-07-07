import { Navigate } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";

export const RedirectToLogin = () => <Navigate to={routes.login.href()} replace />;

export const RedirectToDashboard = () => {
  return <Navigate to={routes.dashboard.href()} replace />};

export const RedirectToCurrentMedicines = () => <Navigate to={routes.medicine.tabs.current.href()} replace />;
