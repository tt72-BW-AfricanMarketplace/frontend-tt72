import React from "react";
import Header from "../shared/Header";
import Example from "./Example";

const Stylesheet = props => {
	return (
		<>
			<Header />
			{/* <Sheet>
				<Heading h1>Colors</Heading>
				<Flex justifyContent="space-evenly">
					<Pallette src={darkPrimary} alt="dark primary pallette" />
					<Pallette src={lightPrimary} alt="light primary pallette" />
					<Pallette src={themeColors} alt="theme pallette" />
				</Flex>
			</Sheet> */}
			<Example />
		</>
	)
};

export default Stylesheet;