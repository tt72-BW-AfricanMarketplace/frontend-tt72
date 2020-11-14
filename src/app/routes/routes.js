import views from "../../features/views";
// import { COUNTER_PATH } from "./paths";

export const HOMEPAGE_PATH = "/";
export const COUNTER_PATH = "/counter";
export const STYLESHEET_PATH = "/stylesheet";
export const LOGIN_PATH = "/login";


export const COUNTER = {
	component: views.Counter,
	path: COUNTER_PATH,
	isPrivate: false,
	isExact: false,
};

export const STYLESHEET = {
	component: views.Stylesheet,
	path: STYLESHEET_PATH,
	isPrivate: false,
	isExact: false,
}

export const LOGIN = {
	component: views.LoginPage,
	path: LOGIN_PATH,
	isPrivate: false,
	isExact: false,
}

export const HOMEPAGE = {
	component: views.HomePage,
	path: HOMEPAGE_PATH,
	isPrivate: false,
	isExact: true,
};

//NOTE: HOMEPAGE MUST BE LAST BECAUSE OF ROUTE PATH
const ROUTES = [STYLESHEET, LOGIN, HOMEPAGE];
export default ROUTES;