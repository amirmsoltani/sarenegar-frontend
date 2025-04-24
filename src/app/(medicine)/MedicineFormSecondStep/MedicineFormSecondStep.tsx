import { routes } from "@/routes/routes";
import { FormButton } from "@/common/Form/Form";
import { Navigate, Outlet } from "react-router-dom";
import styles from "./MedicineFormSecondStep.module.scss";
import { useMedicineFormSecondStep } from "./useMedicineFormSecondStep";
import { MedicineDoses } from "@/app/(medicine)/_components/MedicineDoses/MedicineDoses";
import { MedicineTiming } from "@/app/(medicine)/_components/MedicineTiming/MedicineTiming";
import { MedicineEndDate } from "@/app/(medicine)/_components/MedicineEndDate/MedicineEndDate";
import { MedicineStartDatePlaceholder } from "@/app/(medicine)/_components/MedicineStartDatePlaceholder/MedicineStartDatePlaceholder";

export const MedicineFormSecondStep = () => {
  const { isFirstStepSubmitted, type } = useMedicineFormSecondStep();

  return isFirstStepSubmitted ? (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>زمانبندی دارو</h1>
        <div className={styles.wrapper}>
          <MedicineTiming />
          <MedicineStartDatePlaceholder />
          <MedicineEndDate />
          <MedicineDoses type={type} />
          <Outlet />
        </div>
      </section>
      <footer className={styles.footer}>
        <FormButton>{type === "ADD" ? "افزودن دارو" : type === "EDIT" ? "ویرایش دارو" : "باز مصرف دارو"}</FormButton>
      </footer>
    </>
  ) : (
    <Navigate
      replace
      to={routes[type === "ADD" ? "addMedicine" : type === "EDIT" ? "editMedicine" : "retakeMedicine"].tabs.firstStep.href()}
    />
  );
};
