// assets
import CloseSvg from "@/assets/svg/close.svg";
// styles
import styles from "./YesOrNoModal.module.scss";
// hooks
import { useYesOrNoModal } from "./useYesOrNoModal";
// types
import { TYesOrNoModal } from "./YesOrNoModal.types";
// components
import { Button } from "@/common/Button/Button";

export const YesOrNoModal = ({ title, description, rejectText, acceptText, onSubmit }: TYesOrNoModal) => {
  const { open, loading, closeHandler, submitHandler } = useYesOrNoModal({ onSubmit });

  return (
    <main className={styles.container} data-open={open}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>{title}</div>
          <button onClick={closeHandler}>
            <CloseSvg />
          </button>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <Button size="sm" variant="blueFill" onClick={closeHandler}>
            {rejectText}
          </Button>
          <Button size="sm" variant="red" onClick={submitHandler} loading={loading}>
            {acceptText}
          </Button>
        </div>
      </div>
    </main>
  );
};
