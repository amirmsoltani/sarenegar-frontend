import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./MedicineEndDateModal.module.scss";
import { useMedicineEndDateModal } from "./useMedicineEndDateModal";
import { JalaliDatePicker } from "@/common/WheelPicker/JalaliDatePicker/JalaliDatePicker";

export const MedicineEndDateModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineEndDateModal();

  return (
    <Modal _ref={_ref} title="تاریخ اتمام مصرف دارو را انتخاب کنید" onClose={onClose} fullWidth>
      <div className={styles.wheelPickerContainer}>
        <JalaliDatePicker name="end_date_placeholder" />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
