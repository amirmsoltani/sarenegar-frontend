import { Otp } from "@/common/Otp/Otp";
import { FormButton } from "@/common/Form/Form";
import { useFormContext } from "react-hook-form";
import styles from "./LoginSecondStep.module.scss";
import EditIcon from "@/assets/svg/Edit Square.svg";
import { TLoginDefaultValues } from "../../useLogin";
import { ResendCode } from "../ResendCode/ResendCode";

type TLoginSecondStep = { changeStepHandler: Function };
export const LoginSecondStep = ({ changeStepHandler }: TLoginSecondStep) => {
  const { getValues } = useFormContext<TLoginDefaultValues>();

  return (
    <div className={styles.container}>
      <div className={styles.title}>کد فعالسازی</div>
      <div className={styles.description}>کد 5 رقمی پیامک شده به شماره زیر را وارد نمایید</div>
      <div className={styles.phone}>
        <div>{getValues("phone_number")}</div>
        <button type="button" className={styles.icon} onClick={() => changeStepHandler(1)}>
          <EditIcon />
        </button>
      </div>
      <div className={styles.form}>
        <div className={styles.otp}>
          <Otp name="otp" length={6} />
        </div>
        <FormButton radius="md" className={styles.button}>
          ورود
        </FormButton>
        <ResendCode />
      </div>
    </div>
  );
};
