import { routes } from "@/routes/routes";
import { Navigate, Outlet } from "react-router-dom";
import { useReportsLayout } from "./useReportsLayout";
import { Navbar } from "@/app/_components/Navbar/Navbar";

export const ReportsLayout = () => {
  const { isValid } = useReportsLayout();

  return isValid ? (
    <>
      <Outlet />
      <Navbar />
    </>
  ) : (
    <Navigate to={routes.reportsInfo.href()} replace />
  );
};
