import styles from "./InputController.module.scss";
import { Controller, FieldValues } from "react-hook-form";
import { useInputController } from "./useInputController";
import { ArrowLeft2 } from "@wandersonalwes/iconsax-react";
import { TInputController } from "./InputController.types";

export const InputController = <T extends FieldValues, Y>({
  name,
  label,
  onClick,
  validate,
  rules = {},
  Placeholder,
}: TInputController<T, Y>) => {
  const { control } = useInputController<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => {
        return (
          <div className={styles.container}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.input} onClick={onClick}>
              <Placeholder value={field.value} />
              <ArrowLeft2 className={styles.icon} />
            </div>
            {fieldState.error?.message && <div className={styles.error}>{fieldState.error?.message}</div>}
          </div>
        );
      }}
    />
  );
};
