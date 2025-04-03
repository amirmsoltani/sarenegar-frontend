import { FC } from "react";
import { FieldValues } from "react-hook-form";
import { TFormOptions } from "../Form/Form.types";

export type TWheelPicker<T extends FieldValues> = {
  label?: string;
  EndContent?: FC;
  StartContent?: FC;
  options: string[];
} & TFormOptions<T>;
