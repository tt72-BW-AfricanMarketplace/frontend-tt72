import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../env/api/client";

const initialState = {
	didRegister: false,
	token: undefined,
	status: "idle",
	error: undefined,
};

export const signup = createAsyncThunk(
	"signup/status",
	async (userData) => {
		const res = await client.signup(userData);
		return res;
	});

const signupSlice = createSlice({
	name: "signup",
	initialState,
	// reducers: {},
	extraReducers: {
		[signup.pending]: (state, action) => {
			state.status = "loading";
		},
		[signup.fulfilled]: (state, action) => {
			state.user = action.payload.data.new_user
			state.token = action.payload.data.token;
			state.didRegister = true;
			state.status = "idle";
		},
		[signup.rejected]: (state, action) => {
			state.didRegister = false;
			state.status = "rejected";
			state.error = action.error;
		},
	},
});

// email: chaz_buyer@email.com
// password: chaz_buyer
// id: 4
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjaGF6X2J1eWVyQG1haWwuY29tIiwiaWF0IjoxNjA1NzM1NDQ4LCJleHAiOjE2MDYzNDAyNDh9.3k_ZHks7-GcYw3aljb40AM1Jl2xGROegyp4dLkdjras"

export default signupSlice.reducer;