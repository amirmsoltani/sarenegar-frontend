import styles from './Completed.module.scss';
import {MedicationCard} from "@/app/_common/MedicationCard/MedicationCard.tsx";

export const Completed = () => {
    return (
        <div className={styles.wrapper}>
            <MedicationCard nameFa='کاربامازپین' nameEn='Carbamazepine' dose='۱/۲ قرص' when='بعد از غذا' day='۲۴'
                            days='۲۴' startTime='۲۰ شهریور' endTime='۲۰ مهر ۱۴۰۳' imgSrc='/Carbamazepine.png'
                            link='12'/>

        </div>

    );
};