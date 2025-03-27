import { ChangeEvent } from "react";
import { TUseStateInput } from "../Input.types";

export const useStateInput = ({ onChange, setValue, name }: TUseStateInput) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    else if (setValue) setValue((prev: object) => ({ ...prev, [name ?? ""]: e.target.value }));
  };

  return { onChangeHandler };
};
