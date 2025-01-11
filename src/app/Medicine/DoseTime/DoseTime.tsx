import styles from './DoseTime.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const DoseTime = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>تاریخ شروع مصرف دارو را انتخاب کنید</div>
                    <Link to='/medicine/add/2' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>

                </div>

                <div className={styles.dateTable}>
                    <div className={styles.col}>
                        <div className={styles.row}>دقیقه</div>
                        <div className={styles.row}>۵۹</div>
                        <div className={styles.row}>۰۰</div>
                        <div className={styles.row}>۰۱</div>
                    </div>
                    <div className={styles.colon}>
                        <div className={styles.row}>:</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row}>ساعت</div>
                        <div className={styles.row}>۰۷</div>
                        <div className={styles.row}>۰۸</div>
                        <div className={styles.row}>۰۹</div>
                    </div>
                </div>


                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>

            </div>
        </div>
    );
};