import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./BirthdateModal.module.scss";
import { useBirthdateModal } from "./useBirthdateModal";
import { JalaliDatePicker } from "@/common/WheelPicker/JalaliDatePicker/JalaliDatePicker";

export const BirthdateModal = () => {
  const { _ref, onClose, onSubmit } = useBirthdateModal();

  return (
    <Modal _ref={_ref} onClose={onClose} fullWidth title="تاریخ تولد خود را وارد نمایید">
      <div className={styles.wheelPickerContainer}>
        <JalaliDatePicker name="birth_date_placeholder" removeFuture />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
