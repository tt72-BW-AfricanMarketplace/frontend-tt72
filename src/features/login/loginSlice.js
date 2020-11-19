// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import client from "../../env/api/client";

// const user = JSON.parse(localStorage.getItem("user"));

// const initialState = {
// 	isLoggedIn: user ? true : false,
// 	user: user ? user : null,
// 	status: "idle",
// 	error: undefined,
// }

// export const login = createAsyncThunk(
// 	"login/status",
// 	async (userData) => {
// 		const res = await client.login(userData);
// 		return res;
// 	});

// export const logout = createAsyncThunk(
// 	"logout/status",
// 	async () => {
// 		return 4;
// 	});



// const loginSlice = createSlice({
// 	name: "login",
// 	initialState,
// 	reducers: {},
// 	extraReducers: {
// 		[login.pending]: (state, action) => {
// 			state.status = "loading";
// 		},
// 		[login.fulfilled]: (state, action) => {
// 			state.isLoggedIn = true;
// 			const token = action.payload.data.token;
// 			window.localStorage.setItem("token", token);
// 			state.user = action.payload.data.user;
// 			state.status = "idle";
// 		},
// 		[login.rejected]: (state, action) => {
// 			state.isLoggedIn = false;
// 			state.user = null;
// 			state.status = "idle";
// 			state.error = action.error?.message ?? action.error ?? "unknown";
// 		},
// 		[logout.pending]: (state, action) => {
// 			state.status = "loading";
// 		},
// 		[logout.fulfilled]: (state, action) => {
// 			window.localStorage.removeItem("token");
// 			state.isLoggedIn = false;
// 			state.user = null;
// 			state.status = "idle";
// 		},
// 		[logout.rejected]: (state, action) => {
// 			state.isLoggedIn = true;
// 			state.error = action.payload;
// 		}
// 	}
// });

// export default loginSlice.reducer;