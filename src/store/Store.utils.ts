import { AxiosError } from "axios";
import { RootState } from "./store";
import { INormalState } from "./store.types";
import { clearStateAction } from "@/store/_common/actions/clearState.action";
import { ActionReducerMapBuilder, AsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AsyncThunkPayloadCreator, createAsyncThunk as ReduxJsCreateAsyncThunk } from "@reduxjs/toolkit";

export class StoreUtils {
  static normalActionInitState: INormalState<any> = { status: "idle" };

  static normalAction<T extends object>(
    action: AsyncThunk<any, any, any>,
    builder: ActionReducerMapBuilder<T>,
    name: keyof T,
    on?: {
      reject?: (state: unknown, action: PayloadAction<any>) => void;
      fulfill?: (state: unknown, action: PayloadAction<any>) => void;
      pending?: (state: unknown, action: PayloadAction<any>) => void;
    },
  ) {
    builder.addCase(action.fulfilled, (state: any, action) => {
      on?.fulfill?.(state, action);
      state[name] = { status: "success", data: action.payload };
    });
    builder.addCase(action.pending, (state: any, action) => {
      on?.pending?.(state, action);
      state[name] = { status: "loading", requestData: action.meta.arg };
    });
    builder.addCase(action.rejected, (state: any, action) => {
      on?.reject?.(state, action);
      state[name] = { status: "error", error: action.payload };
    });
  }

  static createAsyncThunk<T, C>(name: string, callback: AsyncThunkPayloadCreator<T, C>) {
    return ReduxJsCreateAsyncThunk<T, C>(name, async (data: C, thunk) => {
      try {
        return (await callback(data, thunk)) as T;
      } catch (error: any) {
        return thunk.rejectWithValue(error instanceof AxiosError ? (error?.response?.data ?? {}) : error);
      }
    });
  }

  static clearState(builder: ActionReducerMapBuilder<any>, name: keyof RootState) {
    builder.addCase(clearStateAction, (state, action) => {
      const states = action.payload;
      states.forEach(({ reducerName, stateName, checkStatus, data }) => {
        if (reducerName === name) {
          if (checkStatus && state[stateName].status !== "success" && state[stateName].status !== "error") return;
          state[stateName] = data ?? StoreUtils.normalActionInitState;
        }
      });
    });
  }
}
