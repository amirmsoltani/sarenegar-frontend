import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./DoseReminder.module.scss";
import { useDoseReminder } from "./useDoseReminder";
import { Slider } from "./_components/Slider/Slider";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler.tsx";
import PlusIcon from "@/assets/svg/plus.svg";

export const DoseReminder = () => {
  const { data, status,addButtonClickHandler } = useDoseReminder();

  return (
    <section className={styles.container}>
      <StatusHandler onClick={() => {}} status={status} variant={"white"} size={"sm"}>
        {data?.results.length ? (
          <div className={styles.body}>
            <Slider />
            <div className={styles.line}/>
            <div className={styles.footer} onClick={addButtonClickHandler}>
              <PlusIcon />
              <span className={styles.addButtonText}>افزودن داروی جدید</span>
            </div>
          </div>
        ) : (
          <LinkNavigation />
        )}
      </StatusHandler>
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
