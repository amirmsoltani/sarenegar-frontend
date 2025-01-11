import styles from './DateOfBirth.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const DateOfBirth = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.title}>تاریخ تولد خود را وارد نمایید</div>
                    <Link to='/info' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.dateTable}>
                    <div className={styles.row}>
                        <div className={styles.col}>روز</div>
                        <div className={styles.colon}></div>
                        <div className={styles.col}>ماه</div>
                        <div className={styles.colon}></div>
                        <div className={styles.col}>سال</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>۲۶</div>
                        <div className={styles.colon}></div>
                        <div className={styles.col}>دی</div>
                        <div className={styles.colon}></div>
                        <div className={styles.col}>۱۳۶۰</div>
                    </div>
                    <div className={styles.row}>
                    <div className={styles.col}>۲۷</div>
                        <div className={styles.colon}>:</div>
                        <div className={styles.col}>بهمن</div>
                        <div className={styles.colon}>:</div>
                        <div className={styles.col}>۱۳۶۱</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>۲۸</div>
                        <div className={styles.colon}></div>
                        <div className={styles.col}>اسفند</div>
                        <div className={styles.colon}></div>
                        <div className={styles.col}>۱۳۶۲</div>
                    </div>

                </div>
                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>
            </div>
        </div>
    );
};