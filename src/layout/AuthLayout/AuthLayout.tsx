import { getNow } from "@/helper/helper";
import styles from "./AuthLayout.module.scss";
import { useAuthLayout } from "./useAuthLayout";
import { Spinner } from "@/common/Spinner/Spinner";
import { Navigate, Outlet } from "react-router-dom";
import { RouterService } from "@/services/RouterService";

export const AuthLayout = () => {
  const { state, getData, isValid } = useAuthLayout();

  return isValid ? (
    state.status === "loading" ? (
      <div className={styles.container}>
        <Spinner variant="black" size="lg" />
      </div>
    ) : state.status === "error" ? (
      <div className={styles.container}>
        <button onClick={getData} className={styles.error}>
          تلاش مجدد
        </button>
      </div>
    ) : state.status === "success" ? (
      <Outlet />
    ) : (
      <></>
    )
  ) : (
    <Navigate to={`/${getNow()}${RouterService.location.pathname}`} />
  );
};
