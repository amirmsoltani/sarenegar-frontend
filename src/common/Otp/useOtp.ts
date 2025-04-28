import { TOtp } from "./Otp";
import { p2e } from "@/helper/helper";
import { int_regex } from "@/helper/regex";
import { useFormContext } from "react-hook-form";
import { ChangeEvent, ClipboardEvent, KeyboardEvent } from "react";

export const useOtp = ({ name, length }: TOtp) => {
  const { control, setValue, formState } = useFormContext();

  const onChangeHandler = (index: number, e: ChangeEvent<HTMLInputElement>, fieldOnChange: Function) => {
    const value = p2e(e.target.value);
    if (int_regex.test(value)) {
      if (value.length === 1) fieldOnChange(value);
      else {
        value.split("").forEach((char, _index) => {
          const active = index + _index;
          active < length && setValue(`${name}.${active}`, char, { shouldValidate: formState.isSubmitted });
        });
      }
      const nextElement = e.target.nextElementSibling as HTMLInputElement;
      nextElement && nextElement.focus();
    }
  };

  const clearHandler = (e: KeyboardEvent<HTMLInputElement>, fieldOnChange: Function) => {
    if (e.key === "Backspace") {
      fieldOnChange("");
      const prevElement = (e.target as HTMLInputElement).previousElementSibling as HTMLInputElement;
      if (prevElement) prevElement.focus();
    }
  };

  const onPasteHandler = (index: number, e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = p2e(e.clipboardData.getData("text"));
    if (value.length > 1 && int_regex.test(value)) {
      const splitted = value.split("");
      splitted.forEach((char, _index) => {
        const mainIndex = index + _index;
        if (mainIndex < length) setValue(`${name}.${mainIndex}`, char, { shouldValidate: formState.isSubmitted });
      });
    }
  };

  return { control, onChangeHandler, clearHandler, onPasteHandler };
};
