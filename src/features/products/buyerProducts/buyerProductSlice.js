import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: "idle",
	error: "",
	cart: [],
	products: [
		{
			"id": 0,
			"owner_id": 1,
			"product_name": "Onions",
			"all_amount": 30.5,
			"available_amount": 30,
			"measurement_unit": "Kg",
			"price": 1,
			"currency": "USD"
		},
		{
			"id": 1,
			"owner_id": 1,
			"product_name": "French Bread",
			"all_amount": 20,
			"available_amount": 14,
			"measurement_unit": "Kg",
			"price": 0.5,
			"currency": "USD"
		},
		{
			"id": 2,
			"owner_id": 2,
			"product_name": "Pumpkins",
			"all_amount": 15,
			"available_amount": 12,
			"measurement_unit": "Kg",
			"price": 2,
			"currency": "USD"
		},
	],

}

const buyerProductSlice = createSlice({
	name: "buyerProducts",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload);
		},
	},
	extraReducers: {},
});

export const { addToCart } = buyerProductSlice.actions;

export default buyerProductSlice.reducer;