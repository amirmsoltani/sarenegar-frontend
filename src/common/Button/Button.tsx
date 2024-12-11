// types
import { TButton } from "./Button.types";
// styles
import styles from "./Button.module.scss";
// components
import Spinner from "@/common/Spinner/Spinner";

export const VARIANTS = {
  red: styles.red,
  green: styles.green,
  blueFill: styles.blueFill,
  blueStroke: styles.blueStroke,
} as const;

export const SIZES = { sm: "sm", md: "md", lg: "lg" } as const;

export const Button = ({ children, variant = "green", type = "button", size = "md", loading, disabled, ...rest }: TButton) => {
  return (
    <button
      {...rest}
      type={type}
      data-loading={loading}
      data-disabled={disabled}
      disabled={disabled || loading}
      className={`${styles.button} ${styles[size]} ${styles[variant]}`}
    >
      <div className={styles.body}>{children}</div>
      {loading && (
        <div className={styles.loading}>
          <Spinner variant={variant === "green" ? "black" : variant === "blueStroke" ? "blue" : "white"} size={size} />
        </div>
      )}
    </button>
  );
};
