import classNames from "classnames";
import { TButton } from "./Button.types";
import styles from "./Button.module.scss";
import { Spinner, VARIANTS as SpinnerVariants } from "@/common/Spinner/Spinner";

export const VARIANTS = { purple: styles.purple } as const;

export const SIZES = { md: "md" } as const;

type TSpinnerVariantTranslator = Record<keyof typeof VARIANTS, keyof typeof SpinnerVariants>;
const spinnerVariantTranslator: TSpinnerVariantTranslator = {
  purple: "white",
} as const;

export const Button = ({
  loading,
  children,
  disabled,
  size = "md",
  type = "button",
  variant = "purple",
  removeDisableStyle,
  ...rest
}: TButton) => {
  return (
    <button
      {...rest}
      type={type}
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
