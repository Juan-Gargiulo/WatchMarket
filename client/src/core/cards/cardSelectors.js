import { createSelector } from 'reselect';

const products = state => state.products.products
const filters = state => state.products.filters


export const productFilter = createSelector(
  [products, filters],
  (products, filters) => {
    return products.filter(p => (p.color === filters.color || filters.color === 0) &&
    (p.length === filters.medida || filters.medida === 0) &&
    (p.brand === filters.marca || filters.marca === 0) &&
    (p.model === filters.modelo || filters.modelo === 0) &&
    (p.origin === filters.origen || filters.origen === 0)
    )
  }
);

export const productSelected = createSelector(
  productFilter,
  products => products
);
