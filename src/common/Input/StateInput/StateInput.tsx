import { InputUi } from "../Input";
import { TStateInput } from "../Input.types";
import { forwardRef, LegacyRef } from "react";
import { useStateInput } from "./useStateInput";

export const StateInput = forwardRef(function StateInput(
  { setValue, value, name, onChange, ...props }: TStateInput,
  ref: LegacyRef<HTMLInputElement>,
) {
  const { onChangeHandler } = useStateInput({ setValue, onChange, name });

  return <InputUi ref={ref} {...props} value={value?.[name ?? ""]} onChange={onChangeHandler} />;
});
