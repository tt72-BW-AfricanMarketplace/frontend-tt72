import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../env/api/client";
import axiosAuth from "../../env/utils/axiosAuth";

const initialState = {
	status: "",
	products: [],
	product: undefined,
	error: undefined,
};

export const addNewProduct = createAsyncThunk(
	"product/addNewProduct",
	async (id, initProduct) => {
		const res = await client.postProduct(id, initProduct);
		return res.data;
	}
)
export const fetchProduct = createAsyncThunk(
	"product/fetchProduct",
	async (id) => {
		const res = await client.getProductById(id);
		console.log(res.data);
		return res.data;
	}
);
export const fetchAllProducts = createAsyncThunk(
	"products/fetchAllProducts",
	async () => {
		// const data = axiosAuth().get(`products`);
		const res = await client.getAllProducts();
		console.log(res);
		return res.data;
	}
);

export const productSlice = createSlice({
	name: "products",
	initialState,
	extraReducers: {
		[fetchProduct.pending]: (state, action) => {
			state.status = "pending";
		},
		[fetchProduct.fulfilled]: (state, action) => {
			state.product = action.payload;
			state.status = "idle";
		},
		[fetchProduct.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = "idle";
		},
		[fetchAllProducts.pending]: (state, action) => {
			state.status = "pending";
		},
		[fetchAllProducts.fulfilled]: (state, action) => {
			state.products = action.payload;
			state.status = "pending";
		},
		[fetchAllProducts.rejected]: (state, action) => {
			state.status = "idle";
			state.error = action.payload;
		},
		[addNewProduct.fulfilled]: (state, action) => {
			state.products.push(action.payload);
		},
	},
});

export const productThunks = {
	fetchAllProducts,
	fetchProduct,
	addNewProduct,
}

export default productSlice.reducer;