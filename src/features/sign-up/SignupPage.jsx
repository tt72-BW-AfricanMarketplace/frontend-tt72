import React, { useState } from "react";
import Header from "../shared/Header"
import styled from "styled-components"
import BuyerSignup from "./BuyerSignup";
import OwnerSignup from "./OwnerSignup";
import layout from "../layout"


const { Container, Button } = layout

const SignupWrap = styled.div`
	background-color: var(--pDarker);
	width: 90%;
	border-radius: 20px;
	display: flex;
	flex-flow: row nowrap;
	margin: 6rem auto;
	Button {
		align-self: 1;
	}
`;

const FormContainer = styled(Container)`
	background-color: var(--pDarker);
	width: 90%;
	border-radius: 20px;
	text-align: center;
`;

const SignupPage = props => {
	const [isBuyer, setIsBuyer] = useState(false);

	const toggle = () => {
		setIsBuyer(!isBuyer);
	}

	return (
		<>
			<Header />
			<SignupWrap>
				<Button onClick={toggle}>{isBuyer ? "Buyer" : "Owner"}</Button>
				<FormContainer>
					{isBuyer ? <BuyerSignup /> : <OwnerSignup />}
				</FormContainer>
			</SignupWrap>
		</>
	)
}

export default SignupPage