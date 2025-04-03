import { WheelPicker } from "../WheelPicker";
import styles from "../WheelPicker.module.scss";
import { hoursList, minutesList } from "@/helper/helper";

type TFullTimePicker = { name: string };
export const TimePicker = ({ name }: TFullTimePicker) => {
  return (
    <div className={styles.wheelPickerContainer}>
      <div className={styles.sideBox}></div>
      <WheelPicker options={minutesList} name={`${name}.minute`} label="دقیقه" />
      <div className={styles.centerBox}>:</div>
      <WheelPicker options={hoursList} name={`${name}.hour`} label="ساعت" />
      <div className={styles.sideBox}></div>
    </div>
  );
};
