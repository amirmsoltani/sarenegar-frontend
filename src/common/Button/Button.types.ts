import type { ButtonHTMLAttributes } from "react";
// types
import type { SIZES, VARIANTS } from "./Button";

type THtmlButton = ButtonHTMLAttributes<HTMLButtonElement>;
export type TButton = THtmlButton & {
  loading?: boolean;
  size?: keyof typeof SIZES;
  removeDisableStyle?: boolean;
  variant?: keyof typeof VARIANTS;
};
