import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import { drugCounts } from "../_common/medicineForm";
import styles from "./MedicineCountsModal.module.scss";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";
import { useMedicineCountsModal } from "./useMedicineCountsModal.ts";

export const MedicineCountsModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineCountsModal();

  return (
    <Modal _ref={_ref} title="تعداد قرص در هر بار مصرف دارو را انتخاب کنید" onClose={onClose} fullWidth>
      <div className={styles.wheelPickerContainer}>
        <WheelPicker name="drug_counts_placeholder" label="تعداد قرص" options={drugCounts} />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
