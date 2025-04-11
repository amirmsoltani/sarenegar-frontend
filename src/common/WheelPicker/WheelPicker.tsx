import Picker from "react-mobile-picker";
import styles from "./WheelPicker.module.scss";
import { useWheelPicker } from "./useWheelPicker";
import { TWheelPicker } from "./WheelPicker.types";
import { Controller, FieldValues } from "react-hook-form";

export const WheelPicker = <T extends FieldValues>({ name, label, options, onChange }: TWheelPicker<T>) => {
  const { control, onChangeHandler } = useWheelPicker<T>({ onChange, options });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.container}>
          <div className={styles.label}>{label}</div>
          <div className={styles.wrapper}>
            <Picker
              height={165}
              itemHeight={59}
              wheelMode="normal"
              className={styles.picker}
              value={{ value: field.value?.value }}
              onChange={({ value }) => onChangeHandler(value, field.onChange)}
            >
              <Picker.Column key={name} name="value">
                {options.map((option) => (
                  <Picker.Item
                    key={option.value}
                    value={option.value}
                    className={styles.option}
                    data-active={option.value === field.value?.value}
                  >
                    {option.label}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>
      )}
    />
  );
};
