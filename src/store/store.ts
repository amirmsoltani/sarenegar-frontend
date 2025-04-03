import authReducer from "./auth/authSlice";
import epilepsyReducer from "./epilepsy/epilepsySlice";
import { runEffects, sagaMiddleware } from "./sagaMiddleware";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducers = combineReducers({
  auth: authReducer,
  epilepsy: epilepsyReducer,
});

export const appStore = configureStore({
  reducer: reducers,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof appStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

sagaMiddleware.run(runEffects);
