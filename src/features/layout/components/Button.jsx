import React from 'react'
import styled, { css } from 'styled-components';
import Loader from './Loader';
import { clickerStyles, secondaryClickerStyles } from "./Link";

const StyledButton = styled.button`
	padding: 0;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	${clickerStyles};
	${props => { return (props.secondary && secondaryClickerStyles) }};
`;

const Button = ({ secondary, loading, children, ...props }) => {
	return (
		<StyledButton secondary={secondary} {...props}>
			{loading ? <Loader small white /> : children}
		</StyledButton>
	)
}

export default Button;