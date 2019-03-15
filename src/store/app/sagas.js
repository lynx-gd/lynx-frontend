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
import { INITIALIZE, initialized, fetchedAssets, ADD_ASSET } from "./actions";
import { history } from "../../index";

function* initializeApp(api) {
  try {
    console.log(api);
    const { data } = yield call(api.get, "/api/assets");
    yield put(fetchedAssets(data));
  } catch (e) {
    console.log(e);
    console.log(e.response);
  }
  yield put(initialized(true));
}

function* addAsset(api, { payload: { description, value, images, poa } }) {
  try {
    const formData = new FormData();
    //images.push(poa)
    formData.append("value", value);
    formData.append("description", description);
    formData.append("owner", "xxx");
    formData.append("physicalAddress", "xxx");
    formData.append("images", images);
    const { data } = yield call(api.post, "/api/asset/", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    console.log(data);
    history.push("/");
  } catch (e) {
    console.log(e);
    console.log(e.response);
  }
}

function* appSaga({ apiService }) {
  yield takeEvery(INITIALIZE, initializeApp, apiService);
  yield takeEvery(ADD_ASSET, addAsset, apiService);
}

export default appSaga;
