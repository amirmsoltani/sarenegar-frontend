import styles from './Activation.module.scss';
import {Edit} from 'iconsax-react';


export const Activation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.title}>کد فعالسازی</div>
                <div className={styles.lineRed} />
                <div className={styles.description}>کد 5 رقمی پیامک شده به شماره زیر را وارد نمایید</div>
                <div className={styles.numberBox}>
                    <div className={styles.number}>۰۹۹۳۱۸۱۸۰۵۶</div>
                    <Edit className={styles.icon} />
                </div>
                <div className={styles.codeBox}>
                    <input className={styles.codeNumber} type="text" value='7' />
                    <input className={styles.codeNumber} type="text" value='6' />
                    <input className={styles.codeNumber} type="text" value='9' />
                    <input className={styles.codeNumber} type="text" value='3' />
                    <input className={styles.codeNumber} type="text" value='7' />
                </div>
                <div className={styles.btnBox}>ورود</div>
                <div className={styles.timer}><span>00:60</span> تا ارسال مجدد پیامک</div>

            </div>
        </div>
    );
};
