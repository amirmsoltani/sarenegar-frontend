import styles from './Home.module.scss';
import {Profile, Note, Book1, ArrowLeft2, CalendarTick} from 'iconsax-react';
import Notification from '@/assets/svg/notification-bing.svg'
import Share from '@/assets/svg/share.svg';
import Event from '@/assets/image/event.png';
import Pill from '@/assets/svg/pill.svg';
import AddPill from '@/assets/image/addPill.png';
import HomeIcon from '@/assets/svg/home-2.svg';
import Clipboard from '@/assets/svg/clipboard-text.svg';
import PillMenu from '@/assets/svg/PillMenu.svg';
import {Link} from "react-router-dom";

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
                                <div className={styles.title}>رخداد صرع</div>
                                <Share className={styles.icon}/>
                                <div className={styles.shadowBox}>
                                    <div className={styles.shadowInner}/>
                                </div>
                            </div>
                            <Link to='addEvent' className={styles.linkIcon} >
                                <img src={Event} alt='' className={styles.icon}/>
                            </Link>
                        </div>
                        <div className={styles.reports}>
                            <div className={styles.topCard}>
                                <div className={styles.title}>گزارشات</div>
                                <Note className={styles.icon} variant="Bold"/>
                                <div className={styles.shadowBox}>
                                    <div className={styles.shadowInner}/>
                                </div>
                            </div>
                            <div className={styles.bottomCard}>
                                <div className={styles.text}>گزارشی وجود ندارد</div>
                                <div className={styles.description}>با ثبت اولین رخداد صرع قابل نمایش خواهد بود</div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.reminder}>
                        <div className={styles.topCard}>
                            <div className={styles.title}>یادآور دارو</div>
                            <Pill className={styles.icon} variant="Bold"/>
                            <div className={styles.shadowBox}>
                                <div className={styles.shadowInner}/>
                            </div>
                        </div>
                        <div className={styles.bottomCard}>
                            <img src={AddPill} alt='' className={styles}/>

                        </div>
                    </div>

                    <div className={styles.knowledge}>
                        <div className={styles.topCard}>
                            <div className={styles.title}>دانش روز</div>
                            <Book1 className={styles.icon} variant="Bold"/>
                            <div className={styles.shadowBox}>
                                <div className={styles.shadowInner}/>
                            </div>
                        </div>
                        <div className={styles.bottomCard}>
                            <div>صرع و راه های مواجه با آن در گذر زمان</div>
                            <ArrowLeft2 className={styles.arrow}/>
                        </div>
                    </div>
                    <div className={styles.navbar}>
                        <div className={styles.itemSelected}>
                            <HomeIcon className={styles.icon}/>
                        </div>
                        <div className={styles.item}>
                            <PillMenu className={styles.icon}/>
                        </div>
                        <div className={styles.item}>
                            <CalendarTick className={styles.icon}/>
                        </div>
                        <div className={styles.item}>
                            <Clipboard className={styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
