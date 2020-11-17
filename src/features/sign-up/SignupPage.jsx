import React from "react";
import Header from "../shared/Header"
// import "./signup.css"
import styled from "styled-components"
import Form from "./SignupForm";
import layout from "../layout"


const { Container } = layout

const CustomHeader = styled(Container)`
    background-color: var(--pDarker);
	width: 90%;
	border-radius: 20px;
	text-align: center;

`;
const signUpValues = [
    {
        name: "email",
        type: "email",
        placeholder: "email",
        className: "email-field",
    },
    {
        name: "password",
        type: "password",
        placeholder: "password",
        className: "password-field",
    }
];
const SignupPage = props => {
    return (
        <>
            <Header className="cust" />
            <CustomHeader>
                <Form fields={signUpValues} />
            </CustomHeader>
        </>
    )
}

export default SignupPage