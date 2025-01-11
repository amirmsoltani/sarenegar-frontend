import styles from './Support.module.scss';
import {Link} from "react-router-dom";
import {ArrowLeft2, ArrowRight, Whatsapp} from "iconsax-react";
import SupportIcon from "@/assets/svg/support.svg";

export const Support = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link to='/profile' className={styles.btnBack}>
                    <ArrowRight className={styles.icon}/>
                </Link>
                <div className={styles.title}>پشتیبانی</div>
            </div>

            <div className={styles.main}>
                <div className={styles.title}>سوالات متداول</div>
                <div className={styles.cardSelected}>
                    <div className={styles.topCard}>
                        <div className={styles.title}>چگونه تشنج‌ها را ثبت کنم؟</div>
                        <ArrowLeft2 className={styles.iconSelected}/>
                    </div>
                    <div className={styles.text}>به تب خانه بروید. روی دکمه + ثبت تشنج کلیک کنید. جزئیات مربوط به تشنج
                        (تاریخ، مدت زمان، علائم و هر اطلاعات دیگر) را وارد کنید.روی گزینه ذخیره بزنید. تمام اطلاعات شما
                        به صورت خودکار ذخیره و در تب گزارش‌ها قابل مشاهده است.
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topCard}>
                        <div className={styles.title}>چگونه داروها را اضافه یا ویرایش کنم؟</div>
                        <ArrowLeft2 className={styles.icon}/>
                    </div>
                    <div className={styles.text}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topCard}>
                        <div className={styles.title}>گزارش‌ها به چه صورت به پزشکم ارسال می‌شود؟</div>
                        <ArrowLeft2 className={styles.icon}/>
                    </div>
                    <div className={styles.text}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topCard}>
                        <div className={styles.title}>اطلاعات شخصی من چقدر امن است؟</div>
                        <ArrowLeft2 className={styles.icon}/>
                    </div>
                    <div className={styles.text}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topCard}>
                        <div className={styles.title}>چگونه می‌توانم با تیم پشتیبانی تماس بگیرم؟</div>
                        <ArrowLeft2 className={styles.icon}/>
                    </div>
                    <div className={styles.text}></div>
                </div>
                <div className={styles.title}>تماس با ما</div>
                <div className={styles.card}>
                    <div className={styles.topCard}>
                        <div className={styles.title}>تماس با پشتیبانی</div>
                        <SupportIcon className={styles.iconSupport}/>
                    </div>
                    <div className={styles.text}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topCard}>
                        <div className={styles.title}>واتساپ</div>
                        <Whatsapp className={styles.iconSupport}/>
                    </div>
                    <div className={styles.text}></div>
                </div>
            </div>
        </div>
    );
};