import { all } from "redux-saga/effects";

import { cardsSagas } from "./cards/cardSagas";
import { userSagas } from "./user/sagas";

function* rootSaga() {
  yield all([...cardsSagas, ...userSagas]);
}

export default rootSaga;
