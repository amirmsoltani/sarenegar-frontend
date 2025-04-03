import Picker from "react-mobile-picker";
import styles from "./WheelPicker.module.scss";
import { TWheelPicker } from "./WheelPicker.types";
import { Controller, FieldValues, useFormContext } from "react-hook-form";

export const WheelPicker = <T extends FieldValues>({ options, name, label, StartContent, EndContent }: TWheelPicker<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.container}>
          <div className={styles.label}>{label}</div>
          <div className={styles.wrapper}>
            {StartContent && <StartContent />}
            <Picker
              height={165}
              itemHeight={59}
              wheelMode="normal"
              className={styles.picker}
              value={{ value: field.value }}
              onChange={({ value }) => field.onChange(value)}
            >
              <Picker.Column key={name} name="value">
                {options.map((option) => (
                  <Picker.Item key={option} value={option} className={styles.option} data-active={option === field.value}>
                    {option}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
            {EndContent && <EndContent />}
          </div>
        </div>
      )}
    />
  );
};
