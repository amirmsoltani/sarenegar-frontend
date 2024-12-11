// hook
import { useToggle } from "./useToggle";
// types
import { TToggle } from "./Toggle.types";
// styles
import styles from "./Toggle.module.scss";
// react-hook-form
import { Controller, FieldValues } from "react-hook-form";

export const Toggle = <T extends FieldValues>({ name, rules = {}, validate, label, options, onChange }: TToggle<T>) => {
  const { control, onChangeHandler } = useToggle<T>({ onChange });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => (
        <div className={styles.container} data-error={!!fieldState.error}>
          <input {...field} className={styles.input} />
          {label && <label className={styles.label}>{label}</label>}
          <div className={styles.toggle}>
            {options.map(({ value, label }) => (
              <div
                key={value}
                className={styles.option}
                data-active={value === field.value}
                onClick={() => onChangeHandler(value, field.onChange)}
              >
                {label}
              </div>
            ))}
          </div>
          {fieldState.error && <span className={styles.error}>{fieldState.error?.message}</span>}
        </div>
      )}
    />
  );
};
