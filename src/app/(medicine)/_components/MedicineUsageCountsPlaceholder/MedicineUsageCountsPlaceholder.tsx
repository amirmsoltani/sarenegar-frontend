import { Validate } from "@/helper/validate.ts";
import styles from "./MedicineUsageCountsPlaceholder.module.scss";
import { medicineUsageCountsPlaceholder } from "./MedicineUsageCountsPlaceholder.ts";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types.ts";
import { InputController } from "@/common/InputController/InputController.tsx";

export const MedicineUsageCountsPlaceholder = () => {
  const {  openDayCountsModalHandler } = medicineUsageCountsPlaceholder();

  return (
    <div className={styles.container}>



        <InputController
          key={10}
          label="تعداد دفعات مصرف در روز"
          name="medicine_usage_counts"
          Placeholder={MedicineCountsPlaceholder}
          onClick={openDayCountsModalHandler}
          validate={Validate.gen().required()}
        />

    </div>
  );
};


type TDayCountsPlaceholder = { value: TMedicineForm["medicine_usage_counts_placeholder"] };
const MedicineCountsPlaceholder = ({ value }: TDayCountsPlaceholder) => {
  return <div>{value ? `${value.value} دفعه در روز` : "انتخاب کنید"}</div>;
};
