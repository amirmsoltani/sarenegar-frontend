import { ArrowLeft2 } from "iconsax-react";
import styles from "./TodaysKnowledge.module.scss";

export const TodaysKnowledge = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div>اپی لپسی و راه های مواجه با آن در گذر زمان </div>
        <ArrowLeft2 className={styles.icon} />
      </div>
    </section>
  );
};
