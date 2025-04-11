import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./PillReminder.module.scss";

export const PillReminder = () => {
  return (
    <section className={styles.container}>
      <Link to={routes.addMedicine.href()}>
        <img className={styles.cover} src="/add-pill.png" />
      </Link>
    </section>
  );
};
