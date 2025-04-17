import { Modal } from "@/common/Modal/Modal";
import styles from "./GenderModal.module.scss";
import { Button } from "@/common/Button/Button";
import { useGenderModal } from "./useGenderModal";
import { genderOptions } from "../useProfileInfo";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";

export const GenderModal = () => {
  const { _ref, onClose, onSubmit } = useGenderModal();

  return (
    <Modal _ref={_ref} onClose={onClose} fullWidth title="جنیست خود را انتخاب نمایید">
      <div className={styles.wheelPickerContainer}>
        <WheelPicker name="gender_placeholder" options={genderOptions} label="جنیست" />
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
