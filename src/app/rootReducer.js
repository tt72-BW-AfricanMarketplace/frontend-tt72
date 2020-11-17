import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import { ownerProductReducer } from '../features/products/ownerProducts/store/reducers'

const rootReducer = combineReducers({
	login: loginReducer,
	ownerProduct: ownerProductReducer,
});
export default rootReducer;