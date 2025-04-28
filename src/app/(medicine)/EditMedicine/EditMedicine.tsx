import { routes } from "@/routes/routes";
import { Form } from "@/common/Form/Form";
import styles from "./EditMedicine.module.scss";
import { useEditMedicine } from "./useEditMedicine";
import { Navigate, Outlet } from "react-router-dom";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";

export const EditMedicine = () => {
  const { methods, step, submitHandler, backwardHandler, status, getInfo } = useEditMedicine();

  return (
    <Form {...methods} className={styles.container} onSubmit={submitHandler}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <button onClick={backwardHandler} className={styles.iconWrapper} type="button">
            <ArrowRight className={styles.icon} />
          </button>
          <div className={styles.title}>ویرایش دارو</div>
        </div>
        <div className={styles.step}>مرحله {step ?? 1} از 2</div>
      </header>
      <StatusHandler status={status} onClick={getInfo} className={styles.status}>
        {step ? <Outlet /> : <Navigate to={routes.editMedicine.tabs.firstStep.href()} replace />}
      </StatusHandler>
    </Form>
  );
};
