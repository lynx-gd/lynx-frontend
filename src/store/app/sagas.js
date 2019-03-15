/* eslint-disable no-console */
import {
  put,
  take,
  takeEvery,
  call,
  fork,
  delay,
  race,
  all,
  select
} from "redux-saga/effects";
import Web3 from "web3";
import Lynx from "../../build/contracts/Lynx.json";

import {
  INITIALIZE,
  initialized,
  fetchedAssets,
  ADD_ASSET,
  initializeWeb3,
  COLLECT_DIVIDENDS,
  createNotification
} from "./actions";
import { history } from "../../index";

function* initializeApp(api) {
  try {
    const { data } = yield call(api.get, "/api/assets");
    yield put(fetchedAssets(data));
  } catch (e) {
    console.log(e);
    console.log(e.response);
  }
  const web3 = new Web3(window.web3.currentProvider);
  const netId = yield call(web3.eth.net.getId);
  const LynxContract = new web3.eth.Contract(
    Lynx.abi,
    Lynx.networks[netId].address
  );
  const accounts = yield call(web3.eth.getAccounts);
  yield put(initializeWeb3({ web3, LynxContract, accounts }));
  yield put(initialized(true));
}

function* addAsset(api, { payload: { description, value, images, poa } }) {
  try {
    const web3 = yield select(state => state.app.web3);
    const lynx = yield select(state => state.app.lynx);
    const taxLevel = yield call(lynx.methods.taxPercentage().call);

    const tx = lynx.methods.createAsset();
    const valueWei = web3.utils.toWei(((value * taxLevel) / 1000).toString());
    const from = yield select(state => state.app.accounts[0]);
    const gas =
      (yield call(tx.estimateGas, {
        value: valueWei,
        from
      })) * 2;
    yield call(tx.send, { gas, value: valueWei, from });

    const formData = new FormData();
    //images.push(poa)
    formData.append("value", value);
    formData.append("description", description);
    formData.append("owner", from);
    formData.append("physicalAddress", "xxx");
    formData.append("images", images);
    const { data } = yield call(api.post, "/api/asset/", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    history.push("/");
  } catch (e) {
    console.log(e);
    console.log(e.response);
  }
}

function* collectDividends() {
  try {
    const lynx = yield select(state => state.app.lynx);

    const from = yield select(state => state.app.accounts[0]);
    const tx = lynx.methods.collectDivdend(from);

    const gas =
      (yield call(tx.estimateGas, {
        from
      })) * 2;
    console.log(gas)
    yield call(tx.send, { gas, from });
    yield put(createNotification("Successfully withdrawn dividend", true));
  } catch (e) {
    console.log(e);
  }
}

function* appSaga({ apiService }) {
  yield takeEvery(INITIALIZE, initializeApp, apiService);
  yield takeEvery(ADD_ASSET, addAsset, apiService);
  yield takeEvery(COLLECT_DIVIDENDS, collectDividends);
}

export default appSaga;
