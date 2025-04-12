import { TOtp } from "./Otp";
import { int_regex } from "@/helper/regex";
import { useFormContext } from "react-hook-form";
import { ChangeEvent, ClipboardEvent, KeyboardEvent } from "react";

export const useOtp = ({ name, length }: TOtp) => {
  const { control, setValue, formState } = useFormContext();

  const onChangeHandler = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (int_regex.test(value)) {
      if (value.length === 1) setValue(`${name}.${index}`, value, { shouldValidate: formState.isSubmitted });
      else if (value.length === 2)
        index + 1 < length && setValue(`${name}.${index + 1}`, value.slice(-1), { shouldValidate: formState.isSubmitted });
      const nextElement = e.target.nextElementSibling as HTMLInputElement;
      nextElement && nextElement.focus();
    }
  };

  const clearHandler = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setValue(`${name}.${index}`, "", { shouldValidate: formState.isSubmitted });
      const prevElement = (e.target as HTMLInputElement).previousElementSibling as HTMLInputElement;
      if (prevElement) {
        prevElement.focus();
        setTimeout(() => prevElement.select(), 0);
      }
    }
  };

  const onPasteHandler = (index: number, e: ClipboardEvent<HTMLInputElement>) => {
    const value = e.clipboardData.getData("text/plain");
    if (value.length > 1 && /\d+/.test(value)) {
      const splitted = value.split("");
      splitted.forEach((char, _index) => {
        const mainIndex = index + _index;
        if (mainIndex < length) setValue(`${name}.${mainIndex}`, char, { shouldValidate: formState.isSubmitted });
      });
    }
  };

  return { control, onChangeHandler, clearHandler, onPasteHandler };
};
