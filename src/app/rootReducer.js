import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import { ownerProductReducer } from '../features/products/ownerProducts/store/reducers'
import buyerReducer from "../features/products/buyerProducts/buyerProductSlice";

const rootReducer = combineReducers({
	login: loginReducer,
	ownerProduct: ownerProductReducer,
	buyerProduct: buyerReducer,
});
export default rootReducer;