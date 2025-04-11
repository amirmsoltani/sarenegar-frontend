import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./DurationTimeModal.module.scss";
import { useDurationTimeModal } from "./useDurationTimeModal";
import { TimePicker } from "@/common/WheelPicker/TimePicker/TimePicker";

export const DurationTimeModal = () => {
  const { _ref, onClose, submitHandler } = useDurationTimeModal();

  return (
    <Modal _ref={_ref} fullWidth onClose={onClose} title="مدت زمان حمله چقدر بوده است ؟">
      <div className={styles.wheelPickerContainer}>
        <TimePicker name="duration_placeholder" second />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={submitHandler}>تایید</Button>
      </div>
    </Modal>
  );
};
