import { routes } from "@/routes/routes";
import { Form } from "@/common/Form/Form";
import styles from "./EditMedicine.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useEditMedicine } from "./useEditMedicine";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { MedicineFormFirstStep } from "../_components/MedicineFormFirstStep/MedicineFormFirstStep";
import { MedicineFormSecondStep } from "../_components/MedicineFormSecondStep/MedicineFormSecondStep";

export const EditMedicine = () => {
  const { methods, step, submitHandler, changeStep, status, getInfo } = useEditMedicine();

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
          <div className={styles.title}>ویرایش دارو</div>
        </div>
        <div className={styles.step}>مرحله {step} از 2</div>
      </header>
      <StatusHandler status={status} onClick={getInfo} className={styles.status}>
        {step === 1 ? <MedicineFormFirstStep /> : <MedicineFormSecondStep type="EDIT" />}
        <Outlet />
      </StatusHandler>
    </Form>
  );
};
