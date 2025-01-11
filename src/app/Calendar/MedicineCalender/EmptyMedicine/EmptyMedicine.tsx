import styles from './EmptyMedicine.module.scss';

export const EmptyMedicine = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>20 شهریور 1401</div>
            <div className={styles.text}>هیچ دارویی در این تاریخ ثبت نگردیده است</div>
        </div>
    );
};