import styles from './Logout.module.scss';
import DeleteLogo from '@/assets/image/logout.png';
import {Link} from "react-router-dom";


export const Logout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modalBox}>
                <img src={DeleteLogo} alt="" />
                <div className={styles.title}>خروج از حساب کاربری</div>
                <div className={styles.text}>آیا از این عملکرد اطمینان دارید ؟</div>

                <div className={styles.btnBox}>
                    <Link to='/login' className={styles.btnDel}>خروج</Link>
                    <Link to='/profile' className={styles.btnCan}>انصراف</Link>

                </div>

            </div>
        </div>
    );
};