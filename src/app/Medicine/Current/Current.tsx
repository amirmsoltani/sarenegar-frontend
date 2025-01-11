import styles from './Current.module.scss';
import {MedicationCard} from "@/app/_common/MedicationCard/MedicationCard.tsx";
import {Link} from "react-router-dom";

export const Current = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                <MedicationCard nameFa='کاربامازپین' nameEn='Carbamazepine' dose='۱/۲ قرص' when='بعد از غذا' day='۸'
                                days='۲۴' startTime='۲۰ شهریور' endTime='۲۰ مهر ۱۴۰۳' imgSrc='/Carbamazepine.png' link='12'/>

            </div>

            <Link to='/medicine/add/1' className={styles.btn}>ثبت داروی جدید</Link>
        </div>
    );
};