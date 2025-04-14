import { FormButton } from "@/common/Form/Form";
import styles from "./MedicineFormSecondStep.module.scss";
import { MedicineDoses } from "@/app/(medicine)/_components/MedicineDoses/MedicineDoses";
import { MedicineTiming } from "@/app/(medicine)/_components/MedicineTiming/MedicineTiming";
import { MedicineEndDate } from "@/app/(medicine)/_components/MedicineEndDate/MedicineEndDate";
import { MedicineStartDatePlaceholder } from "@/app/(medicine)/_components/MedicineStartDatePlaceholder/MedicineStartDatePlaceholder";

type TMedicineFormSecondStep = { type: "ADD" | "EDIT" | "RETAKE" };
export const MedicineFormSecondStep = ({ type }: TMedicineFormSecondStep) => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>زمانبندی دارو</h1>
        <div className={styles.wrapper}>
          <MedicineTiming />
          <MedicineStartDatePlaceholder />
          <MedicineEndDate />
          <MedicineDoses type={type} />
        </div>
      </section>
      <footer className={styles.footer}>
        <FormButton>{type === "ADD" ? "افروزن دارو" : type === "EDIT" ? "ویرایش دارو" : "باز مصرف دارو"}</FormButton>
      </footer>
    </>
  );
};
