import { FormEvent, useCallback } from "react";
// types
import { TUseForm } from "./Form.types";
// react-hook-form
import { FieldValues } from "react-hook-form";

export const useForm = <T extends FieldValues>({ onSubmit, handleSubmit }: TUseForm<T>) => {
  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      return handleSubmit(onSubmit ? onSubmit : (data: any) => console.log(data))(e);
    },
    [handleSubmit, onSubmit],
  );

  return { submitHandler };
};
