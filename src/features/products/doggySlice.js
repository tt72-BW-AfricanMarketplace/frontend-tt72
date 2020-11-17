import {
	createSlice,
	createEntityAdapter,
	createAsyncThunk
} from "@reduxjs/toolkit";
import { normalize } from "normalizr";
import { doggyEntity } from "../../env/schemas/index";
import axios from "axios";

const dogAdapter = createEntityAdapter();

export const fetchRandomDog = createAsyncThunk(
	"dogs/fetchRandomDog",
	async () => {
		const res = await axios.get("https://dog.ceo/api/breed/hound/images/random/3");
		console.log("DATA ", res.data);
		// const normalized = normalize(res.data, doggyEntity);
		// console.log("NORMALIZED ", normalized)
		return res.data.message;
	}
);

export const doggySlice = createSlice({
	name: "dogs",
	initialState: dogAdapter.getInitialState(),
	extraReducers: {
		[fetchRandomDog.fulfilled]: (state, action) => {
			dogAdapter.upsertMany(state, action.payload);
		},
	},
});

export const {
	selectById: selectDogById,
	selectIds: selectDogIds,
	selectEntities: selectDogEntities,
	selectAll: selectAllDogs,
	selectTotal: selectTotalDogs,
} = dogAdapter.getSelectors(state => state.products);

export default doggySlice.reducer;
