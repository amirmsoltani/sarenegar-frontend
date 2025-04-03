import styles from './Message.module.scss';
import Ellipse from '@/assets/svg/Ellipse.svg';


interface IProps{
    title: string,
    message: string,
    date: string,
    time: string,
    status: boolean
}

export const Message = (props: IProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={ props.status ? styles.messageBox : styles.messageBoxRead}>
                <div className={styles.sectionTop}>
                    {!props.status ? <Ellipse className={styles.ellipse} /> : null}
                    {props.title}
                </div>
                <div className={styles.sectionMid}>{props.message}</div>
                <div className={styles.sectionBottom}>
                    <div className={styles.date}>{props.date}</div>
                    <div>|</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </div>
    );
};

