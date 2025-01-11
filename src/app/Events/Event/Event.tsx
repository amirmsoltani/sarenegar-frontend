import styles from './Event.module.scss';
import {Link, Outlet} from "react-router-dom";
import {ArrowRight} from "iconsax-react";
import Share from "@/assets/svg/share.svg";


export const Event = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet />
            <div>
                <div className={styles.header}>
                    <div className={styles.right}>
                        <Link to='/event' className={styles.btnBack}>
                            <ArrowRight className={styles.icon}/>
                        </Link>
                        <div className={styles.title}>اطلاعات رخداد صرع</div>
                    </div>

                    <Link to='' className={styles.linkEdit}>ویرایش اطلاعات</Link>
                </div>

                <div className={styles.secDetails}>

                    <div className={styles.status}>
                        <div className={styles.shadowBox}>
                            <div className={styles.shadowInner}/>
                        </div>
                        <div className={styles.secRight}>
                            <div className={styles.type3}>
                                <div className={styles.bigCircle}>
                                    <div className={styles.midCircle}>
                                        <div className={styles.smallCircle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>حمله شدید</div>
                        </div>

                        <div className={styles.secLeft}>
                            <Share className={styles.icon}/>
                        </div>
                    </div>

                </div>

                <div className={styles.main}>
                    <div className={styles.row}>
                        <div className={styles.col}>تاریخ</div>
                        <div className={styles.col}>20 مهر 1403</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>زمان حمله</div>
                        <div className={styles.col}>09:41</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>مدت زمان حمله</div>
                        <div className={styles.col}>02:53</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>هوشیاری خود را از دست داده اید ؟</div>
                        <div className={styles.col}>بله</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>آیا تکان و لرزش وجود داشت ؟</div>
                        <div className={styles.col}>خیر</div>
                    </div>

                </div>
            </div>

            <div className={styles.footer}>
                <Link to='delete' className={styles.btn}>حذف رخداد</Link>
            </div>

        </div>
    );
};