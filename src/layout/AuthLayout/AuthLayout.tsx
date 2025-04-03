import { getNowDate } from "@/helper/helper";
import styles from "./AuthLayout.module.scss";
import { useAuthLayout } from "./useAuthLayout";
import { Navigate, Outlet } from "react-router-dom";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";

export const AuthLayout = () => {
  const { state, getProfile, isValid } = useAuthLayout();

  return isValid ? (
    <StatusHandler status={state.status} onClick={getProfile} size="lg" className={styles.container}>
      <Outlet />
    </StatusHandler>
  ) : (
    <Navigate to={`/${getNowDate()}`} />
  );
};
