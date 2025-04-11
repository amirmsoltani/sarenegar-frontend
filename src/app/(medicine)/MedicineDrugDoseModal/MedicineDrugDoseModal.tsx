import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import { toOrderedNumber } from "@/helper/helper";
import styles from "./MedicineDrugDoseModal.module.scss";
import { useMedicineDrugDoseModal } from "./useMedicineDrugDoseModal";
import { TimePicker } from "@/common/WheelPicker/TimePicker/TimePicker";

export const MedicineDrugDoseModal = () => {
  const { _ref, onClose, onSubmit, doseId } = useMedicineDrugDoseModal();

  return (
    <Modal _ref={_ref} title={`زمان مصرف ${toOrderedNumber(+doseId)} دوز دارو را انتخاب کنید`} onClose={onClose} fullWidth>
      <div className={styles.wheelPickerContainer}>
        <TimePicker name={`doses.${doseId}.placeholder`} />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
