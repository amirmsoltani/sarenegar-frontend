import { useForm } from "./useForm";
import type { TForm } from "./Form.types";
import type { ComponentProps } from "react";
import { Button as CustomButton } from "@/common/Button/Button";
import { FormProvider as ReactHookFormFormProvider, useFormContext, type FieldValues } from "react-hook-form";

export const Form = <T extends FieldValues>({
  watch,
  reset,
  onError,
  control,
  trigger,
  register,
  setValue,
  setError,
  setFocus,
  onSubmit,
  children,
  getValues,
  subscribe,
  formState,
  resetField,
  unregister,
  clearErrors,
  handleSubmit,
  getFieldState,
  ...form
}: TForm<T>) => {
  const { submitHandler } = useForm({ onSubmit, handleSubmit, onError });

  return (
    <ReactHookFormFormProvider<T>
      watch={watch}
      reset={reset}
      control={control}
      trigger={trigger}
      register={register}
      setValue={setValue}
      setError={setError}
      setFocus={setFocus}
      subscribe={subscribe}
      getValues={getValues}
      formState={formState}
      resetField={resetField}
      unregister={unregister}
      clearErrors={clearErrors}
      handleSubmit={handleSubmit}
      getFieldState={getFieldState}
    >
      <form {...form} onSubmit={submitHandler}>
        {children}
      </form>
    </ReactHookFormFormProvider>
  );
};

type TFormButton = Partial<ComponentProps<typeof CustomButton>>;
export const FormButton = <T extends FieldValues>({ children, ...props }: TFormButton) => {
  const { formState } = useFormContext<T>();

  return (
    <CustomButton type="submit" loading={formState.isSubmitting} {...props}>
      {children}
    </CustomButton>
  );
};
