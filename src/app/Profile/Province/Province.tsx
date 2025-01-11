import styles from './Province.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const Province = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.title}>استان محل سکونت شما</div>
                    <Link to='/info' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.dateTable}>
                    <div className={styles.row}>
                        <div className={styles.col}>استان</div>

                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>آذربایجان</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>البرز</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>تهران</div>
                    </div>

                </div>
                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>
            </div>
        </div>
    );
};