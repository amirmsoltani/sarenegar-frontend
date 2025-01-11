import styles from './Home.module.scss';
import {Profile, Book1, ArrowLeft2, Note1} from 'iconsax-react';
import Notification from '@/assets/svg/notification-bing.svg'
import Share from '@/assets/svg/share.svg';
import Event from '@/assets/image/event.png';
import Pill from '@/assets/svg/pill.svg';
import {Link, Outlet} from "react-router-dom";
import {Navbar} from "@/app/_common/Navbar/Navbar.tsx";
import {MedicineCard} from '@/app/_common/MedicineCard/MedicineCard.tsx';
import {CalenderShow} from "@/app/_common/CalenderShow/CalenderShow.tsx";


export const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet/>
            <div className={styles.header}>
                <div className={styles.shadow}/>
                <div className={styles.topHeader}>
                    <div className={styles.welcome}>
                        <Link to='profile' className={styles.iconBox}>
                            <Profile className={styles.icon}/>
                        </Link>
                        <div className={styles.textBox}>
                            <div className={styles.text}>
                                <div className={styles.name}>کاربر عزیز</div>
                                <div>خوش آمدید!</div>
                            </div>
                            <div className={styles.date}>اردیبهشت ۱۴۰۳</div>
                        </div>
                    </div>
                    <Link to='notification' className={styles.notificationBox}>
                        <Notification className={styles.icon}/>
                        <div className={styles.counter}>۵</div>
                    </Link>
                </div>

                <CalenderShow />
            </div>

            <div className={styles.content}>

                <div className={styles.main}>
                    <div className={styles.section}>
                        <div className={styles.event}>
                            <div className={styles.topCard}>
                                <div className={styles.title}>
                                    <Link to='event' className={styles.link}>رخداد صرع</Link>
                                    <div className={styles.numberBox}>
                                        <div>2</div>
                                        <div>مورد</div>
                                    </div>
                                </div>
                                <Share className={styles.icon}/>
                                <div className={styles.shadowBox}>
                                    <div className={styles.shadowInner}/>
                                </div>
                            </div>
                            <Link to='addEvent' className={styles.linkIcon}>
                                <img src={Event} alt='' className={styles.icon}/>
                            </Link>
                        </div>
                        <div className={styles.reports}>
                            <div className={styles.topCard}>
                                <div className={styles.title}>
                                    <div>گزارشات</div>
                                    <div className={styles.numberBox}>
                                        <div className={styles.text}>ماهانه:</div>
                                        <div>۱۲</div>
                                        <div>مورد</div>
                                    </div>
                                </div>
                                <Note1 className={styles.icon} variant="Bold"/>
                                <div className={styles.shadowBox}>
                                    <div className={styles.shadowInner}/>
                                </div>
                            </div>
                            <div className={styles.bottomCard}>
                                <div className={styles.chartBody}>
                                    <div className={styles.chartBox}>
                                        <div className={styles.lineBox}>
                                            <div className={styles.line} />
                                            <div className={styles.line} />
                                            <div className={styles.line} />
                                            <div className={styles.line} />
                                            <div className={styles.line} />
                                        </div>

                                        <div className={styles.chart}>
                                            <div className={styles.barBox5}>
                                                <div className={styles.number}>۵</div>
                                                <div className={styles.bar}/>
                                            </div>
                                            <div className={styles.barBox3}>
                                                <div className={styles.number}>۳</div>
                                                <div className={styles.bar}/>
                                            </div>
                                            <div className={styles.barBox4}>
                                                <div className={styles.number}>۴</div>
                                                <div className={styles.bar}/>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={styles.numberBox}>
                                        <div>۶</div>
                                        <div>۳</div>
                                        <div>۱</div>
                                    </div>
                                </div>
                                <div className={styles.status}>
                                    <div>شدید</div>
                                    <div>متوسط</div>
                                    <div>خفیف</div>
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.reminder}>
                        <div className={styles.topCard}>
                            <div className={styles.title}>یادآور دارو</div>
                            <Pill className={styles.icon} />
                            <div className={styles.shadowBox}>
                                <div className={styles.shadowInner}/>
                            </div>
                        </div>

                        <div className={styles.slider}>
                            <MedicineCard nameEn='Carbamazepine' nameFa='کاربامازپین' amount='۱/۲ قرص' when='بعد از غذا' srcImg='Carbamazepine.png' link='' status={false} time='۰۷:۰۰'  />
                        </div>
                        <div className={styles.pagination}>
                            <div className={styles.itemSelected} />
                            <div className={styles.item} />
                            <div className={styles.item} />
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
                            <div>تشنج و راه های مواجه با آن در گذر زمان</div>
                            <ArrowLeft2 className={styles.arrow}/>
                        </div>
                    </div>
                    <Navbar/>
                </div>
            </div>


        </div>
    );
};
