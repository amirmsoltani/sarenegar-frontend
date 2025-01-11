import styles from './Gender.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const Gender = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.title}>جنیست خود را انتخاب نمایید</div>
                    <Link to='/info' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.dateTable}>
                    <div className={styles.row}>
                        <div className={styles.col}>جنسیت</div>

                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>مرد</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>زن</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>ترجیح میدهم نگویم!</div>
                    </div>

                </div>
                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>
            </div>
        </div>
    );
};