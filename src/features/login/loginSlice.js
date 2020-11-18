import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import axiosAuth from "../../env/utils/axiosAuth";
import client from "../../env/api/client";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	isLoggedIn: user ? true : false,
	user: user ? user : null,
	status: "idle",
	error: undefined,
}

export const login = createAsyncThunk(
	"login/status",
	async (userData) => {
		const { email, password } = userData;
		console.log("LOGIN SLICE — userData", userData);
		console.log("LOGIN SLICE — email & password", email, password);
		const res = await client.login(userData);
		console.log("LOGIN SLICE — res ", res);
		return res;
		// const response = await axios.post("http://localhost:5000/api/login", userData);
		// console.log(response);
		// return response.data;
	});

export const logout = createAsyncThunk("logout/status", async () => {
	const response = await axiosAuth().post("logout");
	console.log(response);
	return response;
})

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {},
	extraReducers: {
		[login.pending]: (state, action) => {
			console.log(action);
			state.status = "loading";
		},
		[login.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.isLoggedIn = true;

			const token = action.payload.data.token;
			console.log(token);
			window.localStorage.setItem("token", token);
			state.user = action.payload.data.user;
			state.status = "idle";
		},
		[login.rejected]: (state, action) => {
			console.log("ACTION", action);
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
			state.error = action.payload.error;
		}
	}

});

export default loginSlice.reducer;