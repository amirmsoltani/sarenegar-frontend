import styles from './Input.module.scss';

interface IProps {
    title: string,
    value: string,
    placeholder?: string,
    disabled?: boolean,
}

export const Input = (props:IProps) => {
    return (
        <div className={styles.inputBox}>
            <div className={styles.title}>{props.title}</div>
            <input className={styles.input} type="text" defaultValue={props.value} placeholder={props.placeholder} disabled={props.disabled} />
        </div>
    );
};