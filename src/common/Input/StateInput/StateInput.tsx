import { InputUi } from "../Input";
import { TStateInput } from "../Input.types";
import { forwardRef, Ref } from "react";
import { useStateInput } from "./useStateInput";

export const StateInput = forwardRef(function StateInput(
  { setValue, value, name, onChange, ...props }: TStateInput,
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>,
) {
  const { onChangeHandler } = useStateInput({ setValue, onChange, name });

  return <InputUi ref={ref} {...props} value={value?.[name ?? ""]} onChange={onChangeHandler} />;
});
