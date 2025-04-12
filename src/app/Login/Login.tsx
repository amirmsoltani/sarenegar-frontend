import { useLogin } from "./useLogin";
import styles from "./Login.module.scss";
import { Form } from "@/common/Form/Form";
import { LoginFirstStep } from "./_components/LoginFirstStep/LoginFirstStep";
import { LoginSecondStep } from "./_components/LoginSecondStep/LoginSecondStep";

export const Login = () => {
  const { step, changeStepHandler, methods, onSubmit } = useLogin();

  return (
    <Form {...methods} onSubmit={onSubmit} className={styles.container}>
      <div className={styles.header} data-close={step === 2}>
        <img src="/logoArt.png" alt="" className={styles.logo} />
        <img src="/logoText.png" alt="" className={styles.logo} />
        <div className={styles.shadow} />
      </div>
      <div className={styles.wrapper}>
        {step === 1 ? <LoginFirstStep /> : <LoginSecondStep changeStepHandler={changeStepHandler} />}
      </div>
    </Form>
  );
};
