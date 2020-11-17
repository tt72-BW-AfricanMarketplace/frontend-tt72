import React from "react";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../login/loginSlice";
// import { PATHS } from "../../app/routes/routes";
import PATHS from "../../app/routes/paths";
import layout from "../layout";
const { Heading, Link, Button } = layout;
const {
	HOMEPAGE_PATH,
	STYLESHEET_PATH,
	LOGIN_PATH,
	PORTAL_PATH,
	SIGNUP_PATH,
	OWNER_PRODUCTS_PATH,
	BUYER_PRODUCTS_PATH,
} = PATHS;

const StyledHeader = styled.header`
	width: 100vw;
	background-color: var(--pDark);
	color: var(--pText);
	padding: 0 2rem;
	div.container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}
	div {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	nav {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
`;

const Header = props => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.login.isLoggedIn);
	const handleLogout = () => {
		dispatch(logout());
	}
	return (
		<StyledHeader>
			<div className="container">
				<div>
					<Heading h1 noMargin>African Marketplace</Heading>
				</div>
				<div>
					<nav>
						<Link to={HOMEPAGE_PATH}>Home</Link>
						<Link to={PORTAL_PATH}>Info Portal</Link>
						<Link to={SIGNUP_PATH}>Signup</Link>
						<Link to={OWNER_PRODUCTS_PATH}>Owner Products</Link>
						<Link to={BUYER_PRODUCTS_PATH}>Buyer Products</Link>
						{!isLoggedIn ?
							<Link to={LOGIN_PATH}>Login</Link>
							: <Button onClick={handleLogout}>Logout</Button>
						}
						<Link secondary to={STYLESHEET_PATH}>Stylesheet</Link>
					</nav>
				</div>
				<div>
					<ThemeToggler />
				</div>
			</div>
		</StyledHeader>
	);
}

export default Header;