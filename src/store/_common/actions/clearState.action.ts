import { RootState } from "@/store/store";
import { createAction } from "@reduxjs/toolkit";

type TClearStateAction = {
  [T in keyof RootState]: { reducerName: T; stateName: keyof RootState[T]; checkStatus?: boolean; data?: any };
}[keyof RootState];

export const clearStateAction = createAction<TClearStateAction[]>("_common/clearStore");
