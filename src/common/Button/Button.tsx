import classNames from "classnames";
import { TButton } from "./Button.types";
import styles from "./Button.module.scss";
import { Spinner, VARIANTS as SpinnerVariants } from "@/common/Spinner/Spinner";

export const VARIANTS = { purple: styles.purple, red: styles.red, borderedRed: styles.borderedRed } as const;

export const SIZES = { md: "md", sm: "sm" } as const;

export const RADIUS = { md: "md", full: "full" } as const;

type TSpinnerVariantTranslator = Record<keyof typeof VARIANTS, keyof typeof SpinnerVariants>;
const spinnerVariantTranslator: TSpinnerVariantTranslator = {
  purple: "white",
  red: "white",
  borderedRed: "red",
} as const;

export const Button = ({
  loading,
  children,
  disabled,
  size = "md",
  radius = "full",
  type = "button",
  variant = "purple",
  removeDisableStyle,
  ...rest
}: TButton) => {
  return (
    <button
      {...rest}
      type={type}
      data-radius={radius}
      data-loading={loading}
      disabled={disabled || loading}
      data-disabled={disabled && !removeDisableStyle}
      className={classNames(styles.button, styles[size], styles[variant], rest.className)}
    >
      <div className={styles.body}>{children}</div>
      {loading && (
        <div className={styles.loading}>
          <Spinner variant={spinnerVariantTranslator[variant]} size={size} />
        </div>
      )}
    </button>
  );
};
