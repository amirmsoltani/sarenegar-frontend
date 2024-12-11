import { useEffect, useRef, useState } from "react";
// types
import { TDefaultDropDownOption } from "../DropDown.types";
import { TUseSingleDropDown } from "./SingleDropDown.types";
// react-hook-form
import { FieldValues, useFormContext } from "react-hook-form";

export const useSingleDropDown = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  onChange,
  disabled,
}: TUseSingleDropDown<T, Y>) => {
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [toggle, setToggle] = useState(false);

  const { control } = useFormContext<T>();

  const openHandler = () => !disabled && setToggle(true);

  const closeHandler = () => setToggle(false);

  const onChangeHandler = (fieldValue: Y, fieldOnChange: Function) => {
    if (onChange) {
      const { isValid, value } = onChange(fieldValue);
      if (isValid === false) return;
      else fieldOnChange(value);
    } else fieldOnChange(fieldValue);
    closeHandler();
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
