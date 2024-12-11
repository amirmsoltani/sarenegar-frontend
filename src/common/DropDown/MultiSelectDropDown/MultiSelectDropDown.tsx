import { ReactNode } from "react";
// styles
import styles from "../DropDown.module.scss";
// react-hook-form
import { Controller, FieldValues } from "react-hook-form";
// components
import { Checkbox } from "@/common/Checkbox/Checkbox";
// assets
import ChevronDownIcon from "@/assets/svg/chevron-down.svg";
// hook
import { useMultiSelectDropDown } from "./useMultiSelectDropDown";
// types
import { TDefaultDropDownOption } from "../DropDown.types";
import { TMultiSelectDropDown, TMultiSelectDropDownOption, TMultiSelectDropDownPreview } from "./MultiSelectDropDown.types";

export const MultiSelectDropDown = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
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
}: TMultiSelectDropDown<T, Y>) => {
  const { containerRef, listRef, toggle, openHandler, closeHandler, control, onChangeHandler } = useMultiSelectDropDown<T, Y>({
    name,
    disabled,
    onChange,
    valueKey,
  });

  const Option = customOption ?? DefaultOption;
  const Preview = customPreview ?? DefaultPreview;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, validate: validate?.validate }}
      render={({ field, fieldState }) => {
        return (
          <div
            data-toggle={toggle}
            data-disabled={disabled}
            data-error={!!fieldState.error}
            className={`${styles.container} ${className}`}
          >
            {label && <label className={styles.label}>{label}</label>}
            <div ref={containerRef} onClick={openHandler} className={styles.wrapper}>
              <input {...field} disabled={disabled} onChange={() => {}} value={field.value.length} className={styles.input} />
              <Preview value={field.value} labelKey={labelKey} valueKey={valueKey} />
              <div className={styles.icon} onClick={openHandler}>
                <ChevronDownIcon />
              </div>
              {/* list */}
              {toggle && (
                <div ref={listRef} className={styles.list} onClick={(e) => e.stopPropagation()}>
                  {CustomHeader && <CustomHeader closeHandler={closeHandler} />}
                  {options.map((option) => {
                    const isSelected = !!(field.value as Y[]).find((item) => item[valueKey] == option[valueKey]);
                    return (
                      <Option
                        option={option}
                        labelKey={labelKey}
                        valueKey={valueKey}
                        isSelected={isSelected}
                        key={option[valueKey] as string}
                        onChange={(option: Y) => onChangeHandler(option, isSelected, field.onChange)}
                      />
                    );
                  })}
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
  isSelected,
  labelKey = "label" as keyof Y,
}: TMultiSelectDropDownOption<T, Y>) => {
  return (
    <div className={styles.option} data-size="md" onClick={() => onChange(option)}>
      <Checkbox name="dropdown-select" checked={isSelected} onChange={() => ({ isValid: false })} />
      {option[labelKey] as ReactNode}
    </div>
  );
};

const DefaultPreview = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  value,
  labelKey = "label" as keyof Y,
}: TMultiSelectDropDownPreview<T, Y>) => {
  const selectedValues = (value as Y[]).map((item) => item[labelKey]).join(" ,");
  return <div className={styles.preview}>{selectedValues}</div>;
};
