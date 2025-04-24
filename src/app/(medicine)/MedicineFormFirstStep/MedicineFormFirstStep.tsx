import { Outlet } from "react-router-dom";
import { FormButton } from "@/common/Form/Form";
import styles from "./MedicineFormFirstStep.module.scss";
import { MedicineDrugPlaceholder } from "@/app/(medicine)/_components/MedicineDrugPlaceholder/MedicineDrugPlaceholder";
import { MedicineDoseInputPlaceholder } from "@/app/(medicine)/_components/MedicineDoseInputPlaceholder/MedicineDoseInputPlaceholder";
import { MedicineUsageTypePlaceholder } from "@/app/(medicine)/_components/MedicineUsageTypePlaceholder/MedicineUsageTypePlaceholder";

export const MedicineFormFirstStep = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>اطلاعات دارو</h1>
        <div className={styles.wrapper}>
          <MedicineDrugPlaceholder />
          <MedicineDoseInputPlaceholder />
          <MedicineUsageTypePlaceholder />
          <Outlet />
        </div>
      </section>
      <footer className={styles.footer}>
        <FormButton>مرحله بعد</FormButton>
      </footer>
    </>
  );
};
