import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./MedicineFirstUsageTimeModal.module.scss";
import { useMedicineFirstUsageTimeModal } from "./useMedicineFirstUsageTimeModal.ts";
import { TimePicker } from "@/common/WheelPicker/TimePicker/TimePicker";

export const MedicineFirstUsageTimeModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineFirstUsageTimeModal();

  return (
    <Modal _ref={_ref} title={`زمان مصرف اولین دوز دارو را انتخاب کنید`} onClose={onClose} fullWidth>
      <div className={styles.wheelPickerContainer}>
        <TimePicker name={`start_time.placeholder`} hour />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
