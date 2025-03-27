import { isObject } from "@/helper/helper";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export const ErrorService = <T extends object, Y extends FieldValues>(
  methods: UseFormReturn<Y>,
  keys?: Partial<Record<keyof T, keyof Y>>,
) => {
  return (err: any) => {
    const errors = err?.errors;
    if (isObject(errors)) {
      const values = methods.formState.defaultValues;

      if (values) {
        for (const key in errors) {
          const message = errors[key];
          if (typeof message === "string") {
            if (keys && key in keys) methods.setError((keys as any)[key], { message });
            else if (key in values) methods.setError(key as Path<Y>, { message });
          }
        }
      }
    }
  };
};
