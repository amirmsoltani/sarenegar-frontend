import classname from "classnames";
import { FC, ReactNode } from "react";
import styles from "./Box.module.scss";

type TBox = { children: ReactNode; icon: FC; title: string; variant: string; className?: string };
export const Box = ({ children, icon: Icon, title, variant, className }: TBox) => {
  return (
    <div className={classname(styles.container, className)} data-variant={variant}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <Icon />
      </div>
      {children}
    </div>
  );
};
