import styles from "./Completed.module.scss";
import { useCompleted } from "./useCompleted";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { MedicineCard } from "../_components/MedicineCard/MedicineCard";

export const Completed = () => {
  const { getData, status, data } = useCompleted();

  return (
    <StatusHandler status={status} className={styles.statusContainer} onClick={getData}>
      {data &&
        (data.results.length ? (
          <div className={styles.list}>
            {data.results.map((item) => (
              <MedicineCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <section className={styles.emptyList}>
            <img src="/add-pill2.png" className={styles.cover} />
            <p className={styles.description}>هنوز داروی تکمیل شده وجود ندارد</p>
          </section>
        ))}
    </StatusHandler>
  );
};
