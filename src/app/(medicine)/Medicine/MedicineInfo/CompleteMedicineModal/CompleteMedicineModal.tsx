import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./CompleteMedicineModal.module.scss";
import { useCompleteMedicineModal } from "./useCompleteMedicineModal";

export const CompleteMedicineModal = () => {
  const { _ref, state, closeHandler, onClose, onSubmit } = useCompleteMedicineModal();

  return (
    <Modal _ref={_ref} variant="SMALL" onClose={onClose}>
      <div className={styles.container}>
        <img className={styles.cover} src="/complete-drug.png" />
        <h1 className={styles.title}>تکمیل دارو</h1>
        <p className={styles.description}>شما در حال تکمیل نمودن مصرف دارو میباشید، آیا از این عملکرد اطمینان دارید ؟</p>
        <div className={styles.actions}>
          <Button size="sm" variant="purple" onClick={onSubmit} loading={state.status === "loading"}>
            تکمیل مصرف
          </Button>
          <Button size="sm" variant="borderedPurple" onClick={closeHandler}>
            انصراف
          </Button>
        </div>
      </div>
    </Modal>
  );
};
