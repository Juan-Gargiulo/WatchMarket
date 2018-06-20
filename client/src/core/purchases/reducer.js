import * as purchases from "./constants";

const initialState = {
    products: [],
    comment: ''
};

const purchaseReducer = (state = initialState, action) => {


    switch (action.type) {
        case purchases.ADD_PRODUCT_CART:
            const productsUpdated = state.products.filter(p => p._id !== action.payload._id).concat(action.payload);
            return {
                ...state,
                products: productsUpdated
            };

        case purchases.REMOVE_PRODUCT_CART:
            const pilas = state.products.filter(p => p._id === action.payload._id);
            return {
                ...state,
                pilas
            };

        default:
            return state;
    }
};

export default purchaseReducer;
