import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../env/api/client";

const initialState = {
	didRegister: false,
	token: undefined,
	status: "idle",
	error: undefined,
};

export const signupBuyer = createAsyncThunk(
	"signupBuyer/status",
	async (userData) => {
		const { email, password } = userData;
		console.log("SIGNUPSLICE — userData ", userData);

		const res = await client.signup(userData);
		console.log("SIGNUPSLICE — res ", res);
		return res;
	});

const signupSlice = createSlice({
	name: "signup",
	initialState,
	// reducers: {},
	extraReducers: {
		[signupBuyer.pending]: (state, action) => {
			console.log("PENDING — ACTION ", action);
			state.status = "loading";
		},
		[signupBuyer.fulfilled]: (state, action) => {
			console.log("FULFILLED — ACTION ", action);
			state.user = action.payload.data.new_user
			state.token = action.payload.data.token;
			state.didRegister = true;
			state.status = "idle";
		},
		[signupBuyer.rejected]: (state, action) => {
			console.log("REJECTED — ACTION ", action);
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