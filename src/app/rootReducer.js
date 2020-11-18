import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import { ownerProductReducer } from '../features/products/ownerProducts/store/reducers'
import buyerReducer from "../features/products/buyerProducts/buyerProductSlice";
import productReducer from "../features/products/productSlice";
import signupReducer from "../features/sign-up/signupSlice";

const rootReducer = combineReducers({
	login: loginReducer,
	signup: signupReducer,
	product: productReducer,
	ownerProduct: ownerProductReducer,
	buyerProduct: buyerReducer,
});
export default rootReducer;