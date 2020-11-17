import React, { useState } from "react";
import Header from "../shared/Header"
// import "./signup.css"
import styled from "styled-components"
import BuyerSignup from "./BuyerSignup";
import OwnerSignup from "./OwnerSignup";
import layout from "../layout"


const { Container, Button } = layout

const CustomHeader = styled(Container)`
    background-color: var(--pDarker);
	width: 90%;
	border-radius: 20px;
	text-align: center;
`;

// const signUpValues = [
// 	{
// 		name: "email",
// 		type: "email",
// 		placeholder: "email",
// 		className: "email-field",
// 	},
// 	{
// 		name: "password",
// 		type: "password",
// 		placeholder: "password",
// 		className: "password-field",
// 	}
// ];
const SignupPage = props => {
	const [isBuyer, setIsBuyer] = useState(false);

	const toggle = () => {
		setIsBuyer(!isBuyer);
	}
	
	return (
		<>
			<Header className="cust" />
			<Button onClick={toggle}>Switch</Button>
			<CustomHeader>
				{
					isBuyer
						? <BuyerSignup />
						: <OwnerSignup />
				}

			</CustomHeader>
		</>
	)
}

export default SignupPage