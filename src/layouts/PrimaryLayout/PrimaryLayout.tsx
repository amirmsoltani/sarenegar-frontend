// react-router-dom
import { Outlet } from "react-router-dom";
// styles
import styles from "./PrimaryLayout.module.scss";
// components
import Navbar from "./_components/Navbar/Navbar";
import { Sidebar } from "./_components/Sidebar/Sidebar";

export const PrimaryLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
