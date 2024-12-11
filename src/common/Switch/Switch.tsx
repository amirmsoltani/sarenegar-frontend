import { useId } from "react";
// hooks
import { useSwitch } from "./useSwitch";
// types
import { TSwitch } from "./Switch.types";
// styles
import styles from "./Switch.module.scss";
// react-hook-form
import { Controller, FieldValues } from "react-hook-form";

export const Switch = <T extends FieldValues>({ name, validate, rules = {}, label, onChange }: TSwitch<T>) => {
  const id = useId();

  const { control, onChangeHandler } = useSwitch<T>({ onChange });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field }) => (
        <div className={styles.container}>
          <div data-active={field.value} onClick={() => onChangeHandler(!field.value, field.onChange)} className={styles.wrapper}>
            <input id={id} {...field} className={styles.input} onChange={() => onChangeHandler(!field.value, field.onChange)} />
            <div className={styles.ball}></div>
          </div>
          {label && (
            <label className={styles.label} htmlFor={id}>
              {label}
            </label>
          )}
        </div>
      )}
    />
  );
};
