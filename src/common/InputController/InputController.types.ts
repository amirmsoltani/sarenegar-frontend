import { FC } from "react";
import { FieldValues } from "react-hook-form";
import { TFormOptions } from "../Form/Form.types";

export type TInputController<T extends FieldValues, Y> = TFormOptions<T> & {
  label: string;
  onClick: () => void;
  Placeholder: FC<{ value: Y }>;
};
