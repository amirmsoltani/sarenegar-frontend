import { Outlet } from "react-router-dom";
import styles from "./Medicine.module.scss";
import { Navbar } from "../../_components/Navbar/Navbar";
import { MedicineNavigation } from "./_components/MedicineNavigation/MedicineNavigation";

export const Medicine = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>دارونگار</h1>
      </header>
      <div className={styles.wrapper}>
        <MedicineNavigation />
        <Outlet />
      </div>
      <Navbar />
    </main>
  );
};
