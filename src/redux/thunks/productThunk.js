import { products } from '../requests';
import { LIMIT_PRODUCT } from '../variables/variables';
import { getDataProducts, getCategories, getProductWithId } from '../reducers/productSlice';

export const getProductsThunk = category => async dispatch => {
    const res = await products.getProducts(category);
    dispatch(getDataProducts(res.data));
};

export const getCategoriesThunk = () => async dispatch => {
    const res = await products.getCategories();
    dispatch(getCategories(res.data));
};

export const getPageOfProductsThunk = (page, category) => async dispatch => {
    const offset = +page * +LIMIT_PRODUCT - +LIMIT_PRODUCT;
    const res = await products.getPageOfProducts(offset, category);
    dispatch(getDataProducts(res.data));
};

export const getProductsOfSearchThunk = (searchVal, category) => async dispatch => {
    const res = await products.getProductsOfSearch(searchVal, category);
    dispatch(getDataProducts(res.data));
};

export const getProductWithIdThunk = id => async dispatch => {
    const res = await products.getProductWithId(id);
    dispatch(getProductWithId(res.data));
};