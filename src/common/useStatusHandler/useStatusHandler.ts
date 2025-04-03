import { useEffect, useRef } from "react";
import { INormalState } from "@/store/store.types.ts";

export function useStatusHandler<T>(props: {
  state: INormalState<T>;
  onComponentDidMount?: () => void;
  onSuccess?: () => void;
  onLoading?: () => void;
  onError?: (err: any) => void;
}) {
  const previousState = useRef<INormalState<any>["status"] | undefined>(undefined);
  useEffect(() => {
    const status = previousState.current;

    if (status === props.state.status) return;

    if (status === undefined) props.onComponentDidMount?.();
    if ((status === "idle" || status === undefined) && props.state.status === "loading") props.onLoading?.();
    else if (status === "loading" && props.state.status === "success") props.onSuccess?.();
    else if (status === "loading" && props.state.status === "error") props.onError?.(props.state.error);

    previousState.current = props.state.status;
  });
}
