import classNames from "classnames";
import { Spinner } from "../Spinner/Spinner";
import { TryAgain } from "../TryAgain/TryAgain";
import styles from "./StatusHandler.module.scss";
import { TStatusHandler } from "./StatusHandler.types";

export const StatusHandler = ({ children, status, onClick, size, variant, className }: TStatusHandler) => {
  return status === "loading" ? (
    <div className={classNames(styles.container, className)}>
      <Spinner size={size} variant={variant ?? "black"} />
    </div>
  ) : status === "error" ? (
    <div className={classNames(styles.container, className)}>
      <TryAgain onClick={() => onClick()} />
    </div>
  ) : (
    status === "success" && children
  );
};
