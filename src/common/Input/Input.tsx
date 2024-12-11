import { useId } from "react";
// hooks
import { useInput } from "./useInput";
// types
import { TInput } from "./Input.types";
// styles
import styles from "./Input.module.scss";
// react-hook-form
import { Controller, FieldValues } from "react-hook-form";

export const Input = <T extends FieldValues>({
  name,
  rules,
  label,
  validate,
  onChange,
  disabled,
  className,
  endContent,
  endContentHandler,
  ...rest
}: TInput<T>) => {
  const id = useId();

  const { control, onChangeHandler } = useInput<T>({ onChange });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => (
        <div className={styles.container} data-disabled={disabled} data-error={!!fieldState.error}>
          {label && (
            <label className={styles.label} htmlFor={id}>
              {label}
            </label>
          )}
          <div className={styles.inputContainer}>
            <input
              id={id}
              {...rest}
              {...field}
              disabled={disabled}
              className={`${styles.input} ${className}`}
              onChange={(e) => onChangeHandler(e, field.onChange)}
            />
            {endContent && (
              <div className={styles.endContent} onClick={endContentHandler}>
                {endContent}
              </div>
            )}
          </div>
          {fieldState.error && <span className={styles.error}>{fieldState.error?.message}</span>}
        </div>
      )}
    />
  );
};
