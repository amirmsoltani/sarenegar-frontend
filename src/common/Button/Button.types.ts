import type { ButtonHTMLAttributes } from "react";
// types
import type { SIZES, VARIANTS } from "./Button";

type THtmlButton = ButtonHTMLAttributes<HTMLButtonElement>;
export type TButton = THtmlButton & { variant?: keyof typeof VARIANTS; size?: keyof typeof SIZES; loading?: boolean };
