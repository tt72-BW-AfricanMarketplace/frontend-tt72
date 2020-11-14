import React from 'react'
import styled, { css } from 'styled-components';
import theme from "styled-theming";
import Loader from './Loader';
import PropTypes from "prop-types";
import { buildGeneral } from "../generators";

const defaultButton = css`
	background-color: var(--tPrimary);
	color: var(--white);
	&:hover {
		cursor: pointer;
		background-color: var(--tDark);
	}
	&:active {
		background-color: var(--tDark);
	}
`;
const inverseButton = css`
	background-color: var(--white);
	color: var(--tPrimary);
	&:hover {
		cursor: pointer;
		background-color: var(--pLighter);
	}
	&:active {
		background-color: var(--pDark);
	}
`;

const buttonThemes = theme.variants("mode", "variant", {
	default: buildGeneral(defaultButton),
	inverse: buildGeneral(inverseButton),
});

const StyledButton = styled.button`
	font: inherit;
	${buttonThemes};
	display: inline-flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 5rem;
	width: 15rem;
	/* text-align: center; */
	margin: 0 1rem;
	white-space: nowrap;
	text-decoration: none;
	font-size: ${props => {
		if (props.big) {
			return '2rem';
		}
		return '1.6rem';
	}};
	outline: none;
	border: none;
	cursor: inherit;
	padding: inherit;
	
`;

StyledButton.propTypes = {
	variant: PropTypes.oneOf(["default", "inverse"])
};

StyledButton.defaultProps = {
	variant: "default",
};

const Button = ({ variant, secondary, big, inverse, loading, children, ...props }) => {
	return (
		<StyledButton variant={variant} secondary={secondary} big={big} inverse={inverse} {...props}>
			{loading ? <Loader small white /> : children}
		</StyledButton>
	)
}

export default Button;