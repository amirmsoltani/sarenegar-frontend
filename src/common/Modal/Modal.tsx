import classNames from "classnames";
import { useModal } from "./useModal";
import { TModal } from "./Modal.types";
import styles from "./Modal.module.scss";
import CloseSvg from "@/assets/svg/close.svg";

export const Modal = ({
  _ref,
  title,
  onClose,
  children,
  fullWidth,
  bodyClassName,
  wrapperClassName,
  variant = "FULL",
}: TModal) => {
  const { open, closeHandler } = useModal({ _ref, onClose });

  return (
    <main className={styles.container} data-open={open} data-variant={variant} data-modal-open={open}>
      <div className={classNames(styles.wrapper, wrapperClassName)}>
        {variant !== "SMALL" && (
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <button type="button" onClick={closeHandler} className={styles.iconWrapper}>
              <CloseSvg className={styles.icon} />
            </button>
          </div>
        )}
        <section className={classNames(styles.body, bodyClassName)} data-full-width={fullWidth}>
          {children}
        </section>
      </div>
    </main>
  );
};
