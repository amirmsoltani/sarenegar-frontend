import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./OccurrenceTimeModal.module.scss";
import { useOccurrenceTimeModal } from "./useOccurrenceTimeModal";
import { FormRowCalendar } from "@/common/RowCalendar/FormRowCalendar";
import { TimePicker } from "@/common/WheelPicker/TimePicker/TimePicker";

export const OccurrenceTimeModal = () => {
  const { _ref, onClose, submitHandler } = useOccurrenceTimeModal();

  return (
    <Modal _ref={_ref} fullWidth onClose={onClose} title="حمله چه زمانی اتفاق افتاده است ؟">
      <FormRowCalendar name="time_of_occurrence_placeholder.date" />
      <div className={styles.wheelPickerContainer}>
        <TimePicker name="time_of_occurrence_placeholder.time" />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={submitHandler}>تایید</Button>
      </div>
    </Modal>
  );
};
