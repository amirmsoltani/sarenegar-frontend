import { routes } from "@/routes/routes";
import { Form } from "@/common/Form/Form";
import styles from "./RetakeMedicine.module.scss";
import { Navigate, Outlet } from "react-router-dom";
import { useRetakeMedicine } from "./useRetakeMedicine";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";

export const RetakeMedicine = () => {
  const { methods, step, submitHandler, backwardHandler, status, getInfo } = useRetakeMedicine();

  return (
    <Form {...methods} className={styles.container} onSubmit={submitHandler}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <button onClick={backwardHandler} className={styles.iconWrapper} type="button">
            <ArrowRight className={styles.icon} />
          </button>
          <div className={styles.title}>باز مصرف دارو</div>
        </div>
      </header>
      <StatusHandler status={status} onClick={getInfo} className={styles.status}>
        {step ? <Outlet /> : <Navigate to={routes.retakeMedicine.tabs.firstStep.href()} replace />}
      </StatusHandler>
    </Form>
  );
};
