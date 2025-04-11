import { WheelPicker } from "../WheelPicker";
import styles from "../WheelPicker.module.scss";
import { useJalaliDatePicker } from "./useJalaliDatePicker";
import { jalaliMonths, jalaliYears } from "@/helper/helper";

export type TJalaliDatePicker = { name: string };
export const JalaliDatePicker = ({ name }: TJalaliDatePicker) => {
  const { daysList } = useJalaliDatePicker({ name });

  return (
    <div className={styles.wheelPickerContainer}>
      <div className={styles.sideBox}></div>
      <WheelPicker options={daysList} name={`${name}.day`} label="روز" />
      <div className={styles.centerBox}>:</div>
      <WheelPicker options={jalaliMonths} name={`${name}.month`} label="ماه" />
      <div className={styles.centerBox}>:</div>
      <WheelPicker options={jalaliYears} name={`${name}.year`} label="سال" />
      <div className={styles.sideBox}></div>
    </div>
  );
};
