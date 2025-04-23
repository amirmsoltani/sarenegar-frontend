import authReducer from "./auth/authSlice";
import drugReducer from "./drug/drugReducer";
import reportReducer from "./report/reportSlice";
import epilepsyReducer from "./epilepsy/epilepsySlice";
import medicineReducer from "./medicine/medicineSlice";
import { runEffects, sagaMiddleware } from "./sagaMiddleware";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { calendarReducer } from "@/store/calendar/calendarSlice.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducers = combineReducers({
  auth: authReducer,
  drug: drugReducer,
  report: reportReducer,
  epilepsy: epilepsyReducer,
  medicine: medicineReducer,
  calendar: calendarReducer,
});

export const appStore = configureStore({
  reducer: reducers,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type TAppStore = ReturnType<typeof reducers>;

export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof appStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

sagaMiddleware.run(runEffects);
