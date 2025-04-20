import classNames from "classnames";
import { routes } from "@/routes/routes";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const links = [routes.dashboard, routes.medicine, routes.calendar, routes.reports];

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      {links.map(({ path, href, icon: Icon, activeIcon: ActiveIcon }) => (
        <NavLink to={href()} key={path} className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}>
          <Icon className={styles.defaultIcon} />
          <ActiveIcon className={styles.activeIcon} />
        </NavLink>
      ))}
    </nav>
  );
};
