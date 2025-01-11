import styles from './ModalDeleteMedicine.module.scss';
import Addres from '@/assets/image/deletePill.png';
import {Link} from "react-router-dom";

export const ModalDeleteMedicine = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>

                <img className={styles.img} src={Addres} alt=""/>

                <div className={styles.title}>حذف دارو</div>
                <div className={styles.text}>شما در حال حذف دارو می باشید، آیا از این عملکرد اطمینان دارید ؟</div>

                <div className={styles.btnBox}>
                    <div className={styles.btnDelete}>حذف</div>
                    <Link to='/medicine/12' className={styles.btnCancel}>انصراف</Link>
                </div>
            </div>
        </div>
    );
};