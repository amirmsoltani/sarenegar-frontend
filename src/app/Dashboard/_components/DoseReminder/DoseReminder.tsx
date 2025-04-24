import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./DoseReminder.module.scss";
import { Spinner } from "@/common/Spinner/Spinner";
import { useDoseReminder } from "./useDoseReminder";
import { Slider } from "./_components/Slider/Slider";

export const DoseReminder = () => {
  const { data, status } = useDoseReminder();

  return (
    <section className={styles.container}>
      {status === "idle" || status === "loading" ? (
        <div className={styles.status}>
          <Spinner />
        </div>
      ) : status === "success" ? (
        data!.results.length ? (
          <Slider />
        ) : (
          <LinkNavigation />
        )
      ) : (
        <LinkNavigation />
      )}
    </section>
  );
};

const LinkNavigation = () => {
  return (
    <Link to={routes.addMedicine.href()} className={styles.status}>
      <img className={styles.cover} src="/add-pill.png" />
    </Link>
  );
};
