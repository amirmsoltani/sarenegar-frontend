import { createElement } from "react";
// styles
import styles from "./TextOverflow.module.scss";
// types
import { TTextOverflow } from "./TextOverFlow.types";

export const TextOverflow = ({ className, children, ...props }: TTextOverflow) => {
  return (
    <div className={styles.container}>
      {createElement("span", { ...props, className: `${styles.child} ${className ?? ""}` }, children)}
    </div>
  );
};
