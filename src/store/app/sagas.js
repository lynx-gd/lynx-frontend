/* eslint-disable no-console */
import {
  put,
  take,
  takeEvery,
  call,
  fork,
  delay,
  race,
  all
} from "redux-saga/effects";
import { INITIALIZE, initialized } from "./actions";

function* initializeApp(api) {
  yield put(initialized(true));
}
function* appSaga({ apiService }) {
  yield takeEvery(INITIALIZE, initializeApp, apiService);
}

export default appSaga;
