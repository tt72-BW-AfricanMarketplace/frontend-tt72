import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	status: "idle",
	error: "",
	cart: [],
	totalPrice: 0,
	product: [],
}

const buyerProductSlice = createSlice({
	name: "buyerProducts",
	initialState,
	reducers: {
		addToCart2: (state, action) => {
			state.cart.push(action.payload);
		},
		addToCart: {
			reducer: (state, action) => {
				const { id, product, quantity } = action.payload;
				const indexInCart = state.cart.findIndex(cp => { return (cp.id === product.id) });
				if (indexInCart > -1) {
					const prevItem = { ...state.cart[indexInCart] };
					prevItem.quantity += quantity;
					state.cart[indexInCart] = prevItem;
					state.totalPrice += (action.payload.quantity * action.payload.product.price);
				} else {
					state.cart.push(action.payload);
					state.totalPrice += (action.payload.quantity * action.payload.product.price);
				}
			},
			prepare: (product, quantity) => {
				return {
					payload: { id: product.id, product, quantity: Number(quantity) }
				};
			},
		},
		removeFromCart: (state, action) => {
			const foundEl = state.cart.find(item => { return (item.id === action.payload) });
			console.log(foundEl);
			const totalToRemove = Number(foundEl?.product?.price * foundEl?.quantity);
			console.log(totalToRemove);
			state.totalPrice -= totalToRemove;
			state.cart = state.cart.filter(p => {
				return p.id !== action.payload;
			});
		},
	},
	extraReducers: {},
});

export const { addToCart, addToCart2, removeFromCart } = buyerProductSlice.actions;

export default buyerProductSlice.reducer;