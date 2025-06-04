import { Validate } from "@/helper/validate.ts";
import styles from "./MedicineCounts.module.scss";
import { useMedicineCounts } from "./useMedicineCounts.ts";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types.ts";
import { InputController } from "@/common/InputController/InputController.tsx";

export const MedicineCounts = () => {
  const {  openDayCountsModalHandler } = useMedicineCounts();

  return (
    <div className={styles.container}>



        <InputController
          key={10}
          label="تعداد قرص در هر بار مصرف دارو"
          name="drug_counts"
          Placeholder={MedicineCountsPlaceholder}
          onClick={openDayCountsModalHandler}
          validate={Validate.gen().required()}
        />

    </div>
  );
};


type TDayCountsPlaceholder = { value: TMedicineForm["drug_counts_placeholder"] };
const MedicineCountsPlaceholder = ({ value }: TDayCountsPlaceholder) => {
  return <div>{value ? `${value.value} قرص` : "انتخاب کنید"}</div>;
};
