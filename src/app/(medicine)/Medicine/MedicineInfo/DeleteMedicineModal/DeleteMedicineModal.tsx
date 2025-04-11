import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./DeleteMedicineModal.module.scss";
import { useDeleteMedicineModal } from "./useDeleteMedicineModal";

export const DeleteMedicineModal = () => {
  const { _ref, state, closeHandler, onClose, onSubmit } = useDeleteMedicineModal();

  return (
    <Modal _ref={_ref} variant="SMALL" onClose={onClose}>
      <div className={styles.container}>
        <img className={styles.cover} src="/delete-medicine.png" />
        <h1 className={styles.title}>حذف دارو</h1>
        <p className={styles.description}>شما در حال حذف دارو می باشید، آیا از این عملکرد اطمینان دارید ؟</p>
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
