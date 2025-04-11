import { Validate } from "@/helper/validate";
import styles from "./MedicineEndDate.module.scss";
import { DateService } from "@/services/DateService";
import { useMedicineEndDate } from "./useMedicineEndDate";
import { endTimeTypes } from "../../_common/medicineForm";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { CheckboxGroup } from "@/common/CheckboxGroup/CheckboxGroup";
import { InputController } from "@/common/InputController/InputController";

export const MedicineEndDate = () => {
  const { value, openDateModalHandler, openDayCountsModalHandler } = useMedicineEndDate();

  return (
    <div className={styles.container}>
      <CheckboxGroup options={endTimeTypes} name="end_time_type" label="اتمام مصرف دارو را انتخاب کنید" />
      {value === "DATE" ? (
        <InputController
          key={1}
          label=""
          name="end_date"
          Placeholder={DatePlaceholder}
          onClick={openDateModalHandler}
          validate={Validate.gen().required()}
        />
      ) : (
        <InputController
          key={2}
          label=""
          name="day_counts"
          Placeholder={DayCountsPlaceholder}
          onClick={openDayCountsModalHandler}
          validate={Validate.gen().required()}
        />
      )}
    </div>
  );
};

type TDatePlaceholder = { value: TMedicineForm["end_date"] };
const DatePlaceholder = ({ value }: TDatePlaceholder) => {
  return <div>{value ? DateService.getDate(DateService.jalaliToGregorian(value)) : "تاریخ اتمام مصرف دارو"}</div>;
};

type TDayCountsPlaceholder = { value: TMedicineForm["day_counts"] };
const DayCountsPlaceholder = ({ value }: TDayCountsPlaceholder) => {
  return <div>{value ? `${value.label} روز` : "تعداد روز تا اتمام مصرف"}</div>;
};
