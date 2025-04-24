import { routes } from "@/routes/routes";
import { Form } from "@/common/Form/Form";
import styles from "./RetakeMedicine.module.scss";
import { useRetakeMedicine } from "./useRetakeMedicine";
import { Link, Navigate, Outlet } from "react-router-dom";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";

export const RetakeMedicine = () => {
  const { methods, step, submitHandler, prevLink, status, getInfo } = useRetakeMedicine();

  return (
    <Form {...methods} className={styles.container} onSubmit={submitHandler}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link to={prevLink} className={styles.iconWrapper}>
            <ArrowRight className={styles.icon} />
          </Link>
          <div className={styles.title}>باز مصرف دارو</div>
        </div>
        <div className={styles.step}>مرحله {step ?? 1} از 2</div>
      </header>
      <StatusHandler status={status} onClick={getInfo} className={styles.status}>
        {step ? <Outlet /> : <Navigate to={routes.retakeMedicine.tabs.firstStep.href()} replace />}
      </StatusHandler>
    </Form>
  );
};
