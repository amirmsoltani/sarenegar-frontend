import styles from "./ResendCode.module.scss";
import { useResendCode } from "./useResendCode";
import { Spinner } from "@/common/Spinner/Spinner";

export const ResendCode = () => {
  const { time, timer, isLoading, submitHandler } = useResendCode();

  return time ? (
    <div className={styles.resendOtp}>{timer} تا ارسال مجدد پیامک</div>
  ) : (
    <button type="button" disabled={isLoading} onClick={submitHandler} className={styles.resendOtpActive}>
      {isLoading ? <Spinner variant="black" /> : "ارسال مجدد"}
    </button>
  );
};
