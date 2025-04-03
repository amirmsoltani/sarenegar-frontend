import styles from "./TryAgain.module.scss";
import { TTryAgain } from "./TryAgain.types";
import RotateIcon from "@/assets/svg/rotate-right.svg";

export const TryAgain = ({ onClick, size = "md", text = "تلاش دوباره" }: TTryAgain) => {
  return (
    <div onClick={onClick} className={styles.container} data-size={size}>
      <div className={styles.icon}>
        <RotateIcon />
      </div>
      <div className={styles.title}>{text}</div>
    </div>
  );
};
