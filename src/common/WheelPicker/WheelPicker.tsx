import styles from "./WheelPicker.module.scss";
import { useWheelPicker } from "./useWheelPicker";
import { TWheelPicker } from "./WheelPicker.types";
import { Controller, FieldValues } from "react-hook-form";
import classNames from "classnames";

export const WheelPicker = <T extends FieldValues>({ name, label, options,optionClassname }: TWheelPicker<T>) => {
  const { control, ref, loop } = useWheelPicker<T>({ name, options });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.container}>
          <div className={styles.label}>{label}</div>
          <div className={styles.wrapper}>
            <div
              ref={ref}
              data-loop={loop}
              className={styles.carouselContainer}
              style={{ height: `calc(var(--option-height)*${loop ? 3 : 1})` }}
            >
              <div className={styles.carouselWrapper}>
                {options.map(({ value, label }) => (
                  <div key={value} className={classNames(styles.option,optionClassname)} data-active={field.value && field.value.value === value}>
                    {label}
                  </div>
                ))}
              </div>
              <div className={styles.activeLine} />
            </div>
          </div>
        </div>
      )}
    />
  );
};
