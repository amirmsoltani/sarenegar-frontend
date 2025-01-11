import styles from './TimeEvent.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";

export const TimeEvent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>مدت زمان حمله چقدر بوده است ؟</div>
                    <Link to='/addEvent' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.main}>

                    <div className={styles.dateTable}>
                        <div className={styles.col}>
                            <div className={styles.row}>ثانیه</div>
                            <div className={styles.row}>۴۲</div>
                            <div className={styles.row}>۴۱</div>
                            <div className={styles.row}>۴۰</div>
                        </div>
                        <div className={styles.colon}>
                            <div className={styles.row}>:</div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.row}>دقیقه</div>
                            <div className={styles.row}>۴۲</div>
                            <div className={styles.row}>۴۱</div>
                            <div className={styles.row}>۴۰</div>
                        </div>
                        <div className={styles.colon}>
                            <div className={styles.row}>:</div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.row}>ساعت</div>
                            <div className={styles.row}>۱۰</div>
                            <div className={styles.row}>۰۹</div>
                            <div className={styles.row}>۰۸</div>
                        </div>
                    </div>

                    <Link to='' className={styles.link}>
                        <div className={styles.btn}> تایید</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};