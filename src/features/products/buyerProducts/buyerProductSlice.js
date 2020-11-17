import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: "idle",
	products: [],
	error: "",
}

const buyerProductSlice = createSlice({
	name: "buyerProducts",
	initialState,
	reducers: {},
	extraReducers: {},
});



export default buyerProductSlice.reducer;