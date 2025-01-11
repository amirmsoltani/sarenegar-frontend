import styles from './MedicationCard.module.scss';
import Pill from "@/assets/svg/pill.svg";
import {Link} from "react-router-dom";


interface IProps {
    nameFa: string,
    nameEn:string,
    dose:string,
    when:string,
    startTime:string,
    endTime:string,
    days:string,
    day:string,
    imgSrc:string,
    link:string,
}

export const MedicationCard = (props:IProps) => {
    return (
        <Link to={props.link} className={styles.wrapper}>
            <div className={styles.topCard}>
                <div className={styles.secRight}>
                    <div className={styles.imgBox}>
                        <img className={styles.img} src={props.imgSrc} alt=""/>
                    </div>

                    <div className={styles.nameBox}>
                        <div className={styles.nameFa}>{props.nameFa}</div>
                        <div className={styles.nameEn}>{props.nameEn}</div>
                        <div className={styles.days}>
                            <div>{props.dose}</div>
                            <div className={styles.line} />
                            <div>{props.when}</div>
                        </div>
                    </div>
                </div>

                <Pill className={styles.icon} variant="Bold"/>
                <div className={styles.shadowBox}>
                    <div className={styles.shadowInner}/>
                </div>
            </div>

            <div className={styles.bottomCard}>
                <div className={styles.details}>
                    <div className={styles.right}>
                        <div>{props.day}</div>
                        <div>از</div>
                        <div>{props.days}</div>
                        <div>روز</div>
                    </div>

                    <div className={styles.left}>
                        <div>{props.startTime}</div>
                        <div>-</div>
                        <div>{props.endTime}</div>
                    </div>
                </div>

                <div className={styles.barBox}>
                    <div className={props.days === props.day? styles.barFull : styles.bar } />
                </div>
            </div>
        </Link>
    );
};