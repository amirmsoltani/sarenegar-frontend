import { routes } from "@/routes/routes";
import { Input } from "@/common/Input/Input";
import styles from "./ProfileInfo.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useProfileInfo } from "./useProfileInfo";
import { Form, FormButton } from "@/common/Form/Form";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { CityInput } from "./_components/CityInput/CityInput";
import { StateInput } from "./_components/StateInput/StateInput";
import { GenderInput } from "./_components/GenderInput/GenderInput";
import { BirthdateInput } from "./_components/BirthdateInput/BirthdateInput";

export const ProfileInfo = () => {
  const { method, submitHandler } = useProfileInfo();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to={routes.profile.href()} className={styles.iconWrapper}>
          <ArrowRight className={styles.icon} />
        </Link>
        <h1 className={styles.title}>اطلاعات کاربری</h1>
      </header>
      <Form {...method} onSubmit={submitHandler} className={styles.wrapper}>
        <div className={styles.form}>
          <div>
            <Input name="name" label="نام و نام‌خانوادگی" placeholder="نام و نام‌خانوادگی خود را وارد کنید" />
          </div>
          <div>
            <Input name="phone" label="شماره موبایل" placeholder="شماره موبایل" disabled dir="ltr" />
          </div>
          <div>
            <GenderInput />
          </div>
          <div>
            <BirthdateInput />
          </div>
          <div>
            <StateInput />
          </div>
          <div>
            <CityInput />
          </div>
        </div>
        <footer className={styles.footer}>
          <FormButton>ذخیره</FormButton>
        </footer>
        <Outlet />
      </Form>
    </main>
  );
};
