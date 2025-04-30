import { ReactNode, RefObject } from "react";

export type TModalOpenStateActions = { close: (context?: any) => void };

export type TModal = {
  title?: string;
  children: ReactNode;
  fullWidth?: boolean;
  bodyClassName?: string;
  wrapperClassName?: string;
  variant?: "FULL" | "SMALL";
  onClose: (context?: any) => void;
  _ref?: RefObject<TModalOpenStateActions | null>;
};

export type TUseModal = Pick<TModal, "_ref" | "onClose">;
