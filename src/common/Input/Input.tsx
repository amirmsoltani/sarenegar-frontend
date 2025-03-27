import styles from "./Input.module.scss";
import { TInput, TInputUi } from "./Input.types";
import { FormInput } from "./FormInput/FormInput";
import { StateInput } from "./StateInput/StateInput";
import { forwardRef, LegacyRef, useId } from "react";

export const Input = forwardRef(function Input(props: TInput, ref: LegacyRef<HTMLInputElement>) {
  return props.mode === "STATE" ? <StateInput ref={ref} {...props} /> : <FormInput {...props} />;
});

export const InputUi = forwardRef(function InputUi(
  {
    dir,
    value,
    error,
    label,
    disabled,
    className,
    helperText,
    endContent,
    startContent,
    endContentHandler,
    startContentHandler,
    ...rest
  }: TInputUi,
  ref: LegacyRef<HTMLInputElement>,
) {
  const id = useId();

  return (
    <div className={styles.container} data-disabled={disabled} data-error={!!error}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        {startContent && (
          <div className={styles.content} onClick={startContentHandler} data-place="start">
            {startContent}
          </div>
        )}
        <input
          id={id}
          {...rest}
          value={value}
          disabled={disabled}
          dir={value ? dir : undefined}
          className={`${styles.input} ${className}`}
          ref={ref}
        />
        {endContent && (
          <div className={styles.content} onClick={endContentHandler} data-place="end">
            {endContent}
          </div>
        )}
      </div>

      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        helperText && (
          <span className={styles.helperText}>
            <span className={styles.circle}></span>
            {helperText}
          </span>
        )
      )}
    </div>
  );
});
