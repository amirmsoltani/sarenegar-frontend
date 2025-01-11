import styles from './ModalUsage.module.scss';
import {MedicineCard} from "@/app/_common/MedicineCard/MedicineCard.tsx";
import {Link} from "react-router-dom";

export const ModalUsage = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.modal}>
                <div className={styles.title}>مصرف دارو</div>
                <div className={styles.text}>آیا داروی خود را مصرف کرده اید؟</div>
                <MedicineCard bgGreen={true} nameFa='کاربامازپین' nameEn='Carbamazepine' srcImg='Carbamazepine.png' time='۰۹:۴۱' amount='1/2 قرص'
                              when='بعد از غذا' status={false} link=''/>

                <div className={styles.btnBox}>
                    <Link to='/calender/medicine' className={styles.btnDel}>مصرف کرده ام</Link>
                    <Link to='/calender/medicine' className={styles.btnCan}>مصرف نکرده ام</Link>
                </div>
            </div>

        </div>
    );
};