import { call, put, takeEvery } from "redux-saga/effects";

import * as api from "./api";
import * as actions from "./actions";
import { USER_LOGIN, USER_REGISTER } from "./constants";

function* callLogin({ payload }) {
  try {
    const response = yield call(api.login, payload);

    yield put(actions.userLoginOk(response.data));
  } catch (error) {
    yield put(actions.userLoginError("Las credenciales no son validas"));
  }
}

function* callRegister({ payload }) {
  try {
    const response = yield call(api.register, payload);

    yield put(actions.userRegisterOK(response.data));
  } catch (e) {
    console.log(e.message);
  }
}

export const userSagas = [takeEvery(USER_LOGIN, callLogin), takeEvery(USER_REGISTER, callRegister)];
