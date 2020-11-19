// import { useForm } from "../../hooks/useForm";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./loginSlice";
import Form from "../shared/Form";
import layout from "../layout";
import styled from "styled-components";
const { Container, Heading } = layout;

const FormContainer = styled(Container)`
	background-color: var(--pDarker);
	width: 90%;
	border-radius: 20px;
	text-align: center;
`;

const loginValues = [
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

const LoginForm = (props) => {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn);
	const dispatch = useDispatch();
	const { push } = useHistory();

	useEffect(() => {
		if (isLoggedIn) {
			push("/info-portal");
		}
		// else {
		// 	push("/login")
		// }
	}, [isLoggedIn, push]);

	const handleSubmit = (values) => {
		console.log("FROM LOGINFORM ", values);
		dispatch(login(values));
	}
	return (
		<FormContainer>
			<Heading h3>Login</Heading>
			<Form fields={loginValues} handleSubmit={handleSubmit} />
		</FormContainer>
	)
}
export default LoginForm;