import { combineReducers } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/login/loginSlice";

const rootReducer = combineReducers({
	// counter: counterReducer,
	login: loginReducer,
});
export default rootReducer;