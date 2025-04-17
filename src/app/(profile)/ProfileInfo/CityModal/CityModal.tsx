import { Modal } from "@/common/Modal/Modal";
import styles from "./CityModal.module.scss";
import { useCityModal } from "./useCityModal";
import { Button } from "@/common/Button/Button";
import { WheelPicker } from "@/common/WheelPicker/WheelPicker";

export const CityModal = () => {
  const { _ref, onClose, onSubmit, cities } = useCityModal();

  return (
    <Modal _ref={_ref} onClose={onClose} fullWidth title="شهرستان محل سکونت شما">
      <div className={styles.wheelPickerContainer}>
        {cities.length ? (
          <WheelPicker name="city_placeholder" options={cities} label="شهرستان" />
        ) : (
          <p className={styles.description}>ابتدا استان خود را انتخاب نمایید !</p>
        )}
      </div>
      <div className={styles.submitButton}>
        <Button onClick={onSubmit}>تایید</Button>
      </div>
    </Modal>
  );
};
