import styles from "./MedicineCard.module.scss";
import {Link} from "react-router-dom";
import Vector from "@/assets/svg/Vector.svg";


interface IProps {
    nameFa: string,
    nameEn: string,
    time: string,
    link?: string,
    amount: string,
    when: string,
    srcImg: string,
    status: boolean,
    bgGreen?: boolean
}

export const MedicineCard = (props: IProps) => {
    return (
        <Link to={props.link?props.link: ''} className={ props.bgGreen? styles.cardGreen : styles.card}>
            <div className={styles.top}>
                <div className={styles.section}>
                    <div className={styles.imgBox}>
                        <img className={styles.img} src={'/' + props.srcImg} alt=""/>
                    </div>
                    <div>
                        <div className={styles.fa}>{props.nameFa}</div>
                        <div className={styles.en}>{props.nameEn}</div>
                    </div>
                </div>
                {
                    props.status ?
                        <div className={styles.tickChecked}>
                            <Vector/>
                        </div>
                        :
                        <div className={styles.tick}/>
                }

            </div>
            <div className={styles.bottom}>
                <div className={styles.details}>
                    <div>{props.amount}</div>
                    <div className={styles.partition}/>
                    <div>{props.when}</div>
                </div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </Link>
    );
};