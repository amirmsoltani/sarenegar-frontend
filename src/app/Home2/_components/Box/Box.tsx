import { FC, ReactNode } from "react";
import styles from "./Box.module.scss";

type TBox = { children: ReactNode; icon: FC; title: string; variant: string };
export const Box = ({ children, icon: Icon, title, variant }: TBox) => {
  return (
    <div className={styles.container} data-variant={variant}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <Icon />
      </div>
      {children}
    </div>
  );
};
