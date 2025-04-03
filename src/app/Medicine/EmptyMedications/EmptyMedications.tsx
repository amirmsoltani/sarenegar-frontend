import styles from "./EmptyMedications.module.scss";
import Shadow from "@/assets/svg/shadow.svg";
import { Link } from "react-router-dom";
import { Navbar } from "@/app/_components/Navbar/Navbar";

export const EmptyMedications = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Shadow className={styles.shadow} />
        <div className={styles.title}>دارونگار</div>
      </div>
      <div className={styles.main}>
        <div className={styles.colEmpty}>
          <img className={styles.logo} src="/addPill2.png" alt="Pill" />
          <div className={styles.text}>هنوز دارویی برای یادآوری وجود ندارد</div>
          <Link to="/medicine/add/1" className={styles.btn}>
            ثبت داروی جدید
          </Link>
        </div>

        <Navbar />
      </div>
    </div>
  );
};
