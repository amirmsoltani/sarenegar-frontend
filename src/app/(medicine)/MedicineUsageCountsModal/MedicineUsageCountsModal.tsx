import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import {  medicineUsageCounts } from "../_common/medicineForm";
import styles from "./MedicineUsageCountsModal.module.scss";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";
import { useMedicineUsageCountsModal } from "./useMedicineUsageCountsModal.ts";

export const MedicineUsageCountsModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineUsageCountsModal();

  return (
    <Modal _ref={_ref} title="تعداد دفعات مصرف در روز را انتخاب کنید" onClose={onClose} fullWidth>
      <div className={styles.wheelPickerContainer}>
        <WheelPicker name="medicine_usage_counts_placeholder" label="دفعات مصرف" options={medicineUsageCounts} />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
