import { Validate } from "@/helper/validate.ts";
import styles from "./MedicineDescription.module.scss";
import { useMedicineDescription } from "./useMedicineDescription.ts";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types.ts";
import { InputController } from "@/common/InputController/InputController.tsx";

export const MedicineDescription = () => {
  const {  openDayCountsModalHandler } = useMedicineDescription();

  return (
    <div className={styles.container}>



        <InputController
          key={10}
          label="توضیحات"
          name="description"
          Placeholder={MedicineCountsPlaceholder}
          onClick={openDayCountsModalHandler}
          validate={Validate.gen().required()}
        />

    </div>
  );
};


type TDayCountsPlaceholder = { value: TMedicineForm["description"] };
const MedicineCountsPlaceholder = ({ value }: TDayCountsPlaceholder) => {
  return <div>{value ?value: "در صورت لزوم توضیحت وارد کنید"}</div>;
};
