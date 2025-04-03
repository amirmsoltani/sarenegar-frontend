import { FieldValues } from "react-hook-form";
import styles from "./InputController.module.scss";
import { useInputController } from "./useInputController";
import { ArrowLeft2 } from "@wandersonalwes/iconsax-react";
import { TInputController } from "./InputController.types";

export const InputController = <T extends FieldValues, Y>({ name, label, onClick, Placeholder }: TInputController<T, Y>) => {
  const { value } = useInputController<T, Y>({ name });

  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.input} onClick={onClick}>
        <Placeholder value={value} />
        <ArrowLeft2 className={styles.icon} />
      </div>
    </div>
  );
};
