import { routes } from "@/routes/routes";
import { Form } from "@/common/Form/Form";
import { Link, Outlet } from "react-router-dom";
import styles from "./RetakeMedicine.module.scss";
import { useRetakeMedicine } from "./useRetakeMedicine";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { MedicineFormFirstStep } from "../_components/MedicineFormFirstStep/MedicineFormFirstStep";
import { MedicineFormSecondStep } from "../_components/MedicineFormSecondStep/MedicineFormSecondStep";

export const RetakeMedicine = () => {
  const { id, methods, step, submitHandler, changeStep, status, getInfo } = useRetakeMedicine();

  return (
    <Form {...methods} className={styles.container} onSubmit={submitHandler}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          {step === 1 ? (
            <Link to={routes.medicineInfo.href(id)} className={styles.iconWrapper}>
              <ArrowRight className={styles.icon} />
            </Link>
          ) : (
            <button onClick={changeStep} className={styles.iconWrapper}>
              <ArrowRight className={styles.icon} />
            </button>
          )}
          <div className={styles.title}>باز مصرف دارو</div>
        </div>
        <div className={styles.step}>مرحله {step} از 2</div>
      </header>
      <StatusHandler status={status} onClick={getInfo} className={styles.status}>
        {step === 1 ? <MedicineFormFirstStep /> : <MedicineFormSecondStep type="RETAKE" />}
        <Outlet />
      </StatusHandler>
    </Form>
  );
};
