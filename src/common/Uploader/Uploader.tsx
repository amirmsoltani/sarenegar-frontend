import { useId } from "react";
// styles
import styles from "./Uploader.module.scss";
// hooks
import { useUploader } from "./useUploader";
// types
import { TUploader } from "./Uploader.types";
// icons
import UploadIcon from "@/assets/svg/upload.svg";
// react-hook-form
import { Controller, FieldValues } from "react-hook-form";

export const Uploader = <T extends FieldValues>({
  name,
  label,
  title,
  types,
  validate,
  rules = {},
  description,
}: TUploader<T>) => {
  const id = useId();

  const { control, onDragLeave, onDragOver, onDragEnter, onDropHandler, changeHandler } = useUploader<T>({ types });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => (
        <div className={styles.container} data-error={!!fieldState.error}>
          {label && <div className={styles.label}>{label}</div>}
          <label
            htmlFor={id}
            onDragEnd={onDragLeave}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            className={styles.dropSection}
            onDrop={(e) => onDropHandler(e, field.onChange)}
          >
            <div className={styles.textsContainer}>
              <UploadIcon />
              <div className={styles.title}>{title}</div>
              <p className={styles.description}>{description}</p>
              <input
                id={id}
                type="file"
                {...field}
                value=""
                className={styles.input}
                onChange={(e) => changeHandler(e, field.onChange)}
              />
            </div>
            {field.value ? (
              <p className={styles.value}>{(field.value as File).name}</p>
            ) : (
              <div className={styles.browseButton}>Browse</div>
            )}
          </label>
          {fieldState.error && <span className={styles.error}>{fieldState.error?.message}</span>}
        </div>
      )}
    />
  );
};
