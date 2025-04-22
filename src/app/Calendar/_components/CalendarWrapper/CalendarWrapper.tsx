import { useCalendarWrapper } from "./useCalendarWrapper.ts";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";

export const CalendarWrapper = () => {
  const { mode } = useCalendarWrapper();

  if (!mode) return <Navigate to={routes.calendar.href()} replace />;

  return <Outlet />;
};
