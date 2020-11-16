import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import PATHS from "../../app/routes/paths";
import layout from "../layout";
const { HOMEPAGE_PATH, STYLESHEET_PATH, LOGIN_PATH, PORTAL_PATH } = PATHS;
const { Heading, Container, Flex, Link } = layout;

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
			justify-content: space-between;
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
						<Link to={HOMEPAGE_PATH}>Home</Link>
						<Link to={PORTAL_PATH}>Info Portal</Link>
						<Link to={LOGIN_PATH}>Login</Link>
						<Link secondary to={STYLESHEET_PATH}>Stylesheet</Link>
					</nav>
				</Flex>
			</HomeContainer>
		</>
	)
}

export default HomePage;