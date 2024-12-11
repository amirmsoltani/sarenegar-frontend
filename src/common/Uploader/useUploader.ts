import { ChangeEvent, DragEvent } from "react";
// types
import { TUseUploader } from "./Uploader.types";
// hooks
import { useFileValidator } from "./useFileValidator";
// react-hook-form
import { FieldValues, useFormContext } from "react-hook-form";

export const useUploader = <T extends FieldValues>({ types }: TUseUploader<T>) => {
  const { control } = useFormContext<T>();

  const fileValidator = useFileValidator({ types });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>, fieldOnChange: Function) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      if (file) {
        const result = fileValidator(file);
        result && fieldOnChange(file);
      }
    }
  };

  const onDragEnter = (e: DragEvent<HTMLLabelElement>) => {
    (e.target as HTMLElement).dataset.drag = "true";
  };

  const onDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    if (e.relatedTarget && !(e.target as HTMLElement).contains(e.relatedTarget as HTMLElement)) {
      (e.target as HTMLElement).dataset.drag = "false";
    }
  };

  const onDragOver = (e: DragEvent<HTMLLabelElement>) => e.preventDefault();

  const onDropHandler = (e: DragEvent<HTMLLabelElement>, fieldOnChange: Function) => {
    e.preventDefault();
    onDragLeave(e);
    const file = e.dataTransfer.files[0];
    if (file) {
      const result = fileValidator(file);
      result && fieldOnChange(file);
    }
  };

  return { control, onDragLeave, onDragOver, onDragEnter, onDropHandler, changeHandler };
};
