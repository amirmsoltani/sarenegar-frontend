import { useToggle } from "./useToggle";
import { TToggle } from "./Toggle.types";
import styles from "./Toggle.module.scss";
import { Controller, FieldValues } from "react-hook-form";

export const Toggle = <T extends FieldValues, Y = string>({
  name,
  label,
  options,
  validate,
  onChange,
  rules = {},
}: TToggle<T, Y>) => {
  const { control, onChangeHandler } = useToggle<T, Y>({ onChange });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => {
        const _index = options.findIndex((item) => item.value === field.value?.value);
        return (
          <div className={styles.container} data-error={!!fieldState.error}>
            <input {...field} className={styles.input} />
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.toggle}>
              {options.map((option, index) => (
                <div
                  data-index={index}
                  key={option.label}
                  className={styles.option}
                  data-active={_index === index}
                  onClick={() => onChangeHandler(option, field.onChange)}
                >
                  {option.label}
                </div>
              ))}
              {_index >= 0 && <div className={styles.activator} data-direction={_index === 0 ? "start" : "end"}></div>}
            </div>
            {fieldState.error && <span className={styles.error}>{fieldState.error?.message}</span>}
          </div>
        );
      }}
    />
  );
};
