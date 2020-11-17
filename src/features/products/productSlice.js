import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuth from "../../env/utils/axiosAuth";

const initialState = {
	status: "",
	products: [],
	product: undefined,
	error: undefined,
}
export const addNewProduct = createAsyncThunk(
	"product/addNewProduct",
	async (initProduct) => {
		const res = await axiosAuth().post("");
		return res.post;
	}
)
export const fetchProduct = createAsyncThunk(
	"product/fetchProduct",
	async (id) => {
		const data = await axiosAuth().get("");
		return data;
	}
);
export const fetchAllProducts = createAsyncThunk(
	"products/fetchAllProducts",
	async () => {
		const data = axiosAuth().get("");
		return data;
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
		}
		[fetchAllProducts.fulfilled]: (state, action) => {
			state.products = action.payload;
			state.status = "pending";
		},
		[fetchAllProducts.rejected]: (state, action) => {
			state.status = "idle";
			state.error = action.payload;
		},
		[addNewProduct.fulfilled]: (state, action) => {
			state.produces.push(action.payload);
		},
	},
});

export const productThunks = {
	fetchAllProducts,
	fetchProduct,
	addNewProduct,
}

export default productSlice.reducer;