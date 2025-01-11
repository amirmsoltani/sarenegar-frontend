import styles from './Activation.module.scss';
import {Edit} from 'iconsax-react';
import {Link} from "react-router-dom";


export const Activation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.title}>کد فعالسازی</div>
                <div className={styles.lineRed}/>
                <div className={styles.description}>کد ۵ رقمی پیامک شده به شماره زیر را وارد نمایید</div>
                <div className={styles.numberBox}>
                    <div className={styles.number}>۰۹۹۳۱۸۱۸۰۵۶</div>
                    <Link to='/login' className={styles.link}>
                        <Edit className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.codeBox}>
                    <input className={styles.codeNumber} type="text" value='۷'/>
                    <input className={styles.codeNumber} type="text" value='۶'/>
                    <input className={styles.codeNumber} type="text" value='۹'/>
                    <input className={styles.codeNumber} type="text" value='۳'/>
                    <input className={styles.codeNumber} type="text" value='۷'/>
                </div>
                <Link to='/' className={styles.btnBox}>ورود</Link>
                <div className={styles.timer}>
                    <div>۰۰:۶۰</div>
                    <div>تا ارسال مجدد پیامک</div>
                </div>

            </div>
        </div>
    );
};
