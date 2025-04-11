import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./Completed.module.scss";
import { useCompleted } from "./useCompleted";
import { Button } from "@/common/Button/Button";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { MedicineCard } from "../_components/MedicineCard/MedicineCard";

export const Completed = () => {
  const { getData, status, data } = useCompleted();

  return (
    <StatusHandler status={status} className={styles.statusContainer} onClick={getData}>
      {data &&
        (data.results.length ? (
          <>
            <div className={styles.list}>
              {data.results.map((item) => (
                <MedicineCard key={item.id} {...item} />
              ))}
            </div>
            <Link to={routes.addMedicine.href()} className={styles.link}>
              <Button>ثبت داروی جدید</Button>
            </Link>
          </>
        ) : (
          <section className={styles.emptyList}>
            <img src="/add-pill2.png" className={styles.cover} />
            <p className={styles.description}>هنوز داروی تکمیل شده وجود ندارد</p>
            <Link to={routes.addMedicine.href()}>
              <Button>ثبت داروی جدید</Button>
            </Link>
          </section>
        ))}
    </StatusHandler>
  );
};
