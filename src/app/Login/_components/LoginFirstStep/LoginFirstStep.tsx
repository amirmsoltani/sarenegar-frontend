import { Input } from "@/common/Input/Input";
import { Validate } from "@/helper/validate";
import { FormButton } from "@/common/Form/Form";
import styles from "./LoginFirstStep.module.scss";

export const LoginFirstStep = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>به صرع نگار خوش آمدید</div>
      <div className={styles.description}>دستیار دلسوز بیماران صرع و پزشکان</div>
      <div className={styles.form}>
        <Input
          dir="ltr"
          name="phone_number"
          placeholder="شماره موبایل"
          label="شماره همراه خود را وارد نمایید"
          validate={Validate.gen().required().isPhoneNumber()}
        />
        <FormButton radius="md" className={styles.button}>ارسال کد فعالسازی</FormButton>
      </div>
    </div>
  );
};
