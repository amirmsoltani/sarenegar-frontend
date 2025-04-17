import styles from "./Accordion.module.scss";
import { useAccordion } from "./useAccordion";
import { ArrowLeft2 } from "@wandersonalwes/iconsax-react";

type TAccordion = { title: string; description: string };
export const Accordion = ({ title, description }: TAccordion) => {
  const { open, toggleOpen } = useAccordion();

  return (
    <div className={styles.container} data-open={open}>
      <div className={styles.topHeader} onClick={toggleOpen}>
        <div className={styles.title}>{title}</div>
        <ArrowLeft2 className={styles.icon} />
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
