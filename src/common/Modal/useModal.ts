import { TUseModal } from "./Modal.types";
import { TRANSITION_TIME } from "@/constants/constants";
import { useCallback, useImperativeHandle, useState } from "react";

export const useModal = ({ _ref, onClose }: TUseModal) => {
  const [open, setOpen] = useState(true);

  const closeHandler = useCallback(
    (context?: any) => {
      setOpen(false);
      setTimeout(() => onClose(context), TRANSITION_TIME);
    },
    [onClose],
  );

  useImperativeHandle(_ref, () => {
    return {
      close(context: any) {
        closeHandler(context);
      },
    };
  }, [closeHandler]);

  return { open, closeHandler };
};
