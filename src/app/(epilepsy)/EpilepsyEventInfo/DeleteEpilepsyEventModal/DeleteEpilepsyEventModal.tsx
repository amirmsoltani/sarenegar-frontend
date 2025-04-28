import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./DeleteEpilepsyEventModal.module.scss";
import { useDeleteEpilepsyEventModal } from "./useDeleteEpilepsyEventModal";

export const DeleteEpilepsyEventModal = () => {
  const { _ref, state, closeHandler, onClose, onSubmit } = useDeleteEpilepsyEventModal();

  return (
    <Modal _ref={_ref} variant="SMALL" onClose={onClose}>
      <div className={styles.container}>
        <img className={styles.cover} src="/deleteEvent.png" />
        <h1 className={styles.title}>حذف رخداد تشنج</h1>
        <p className={styles.description}>شما در حال حذف رخداد تشنج می باشید، آیا از این عملکرد اطمینان دارید ؟</p>
        <div className={styles.actions}>
          <Button size="sm" variant="red" onClick={onSubmit} loading={state.status === "loading"}>
            حذف
          </Button>
          <Button size="sm" variant="borderedRed" onClick={closeHandler}>
            انصراف
          </Button>
        </div>
      </div>
    </Modal>
  );
};
