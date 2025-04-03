import styles from "./InputRadio.module.scss";


interface IProps {
    label: string,
    name: string,
    item: string,
    item2: string,
    week?: boolean
}

export const InputRadio = (props: IProps) => {
    return (
        <div className={styles.inputBox}>
            <div className={styles.label}>{props.label}</div>
            <div className={styles.radioContainer}>
                <label className={styles.radioLabel}>
                    <input type="radio" name={props.name} value="daily" checked/>
                    <span className={styles.customRadio}></span>
                    <div className={styles.text}>{props.item}</div>
                </label>

                <label className={styles.radioLabel}>
                    <input type="radio" name={props.name} value="custom" className={styles.inputWeek}/>
                    <span className={styles.customRadio}></span>
                    <div className={styles.text}>{props.item2}</div>
                </label>
            </div>
            {
                props.week ?
                    <div className={styles.week}>
                        <div className={styles.daySelected}>شنبه</div>
                        <div className={styles.day}>۱شنبه</div>
                        <div className={styles.day}>۲شنبه</div>
                        <div className={styles.day}>۳شنبه</div>
                        <div className={styles.day}>۴شنبه</div>
                        <div className={styles.day}>۵شنبه</div>
                        <div className={styles.day}>جمعه</div>
                    </div>
                    :
                    null
            }

        </div>
    );
};