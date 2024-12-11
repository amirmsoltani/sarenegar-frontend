// react-hook-form
import { FieldValues } from "react-hook-form";
// types
import { TFormOptions } from "@/common/Form/Form.types";

export type TFileTypes = "IMAGE" | "VIDEO" | "AUDIO" | "PDF" | "ODD";

export type TUploader<T extends FieldValues> = TFormOptions<T> & {
  label?: string;
  title?: string;
  types: TFileTypes[];
  description?: string;
};

export type TUseUploader<T extends FieldValues> = Pick<TUploader<T>, "types">;
