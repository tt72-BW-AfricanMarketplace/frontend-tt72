import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
import { useTheme } from "../../app/theme/ThemeContext";
// import { Button } from "../../common/components";
// import { createClickerStyles } from "../../app/theme/theme";
import layout from "../layout";
import moonDark from "../../assets/moonFilled.svg";
import moonLight from "../../assets/moon.svg";

const { buildClicker } = layout;

const buttonTheme = theme("mode", {
	dark: buildClicker("var(--pBase)", "var(--pText)", "var(--pLight)", "black"),
	light: buildClicker("var(--pBase)", "var(--pBase)"),
});

const Toggler = styled.div`
	${buttonTheme};
		border-radius: 50%;
		margin: 20px;
		width: 50px; height: 50px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center; align-items: center;
`;

const ThemeToggler = props => {
	const { toggle, mode } = useTheme();

	return (
		<Toggler onClick={toggle}>
			{
				mode === "dark"
					? (<img src={moonDark} alt="dark mode icon" style={{ height: 30 }} />)
					: (<img src={moonLight} alt="light mode icon" style={{ height: 30 }} />)
			}

		</Toggler>
	);
}

export default ThemeToggler;