import createSagaMiddleware from "redux-saga";
import { all, Effect } from "redux-saga/effects";

export const sagaMiddleware = createSagaMiddleware();

const effects: Effect[] = [];

export function* runEffects() {
  yield all(effects);
}
