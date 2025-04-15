import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./NotTakeDoseModal.module.scss";
import { useNotTakeDoseModal } from "./useNotTakeDoseModal";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";

export const NotTakeDoseModal = () => {
  const { _ref, actionState, infoState, closeHandler, getData, onClose, onSubmit } = useNotTakeDoseModal();

  return (
    <Modal _ref={_ref} variant="SMALL" onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.title}>مصرف دارو</div>
        <div className={styles.description}>آیا داروی خود را مصرف کرده اید؟</div>
        <div className={styles.body}>
          <StatusHandler status={infoState.status} onClick={getData} className={styles.status}>
            <div className={styles.card}>slam</div>
            <div className={styles.actions}>
              <Button size="sm" variant="purple" onClick={closeHandler}>
                مصرف کرده ام
              </Button>
              <Button size="sm" variant="borderedPurple" onClick={onSubmit} loading={actionState.status === "loading"}>
                مصرف نکرده ام
              </Button>
            </div>
          </StatusHandler>
        </div>
      </div>
    </Modal>
  );
};
