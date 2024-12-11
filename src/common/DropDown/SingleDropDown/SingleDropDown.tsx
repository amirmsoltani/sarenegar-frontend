import { ReactNode } from "react";
// styles
import styles from "../DropDown.module.scss";
// hook
import { useSingleDropDown } from "./useSingleDropDown";
// react-hook-form
import { Controller, FieldValues } from "react-hook-form";
// assets
import ChevronDownIcon from "@/assets/svg/chevron-down.svg";
// types
import { TDefaultDropDownOption } from "../DropDown.types";
import { TSingleDropDown, TSingleDropDownOption, TSingleDropDownPreview } from "./SingleDropDown.types";

export const SingleDropDown = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  name,
  label,
  options,
  disabled,
  validate,
  onChange,
  className,
  rules = {},
  CustomHeader,
  customOption,
  customPreview,
  valueKey = "value" as keyof Y,
  labelKey = "label" as keyof Y,
}: TSingleDropDown<T, Y>) => {
  const { containerRef, listRef, toggle, openHandler, closeHandler, control, onChangeHandler } = useSingleDropDown<T, Y>({
    disabled,
    onChange,
  });

  const Option = customOption ?? DefaultOption;
  const Preview = customPreview ?? DefaultPreview;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => {
        const selectedValues = field.value?.[labelKey] ?? "";
        return (
          <div
            data-toggle={toggle}
            data-disabled={disabled}
            data-error={!!fieldState.error}
            className={`${styles.container} ${className}`}
          >
            {label && <label className={styles.label}>{label}</label>}
            <div ref={containerRef} onClick={openHandler} className={styles.wrapper}>
              <input {...field} disabled={disabled} onChange={() => {}} className={styles.input} value={selectedValues} />
              <Preview value={field.value} valueKey={valueKey} labelKey={labelKey} />
              <div className={styles.icon} onClick={openHandler}>
                <ChevronDownIcon />
              </div>
              {/* list */}
              {toggle && (
                <div ref={listRef} className={styles.list} onClick={(e) => e.stopPropagation()}>
                  {CustomHeader && <CustomHeader closeHandler={closeHandler} />}
                  {options.map((option) => (
                    <Option
                      option={option}
                      labelKey={labelKey}
                      valueKey={valueKey}
                      key={option[valueKey] as string}
                      isSelected={field.value?.[labelKey] == option[valueKey]}
                      onChange={(option) => onChangeHandler(option, field.onChange)}
                    />
                  ))}
                </div>
              )}
            </div>
            {fieldState.error && <span className={styles.error}>{fieldState.error?.message}</span>}
          </div>
        );
      }}
    />
  );
};

const DefaultOption = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  option,
  onChange,
  labelKey = "label" as keyof Y,
}: TSingleDropDownOption<T, Y>) => {
  return (
    <div className={styles.option} data-size="sm" onClick={() => onChange(option)}>
      {option[labelKey] as ReactNode}
    </div>
  );
};

const DefaultPreview = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  value,
  labelKey = "label" as keyof Y,
}: TSingleDropDownPreview<T, Y>) => {
  return <div className={styles.preview}>{value?.[labelKey] as ReactNode}</div>;
};
