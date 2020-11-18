import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import { PATHS } from "../../app/routes/routes";
import layout from "../layout";
const { Heading, Container, Flex, Link } = layout;

// const {
// 	HOMEPAGE_PATH,
// 	STYLESHEET_PATH,
// 	LOGIN_PATH,
// 	PORTAL_PATH,
// 	SIGNUP_PATH,
// 	OWNER_PRODUCTS_PATH,
// 	BUYER_PRODUCTS_PATH,
// } = PATHS;


const HomeContainer = styled(Container)`
	height: 80vh;
	margin: 0 auto;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-evenly;
	max-width: 90vw;
	background-color: var(--pLight);
	${Flex} {
		height: 20%;
		align-items: center;
		background-color: var(--pDarker);
		border-radius: 20px;
		nav {
			display: flex;
			flex-flow: row wrap;
			justify-content: flex-start;
		}
	}
`;

const HomePage = () => {
	return (
		<>
			<Header />
			<HomeContainer>
				<Heading h1>This is the dev-nav, just for us</Heading>
				<Flex justifyCenter alignCenter>
					<nav>
						<Link to={PATHS.HOMEPAGE_PATH}>Home</Link>
						<Link to={PATHS.PORTAL_PATH}>Info Portal</Link>
						<Link to={PATHS.LOGIN_PATH}>Login</Link>
						<Link to={PATHS.SIGNUP_PATH}>Signup</Link>
						<Link to={PATHS.BUYER_PRODUCTS_PATH}>Buyer Products</Link>
						<Link to={PATHS.OWNER_PRODUCTS_PATH}>Owner Products</Link>
						<Link secondary to={PATHS.STYLESHEET_PATH}>Stylesheet</Link>
					</nav>
				</Flex>
			</HomeContainer>
		</>
	)
}

export default HomePage;