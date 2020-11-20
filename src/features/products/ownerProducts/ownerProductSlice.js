import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import axiosAuth from '../../../env/utils/axiosAuth'


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
)

const addProductByUser = createAsyncThunk(

)

const deleteProductByUser = createAsyncThunk(

)

const editProductByUser = createAsyncThunk(

)

const ownerProductSlice = createSlice({
	name: 'ownerProducts',
	initialState,
	reducers: {
		// addProduct: {
		//     reducer(state, action) {
		//         const { id, text } = action.payload // match this to Sahar's data structure
		//         state.push({ id, text, completed: false }) // match this to Sahar's data structure
		//     },
		//     prepare(text) {
		//         return { payload: { text, id: uuid() } } // match this to Sahar's data structure
		//     }
		// },
	},
	extraReducers: {
		[fetchProductsByUser.pending]: (state, action) => {
			// console.log('fetchProductsByUser.pending', action.payload);
			state.status = 'loading';
		},
		[fetchProductsByUser.fulfilled]: (state, action) => {
			// console.log('fetchProductsByUser.fulfilled', action.payload);
			state.status = 'idle'
			state.productData = action.payload;
		},
		[fetchProductsByUser.rejected]: (state, action) => {
			// console.log('fetchProductsByUser.rejected', action.payload);
			state.status = 'idle';
			state.error = action.payload
		}
	}
})


// export const { addProduct } = ownerProductSlice.actions;

export default ownerProductSlice.reducer;