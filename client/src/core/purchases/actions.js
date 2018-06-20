import * as purchases from './constants'

export const addToChart = payload => {
    return { type: purchases.ADD_PRODUCT_CART, payload }
}

export const removeFromChart = payload => {
    return { type: purchases.REMOVE_PRODUCT_CART, payload }
}