import styles from "./CalenderShow.module.scss";

export const CalenderShow = () => {
    return (
        <div className={styles.week}>
            <div className={styles.day}>
                <div className={styles.number}>۱۱</div>
                <div className={styles.text}>شنبه</div>
            </div>
            <div className={styles.day}>
                <div className={styles.number}>۱۲</div>
                <div className={styles.text}>۱شنبه</div>
            </div>
            <div className={styles.day}>
                <div className={styles.number}>۱۳</div>
                <div className={styles.text}>۲شنبه</div>
            </div>
            <div className={styles.daySelect}>
                <div className={styles.number}>۱۴</div>
                <div className={styles.text}>۳شنبه</div>
            </div>
            <div className={styles.day}>
            <div className={styles.number}>۱۵</div>
                <div className={styles.text}>۴شنبه</div>
            </div>
            <div className={styles.day}>
                <div className={styles.number}>۱۶</div>
                <div className={styles.text}>۵شنبه</div>
            </div>
            <div className={styles.day}>
                <div className={styles.number}>۱۷</div>
                <div className={styles.text}>جمعه</div>
            </div>

        </div>
    );
};