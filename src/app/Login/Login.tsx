import styles from './Login.module.scss';
import LogoArt from '@/assets/image/logoArt.png';
import LogoText from '@/assets/image/logoText.png';
import {Link} from "react-router-dom";


export const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={LogoArt} alt='' className={styles.logo}/>
                <img src={LogoText} alt='' className={styles.logo}/>
                <div className={styles.shadow} />

            </div>
            <div className={styles.main}>
                <div className={styles.titleBox}>
                    <div className={styles.title}>به صرع نگار خوش آمدید</div>
                    <div className={styles.description}>دستیار دلسوز بیماران صرع و پزشکان</div>
                </div>
                <div className={styles.mobileBox}>
                    <div className={styles.label}>شماره همراه خود را وارد نمایید</div>
                    <input className={styles.input} type="text" placeholder='شماره موبایل'/>
                    <Link to='/activation' className={styles.btnBox}>ارسال کد فعالسازی</Link>

                </div>


            </div>
        </div>
    );
};
