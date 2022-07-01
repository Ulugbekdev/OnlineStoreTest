import axios from "axios";
import { ALL, LIMIT_PRODUCT } from "./variables/variables";

const initialReq = axios.create({
    baseURL: 'http://localhost:3001/api'
});

export const products = {
    getProducts(category) {
        if (category === ALL) {
            return initialReq.get(`product?limit=${LIMIT_PRODUCT}`);
        }
        return initialReq.get(`product?limit=${LIMIT_PRODUCT}&category=${category}`);
    },
    getCategories() {
        return initialReq.get('category');
    },
    getPageOfProducts(offset, category) {
        if (category === ALL) {
            return initialReq.get(`product?limit=${LIMIT_PRODUCT}&offset=${offset}`);
        }
        return initialReq.get(`product?limit=${LIMIT_PRODUCT}&offset=${offset}&category=${category}`);
    },
    getProductsOfSearch(searchVal, category) {
        if (category === ALL) {
            return initialReq.get(`product?name=${searchVal}&limit=${LIMIT_PRODUCT}&offset=0`);
        }
        return initialReq.get(`product?name=${searchVal}&category=${category}&limit=${LIMIT_PRODUCT}&offset=0`);
    }, 
    getProductWithId (id) {
        return initialReq.get(`product/${id}`);
    }
}