import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import axiosAuth from "../../env/utils/axiosAuth";
// import { axiosAuth } from "../../env/utils/axiosAuth";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	isLoggedIn: user ? true : false,
	user: user ? user : null,
	status: "idle",
	error: undefined,
}

export const login = createAsyncThunk("login/status", async (userData) => {
	const { username, password } = userData;
	console.log(username, password);
	const response = await axios.post("http://localhost:5000/api/login", userData);
	console.log(response);
	return response.data;
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
			console.log(action.payload);
			state.status = "loading";
		},
		[login.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.isLoggedIn = true;
			const token = action.payload.payload;
			// const parsedToken = JSON.parse(token);
			console.log(token);
			window.localStorage.setItem("token", token);
			state.user = action.meta.arg.username;
			state.status = "idle";
		},
		[login.rejected]: (state, action) => {
			// console.log(action.payload);
			state.isLoggedIn = false;
			state.user = null;
			state.status = "idle";
			state.error = action.payload;
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