import { useRef } from "react";
import { TModalOpenStateActions } from "./Modal.types";

export const useModalRef = () => {
  const _ref = useRef<TModalOpenStateActions>(null);
  return _ref;
};
