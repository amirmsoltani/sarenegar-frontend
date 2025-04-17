import { Modal } from "@/common/Modal/Modal";
import { states } from "@/helper/statesList";
import styles from "./StateModal.module.scss";
import { useStateModal } from "./useStateModal";
import { Button } from "@/common/Button/Button";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";

export const StateModal = () => {
  const { _ref, onClose, onSubmit } = useStateModal();

  return (
    <Modal _ref={_ref} onClose={onClose} fullWidth title="استان محل سکونت شما">
      <div className={styles.wheelPickerContainer}>
        <WheelPicker name="state_placeholder" options={states} label="استان" />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
