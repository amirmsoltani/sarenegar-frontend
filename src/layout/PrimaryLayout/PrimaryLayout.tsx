import { ReactNode } from "react";
import styles from "./PrimaryLayout.module.scss";

type TPrimaryLayout = { children: ReactNode };
export const PrimaryLayout = ({ children }: TPrimaryLayout) => {
  return <div className={styles.container}>{children}</div>;
};
