import React from "react";
import styled from "styled-components";

const Parent = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 100vw;
	height: 100%;
	.left {
		width: 80%;
	}
	.right {
		width: 20%;
	}
`;

export const SplitPane = props => {
	return (
		<Parent>
			<div className="left">
				{props.left}
			</div>
			<div className="middle" exists={props.middle}>
				{props.middle}
			</div>
			<div className="right" exists={props.right}>
				{props.right}
			</div>
		</Parent>
	);
};

export default SplitPane;