import styles from "./EpilepsyEvent.module.scss";

export const EpilepsyEvent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.count}>2 مورد</div>
      <img src="./event.png" className={styles.cover} />
    </section>
  );
};
