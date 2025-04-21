import { WheelPicker } from "../WheelPicker";
import styles from "../WheelPicker.module.scss";
import { useJalaliDatePicker } from "./useJalaliDatePicker";

export type TJalaliDatePicker = { name: string; removeFuture?: boolean };
export const JalaliDatePicker = ({ name, removeFuture }: TJalaliDatePicker) => {
  const { yearsList, monthList, daysList } = useJalaliDatePicker({ name, removeFuture });

  return (
    <div className={styles.wheelPickerContainer}>
      <div className={styles.sideBox}></div>
      <WheelPicker options={daysList} name={`${name}.day`} label="روز" />
      <div className={styles.centerBox}>:</div>
      <WheelPicker options={monthList} name={`${name}.month`} label="ماه" />
      <div className={styles.centerBox}>:</div>
      <WheelPicker options={yearsList} name={`${name}.year`} label="سال" />
      <div className={styles.sideBox}></div>
    </div>
  );
};
