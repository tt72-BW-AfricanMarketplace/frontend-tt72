import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomDog } from "../products/doggySlice";
import styled from "styled-components";
import Header from "../shared/Header";
import PATHS from "../../app/routes/paths";
import layout from "../layout";
const { Heading, Container, Flex, Link, Button } = layout;

const {
	HOMEPAGE_PATH,
	STYLESHEET_PATH,
	LOGIN_PATH,
	PORTAL_PATH,
	SIGNUP_PATH,
	OWNER_PRODUCTS_PATH,
	BUYER_PRODUCTS_PATH,
} = PATHS;


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
	const dogs = useSelector(state => state.dogs.entities);
	const dispatch = useDispatch();

	return (
		<>
			<Header />
			<HomeContainer>
				<Heading h1>This is the dev-nav, just for us</Heading>
				<Button onClick={() => dispatch(fetchRandomDog())}>Fetch Dog</Button>
				<Flex justifyCenter alignCenter>
					<nav>
						<Link to={HOMEPAGE_PATH}>Home</Link>
						<Link to={PORTAL_PATH}>Info Portal</Link>
						<Link to={LOGIN_PATH}>Login</Link>
						<Link to={SIGNUP_PATH}>Signup</Link>
						<Link to={BUYER_PRODUCTS_PATH}>Buyer Products</Link>
						<Link to={OWNER_PRODUCTS_PATH}>Owner Products</Link>
						<Link secondary to={STYLESHEET_PATH}>Stylesheet</Link>
					</nav>
				</Flex>
			</HomeContainer>
		</>
	)
}

export default HomePage;