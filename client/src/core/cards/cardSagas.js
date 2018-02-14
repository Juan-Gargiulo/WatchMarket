import { call, put, takeEvery } from 'redux-saga/effects'
import {delay} from 'redux-saga';

import { GET_PRODUCTS, GET_CARD_DETAIL, FILTER_CARD_DETAIL } from './cardsActions'

import { fetching, setProducts } from './cardsActions'
import { fetchCardsApi, fetchPrducts } from './api'

function* getProducts() {
    try {
       yield put( fetching() );
       const products = yield call( fetchPrducts );

       yield call(delay, 1000)

       yield put( setProducts(products) );

    } catch (e) {
       console.log(e.message)
    }
 }

 function* filterCardDetail({payload}) {
    try {
       yield put( fetching() );

       yield call(delay, 1000)

       yield put( {
        type: FILTER_CARD_DETAIL,
        payload
      } );


    } catch (e) {
       console.log(e.message)
    }
 }

export const cardsSagas = [
    takeEvery(GET_PRODUCTS, getProducts),
    takeEvery(GET_CARD_DETAIL, filterCardDetail),
];
