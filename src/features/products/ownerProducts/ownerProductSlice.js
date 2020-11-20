import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	status: 'idle',
	productData: [],
	error: '',
	loadNewProduct: false,
}

const fetchProductsByUser = createAsyncThunk(
	'productsEndpoint/status',
	async (userId, thunkAPI) => {
		const response = await axios.get(`Endpoint/api/${userId}/products`)
		return response.data;
	}
);

const ownerProductSlice = createSlice({
	name: 'ownerProducts',
	initialState,
	extraReducers: {
		[fetchProductsByUser.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchProductsByUser.fulfilled]: (state, action) => {
			state.status = 'idle'
			state.productData = action.payload;
		},
		[fetchProductsByUser.rejected]: (state, action) => {
			state.status = 'idle';
			state.error = action.payload
		}
	}
});

export default ownerProductSlice.reducer;