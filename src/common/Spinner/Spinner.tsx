import { TSpinner } from "./Spinner.types";
import styles from "./Spinner.module.scss";

export const VARIANTS = { white: "white", black: "black", red: "red", purple: "purple" } as const;
export const SIZES = { sm: "sm", md: "md", lg: "lg", xl: "xl" } as const;

export const Spinner = ({ variant = "white", size = "md" }: TSpinner) => {
  return <div className={styles.container} data-size={size} data-variant={variant}></div>;
};
