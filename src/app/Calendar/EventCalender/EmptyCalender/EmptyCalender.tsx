import styles from './EmptyCalender.module.scss';
import AddEvent from '@/assets/image/add-event-icon.png';
import {Link} from "react-router-dom";

export const EmptyCalender = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>20 شهریور 1401</div>
            <div className={styles.text}>هیچ رویدادی در این تاریخ ثبت نگردیده است</div>
            <Link to='/addEvent' className={styles.link}>
                <img src={AddEvent} alt="" />
            </Link>

        </div>
    );
};