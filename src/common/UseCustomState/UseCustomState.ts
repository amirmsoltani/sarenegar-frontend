import { useState } from "react";

export function useCustomState<T>(initValue: (() => T) | T) {
  const [state, _setState] = useState<T>(initValue);

  function setState(newState: Partial<T>) {
    if (typeof newState !== "object") _setState(newState);
    else _setState((currentState) => ({ ...currentState, ...newState }));
  }

  return { state, setState, setDefaultState: _setState };
}
