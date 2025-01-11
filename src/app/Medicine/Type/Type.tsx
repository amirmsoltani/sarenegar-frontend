import styles from './Type.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const Type = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>نوع مصرف دارو را انتخاب نمایید</div>
                    <Link to='/medicine/add/1' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>

                </div>

                <div className={styles.dateTable}>
                    <div className={styles.col}>
                        <div className={styles.row}>نوع مصرف</div>
                        <div className={styles.row}>قبل غذا</div>
                        <div className={styles.row}>با غذا</div>
                        <div className={styles.row}>بعد غذا</div>
                    </div>
                </div>


                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>

            </div>
        </div>
    );
};