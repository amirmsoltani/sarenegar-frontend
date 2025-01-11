import styles from './WhenEvent.module.scss';
import {Link} from "react-router-dom";
import {Add} from "iconsax-react";
import {CalenderShow} from "@/app/_common/CalenderShow/CalenderShow.tsx";

export const WhenEvent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>حمله چه زمانی اتفاق افتاده است ؟</div>
                    <Link to='/addEvent' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.main}>
                    <div>

                        <CalenderShow/>

                        <div className={styles.dateTable}>
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

                    </div>
                    <Link to='' className={styles.link}>
                        <div className={styles.btn}> تایید</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};