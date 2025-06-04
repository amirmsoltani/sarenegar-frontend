import styles from "./Input.module.scss";
import { TInput, TInputUi } from "./Input.types";
import { FormInput } from "./FormInput/FormInput";
import { StateInput } from "./StateInput/StateInput";
import { forwardRef, Ref, useId } from "react";
import classNames from "classnames";

export const Input = forwardRef(function Input(props: TInput, ref: Ref<HTMLInputElement|HTMLTextAreaElement>) {
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
    variant = "DEFAULT",
    multiline,
    ...rest
  }: TInputUi,
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>,
) {
  const id = useId();

  return (
    <div className={styles.container} data-disabled={disabled} data-error={!!error} data-variant={variant}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={classNames(styles.inputContainer,{[styles.multiline]:multiline})}>
        {startContent && (
          <div className={styles.content} onClick={startContentHandler} data-place="start">
            {startContent}
          </div>
        )}
        {multiline ? (
          <textarea
            placeholder={rest.placeholder}
            id={id}
            autoComplete="off"
            disabled={disabled}
            dir={value ? dir : undefined}
            className={classNames(styles.input,className)}
            name={rest.name}
            ref={ref as Ref<HTMLTextAreaElement>}
          >
            {value}
          </textarea>
        ) : (
          <input
            id={id}
            {...rest}
            value={value}
            autoComplete="off"
            disabled={disabled}
            dir={value ? dir : undefined}
            className={`${styles.input} ${className}`}
            ref={ref as Ref<HTMLInputElement>}
          />
        )}
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
