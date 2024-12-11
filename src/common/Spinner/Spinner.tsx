// types
import { TSpinner } from "./Spinner.types";
// styles
import styles from "./Spinner.module.scss";

export const VARIANTS = { white: "white", black: "black", blue: "blue" } as const;
export const SIZES = { sm: "sm", md: "md", lg: "lg" } as const;

const Spinner = ({ variant = "white", size = "md" }: TSpinner) => {
  return <div className={styles.container} data-size={size} data-variant={variant}></div>;
};

export default Spinner;
