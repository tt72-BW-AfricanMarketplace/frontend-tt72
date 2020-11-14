import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import layout from "../layout";
const { Heading, Container, Flex } = layout;

const HomeContainer = styled(Container)`
	height: 80vh;
	margin: 0 auto;
	max-width: 90vw;
	background-color: var(--pLight);
	${Flex} {
		height: 100%;
		align-items: center;
	}
`;

const HomePage = () => {
	return (
		<>
			<Header />
			<HomeContainer full>
				<Flex justifyCenter alignCenter>
					<Heading h2>This will be the homepage</Heading>
				</Flex>
			</HomeContainer>
		</>
	)
}

export default HomePage;