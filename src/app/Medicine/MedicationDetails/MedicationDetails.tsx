import styles from './MedicationDetails.module.scss';
import {ArrowRight} from "iconsax-react";
import {Link, Outlet} from "react-router-dom";
import Pill from "@/assets/svg/pill.svg";

export const MedicationDetails = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet />
            <div className={styles.main}>

                <div className={styles.header}>
                    <div className={styles.secRight}>
                        <Link to='/medicine' className={styles.link}>
                            <ArrowRight className={styles.icon}/>
                        </Link>
                        <div className={styles.title}>اطلاعات دارو</div>
                    </div>

                    <Link to='' className={styles.edit}>ویرایش اطلاعات</Link>
                </div>
                <div className={styles.medicine}>
                    <div className={styles.secRight}>
                        <div className={styles.imgBox}>
                            <img className={styles.img} src='/Carbamazepine.png' alt=""/>
                        </div>

                        <div className={styles.nameBox}>
                            <div className={styles.nameFa}>کاربامازپین</div>
                            <div className={styles.nameEn}>Carbamazepine</div>
                            <div className={styles.company}>
                                <div>شرکت تولید کننده:</div>
                                <div className={styles.name}>فایزر</div>
                            </div>
                        </div>
                    </div>

                    <Pill className={styles.icon} />
                    <div className={styles.shadowBox}>
                        <div className={styles.shadowInner}/>
                    </div>

                </div>

                <div className={styles.details}>
                    <div className={styles.row}>
                        <div className={styles.title}>مقدار هر دوز</div>
                        <div className={styles.value}>۱/۲ قرص</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>نوع مصرف</div>
                        <div className={styles.value}>بعد از غذا</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>زمانبندی</div>
                        <div className={styles.value}>۳ روز در هفته</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>ساعات مصرف</div>
                        <div className={styles.value}>
                            <div>۰۸:۰۰</div>
                            <div>-</div>
                            <div>۲۰:۰۰</div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>تاریخ شروع مصرف</div>
                        <div className={styles.value}>۲۰ شهریور ۱۴۰۳</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>تاریخ اتمام مصرف</div>
                        <div className={styles.value}>۲۰ مهر ۱۴۰۳</div>
                    </div>

                    <div className={styles.chartBox}>
                        <div className={styles.chart}>
                            <div className={styles.text}>
                                <div className={styles.days}>
                                    <div>۱۸</div>
                                    <div>از</div>
                                    <div>۲۴</div>
                                </div>
                                <div>روز مصرف</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <Link to='delete' className={styles.btnDelete}>حذف دارو</Link>

            <div className={styles.footer}>
                <Link to='completion' className={styles.btn}>تکمیل مصرف دارو</Link>
            </div>
        </div>
    );
};