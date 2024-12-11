import { useId } from "react";
// hooks
import { useCheckbox } from "./useCheckbox";
// styles
import styles from "./Checkbox.module.scss";
// types
import { TCheckbox } from "./Checkbox.types";
// react-hook-form
import { Controller, FieldValues } from "react-hook-form";

export const Checkbox = <T extends FieldValues>({
  name,
  label,
  checked,
  validate,
  onChange,
  rules = {},
  ...rest
}: TCheckbox<T>) => {
  const id = useId();

  const { control, onChangeHandler } = useCheckbox<T>({ onChange });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field }) => {
        const active = checked ?? field.value;
        return (
          <div className={styles.container}>
            <div className={styles.checkbox} data-checked={active} onClick={() => onChangeHandler(!active, field.onChange)}>
              <div className={styles.tick}></div>
            </div>
            {label && (
              <label htmlFor={id} className={styles.label}>
                {label}
              </label>
            )}
            <input
              {...rest}
              {...field}
              id={id}
              className={styles.input}
              onChange={() => onChangeHandler(!active, field.onChange)}
            />
          </div>
        );
      }}
    />
  );
};
