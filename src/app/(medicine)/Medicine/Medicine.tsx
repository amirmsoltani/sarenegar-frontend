import { Outlet } from "react-router-dom";
import styles from "./Medicine.module.scss";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../../_components/Navbar/Navbar";
import { MedicineNavigation } from "./_components/MedicineNavigation/MedicineNavigation";

export const Medicine = () => {
  return (
    <main className={styles.container}>
      <Helmet>
        <meta name="theme-color" content="#1d2742" />
      </Helmet>
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
