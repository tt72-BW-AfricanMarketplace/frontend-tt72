import { css } from "styled-components";

export const buildClicker = (background, color, backgroundHover = color, colorHover = background) => {
	return css`
		background-color: ${background};
		color: ${color};
		transition: all 0.4s ease;
		&:hover {
			cursor: pointer;
			background-color: ${backgroundHover};
			color: ${colorHover};
			transition: all 0.4s ease;
		}
	`;
}

export const buildBackground = (darkBackground, darkColor, lightBackground, lightColor) => {
	return {
		dark: css`
			background-color: ${darkBackground};
			color: ${darkColor};
		`,
		light: css`
			background-color: ${lightBackground};
			color: ${lightColor};
		`,
	}
}

export const buildModes = (cssDark, cssLight) => {
	return {
		dark: cssDark,
		light: cssLight,
	}
}

export const buildGeneral = (customCss) => {
	return {
		dark: customCss,
		light: customCss,
	};
};