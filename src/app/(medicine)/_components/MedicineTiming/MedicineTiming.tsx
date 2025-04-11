import styles from "./MedicineTiming.module.scss";
import { useMedicineTiming } from "./useMedicineTiming";
import { drugTimingTypes } from "../../_common/medicineForm";
import { CheckboxGroup } from "@/common/CheckboxGroup/CheckboxGroup";
import { WeekdayPicker } from "@/common/WeekdayPicker/WeekdayPicker";

export const MedicineTiming = () => {
  const { value } = useMedicineTiming();
  return (
    <div className={styles.container}>
      <CheckboxGroup name="drug_timing_type" options={drugTimingTypes} label="زمانبندی داروی شما در هفته چگونه است ؟" />
      {value === "CUSTOM" && <WeekdayPicker name="days" />}
    </div>
  );
};
