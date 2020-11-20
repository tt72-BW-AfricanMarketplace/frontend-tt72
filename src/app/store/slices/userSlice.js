import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../env/api/client";

const user = window.localStorage.getItem("user");
const tok = window.localStorage.getItem("token");

const initialState = {
	isLoggedIn: user ? true : false,
	user: user ?? null,
	status: "idle",
	error: undefined,
	token: tok ?? null,
	cart: [],
	totalPrice: 0,
};

export const login = createAsyncThunk(
	"login/status",
	async (userData) => {
		const res = await client.login(userData);
		return res;
	}
);

export const logout = createAsyncThunk(
	"logout/status",
	async () => {
		// const res = await client.logout();
		// return res;
		return 4;
	}
);

export const signup = createAsyncThunk(
	"signup/status",
	async (userData) => {
		const res = await client.signup(userData);
		return res;
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addToCart: {
			reducer: (state, action) => {
				const { product, quantity } = action.payload;
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
			const totalToRemove = Number(foundEl?.product?.price * foundEl?.quantity);
			if (state.totalPrice - totalToRemove < 0) {
				state.totalPrice = 0;
			} else {
				state.totalPrice -= totalToRemove;
			}
			state.cart = state.cart.filter(p => {
				return p.id !== action.payload;
			});
		},
	},
	extraReducers: {
		[login.pending]: (state, action) => {
			state.status = "loading";
		},
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true;
			const token = action.payload.data.token;
			window.localStorage.setItem("token", token);
			state.user = action.payload.data.user;
			state.status = "idle";
		},
		[login.rejected]: (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
			state.status = "idle";
			state.error = action.error?.message ?? action.error ?? "unknown";
		},
		[logout.pending]: (state, action) => {
			state.status = "loading";
		},
		[logout.fulfilled]: (state, action) => {
			window.localStorage.removeItem("token");
			state.isLoggedIn = false;
			state.user = null;
			state.status = "idle";
		},
		[logout.rejected]: (state, action) => {
			state.isLoggedIn = true;
			state.error = action.payload;
		},
		[signup.pending]: (state, action) => {
			state.status = "loading";
		},
		[signup.fulfilled]: (state, action) => {
			state.user = action.payload.data.new_user
			state.token = action.payload.data.token;
			state.didRegister = true;
			state.status = "idle";
			state.isLoggedIn = true;
		},
		[signup.rejected]: (state, action) => {
			state.didRegister = false;
			state.status = "rejected";
			state.error = action.error;
		},
	},
});

export const { addToCart, removeFromCart } = userSlice.actions;

// email: chaz_buyer@email.com
// password: chaz_buyer
// id: 4
/*
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJpZCI6NCwiZW1haWwiOiJjaGF6X2J1eWVyQG1haWwuY29tIiwiaWF0IjoxNjA1NzM1NDQ4LCJleHAiOjE2MDYzNDAyNDh9
.3k_ZHks7 - GcYw3aljb40AM1Jl2xGROegyp4dLkdjras"
 */

export default userSlice.reducer;