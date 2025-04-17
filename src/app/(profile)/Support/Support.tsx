import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./Support.module.scss";
import WhatsappIcon from "@/assets/svg/whatsapp.svg";
import { Accordion } from "@/common/Accordion/Accordion";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import CustomerServiceIcon from "@/assets/svg/customer-service.svg";

const message =
  "به تب خانه بروید. روی دکمه + ثبت تشنج کلیک کنید. جزئیات مربوط به تشنج (تاریخ، مدت زمان، علائم و هر اطلاعات دیگر) را وارد کنید.روی گزینه ذخیره بزنید. تمام اطلاعات شما به صورت خودکار ذخیره و در تب گزارش‌ها قابل مشاهده است.";

const questions = [
  { title: "چگونه تشنج‌ها را ثبت کنم؟", description: message },
  { title: "چگونه داروها را اضافه یا ویرایش کنم؟", description: message },
  { title: "گزارش‌ها به چه صورت به پزشکم ارسال می‌شود؟", description: message },
  { title: "اطلاعات شخصی من چقدر امن است؟", description: message },
  { title: "چگونه می‌توانم با تیم پشتیبانی تماس بگیرم؟", description: message },
];

export const Support = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to={routes.profile.href()} className={styles.iconWrapper}>
          <ArrowRight className={styles.icon} />
        </Link>
        <h1 className={styles.title}>پشتیبانی</h1>
      </header>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>سوالات متداول</h2>
        <div className={styles.boxes}>
          {questions.map((question) => (
            <Accordion {...question} />
          ))}
        </div>
        <h2 className={styles.title}>تماس با ما</h2>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div className={styles.bpxTitle}>تماس با پشتیبانی</div>
            <CustomerServiceIcon className={styles.icon} />
          </div>
          <div className={styles.box}>
            <div className={styles.bpxTitle}>واتساپ</div>
            <WhatsappIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </main>
  );
};
