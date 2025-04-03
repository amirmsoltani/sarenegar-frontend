import { useRange } from "./useRange";
import { TRange } from "./Range.types";
import styles from "./Range.module.scss";
import { Controller, FieldValues } from "react-hook-form";

export const Range = <T extends FieldValues>({ options, name, rules, validate }: TRange<T>) => {
  const { control, onChange } = useRange<T>({ options });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field }) => (
        <div className={styles.container}>
          <input
            {...field}
            min={1}
            type="range"
            max={options.length}
            className={styles.input}
            value={field.value?.value}
            onChange={(e) => onChange(e, field.onChange)}
          />
          <div className={styles.options}>
            {options.map((option) => (
              <div key={option.value} data-active={option.value === field.value?.value} className={styles.option}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    />
  );
};
