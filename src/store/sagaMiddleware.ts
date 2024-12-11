import { all, Effect } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';


export const sagaMiddleware = createSagaMiddleware();

const effects: Effect[] = [
];

export function * runEffects () {
  yield all(effects);
}

