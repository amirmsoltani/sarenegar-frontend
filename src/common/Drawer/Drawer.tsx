// hooks
import { useDrawer } from "./useDrawer";
// styles
import styles from "./Drawer.module.scss";
// types
import { TDrawer, TDrawerFooter } from "./Drawer.types";

export const Drawer = ({ title, children }: TDrawer) => {
  const { open, closeHandler } = useDrawer();

  return (
    <main className={styles.container} onClick={closeHandler} data-open={open}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        {/* header */}
        <section className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.cancel} onClick={closeHandler}>
            Cancel
          </button>
        </section>
        {/* body */}
        <section className={styles.body}>{children}</section>
      </div>
    </main>
  );
};

export const DrawerFooter = ({ children }: TDrawerFooter) => {
  return <section className={styles.footer}>{children}</section>;
};
