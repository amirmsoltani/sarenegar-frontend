import { weekdays } from "@/helper/helper";
import styles from "./WeekdayPicker.module.scss";
import { useWeekdayPicker } from "./useWeekdayPicker";
import { TWeekdayPicker } from "./WeekdayPicker.types";
import { Controller, FieldValues } from "react-hook-form";

export const WeekdayPicker = <T extends FieldValues>({ name, rules = {}, validate }: TWeekdayPicker<T>) => {
  const { control, onChangeHandler } = useWeekdayPicker<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field }) => (
        <div className={styles.container}>
          {weekdays.map((weekday) => {
            const isActive = field.value.includes(weekday.value);
            return (
              <button
                type="button"
                key={weekday.value}
                data-active={isActive}
                className={styles.weekday}
                onClick={() => onChangeHandler(weekday, isActive, field)}
              >
                {weekday.label}
              </button>
            );
          })}
        </div>
      )}
    />
  );
};
