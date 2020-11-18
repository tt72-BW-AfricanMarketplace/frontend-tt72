import React from "react";
import styled from "styled-components";

const SGuide = styled.div`
	background-color: var(--pDarker);
	height: 100%;
`;

const Guide = props => {
	return (
		<SGuide>
			<div>
				<h1>Categories</h1>
			</div>
			<div>
				<h1>Search</h1>
			</div>
		</SGuide>
	)
}

export default Guide;