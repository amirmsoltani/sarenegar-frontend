import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./MedicineUsageTypeModal.module.scss";
import { medicineUsageType } from "../_common/medicineForm";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";
import { useMedicineUsageTypeModal } from "./useMedicineUsageTypeModal";

export const MedicineUsageTypeModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineUsageTypeModal();

  return (
    <Modal _ref={_ref} onClose={onClose} fullWidth title="نوع مصرف دارو را انتخاب نمایید">
      <div className={styles.wheelPickerContainer}>
        <WheelPicker name="usage_type_placeholder" options={medicineUsageType} label="نوع مصرف" />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
