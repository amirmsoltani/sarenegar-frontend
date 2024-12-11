import { useEffect, useRef, useState } from "react";
// helper
import { clone } from "@/helper/helper";
// react-hook-form
import { FieldValues, useFormContext } from "react-hook-form";
// types
import { TDefaultDropDownOption } from "../DropDown.types";
import { TUseMultiSelectDropDown } from "./MultiSelectDropDown.types";

export const useMultiSelectDropDown = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  name,
  onChange,
  disabled,
  valueKey = "value" as keyof Y,
}: TUseMultiSelectDropDown<T, Y>) => {
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [toggle, setToggle] = useState(false);

  const { control, getValues } = useFormContext<T>();

  const openHandler = () => !disabled && setToggle(true);

  const closeHandler = () => setToggle(false);

  const onChangeHandler = (fieldValue: Y, isSelected: boolean, fieldOnChange: Function) => {
    const fieldValues = getValues(name) as Y[];
    const values = clone(
      isSelected ? fieldValues.filter((option) => option[valueKey] !== fieldValue[valueKey]) : fieldValues.concat(fieldValue),
    );
    if (onChange) {
      const { isValid, value } = onChange(values, fieldValue);
      if (isValid === false) return;
      else fieldOnChange(value);
    } else fieldOnChange(values);
  };

  useEffect(() => {
    if (toggle) {
      const blurHandler = ({ currentTarget, target }: MouseEvent) => {
        if (listRef.current && containerRef.current) {
          !containerRef.current.contains(target as HTMLElement) &&
            !listRef.current.contains(currentTarget as HTMLElement) &&
            closeHandler();
        }
      };
      document.addEventListener("click", blurHandler);
      return () => {
        document.removeEventListener("click", blurHandler);
      };
    }
  }, [toggle]);

  return { containerRef, listRef, toggle, openHandler, closeHandler, control, onChangeHandler };
};
