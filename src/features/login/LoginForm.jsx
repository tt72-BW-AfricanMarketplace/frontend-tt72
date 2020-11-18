// import { useForm } from "../../hooks/useForm";
import React from "react";
import Form from "../shared/Form";
import { useDispatch } from "react-redux";
import { login } from "./loginSlice";
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
		name: "username",
		type: "text",
		placeholder: "username",
		className: "username-field",
	},
	{
		name: "password",
		type: "password",
		placeholder: "password",
		className: "password-field",
	}
];

const LoginForm = (props) => {
	// const loginState = useSelector(state => state.login);
	const dispatch = useDispatch();
	const handleSubmit = (values) => {
		console.log(values);
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