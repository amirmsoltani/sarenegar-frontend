import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./MedicineStartDateModal.module.scss";
import { useMedicineStartDateModal } from "./useMedicineStartDateModal";
import { JalaliDatePicker } from "@/common/WheelPicker/JalaliDatePicker/JalaliDatePicker";

export const MedicineStartDateModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineStartDateModal();

  return (
    <Modal _ref={_ref} title="تاریخ شروع مصرف دارو را انتخاب کنید" onClose={onClose} fullWidth>
      <div className={styles.wheelPickerContainer}>
        <JalaliDatePicker name="start_date_placeholder" />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
