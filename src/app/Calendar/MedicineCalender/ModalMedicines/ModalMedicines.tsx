import styles from "./ModalMedicines.module.scss";
import {Add} from "iconsax-react";
import {Link} from "react-router-dom";
import {MedicineCard} from "@/app/_common/MedicineCard/MedicineCard.tsx";


export const ModalMedicines = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>رخدادهای صرع ۲۰ شهریور ۱۴۰۱</div>
                    <Link to='/calender/medicine' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.main}>
                    <div className={styles.cards}>
                        <MedicineCard bgGreen={true} nameFa='کاربامازپین' nameEn='Carbamazepine' srcImg='Carbamazepine.png' time='۰۹:۴۱' amount='1/2 قرص' when='بعد از غذا' status={true} link='1' />
                        <MedicineCard bgGreen={true} nameFa='کاربامازپین' nameEn='Carbamazepine' srcImg='Carbamazepine.png' time='۱۵:۳۲' amount='1/2 قرص' when='بعد از غذا' status={false} link='2' />
                    </div>

                    <Link to='/medicine' className={styles.link}>
                        <div className={styles.btn}>برو به دارونگار</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};