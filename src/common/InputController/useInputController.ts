import { FieldValues, useFormContext } from "react-hook-form";
import { TInputController } from "./InputController.types";

export const useInputController = <T extends FieldValues, Y>({ name }: Pick<TInputController<T, Y>, "name">) => {
  const { watch } = useFormContext();

  const value = watch(name);

  return { value };
};
