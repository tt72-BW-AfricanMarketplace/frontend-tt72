import {
	createSlice,
	createEntityAdapter,
	createAsyncThunk
} from "@reduxjs/toolkit";
import { normalize } from "normalizr";
import { productEntity } from "../../env/schemas/index";
// import axiosAuth from "../../env/utils/axiosAuth";
import { initialState } from "./buyerProducts/buyerProductSlice";

const productsAdapter = createEntityAdapter();

export const fetchProduct = createAsyncThunk(
	"product/fetchProduct",
	async (id) => {
		// const data = await axiosAuth().get("");
		const data = initialState[0];
		const normalized = normalize(data, productEntity);
		return normalized.entities;
	}
);
export const fetchAllProducts = createAsyncThunk(
	"products/fetchAllProducts",
	async () => {
		const data = initialState;
		const normalized = normalize(data, productEntity);
		return normalized.entities;
	}
)

export const productSlice = createSlice({
	name: "products",
	initialState: productsAdapter.getInitialState(),
	extraReducers: {
		[fetchProduct.fulfilled]: (state, action) => {
			productsAdapter.upsertMany(state, action.payload.products);
		},
		[fetchAllProducts.fulfilled]: (state, action) => {
			productsAdapter.upsertMany(state, action.payload.products);
		}
	},
})

export const {
	selectById: selectProductById,
	selectIds: selectProductIds,
	selectEntities: selectProductEntities,
	selectAll: selectAllProducts,
	selectTotal: selectTotalProducts,
} = productsAdapter.getSelectors(state => state.products);

export default productSlice.reducer;