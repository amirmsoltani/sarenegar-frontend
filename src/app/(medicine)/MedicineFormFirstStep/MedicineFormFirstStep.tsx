import { Outlet } from "react-router-dom";
import { FormButton } from "@/common/Form/Form";
import styles from "./MedicineFormFirstStep.module.scss";
import { MedicineDrugPlaceholder } from "@/app/(medicine)/_components/MedicineDrugPlaceholder/MedicineDrugPlaceholder";
import { MedicineDoseInputPlaceholder } from "@/app/(medicine)/_components/MedicineDoseInputPlaceholder/MedicineDoseInputPlaceholder";
import { MedicineUsageTypePlaceholder } from "@/app/(medicine)/_components/MedicineUsageTypePlaceholder/MedicineUsageTypePlaceholder";
import { MedicineTiming } from "@/app/(medicine)/_components/MedicineTiming/MedicineTiming.tsx";
import { MedicineStartDatePlaceholder } from "@/app/(medicine)/_components/MedicineStartDatePlaceholder/MedicineStartDatePlaceholder.tsx";
import { MedicineEndDate } from "@/app/(medicine)/_components/MedicineEndDate/MedicineEndDate.tsx";
import { MedicineCounts } from "@/app/(medicine)/_components/MedicineCounts/MedicineCounts.tsx";
import { useMedicineFormFirstStep } from "@/app/(medicine)/MedicineFormFirstStep/useMedicineFormFirstStep.ts";
import { MedicineUsageCountsPlaceholder } from "@/app/(medicine)/_components/MedicineUsageCountsPlaceholder/MedicineUsageCountsPlaceholder.tsx";
import { MedicineFirstUsageTimePlaceholder } from "@/app/(medicine)/_components/MedicineFirstUsageTimePlaceholder/MedicineFirstUsageTimePlaceholder.tsx";
import { Input } from "@/common/Input/Input.tsx";
import { Fragment } from "react";

export const MedicineFormFirstStep = () => {
  const { drug } = useMedicineFormFirstStep();

  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <MedicineDrugPlaceholder />
          {drug ? (
            <Fragment>
              {drug?.form.name === "Syrup" ? <MedicineDoseInputPlaceholder /> : <MedicineCounts />}
              <MedicineUsageTypePlaceholder />
              <MedicineStartDatePlaceholder />
              <MedicineEndDate />
              <MedicineTiming />
              <MedicineUsageCountsPlaceholder />
              <MedicineFirstUsageTimePlaceholder />
              <Input name={"description"} label={"توضیحات"} placeholder={"در صورت لزوم توضیحات وارد نمایید"} multiline />
            </Fragment>
          ) : null}
          <Outlet />
        </div>
      </section>
      <footer className={styles.footer}>
        <FormButton disabled={!drug}>ثبت دارو</FormButton>
      </footer>
    </>
  );
};
