import styles from './EndNumber.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const EndNumber = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>تعداد روز تا اتمام مصرف دارو را انتخاب کنید</div>
                    <Link to='/medicine/add/2' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>

                </div>

                <div className={styles.dateTable}>
                    <div className={styles.col}>
                        <div className={styles.row}>تعداد روز</div>
                        <div className={styles.row}>۵</div>
                        <div className={styles.row}>۶</div>
                        <div className={styles.row}>۷</div>
                    </div>
                </div>


                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>

            </div>
        </div>
    );
};