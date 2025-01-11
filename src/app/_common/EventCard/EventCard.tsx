import styles from "./EventCard.module.scss";
import Share from "@/assets/svg/share.svg";
import classNames from "classnames";
import {Link} from "react-router-dom";


interface IProps {
    title: string,
    intensity: string,
    startTime: string,
    durationTime: string,
    link: string
}

export const EventCard = (props: IProps) => {
    return (
        <Link to={props.link} className={styles.card}>
            <div className={styles.top}>
                <div className={styles.shadowBox}>
                    <div className={styles.shadowInner}/>
                </div>
                <div
                    className={classNames(props.intensity == 'type1' ? [styles.type1] : props.intensity == 'type2' ? [styles.type2] : styles.type3)}>
                    <div className={styles.bigCircle}>
                        <div className={styles.midCircle}>
                            <div className={styles.smallCircle}></div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.status}>{props.title}</div>
                        <div className={styles.time}>{props.startTime}</div>
                    </div>
                </div>
                <Share className={styles.icon}/>
            </div>
            <div className={styles.duration}>مدت صرع : <span className={styles.timer}>{props.durationTime}</span></div>
        </Link>
    );
};