import styles from './ModalCompletionMedicine.module.scss';
import Addres from "@/assets/image/tickPill.png";
import {Link} from "react-router-dom";

export const ModalCompletionMedicine = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>

                <img className={styles.img} src={Addres} alt=""/>

                <div className={styles.title}>تکمیل دارو</div>
                <div className={styles.text}>شما در حال تکمیل نمودن مصرف دارو میباشید، آیا از این عملکرد اطمینان دارید ؟</div>

                <div className={styles.btnBox}>
                    <div className={styles.btnDelete}>تکمیل مصرف</div>
                    <Link to='/medicine/12' className={styles.btnCancel}>انصراف</Link>
                </div>
            </div>
        </div>
    );
};