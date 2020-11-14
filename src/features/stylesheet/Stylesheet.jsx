import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import themeColors from "./assets/themeColors.png";
import darkPrimary from "./assets/darkPrimary.png";
import lightPrimary from "./assets/lightPrimary.png";
import layout from "../layout";

const { Heading, Flex } = layout;

const ParentContainer = styled.div`
	min-height: 100vh;
	flex-flow: column nowrap;
	justify-content: space-between;
`;

const Sheet = styled.div`
	height: 90vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
`;

const Pallette = styled.img`
	width: 600px;
`;

const Stylesheet = props => {
	return (
		<ParentContainer>
			<Header />
			<Sheet>
				<Heading h1>Colors</Heading>
				<Flex justifyContent="space-evenly">
					<Pallette src={darkPrimary} alt="dark primary pallette" />
					<Pallette src={lightPrimary} alt="light primary pallette" />
					<Pallette src={themeColors} alt="theme pallette" />
				</Flex>
			</Sheet>
		</ParentContainer>
	)
};

export default Stylesheet;