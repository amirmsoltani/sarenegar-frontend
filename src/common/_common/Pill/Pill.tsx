import styles from './Pill.module.scss';

interface IProps {
    nameEn: string,
    nameFa: string,
    company:string,
    imgSrc:string,
}

export const Pill = (props:IProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.secRight}>
                <div className={styles.imgBox}>
                    <img className={styles.img} src={props.imgSrc} alt=""/>
                </div>
                <div className={styles.pill}>
                    <div className={styles.nameFa}>{props.nameFa}</div>
                    <div className={styles.company}>{props.company}</div>
                </div>
            </div>
            <div className={styles.nameEn}>{props.nameEn}</div>
        </div>
    );

};
