import { all } from 'redux-saga/effects';

import { cardsSagas } from './cards/cardSagas';


function* rootSaga() {
  yield all([...cardsSagas]);
}

export default rootSaga;
