import styles from "./TextOverflow.module.scss";
import { TTextOverflow } from "./TextOverFlow.types";
import classNames from "classnames";

export const TextOverflow = ({ className, children, ...props }: TTextOverflow) => {
  return (
    <div className={styles.container}>
      <span {...props} className={classNames(styles.child,className)}>{children}</span>
    </div>
  );
};
