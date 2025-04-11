import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import { endDaysCounts } from "../_common/medicineForm";
import styles from "./MedicineEndDayCountsModal.module.scss";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";
import { useMedicineEndDayCountsModal } from "./useMedicineEndDayCountsModal";

export const MedicineEndDayCountsModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineEndDayCountsModal();

  return (
    <Modal _ref={_ref} title="تعداد روز تا اتمام مصرف دارو را انتخاب کنید" onClose={onClose} fullWidth>
      <div className={styles.wheelPickerContainer}>
        <WheelPicker name="day_counts_placeholder" label="تعداد روز" options={endDaysCounts} />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
