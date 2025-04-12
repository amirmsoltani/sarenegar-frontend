import TickIcon from "@/assets/svg/tick.svg";
import styles from "./CheckboxGroup.module.scss";
import { TFormOptions } from "../Form/Form.types";
import { useCheckboxGroup } from "./useCheckboxGroup";
import { Controller, FieldValues } from "react-hook-form";
import { TCheckboxOption } from "../Form/FormUtils.types";

type TCheckboxGroup<T extends FieldValues, Y> = TFormOptions<T> & { options: TCheckboxOption<Y>[]; label?: string };

export const CheckboxGroup = <T extends FieldValues, Y>({ name, options, label }: TCheckboxGroup<T, Y>) => {
  const { control } = useCheckboxGroup<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={styles.container}>
          {label && <label className={styles.mainLabel}>{label}</label>}
          <div className={styles.wrapper}>
            {options.map((option) => {
              const checked = field.value?.value === option.value;
              return (
                <div key={option.label} className={styles.option}>
                  <input className={styles.input} checked={checked} readOnly />
                  <button type="button" className={styles.optionWrapper} onClick={() => field.onChange(option)}>
                    <div className={styles.circle}>
                      <div className={styles.circleInner} data-checked={checked}>
                        <TickIcon />
                      </div>
                    </div>
                    <div className={styles.label}>{option.label}</div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    />
  );
};
