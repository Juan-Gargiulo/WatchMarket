import { call, put, takeEvery } from "redux-saga/effects";

import { GET_PRODUCTS, GET_PRODUCT_DETAIL, FILTER_PRODUCTS_DETAIL } from "./cardsActions";

import { fetching, setProducts, setProductType } from "./cardsActions";
import { fetchMallas, fetchPilas } from "./api";

import { productTypes } from '../constants'

function* getProducts({productType}) {
  try {
    console.log(productType)
    yield put(fetching());

    let products
    switch (productType) {
        case productTypes.MALLAS:
            products = yield call(fetchMallas)
            break;
        case productTypes.PILAS:
            products = yield call(fetchPilas)
            break;
        default:
            break;
    }
    yield put(setProducts(products));
    yield put(setProductType(productType));

  } catch (e) {
    console.log(e.message);
  }
}

function* filterCardDetail({ payload }) {
  try {
    yield put(fetching());

    yield put({
      type: FILTER_PRODUCTS_DETAIL,
      payload
    });
  } catch (e) {
    console.log(e.message);
  }
}

export const cardsSagas = [takeEvery(GET_PRODUCTS, getProducts), takeEvery(GET_PRODUCT_DETAIL, filterCardDetail)];
