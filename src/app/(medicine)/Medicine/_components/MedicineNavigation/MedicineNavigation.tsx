import { routes } from "@/routes/routes";
import { Link, useLocation } from "react-router-dom";
import styles from "./MedicineNavigation.module.scss";

const options = [
  { ...routes.medicine.tabs.current, label: "داروهای جاری" },
  { ...routes.medicine.tabs.completed, label: "داروهای تکمیل شده" },
];

export const MedicineNavigation = () => {
  const { pathname } = useLocation();

  const activeLink =
    pathname === routes.medicine.tabs.current.href()
      ? "current"
      : pathname === routes.medicine.tabs.completed.href()
        ? "completed"
        : undefined;

  return (
    <div>
      <div className={styles.container}>
        {options.map((option, index) => (
          <Link
            key={option.path}
            to={option.href()}
            data-index={index}
            className={styles.option}
            data-active={option.path === activeLink}
          >
            {option.label}
          </Link>
        ))}
        {activeLink && <div className={styles.activator} data-direction={activeLink === "current" ? "start" : "end"}></div>}
      </div>
    </div>
  );
};
