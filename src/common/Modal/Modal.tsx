import { createContext, useContext } from "react";
// hooks
import { useModal } from "./useModal";
// styles
import styles from "./Modal.module.scss";
// types
import { TModal, TModalFooter, TModalHeader } from "./Modal.types";

const ModalContext = createContext(() => {});

export const Modal = ({ children }: TModal) => {
  const { open, closeHandler } = useModal();

  return (
    <main className={styles.container} onClick={closeHandler} data-open={open}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <ModalContext.Provider value={closeHandler}>
          <section className={styles.body}>{children}</section>
        </ModalContext.Provider>
      </div>
    </main>
  );
};

export const ModalHeader = ({ title, closeTitle, children }: TModalHeader) => {
  const closeHandler = useContext(ModalContext);

  return (
    <section className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      {children}
      <button className={styles.cancel} onClick={closeHandler}>
        {closeTitle ?? "Cancel"}
      </button>
    </section>
  );
};

export const ModalFooter = ({ children }: TModalFooter) => {
  return <section className={styles.footer}>{children}</section>;
};
