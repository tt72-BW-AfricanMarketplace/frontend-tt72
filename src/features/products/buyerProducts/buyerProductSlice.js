// import { createSlice } from "@reduxjs/toolkit";
// // import client from "../../../env/api/client";

// export const initialState = {
// 	status: "idle",
// 	error: "",
// 	cart: [],
// 	totalPrice: 0,
// 	// product: [],
// };

// const buyerProductSlice = createSlice({
// 	name: "buyerProducts",
// 	initialState,
// 	reducers: {
// 		addToCart: {
// 			reducer: (state, action) => {
// 				const { product, quantity } = action.payload;
// 				const indexInCart = state.cart.findIndex(cp => { return (cp.id === product.id) });
// 				if (indexInCart > -1) {
// 					const prevItem = { ...state.cart[indexInCart] };
// 					prevItem.quantity += quantity;
// 					state.cart[indexInCart] = prevItem;
// 					state.totalPrice += (action.payload.quantity * action.payload.product.price);
// 				} else {
// 					state.cart.push(action.payload);
// 					state.totalPrice += (action.payload.quantity * action.payload.product.price);
// 				}
// 			},
// 			prepare: (product, quantity) => {
// 				return {
// 					payload: { id: product.id, product, quantity: Number(quantity) }
// 				};
// 			},
// 		},
// 		removeFromCart: (state, action) => {
// 			const foundEl = state.cart.find(item => { return (item.id === action.payload) });
// 			const totalToRemove = Number(foundEl?.product?.price * foundEl?.quantity);
// 			if (state.totalPrice - totalToRemove < 0) {
// 				state.totalPrice = 0;
// 			} else {
// 				state.totalPrice -= totalToRemove;
// 			}
// 			state.cart = state.cart.filter(p => {
// 				return p.id !== action.payload;
// 			});
// 		},
// 	},
// 	extraReducers: {},
// });

// export const { addToCart, removeFromCart } = buyerProductSlice.actions;

// export default buyerProductSlice.reducer;