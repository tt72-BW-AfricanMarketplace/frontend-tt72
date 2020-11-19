import React, { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../login/loginSlice";
import { PATHS } from "../../app/routes/routes";
import layout from "../layout";
import menu from "../../assets/menu.svg";
const { Heading, Link, Button } = layout;

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
`;

const MenuBurger = styled.div`
	cursor: pointer;
	fill: var(--pText);
`;

const Nav = styled.nav`
	display: ${pr => pr.show ? "flex" : "none"};
	width: 100vw;
	background-color: var(--pDarker);
	/* display: flex; */
	flex-flow: row nowrap;
	justify-content: space-between;
	position: absolute;
`;

const Header = props => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.login.isLoggedIn);

	const [navOpen, setNavOpen] = useState(false);

	const handleLogout = () => {
		dispatch(logout());
	}

	const toggleNav = () => {
		setNavOpen(!navOpen);
	}
	return (
		<>
			<StyledHeader>
				<div className="container">
					<div>
						<Heading h1 noMargin>African Marketplace</Heading>
					</div>
					<div>
						<MenuBurger onClick={toggleNav}>
							<svg viewBox="0 0 100 80" width="40" height="40">
								<rect width="100" height="20" rx="8"></rect>
								<rect y="30" width="100" height="20" rx="8"></rect>
								<rect y="60" width="100" height="20" rx="8"></rect>
							</svg>
						</MenuBurger>
						<ThemeToggler />
					</div>
				</div>
			</StyledHeader>

			<Nav show={navOpen}>
				<Link to={PATHS.HOMEPAGE_PATH}>Home</Link>
				{/* <Link to={PATHS.PORTAL_PATH}>Info Portal</Link> */}
				<Link to={PATHS.OWNER_PRODUCTS_PATH}>Owner Products</Link>
				<Link to={PATHS.BUYER_PRODUCTS_PATH}>Buyer Products</Link>
				<Link to={PATHS.SIGNUP_PATH}>Signup</Link>
				{!isLoggedIn ?
					<Link to={PATHS.LOGIN_PATH}>Login</Link>
					: <Button onClick={handleLogout}>Logout</Button>
				}
				{/* <Link secondary="true" to={PATHS.STYLESHEET_PATH}>Stylesheet</Link> */}
			</Nav>

		</>
	);
}

export default Header;