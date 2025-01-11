import styles from './City.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const City = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.title}>شهرستان محل سکونت شما</div>
                    <Link to='/info' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.dateTable}>
                    <div className={styles.row}>
                        <div className={styles.col}>شهرستان</div>

                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>پردیس</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>تهران</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>بومهن</div>
                    </div>

                </div>
                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>
            </div>
        </div>
    );
};