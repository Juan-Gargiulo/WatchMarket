export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL"
export const FILTER_PRODUCTS_DETAIL = "FILTER_PRODUCTS_DETAIL"
export const FILTER_PRODUCTS = "FILTER_PRODUCTS"
export const SET_PRODUCTS = "SET_PRODUCTS"
export const FETCHING_PRODUCTS = "FETCHING"
export const FILTER_PRODUCTS_TYPE = "FILTER_PRODUCTS_TYPE"

export const getProductDetail = (id) => ({
  type: GET_PRODUCT_DETAIL,
  payload: id
})

export const getProducts = productType => ({
  type: GET_PRODUCTS,
  productType
})

export const fetching = () => ({
  type: FETCHING_PRODUCTS,
})

export const setProductFilter = filter => ({
  type: FILTER_PRODUCTS,
  filter
})

export const setProductType = filter => ({
  type: FILTER_PRODUCTS_TYPE,
  filter
})

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})
