import styles from './Home.module.scss';
import {Profile, Note} from 'iconsax-react';
import Notification from '@/assets/svg/notification-bing.svg'
import Share from '@/assets/svg/share.svg';

export const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.shadow}/>
                <div className={styles.topHeader}>
                    <div className={styles.welcome}>
                        <div className={styles.iconBox}>
                            <Profile className={styles.icon}/>
                        </div>
                        <div className={styles.textBox}>
                            <div className={styles.text}>کاربر عزیز خوش آمدید!</div>
                            <div className={styles.date}>اردیبهشت ۱۴۰۳</div>
                        </div>
                    </div>
                    <div className={styles.notificationBox}>
                        <Notification className={styles.icon}/>
                        <div className={styles.counter}>۵</div>
                    </div>
                </div>

                <div className={styles.week}>
                    <div className={styles.day}>
                        <div className={styles.number}>۱۱</div>
                        <div className={styles.text}>شنبه</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.number}>۱۲</div>
                        <div className={styles.text}>۱شنبه</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.number}>۱۳</div>
                        <div className={styles.text}>۲شنبه</div>
                    </div>
                    <div className={styles.daySelect}>
                        <div className={styles.number}>۱۴</div>
                        <div className={styles.text}>۳شنبه</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.number}>۱۵</div>
                        <div className={styles.text}>۴شنبه</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.number}>۱۶</div>
                        <div className={styles.text}>۵شنبه</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.number}>۱۷</div>
                        <div className={styles.text}>جمعه</div>
                    </div>

                </div>
            </div>

            <div className={styles.content}>

                <div className={styles.main}>
                    <div className={styles.section}>
                            <div className={styles.event}>
                                <div className={styles.topCard}>
                                    <div>رخداد صرع</div>
                                    <Share />
                                </div>
                            </div>

                        <div className={styles.reports}>
                            <div className={styles.topCard}>
                                <div>گزارشات</div>
                                <Note/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.reminder}>
                        <div>یادآور دارو</div>
                    </div>

                    <div className={styles.knowledge}>
                        <div>دانش روز</div>
                    </div>

                </div>
            </div>
        </div>
    );
};
