import { FormButton } from "@/common/Form/Form";
import styles from "./AddMedicineFormSecondStep.module.scss";
import { MedicineDoses } from "@/app/(medicine)/_components/MedicineDoses/MedicineDoses";
import { MedicineTiming } from "@/app/(medicine)/_components/MedicineTiming/MedicineTiming";
import { MedicineEndDate } from "@/app/(medicine)/_components/MedicineEndDate/MedicineEndDate";
import { MedicineStartDatePlaceholder } from "@/app/(medicine)/_components/MedicineStartDatePlaceholder/MedicineStartDatePlaceholder";

export const AddMedicineFormSecondStep = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>زمانبندی دارو</h1>
        <div className={styles.wrapper}>
          <MedicineTiming />
          <MedicineStartDatePlaceholder />
          <MedicineEndDate />
          <MedicineDoses />
        </div>
      </section>
      <footer className={styles.footer}>
        <FormButton>ثبت دارو</FormButton>
      </footer>
    </>
  );
};
