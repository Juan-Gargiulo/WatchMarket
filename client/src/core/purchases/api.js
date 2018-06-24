import { get, post } from "axios";

export const getPurchases = async () => {
    try {
        const purchases = await get('api/purchase')
        return purchases
    } catch (error) {
        return error
    }
}

export const postPurchase = async purchase => {
    try {
        const response = post('api/purchase', purchase)
        return response
    } catch (error) {
        return error
    }
}
