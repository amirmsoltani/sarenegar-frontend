import { WheelPicker } from "../WheelPicker";
import styles from "../WheelPicker.module.scss";
import { hoursList, minutesList, secondsList } from "@/helper/helper";

type TFullTimePicker = { name: string; second?: boolean; hour?: boolean };
export const TimePicker = ({ name, second, hour }: TFullTimePicker) => {
  return (
    <div className={styles.wheelPickerContainer}>
      {second ? (
        <>
          <div className={styles.sideBox}></div>
          <WheelPicker options={secondsList} name={`${name}.second`} label="ثانیه" />
          <div className={styles.centerBox}>:</div>
        </>
      ) : (
        <div className={styles.sideBox}></div>
      )}
      <WheelPicker options={minutesList} name={`${name}.minute`} label="دقیقه" />
      {hour ? (
        <>
          <div className={styles.centerBox}>:</div>
          <WheelPicker options={hoursList} name={`${name}.hour`} label="ساعت" />
          <div className={styles.sideBox}></div>
        </>
      ) : (
        <div className={styles.sideBox}></div>
      )}
    </div>
  );
};
