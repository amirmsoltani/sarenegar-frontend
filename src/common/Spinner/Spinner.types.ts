import { SIZES, VARIANTS } from "./Spinner";

export type TSpinner = { variant?: keyof typeof VARIANTS; size?: keyof typeof SIZES };
