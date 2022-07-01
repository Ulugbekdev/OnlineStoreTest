import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: { 
		productWithId: null, 
		arrayProducts: [], 
		count: null, 
		categories: [], 
		currentCategory: null 
	},
	reducers: {
		getDataProducts(state, action) {
			state.count = action.payload.count;
			state.arrayProducts = action.payload.products;
		},
		getCategories(state, action) {
			state.categories = action.payload;
		},
		getCurrentCategory(state, action) {
			state.currentCategory = action.payload;
		},
		getProductWithId(state, action) {
			state.productWithId = action.payload;
		}, 
		removeCategories(state) {
			state.categories = [];
			state.currentCategory = null;
		},
		removeDataProducts(state) {
			state.count = null;
			state.arrayProducts = [];
		},
		removeProductWidthId(state) {
			state.productWithId = null;
		}	
	}
});


export default productSlice.reducer;
export const {
	getCategories,
	getDataProducts,
	getProductWithId,
	removeCategories, 
	getCurrentCategory,
	removeDataProducts,
	removeProductWidthId
} = productSlice.actions;