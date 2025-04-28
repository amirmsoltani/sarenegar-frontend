import { routes } from "@/routes/routes";
import { Form } from "@/common/Form/Form";
import styles from "./AddMedicine.module.scss";
import { useAddMedicine } from "./useAddMedicine";
import { Navigate, Outlet } from "react-router-dom";
import { ArrowRight } from "@wandersonalwes/iconsax-react";

export const AddMedicine = () => {
  const { methods, step, submitHandler, backwardHandler } = useAddMedicine();

  return (
    <Form {...methods} className={styles.container} onSubmit={submitHandler}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <button onClick={backwardHandler} className={styles.iconWrapper} type="button">
            <ArrowRight className={styles.icon} />
          </button>
          <div className={styles.title}>ثبت دارو</div>
        </div>
        <div className={styles.step}>مرحله {step ?? 1} از 2</div>
      </header>
      {step ? <Outlet /> : <Navigate to={routes.addMedicine.tabs.firstStep.href()} replace />}
    </Form>
  );
};
