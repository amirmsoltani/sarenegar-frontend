import { TUseToggle } from "./Toggle.types";
import { TToggleOption } from "../Form/FormUtils.types";
import { FieldValues, useFormContext } from "react-hook-form";

export const useToggle = <T extends FieldValues, Y>({ onChange }: TUseToggle<T, Y>) => {
  const { control } = useFormContext<T>();

  const onChangeHandler = (fieldValue: TToggleOption<Y>, fieldOnChange: Function) => {
    if (onChange) {
      const { isValid, value } = onChange(fieldValue);
      if (isValid === false) return;
      else fieldOnChange(value);
    } else fieldOnChange(fieldValue);
  };

  return { control, onChangeHandler };
};
