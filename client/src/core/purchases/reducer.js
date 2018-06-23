import * as purchases from "./constants";

const initialState = {
    products: [],
    comment: ''
};

const purchaseReducer = (state = initialState, action) => {

    switch (action.type) {
        case purchases.ADD_PRODUCT_CART:
            const addProducts = state.products.filter(p => p._id !== action.payload._id).concat(action.payload);
            return {
                ...state,
                products: addProducts
            };

        case purchases.REMOVE_PRODUCT_CART:
            const removeProducts = state.products.filter(p => p._id !== action.payload._id);
            return {
                ...state,
                products: removeProducts
            };

        default:
            return state;
    }
};

export default purchaseReducer;
