import styles from './EndDate.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const EndDate = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>تاریخ اتمام  مصرف دارو را انتخاب کنید</div>
                    <Link to='/medicine/add/2' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>

                </div>

                <div className={styles.dateTable}>
                    <div className={styles.col}>
                        <div className={styles.row}>روز</div>
                        <div className={styles.row}>۱۲</div>
                        <div className={styles.row}>۱۳</div>
                        <div className={styles.row}>۱۴</div>
                    </div>
                    <div className={styles.colon}>
                        <div className={styles.row}>:</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row}>ماه</div>
                        <div className={styles.row}>دی</div>
                        <div className={styles.row}>بهمن</div>
                        <div className={styles.row}>اسفند</div>
                    </div>
                    <div className={styles.colon}>
                        <div className={styles.row}>:</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row}>سال</div>
                        <div className={styles.row}>۱۴۰۲</div>
                        <div className={styles.row}>۱۴۰۳</div>
                        <div className={styles.row}>۱۴۰۴</div>
                    </div>
                </div>


                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>

            </div>
        </div>
    );
};