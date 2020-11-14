import views from "../../features/views";

//ADD YOUR COMPONENT'S PATH TO THE LIST! (export required)
export const HOMEPAGE_PATH = "/";
export const COUNTER_PATH = "/counter";
export const STYLESHEET_PATH = "/stylesheet";
export const LOGIN_PATH = "/login";

//ADD YOUR COMPONENT OBJECT BELOW AND ADD YOUR COMPONENT OBJECT IDENTIFIER TO THE ARRAY AT THE BOTTOM
// component & path are REQUIRED
// add isPrivate=true if your path should be private!
// add isExact=true if your path should be exact!
export const COUNTER = {
	component: views.Counter,
	path: COUNTER_PATH,
};

export const STYLESHEET = {
	component: views.Stylesheet,
	path: STYLESHEET_PATH,
}

export const LOGIN = {
	component: views.LoginPage,
	path: LOGIN_PATH,
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