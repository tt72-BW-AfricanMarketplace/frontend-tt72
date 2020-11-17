// import the parent component for your view, and add that component to the views object below.
// then go to /src/app/routes/routes.js 
import Stylesheet from "../stylesheet/Stylesheet";
import HomePage from "../homepage/HomePage";
import LoginPage from "../login/LoginPage";
import PortalPage from "../info-portal/PortalPage";
import OwnerProductPage from "../products/ownerProducts/OwnerProductPage";
import BuyerProductPage from "../products/buyerProducts/BuyerProductPage";
import SignupPage from "../sign-up/SignupPage"


const views = {
	HomePage,
	Stylesheet,
	LoginPage,
	PortalPage,
	OwnerProductPage,
	BuyerProductPage,
	SignupPage,
}
export default views;