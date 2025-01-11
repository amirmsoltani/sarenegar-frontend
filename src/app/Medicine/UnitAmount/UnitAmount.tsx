import styles from './UnitAmount.module.scss';
import {Add} from "iconsax-react";
import {Link} from "react-router-dom";

export const UnitAmount = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>مقدار و واحد مصرف هر دوز دارو را انتخاب کنید</div>
                    <Link to='/medicine/add/1' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>

                </div>

                <div className={styles.dateTable}>
                    <div className={styles.col}>
                        <div className={styles.row}>واحد</div>
                        <div className={styles.row}>میلی گرم ( mg )</div>
                        <div className={styles.row}>قرص ( pill )</div>
                        <div className={styles.row}>گرم ( g )</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row}> مقدار هر دوز</div>
                        <div className={styles.row}>۱/۴</div>
                        <div className={styles.row}>۱/۲</div>
                        <div className={styles.row}>۱</div>
                    </div>
                </div>


                <div className={styles.btnBox}>
                    <div className={styles.btn}>تایید</div>
                </div>

            </div>
        </div>
    );
};