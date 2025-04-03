import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./DurationTimeModal.module.scss";
import { useDurationTimeModal } from "./useDurationTimeModal";
import { FullTimePicker } from "@/common/WheelPicker/FullTimePicker/FullTimePicker";

export const DurationTimeModal = () => {
  const { _ref, onClose, closeHandler } = useDurationTimeModal();

  return (
    <Modal _ref={_ref} fullWidth onClose={onClose} title="مدت زمان حمله چقدر بوده است ؟">
      <div className={styles.wheelPickerContainer}>
        <FullTimePicker name="duration" />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={closeHandler}>تایید</Button>
      </div>
    </Modal>
  );
};
