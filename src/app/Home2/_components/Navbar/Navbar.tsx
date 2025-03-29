import classNames from "classnames";
import { routes } from "@/routes/routes";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const links = [routes.home, routes.medicine, routes.calender, routes.reports];

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      {links.map(({ name, icon: Icon, href }) => (
        <NavLink to={href()} key={name} className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}>
          <Icon className={styles.icon} />
        </NavLink>
      ))}
    </nav>
  );
};
