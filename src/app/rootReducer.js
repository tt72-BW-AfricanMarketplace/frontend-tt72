import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import { ownerProductReducer } from '../features/products/ownerProducts/store/reducers'
import buyerReducer from "../features/products/buyerProducts/buyerProductSlice";
import productReducer from "../features/products/productSliceWADAPTER";
import doggyReducer from "../features/products/doggySlice";

const rootReducer = combineReducers({
	login: loginReducer,
	product: productReducer,
	dogs: doggyReducer,
	ownerProduct: ownerProductReducer,
	buyerProduct: buyerReducer,
});
export default rootReducer;