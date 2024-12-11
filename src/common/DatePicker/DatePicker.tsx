import { useId } from "react";
// styles
import "./DatePicker.global.scss";
import styles from "./DatePicker.module.scss";
// hooks
import { useDatePicker } from "./useDatePicker";
// react-multi-date-picker
import ReactMultiDatePicker from "react-multi-date-picker";
// assets
import ChevronDownIcon from "@/assets/svg/chevron-down.svg";
// react-hook-form
import { Controller, FieldValues, useFormContext } from "react-hook-form";
// types
import { TCustomDatePicker, TDatePicker, TInputPreview } from "./DatePicker.types";

export const DatePicker = <T extends FieldValues>({
  name,
  label,
  validate,
  timeList,
  rules = {},
  onDateChange,
  onTimeChange,
  ...rest
}: TDatePicker<T>) => {
  const { control, onDateChangeHandler, onTimeChangeHandler } = useDatePicker<T>({ name, onDateChange, onTimeChange });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => (
        <ReactMultiDatePicker
          {...rest}
          portal
          offsetY={8}
          arrow={false}
          fixMainPosition
          value={field.value.date}
          onChange={onDateChangeHandler}
          headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
          render={
            <CustomDatePicker
              name={name}
              label={label}
              timeList={timeList}
              fieldState={fieldState}
              onTimeChangeHandler={onTimeChangeHandler}
            />
          }
        />
      )}
    />
  );
};

const CustomDatePicker = <T extends FieldValues>({
  name,
  value,
  label,
  onFocus,
  onChange,
  timeList,
  fieldState,
  onTimeChangeHandler,
}: TCustomDatePicker<T>) => {
  const id = useId();

  return (
    <div className={styles.container} data-error={!!fieldState.error}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.wrapper}>
        {/* date picker */}
        <input onFocus={onFocus} value={value} onChange={onChange} readOnly className={styles.dateInput} />
        {/* divider */}
        <div className={styles.divider}></div>
        {/* time picker*/}
        <div className={styles.timePickerContainer}>
          <InputPreview id={id} name={name} />
          <label className={styles.icon} htmlFor={id}>
            <ChevronDownIcon />
          </label>
          <div className={styles.list}>
            {timeList.map((option) => (
              <div key={option.value} className={styles.option} data-size="sm" onClick={() => onTimeChangeHandler(option)}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      {fieldState.error && <span className={styles.error}>{fieldState.error.message}</span>}
    </div>
  );
};

const InputPreview = <T extends FieldValues>({ id, name }: TInputPreview<T>) => {
  const { watch } = useFormContext();

  const value = watch(`${name}.time`);

  return <input id={id} readOnly className={styles.timeInputInput} value={value?.label ?? ""} />;
};
