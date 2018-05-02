import {
  FETCHING_PRODUCTS,
  FILTER_PRODUCTS,
  SET_PRODUCTS,
  FILTER_PRODUCTS_TYPE,
  FILTER_PRODUCTS_DETAIL
} from "./cardsActions";

import { productTypes } from "../constants";

const initialState = {
  fetching: false,
  filters: {
    medida: 0,
    color: 0,
    marca: 0,
    modelo: 0,
    origen: 0
  },
  productType: productTypes.MALLAS,
  products: []
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return { ...state, fetching: true };

    case SET_PRODUCTS:
      return { ...state, ...{ fetching: false, products: action.products } };

    case FILTER_PRODUCTS:
      return { ...state, filters: action.filter };

    case FILTER_PRODUCTS_TYPE:
      return { ...state, productType: action.filter };

    case FILTER_PRODUCTS_DETAIL:
      return {
        ...state,
        ...{
          fetching: false,
          cards: state.cards.filter(card => card.cardId === action.payload)
        }
      };

    default:
      return state;
  }
};

export default cardsReducer;
