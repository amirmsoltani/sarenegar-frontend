import styles from './DeleteEvent.module.scss';
import DeleteLogo from '@/assets/image/deleteEvent.png';
import {Link} from "react-router-dom";


export const DeleteEvent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modalBox}>
                <img src={DeleteLogo} alt=""  className={styles.deleteLogo}/>
                <div className={styles.title}>حذف رخداد صرع</div>
                <div className={styles.text}>شما در حال حذف رخداد صرع می باشید، آیا از این عملکرد اطمینان دارید ؟</div>

                <div className={styles.btnBox}>
                    <Link to='/event' className={styles.btnDel}>حذف</Link>
                    <Link to='/event/1' className={styles.btnCan}>انصراف</Link>
                </div>

            </div>
        </div>
    );
};