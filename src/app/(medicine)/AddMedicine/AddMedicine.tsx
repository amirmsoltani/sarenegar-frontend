import { routes } from "@/routes/routes";
import { Form } from "@/common/Form/Form";
import styles from "./AddMedicine.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useAddMedicine } from "./useAddMedicine";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { AddMedicineFormFirstStep } from "./_components/AddMedicineFormFirstStep/AddMedicineFormFirstStep";
import { AddMedicineFormSecondStep } from "./_components/AddMedicineFormSecondStep/AddMedicineFormSecondStep";

export const AddMedicine = () => {
  const { methods, step, submitHandler, changeStep } = useAddMedicine();

  return (
    <Form {...methods} className={styles.container} onSubmit={submitHandler}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          {step === 1 ? (
            <Link to={routes.medicine.href()} className={styles.iconWrapper}>
              <ArrowRight className={styles.icon} />
            </Link>
          ) : (
            <button onClick={changeStep} className={styles.iconWrapper}>
              <ArrowRight className={styles.icon} />
            </button>
          )}
          <div className={styles.title}>ثبت دارو</div>
        </div>
        <div className={styles.step}>مرحله {step} از 2</div>
      </header>
      {step === 1 ? <AddMedicineFormFirstStep /> : <AddMedicineFormSecondStep />}
      <Outlet />
    </Form>
  );
};
