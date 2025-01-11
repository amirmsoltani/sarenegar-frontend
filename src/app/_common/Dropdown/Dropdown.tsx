import styles from './Dropdown.module.scss';
import {Link} from "react-router-dom";
import Arrow from "@/assets/svg/arrow-left.svg";

interface IProps {
    title?: string,
    placeholder?: string,
    link?: string,
    time?: string,

}

export const Dropdown = (props: IProps) => {
    return (
        <div className={styles.dropdownBox}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.dropdown}>
                <div>{props.placeholder}</div>
                <div className={styles.section}>
                    <div className={styles.time}>{props.time}</div>
                    <Link to={props.link? props.link:''} className={styles.link}>
                        <Arrow className={styles.icon} />
                    </Link>
                </div>

            </div>
        </div>
    );
};