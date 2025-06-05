import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./MedicineDoseModal.module.scss";
import { useMedicineDoseModal } from "./useMedicineDoseModal";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";
import { medicineAmounts, medicineUnits } from "../_common/medicineForm";

export const MedicineDoseModal = () => {
  const { _ref, onClose, onSubmit } = useMedicineDoseModal();

  return (
    <Modal _ref={_ref} onClose={onClose} fullWidth title="مقدار شربت در هر بار مصرف دارو را اتنخاب کنید">
      <div className={styles.wheelPickerContainer}>
        <div className={styles.sideBox}></div>
        <WheelPicker options={medicineUnits} name="dose_placeholder.unit" label="واحد" optionClassname={styles.option} />
        <WheelPicker options={medicineAmounts} name="dose_placeholder.amount" label="مقدار" />
        <div className={styles.sideBox}></div>
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
