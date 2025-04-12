import { useOtp } from "./useOtp";
import styles from "./Otp.module.scss";
import { Validate } from "@/helper/validate";
import { Controller } from "react-hook-form";

export type TOtp = { name: string; length: number };

export const Otp = ({ name, length }: TOtp) => {
  const { control, clearHandler, onChangeHandler, onPasteHandler } = useOtp({ name, length });

  return (
    <div className={styles.container} dir="ltr">
      {new Array(length).fill("").map((_, index) => (
        <Controller
          key={index}
          control={control}
          name={`${name}.${index}`}
          rules={{ validate: Validate.gen().required().isNumber().validate }}
          render={({ field, fieldState }) => (
            <input
              {...field}
              className={styles.input}
              onMouseUp={(e) => e.preventDefault()}
              data-error={!!fieldState.error?.message}
              onPaste={(e) => onPasteHandler(index, e)}
              onKeyDown={(e) => clearHandler(index, e)}
              onChange={(e) => onChangeHandler(index, e)}
            />
          )}
        />
      ))}
    </div>
  );
};
