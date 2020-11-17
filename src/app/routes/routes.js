import views from "../../features/views";
import PATHS from "./paths";

//ADD YOUR COMPONENT'S PATH to `paths.js` and add the PATH_NAME in the de-structured statement below
const {
	STYLESHEET_PATH,
	PORTAL_PATH,
	HOMEPAGE_PATH,
	LOGIN_PATH,
	OWNER_PRODUCTS_PATH,
	BUYER_PRODUCTS_PATH,
	SIGNUP_PATH
} = PATHS;

//ADD YOUR COMPONENT OBJECT BELOW AND ADD YOUR COMPONENT OBJECT IDENTIFIER TO THE ARRAY AT THE BOTTOM
// component & path are REQUIRED
// add isPrivate=true if your path should be private!
// DO NOT add isExact=true or isExact as a property at all, that is only for the homepage.

export const STYLESHEET = {
	component: views.Stylesheet,
	path: STYLESHEET_PATH,
};

export const INFO_PORTAL = {
	component: views.PortalPage,
	path: PORTAL_PATH,
	// isPrivate: true,
}

export const LOGIN = {
	component: views.LoginPage,
	path: LOGIN_PATH,
};

export const OWNER_PRODUCTS = {
	component: views.OwnerProductPage,
	path: OWNER_PRODUCTS_PATH,
};

export const BUYER_PRODUCTS = {
	component: views.BuyerProductPage,
	path: BUYER_PRODUCTS_PATH,
}

export const HOMEPAGE = {
	component: views.HomePage,
	path: HOMEPAGE_PATH,
	isPrivate: false,
	isExact: true,
};

export const SIGNUP = {
	component: views.SignupPage,
	path: SIGNUP_PATH,
};

//ADD YOUR NEWLY CREATED ROUTE OBJECT TO THIS ARRAY
const ROUTES = [STYLESHEET, LOGIN, INFO_PORTAL, OWNER_PRODUCTS, BUYER_PRODUCTS, SIGNUP];

//NOTE: HOMEPAGE MUST BE LAST BECAUSE OF ROUTE PATH
ROUTES.push(HOMEPAGE);

export default ROUTES;