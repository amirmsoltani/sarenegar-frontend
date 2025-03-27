import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";
import { useCallback, useEffect } from "react";
import { Spinner } from "@/common/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { profileAction } from "@/store/auth/actions/profile/profile.action";

export const AuthLayout = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.auth.profile);

  const getData = useCallback(() => dispatch(profileAction(undefined)), [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (state.status === "loading") {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className={styles.container}>
        <button onClick={getData} className={styles.error}>
          تلاش مجدد
        </button>
      </div>
    );
  }

  if (state.status === "success") {
    return <Outlet />;
  }
};
