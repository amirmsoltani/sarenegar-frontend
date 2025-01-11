import styles from './InputBtnBoolean.module.scss';

interface IProps {
    label: string,
    name: string,
}

export const InputBtnBoolean = (props: IProps) => {
    return (
        <div className={styles.inputSection}>
            <div className={styles.title}>{props.label}</div>
            <div className={styles.radioContainer}>
                <label className={styles.radioLabel}>
                    <input type='radio' name={props.name} value='true' checked />
                    <div className={styles.text}>بله</div>
                </label>
                <label className={styles.radioLabel}>
                    <input type='radio' name={props.name} value='false' />
                    <div className={styles.text}>خیر</div>
                </label>
            </div>
        </div>
    );
};